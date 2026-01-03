import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";

export async function POST(req: NextRequest) {
    try {
        const session = await auth();

        if (!session?.user || (session.user as any).userType !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        // Validate file type
        if (!file.type.startsWith("audio/")) {
            return NextResponse.json(
                { error: "File must be an audio file" },
                { status: 400 }
            );
        }

        // Validate file size (max 50MB for audio)
        if (file.size > 50 * 1024 * 1024) {
            return NextResponse.json(
                { error: "File size must be less than 50MB" },
                { status: 400 }
            );
        }

        // Convert to buffer and create data URL for now
        // In production, you'd upload to Vercel Blob, S3, or Cloudinary
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // For MVP: Convert to base64 data URL
        const base64 = buffer.toString("base64");
        const dataUrl = `data:${file.type};base64,${base64}`;

        // Try to extract duration using Web Audio API metadata
        // For now, we'll return 0 and let the client calculate it
        const duration = 0;

        return NextResponse.json({
            audioUrl: dataUrl,
            fileName: file.name,
            fileSize: file.size,
            duration,
            note: "Using base64 data URL. For production, integrate Vercel Blob or Cloudinary.",
        });
    } catch (error) {
        console.error("Error uploading audio:", error);
        return NextResponse.json(
            { error: "Failed to upload audio" },
            { status: 500 }
        );
    }
}
