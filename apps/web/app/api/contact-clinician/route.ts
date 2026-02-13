import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: NextRequest) {
    try {
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

        // Trigger HubSpot sync in background (non-blocking)
        // This will attempt to sync immediately but won't block the response
        fetch(`${request.nextUrl.origin}/api/sync-hubspot`, {
            method: 'POST',
        }).catch(error => {
            console.error('Background HubSpot sync failed:', error);
            // Don't throw - we already saved to database successfully
        });

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
