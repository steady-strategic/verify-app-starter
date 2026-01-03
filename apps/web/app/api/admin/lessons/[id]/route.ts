import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

// GET /api/admin/lessons/[id] - Get single lesson
export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await auth();

        if (!session?.user || (session.user as any).userType !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const lesson = await prisma.lesson.findUnique({
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

        if (!lesson) {
            return NextResponse.json({ error: "Lesson not found" }, { status: 404 });
        }

        return NextResponse.json({ lesson });
    } catch (error) {
        console.error("Error fetching lesson:", error);
        return NextResponse.json(
            { error: "Failed to fetch lesson" },
            { status: 500 }
        );
    }
}

// PUT /api/admin/lessons/[id] - Update lesson
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

        const lesson = await prisma.lesson.update({
            where: { id: params.id },
            data: {
                title,
                description,
                audioFileName,
                audioUrl,
                durationSecs: durationSecs || 0,
                fileSizeBytes: fileSizeBytes || 0,
                allowOffline: allowOffline !== false,
                published,
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
        console.error("Error updating lesson:", error);
        return NextResponse.json(
            { error: "Failed to update lesson" },
            { status: 500 }
        );
    }
}

// DELETE /api/admin/lessons/[id] - Delete lesson
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
                { error: "Insufficient permissions to delete lessons" },
                { status: 403 }
            );
        }

        await prisma.lesson.delete({
            where: { id: params.id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting lesson:", error);
        return NextResponse.json(
            { error: "Failed to delete lesson" },
            { status: 500 }
        );
    }
}
