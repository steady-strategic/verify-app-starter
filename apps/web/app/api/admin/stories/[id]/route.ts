import { NextRequest, NextResponse } from "next/server";
import { auth } from "../../../../../lib/auth";
import { prisma } from "../../../../../lib/db";

// GET /api/admin/stories/[id] - Get single story
export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await auth();

        if (!session?.user || (session.user as any).userType !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const story = await prisma.story.findUnique({
            where: { id: params.id },
            include: {
                author: {
                    select: {
                        firstName: true,
                        lastName: true,
                        email: true,
                    },
                },
            },
        });

        if (!story) {
            return NextResponse.json({ error: "Story not found" }, { status: 404 });
        }

        return NextResponse.json({ story });
    } catch (error) {
        console.error("Error fetching story:", error);
        return NextResponse.json(
            { error: "Failed to fetch story" },
            { status: 500 }
        );
    }
}

// PUT /api/admin/stories/[id] - Update story
export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
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

        // Check if new slug conflicts with another story
        const existing = await prisma.story.findFirst({
            where: {
                slug,
                id: { not: params.id },
            },
        });

        if (existing) {
            return NextResponse.json(
                { error: "A story with this slug already exists" },
                { status: 409 }
            );
        }

        const story = await prisma.story.update({
            where: { id: params.id },
            data: {
                title,
                slug,
                excerpt,
                content,
                imageUrl,
                published,
                publishedAt: published && !existing?.published ? new Date() : undefined,
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

        return NextResponse.json({ story });
    } catch (error) {
        console.error("Error updating story:", error);
        return NextResponse.json(
            { error: "Failed to update story" },
            { status: 500 }
        );
    }
}

// DELETE /api/admin/stories/[id] - Delete story
export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await auth();

        if (!session?.user || (session.user as any).userType !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const adminUser = session.user as any;

        // Only ADMIN or SUPER_ADMIN can delete
        if (adminUser.role === "EDITOR") {
            return NextResponse.json(
                { error: "Insufficient permissions to delete stories" },
                { status: 403 }
            );
        }

        await prisma.story.delete({
            where: { id: params.id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting story:", error);
        return NextResponse.json(
            { error: "Failed to delete story" },
            { status: 500 }
        );
    }
}
