import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

import rateLimit from "@/lib/rate-limit";

// Limit to 2 requests per hour
const limiter = rateLimit({
    interval: 60 * 60 * 1000,
    uniqueTokenPerInterval: 500,
});

export async function POST(request: NextRequest) {
    try {
        // Rate Limiting (IP-based)
        const ip = request.headers.get("x-forwarded-for") ?? "127.0.0.1";
        try {
            await limiter.check(null, 2, ip); // 2 requests per interval
        } catch {
            return NextResponse.json(
                { error: "Too many requests. Please try again later." },
                { status: 429 }
            );
        }

        const body = await request.json();

        const { clinicianEmail, firstName, lastName, email, phone } = body;

        // Validate required fields
        if (!clinicianEmail || !firstName || !lastName || !email) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Create contact submission
        const submission = await prisma.contactSubmission.create({
            data: {
                clinicianEmail,
                formName: 'Patients',
                firstName,
                lastName,
                email,
                phone: phone || null,
            },
        });

        // Trigger HubSpot sync in background (but we must await in serverless)
        // This ensures the request fires before the lambda terminates
        try {
            await fetch(`${request.nextUrl.origin}/api/sync-hubspot`, {
                method: 'POST',
            });
        } catch (error) {
            console.error('Background HubSpot sync failed:', error);
            // Don't throw - we already saved to database successfully
        }

        return NextResponse.json({
            success: true,
            submissionId: submission.id,
        });
    } catch (error) {
        console.error("Error creating contact submission:", error);
        return NextResponse.json(
            { error: "Failed to submit contact form" },
            { status: 500 }
        );
    }
}
