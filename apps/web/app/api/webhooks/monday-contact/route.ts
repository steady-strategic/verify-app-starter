import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/db";
import {
    generateInviteToken,
    hashToken,
    getTokenExpirationDate,
} from "../../../../lib/invite-token";
import {
    fetchMondayContactItem,
    updateMondayInviteColumns,
} from "../../../../lib/monday";

/**
 * Monday.com webhook handler for contact creation
 * Handles: challenge handshake, contact creation, invite token generation
 */

interface MondayWebhookPayload {
    challenge?: string; // For webhook verification
    event?: {
        type: string;
        itemId: string;
    };
}

export async function POST(request: NextRequest) {
    try {
        // 1. Verify webhook authenticity using Monday's signature
        const signature = request.headers.get("authorization");
        const expectedSecret = process.env.MONDAY_WEBHOOK_SECRET;

        // Monday.com sends signature in Authorization header
        // For now, we'll make signature verification optional
        // If MONDAY_WEBHOOK_SECRET is set, we verify it matches
        if (expectedSecret && signature) {
            // Monday sends the token in format: "Bearer {token}" or just the token
            const token = signature.replace("Bearer ", "");

            if (token !== expectedSecret) {
                console.error("Webhook authentication failed: invalid signature");
                return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
            }
        } else if (expectedSecret && !signature) {
            // Secret is configured but no signature provided
            console.error("Webhook authentication failed: missing signature");
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
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

        const { itemId } = body.event;

        // 4. Fetch contact details from monday
        let contactDetails;
        try {
            contactDetails = await fetchMondayContactItem(itemId);
        } catch (error) {
            console.error("Failed to fetch monday contact:", error);
            return NextResponse.json(
                {
                    error: "Failed to fetch contact from monday",
                    details: error instanceof Error ? error.message : "Unknown error",
                },
                { status: 500 }
            );
        }

        const { email, firstName, lastName } = contactDetails;

        // 5. Upsert member record
        const member = await prisma.member.upsert({
            where: { email },
            update: {
                firstName,
                lastName,
                mondayItemId: itemId,
            },
            create: {
                email,
                firstName,
                lastName,
                mondayItemId: itemId,
                status: "INVITED",
            },
        });

        // 6. Generate invite token
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

        // 7. Build Set Password URL
        const baseUrl = process.env.NEXTAUTH_URL || "http://localhost:3000";
        const setPasswordUrl = `${baseUrl}/set-password?token=${rawToken}`;

        // 8. Update monday item columns
        try {
            await updateMondayInviteColumns(itemId, setPasswordUrl, "Sent");
        } catch (error) {
            console.error("Failed to update monday columns:", error);
            // Don't fail the webhook if monday update fails
            // The member and token are already created
        }

        // 9. Return success
        return NextResponse.json({
            success: true,
            memberId: member.id,
            email: member.email,
            inviteUrl: setPasswordUrl,
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

// Support GET for webhook verification (some services require this)
export async function GET() {
    return NextResponse.json({ status: "ok", service: "monday-contact-webhook" });
}
