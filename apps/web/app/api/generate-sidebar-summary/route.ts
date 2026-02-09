import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '../../../lib/db';
import OpenAI from 'openai';

// AI Summary Generation Rules
const TITLE_MAX_CHARS = 28;
const EXCERPT_MAX_CHARS = 75;

const SYSTEM_PROMPT = `You are an expert content editor specializing in creating concise, compelling summaries for blog post cards.

RULES:
1. Title must be ≤${TITLE_MAX_CHARS} characters
2. Excerpt must be ≤${EXCERPT_MAX_CHARS} characters
3. Use plain, accessible language (avoid overly technical/scientific terms)
4. Capture the core theme/value proposition
5. Each summary must be unique - never reuse titles or excerpts
6. Maintain professional, patient/clinician-friendly tone

Return ONLY valid JSON in this exact format:
{
  "sidebarTitle": "string",
  "sidebarExcerpt": "string"
}`;

export async function POST(request: NextRequest) {
    try {
        // Initialize OpenAI at runtime
        const openai = new OpenAI({
            apiKey: process.env.OPENAI_API_KEY,
        });

        const { slug } = await request.json();

        if (!slug) {
            return NextResponse.json({ error: 'Slug is required' }, { status: 400 });
        }

        // Fetch the post
        const post = await prisma.story.findUnique({
            where: { slug },
            select: {
                id: true,
                title: true,
                excerpt: true,
                slug: true,
            },
        });

        if (!post) {
            return NextResponse.json({ error: 'Post not found' }, { status: 404 });
        }

        // Fetch all existing summaries to ensure uniqueness
        const existingSummaries = await prisma.story.findMany({
            where: {
                published: true,
                slug: { not: slug }, // Exclude current post
            },
            select: {
                sidebarTitle: true,
                sidebarExcerpt: true,
            },
        });

        const existingTitles = existingSummaries
            .map((s) => s.sidebarTitle)
            .filter(Boolean)
            .join(', ');
        const existingExcerpts = existingSummaries
            .map((s) => s.sidebarExcerpt)
            .filter(Boolean)
            .join(', ');

        // Generate AI summary
        const userPrompt = `Generate a sidebar summary for this blog post:

Title: "${post.title}"
Excerpt: "${post.excerpt}"

EXISTING TITLES (do NOT reuse): ${existingTitles || 'None'}
EXISTING EXCERPTS (do NOT reuse similar phrasing): ${existingExcerpts || 'None'}

Create a unique, concise summary following all rules.`;

        const completion = await openai.chat.completions.create({
            model: 'gpt-4o-mini',
            messages: [
                { role: 'system', content: SYSTEM_PROMPT },
                { role: 'user', content: userPrompt },
            ],
            temperature: 0.7,
            response_format: { type: 'json_object' },
        });

        const result = JSON.parse(completion.choices[0].message.content || '{}');

        // Validate response
        if (!result.sidebarTitle || !result.sidebarExcerpt) {
            throw new Error('Invalid AI response format');
        }

        if (result.sidebarTitle.length > TITLE_MAX_CHARS) {
            throw new Error(`Title exceeds ${TITLE_MAX_CHARS} characters`);
        }

        if (result.sidebarExcerpt.length > EXCERPT_MAX_CHARS) {
            throw new Error(`Excerpt exceeds ${EXCERPT_MAX_CHARS} characters`);
        }

        // Save to database
        const updated = await prisma.story.update({
            where: { id: post.id },
            data: {
                sidebarTitle: result.sidebarTitle,
                sidebarExcerpt: result.sidebarExcerpt,
            },
        });

        return NextResponse.json({
            success: true,
            summary: {
                sidebarTitle: updated.sidebarTitle,
                sidebarExcerpt: updated.sidebarExcerpt,
            },
        });
    } catch (error: any) {
        console.error('Error generating sidebar summary:', error);
        return NextResponse.json(
            { error: error.message || 'Failed to generate summary' },
            { status: 500 }
        );
    }
}
