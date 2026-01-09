import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/db";
import {
    generateInviteToken,
    hashToken,
    getTokenExpirationDate,
} from "../../../../lib/invite-token";

/**
 * Monday.com webhook handler for contact creation
 * Accepts contact data from Make.com and creates Member + InviteToken
 */

interface MondayWebhookPayload {
    challenge?: string; // For webhook verification
    event?: {
        itemId: string;
    };
    contactData: {
        email: string;
        firstName: string;
        lastName: string;
    };
}

export async function POST(request: NextRequest) {
    try {
        // 1. Optional webhook authentication
        const signature = request.headers.get("authorization");
        const expectedSecret = process.env.MONDAY_WEBHOOK_SECRET;

        if (expectedSecret) {
            if (!signature) {
                console.error("Webhook authentication failed: missing authorization header");
                return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
            }

            const token = signature.replace("Bearer ", "");
            if (token !== expectedSecret) {
                console.error("Webhook authentication failed: invalid signature");
                return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
            }
        }

        const body: MondayWebhookPayload = await request.json();

        // 2. Handle challenge handshake
        if (body.challenge) {
            return NextResponse.json({ challenge: body.challenge });
        }

        // 3. Validate payload
        if (!body.event?.itemId) {
            return NextResponse.json(
                { error: "Missing required field: event.itemId" },
                { status: 400 }
            );
        }

        if (!body.contactData?.email) {
            return NextResponse.json(
                { error: "Missing required field: contactData.email" },
                { status: 400 }
            );
        }

        const { itemId } = body.event;
        const { email, firstName, lastName } = body.contactData;

        // 4. Upsert member record
        const member = await prisma.member.upsert({
            where: { email },
            update: {
                firstName: firstName || "",
                lastName: lastName || "",
                mondayItemId: itemId,
            },
            create: {
                email,
                firstName: firstName || "",
                lastName: lastName || "",
                mondayItemId: itemId,
                status: "INVITED",
            },
        });

        // 5. Generate invite token
        const rawToken = generateInviteToken();
        const tokenHash = hashToken(rawToken);
        const expiresAt = getTokenExpirationDate();

        await prisma.inviteToken.create({
            data: {
                tokenHash,
                memberId: member.id,
                expiresAt,
            },
        });

        // 6. Build Set Password URL
        const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
        const setPasswordUrl = `${baseUrl}/set-password?token=${rawToken}`;

        // 7. Return success with invite URL
        // Make.com will handle updating Monday columns
        return NextResponse.json({
            success: true,
            memberId: member.id,
            email: member.email,
            inviteUrl: setPasswordUrl,
            itemId: itemId,
        });
    } catch (error) {
        console.error("Monday webhook error:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json(
            { error: "An unexpected error occurred", details: errorMessage },
            { status: 500 }
        );
    }
}

// Support GET for webhook verification
export async function GET() {
    return NextResponse.json({ status: "ok", service: "monday-contact-webhook" });
}
