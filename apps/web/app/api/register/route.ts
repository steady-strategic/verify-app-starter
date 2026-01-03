import { NextRequest, NextResponse } from "next/server";
import { registerSchema } from "@verify/validation";
import { prisma } from "../../../lib/db";
import { signIn } from "../../../lib/auth";
import bcrypt from "bcrypt";

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();

        // Validate input
        const validation = registerSchema.safeParse(body);
        if (!validation.success) {
            return NextResponse.json(
                { error: "Validation failed", details: validation.error.flatten() },
                { status: 400 }
            );
        }

        const data = validation.data;

        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email: data.email },
        });

        if (existingUser) {
            return NextResponse.json(
                { error: "A user with this email already exists" },
                { status: 409 }
            );
        }

        // Hash password
        const passwordHash = await bcrypt.hash(data.password, 10);

        // Create user and verification request in a transaction
        const user = await prisma.user.create({
            data: {
                email: data.email,
                passwordHash,
                firstName: data.firstName,
                lastName: data.lastName,
                businessName: data.businessName,
                licenseNumber: data.licenseNumber,
                licenseType: data.licenseType,
                state: data.state,
                status: "PENDING",
                verificationRequest: {
                    create: {
                        payload: {
                            licenseNumber: data.licenseNumber,
                            licenseType: data.licenseType,
                            state: data.state,
                            submittedAt: new Date().toISOString(),
                        },
                        decision: "PENDING",
                    },
                },
            },
            include: {
                verificationRequest: true,
            },
        });

        // Auto-login the user
        await signIn("credentials", {
            email: data.email,
            password: data.password,
            redirect: false,
        });

        // Return success with user ID (for Make.com webhook trigger)
        return NextResponse.json(
            {
                success: true,
                userId: user.id,
                message: "Registration successful. Your account is pending verification.",
            },
            { status: 201 }
        );
    } catch (error) {
        console.error("Registration error:", error);
        const errorMessage = error instanceof Error ? error.message : "Unknown error";
        return NextResponse.json(
            { error: "An unexpected error occurred", details: errorMessage },
            { status: 500 }
        );
    }
}
