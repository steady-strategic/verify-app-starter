import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

// GET /api/admin/lessons - List all lessons
export async function GET(req: NextRequest) {
    try {
        const session = await auth();

        if (!session?.user || (session.user as any).userType !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const lessons = await prisma.lesson.findMany({
            include: {
                author: {
                    select: {
                        firstName: true,
                        lastName: true,
                        email: true,
                    },
                },
            },
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json({ lessons });
    } catch (error) {
        console.error("Error fetching lessons:", error);
        return NextResponse.json(
            { error: "Failed to fetch lessons" },
            { status: 500 }
        );
    }
}

// POST /api/admin/lessons - Create new lesson
export async function POST(req: NextRequest) {
    try {
        const session = await auth();

        if (!session?.user || (session.user as any).userType !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const body = await req.json();
        const {
            title,
            description,
            audioFileName,
            audioUrl,
            durationSecs,
            fileSizeBytes,
            allowOffline,
            published,
        } = body;

        // Validate required fields
        if (!title || !description || !audioFileName || !audioUrl) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const lesson = await prisma.lesson.create({
            data: {
                title,
                description,
                audioFileName,
                audioUrl,
                durationSecs: durationSecs || 0,
                fileSizeBytes: fileSizeBytes || 0,
                allowOffline: allowOffline !== false,
                published: published || false,
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

        return NextResponse.json({ lesson });
    } catch (error) {
        console.error("Error creating lesson:", error);
        return NextResponse.json(
            { error: "Failed to create lesson" },
            { status: 500 }
        );
    }
}
