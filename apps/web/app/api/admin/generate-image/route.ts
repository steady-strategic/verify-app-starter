import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST(req: NextRequest) {
    try {
        const session = await auth();

        if (!session?.user || (session.user as any).userType !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const { prompt } = await req.json();

        if (!prompt) {
            return NextResponse.json(
                { error: "Prompt is required" },
                { status: 400 }
            );
        }

        const apiKey = process.env.GOOGLE_AI_API_KEY;

        if (!apiKey) {
            return NextResponse.json(
                { error: "Google AI API key not configured" },
                { status: 500 }
            );
        }

        // Use Unsplash API as a fallback for now
        // Later we can integrate Imagen or DALL-E
        const unsplashAccessKey = process.env.UNSPLASH_ACCESS_KEY;

        if (unsplashAccessKey) {
            // Search Unsplash for relevant image
            const searchQuery = prompt.split(' ').slice(0, 3).join(' '); // Use first 3 words
            const unsplashResponse = await fetch(
                `https://api.unsplash.com/photos/random?query=${encodeURIComponent(searchQuery)}&orientation=landscape`,
                {
                    headers: {
                        Authorization: `Client-ID ${unsplashAccessKey}`,
                    },
                }
            );

            if (unsplashResponse.ok) {
                const data = await unsplashResponse.json();
                return NextResponse.json({
                    imageUrl: data.urls.regular,
                    attribution: {
                        photographer: data.user.name,
                        photographerUrl: data.user.links.html,
                        source: 'Unsplash'
                    }
                });
            }
        }

        // Fallback: Generate a placeholder image URL
        const encodedPrompt = encodeURIComponent(prompt);
        const placeholderUrl = `https://images.unsplash.com/photo-1506126613408-eca07ce68773?auto=format&fit=crop&q=80&w=1200&text=${encodedPrompt}`;

        return NextResponse.json({
            imageUrl: placeholderUrl,
            note: "Using placeholder image. Configure UNSPLASH_ACCESS_KEY or GOOGLE_AI_API_KEY for AI generation."
        });
    } catch (error) {
        console.error("Error generating image:", error);
        return NextResponse.json(
            { error: "Failed to generate image" },
            { status: 500 }
        );
    }
}
