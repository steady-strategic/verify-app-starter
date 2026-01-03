import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../lib/auth";
import { prisma } from "../../../../lib/db";

// GET /api/admin/stories - List all stories
export async function GET(req: NextRequest) {
    try {
        const session = await auth();

        if (!session?.user || (session.user as any).userType !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const stories = await prisma.story.findMany({
            include: {
                author: {
                    select: {
                        id: true,
                        firstName: true,
                        lastName: true,
                        email: true,
                    },
                },
            },
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json({ stories });
    } catch (error) {
        console.error("Error fetching stories:", error);
        return NextResponse.json(
            { error: "Failed to fetch stories" },
            { status: 500 }
        );
    }
}

// POST /api/admin/stories - Create new story
export async function POST(req: NextRequest) {
    try {
        const session = await auth();

        if (!session?.user || (session.user as any).userType !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const { title, slug, excerpt, content, imageUrl, published } = body;

        // Validate required fields
        if (!title || !slug || !excerpt || !content) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Check if slug already exists
        const existing = await prisma.story.findUnique({
            where: { slug },
        });

        if (existing) {
            return NextResponse.json(
                { error: "A story with this slug already exists" },
                { status: 409 }
            );
        }

        const story = await prisma.story.create({
            data: {
                title,
                slug,
                excerpt,
                content,
                imageUrl,
                published: published || false,
                publishedAt: published ? new Date() : null,
                authorId: (session.user as any).id,
            },
            include: {
                author: {
                    select: {
                        firstName: true,
                        lastName: true,
                    },
                },
            },
        });

        return NextResponse.json({ story }, { status: 201 });
    } catch (error) {
        console.error("Error creating story:", error);
        return NextResponse.json(
            { error: "Failed to create story" },
            { status: 500 }
        );
    }
}
