import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/db";

// Structure expected from Make.com webhook
interface MondayWebhookPayload {
    userId: string;
    decision: "APPROVED" | "REJECTED";
    mondayItemId?: string;
}

export async function POST(request: NextRequest) {
    try {
        // Optional: Verify webhook secret
        const webhookSecret = request.headers.get("x-webhook-secret");
        const expectedSecret = process.env.MONDAY_WEBHOOK_SECRET;

        if (expectedSecret && webhookSecret !== expectedSecret) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        const body: MondayWebhookPayload = await request.json();

        if (!body.userId || !body.decision) {
            return NextResponse.json(
                { error: "Missing required fields: userId, decision" },
                { status: 400 }
            );
        }

        // Map decision to user status
        const userStatus = body.decision === "APPROVED" ? "VERIFIED" : "REJECTED";

        // Update user and verification request
        const user = await prisma.user.update({
            where: { id: body.userId },
            data: {
                status: userStatus,
                verificationRequest: {
                    update: {
                        decision: body.decision,
                        mondayItemId: body.mondayItemId,
                    },
                },
            },
            include: {
                verificationRequest: true,
            },
        });

        return NextResponse.json({
            success: true,
            userId: user.id,
            status: user.status,
        });
    } catch (error) {
        console.error("Monday webhook error:", error);

        // Check if it's a "record not found" error
        if ((error as any)?.code === "P2025") {
            return NextResponse.json(
                { error: "User not found" },
                { status: 404 }
            );
        }

        return NextResponse.json(
            { error: "An unexpected error occurred" },
            { status: 500 }
        );
    }
}

// Also support GET for webhook verification (some services require this)
export async function GET() {
    return NextResponse.json({ status: "ok" });
}
