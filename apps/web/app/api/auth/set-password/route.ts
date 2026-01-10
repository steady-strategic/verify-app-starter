import { NextRequest, NextResponse } from "next/server";
import { prisma } from "../../../../lib/db";
import { hashToken } from "../../../../lib/invite-token";
import bcrypt from "bcryptjs";

interface SetPasswordRequest {
    token: string;
    password: string;
}

export async function POST(request: NextRequest) {
    try {
        const body: SetPasswordRequest = await request.json();

        if (!body.token || !body.password) {
            return NextResponse.json(
                { error: "Missing required fields: token, password" },
                { status: 400 }
            );
        }

        // Validate password strength (minimum 8 characters)
        if (body.password.length < 8) {
            return NextResponse.json(
                { error: "Password must be at least 8 characters long" },
                { status: 400 }
            );
        }

        // Hash the token to look it up
        const tokenHash = hashToken(body.token);

        // Find the invite token
        const inviteToken = await prisma.inviteToken.findUnique({
            where: { tokenHash },
            include: { member: true },
        });

        if (!inviteToken) {
            return NextResponse.json(
                { error: "Invalid or expired invite token" },
                { status: 404 }
            );
        }

        // Check if token is already used
        if (inviteToken.usedAt) {
            return NextResponse.json(
                { error: "This invite link has already been used" },
                { status: 400 }
            );
        }

        // Check if token is expired
        if (new Date() > inviteToken.expiresAt) {
            return NextResponse.json(
                { error: "This invite link has expired" },
                { status: 400 }
            );
        }

        // Hash the password
        const passwordHash = await bcrypt.hash(body.password, 10);

        // Update member: set password, mark as active
        await prisma.member.update({
            where: { id: inviteToken.memberId },
            data: {
                passwordHash,
                status: "ACTIVE",
            },
        });

        // Mark token as used
        await prisma.inviteToken.update({
            where: { id: inviteToken.id },
            data: {
                usedAt: new Date(),
            },
        });

        // Return success with email for client-side auto-login
        return NextResponse.json({
            success: true,
            message: "Password set successfully",
            email: inviteToken.member.email,
        });
    } catch (error) {
        console.error("Set password error:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json(
            { error: "An unexpected error occurred", details: errorMessage },
            { status: 500 }
        );
    }
}
