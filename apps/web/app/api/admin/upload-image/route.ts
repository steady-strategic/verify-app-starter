import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { createClient } from "@supabase/supabase-js";
import sharp from "sharp";
import { writeFile } from "fs/promises";
import { join } from "path";

export async function POST(req: NextRequest) {
    try {
        const session = await auth();

        if (!session?.user || (session.user as any).userType !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        // Initialize Supabase client
        const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL || process.env.SUPABASE_URL;
        const supabaseKey = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY;
        const bucketName = "media";

        console.log("Checking Supabase credentials...");
        console.log("Supabase URL present:", !!supabaseUrl);
        console.log("Supabase Key present:", !!supabaseKey);

        if (!supabaseUrl || !supabaseKey) {
            console.error("Missing Supabase credentials");
            return NextResponse.json({ error: "Server configuration error" }, { status: 500 });
        }

        const supabase = createClient(supabaseUrl, supabaseKey);

        const formData = await req.formData();
        const file = formData.get("file") as File;

        if (!file) {
            return NextResponse.json({ error: "No file provided" }, { status: 400 });
        }

        // Validate file type
        if (!file.type.startsWith("image/")) {
            return NextResponse.json({ error: "File must be an image" }, { status: 400 });
        }

        // Validate file size (max 5MB)
        if (file.size > 5 * 1024 * 1024) {
            return NextResponse.json({ error: "File size must be less than 5MB" }, { status: 400 });
        }

        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);

        // Optimize image to AVIF
        const optimizedBuffer = await sharp(buffer)
            .avif({ quality: 65, effort: 4 })
            .toBuffer();

        // Generate unique filename
        const filename = `upload-${Date.now()}-${Math.random().toString(36).substring(7)}.avif`;

        // Upload to Supabase Storage
        const { data, error } = await supabase.storage
            .from(bucketName)
            .upload(filename, optimizedBuffer, {
                contentType: "image/avif",
                upsert: false,
            });

        if (error) {
            console.error("Supabase Storage Upload Error:", error);
            return NextResponse.json({ error: "Failed to upload image to storage" }, { status: 500 });
        }

        // Get Public URL
        const { data: publicUrlData } = supabase.storage.from(bucketName).getPublicUrl(filename);

        return NextResponse.json({
            imageUrl: publicUrlData.publicUrl
        });
    } catch (error) {
        console.error("Error uploading image:", error);
        return NextResponse.json(
            { error: "Failed to upload image" },
            { status: 500 }
        );
    }
}
