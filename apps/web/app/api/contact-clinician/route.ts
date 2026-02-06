import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        const { clinicianEmail, firstName, lastName, email, phone, message } = body;

        // Validate required fields
        if (!clinicianEmail || !firstName || !lastName || !email || !message) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Create contact submission
        const submission = await prisma.contactSubmission.create({
            data: {
                clinicianEmail,
                firstName,
                lastName,
                email,
                phone: phone || null,
                message,
            },
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
