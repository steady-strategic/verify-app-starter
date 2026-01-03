import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

// GET /api/admin/users/[id] - Get single admin user
export async function GET(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await auth();

        if (!session?.user || (session.user as any).userType !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const adminUser = session.user as any;

        // Only SUPER_ADMIN can view admin users
        if (adminUser.role !== "SUPER_ADMIN") {
            return NextResponse.json(
                { error: "Insufficient permissions" },
                { status: 403 }
            );
        }

        const user = await prisma.adminUser.findUnique({
            where: { id: params.id },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        if (!user) {
            return NextResponse.json({ error: "User not found" }, { status: 404 });
        }

        return NextResponse.json({ user });
    } catch (error) {
        console.error("Error fetching admin user:", error);
        return NextResponse.json(
            { error: "Failed to fetch admin user" },
            { status: 500 }
        );
    }
}

// PUT /api/admin/users/[id] - Update admin user
export async function PUT(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await auth();

        if (!session?.user || (session.user as any).userType !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const adminUser = session.user as any;

        // Only SUPER_ADMIN can update admin users
        if (adminUser.role !== "SUPER_ADMIN") {
            return NextResponse.json(
                { error: "Insufficient permissions" },
                { status: 403 }
            );
        }

        const body = await req.json();
        const { email, firstName, lastName, role, password } = body;

        // Validate required fields
        if (!email || !firstName || !lastName || !role) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Validate role
        if (!["EDITOR", "ADMIN", "SUPER_ADMIN"].includes(role)) {
            return NextResponse.json({ error: "Invalid role" }, { status: 400 });
        }

        // Check if new email conflicts with another user
        const existing = await prisma.adminUser.findFirst({
            where: {
                email,
                id: { not: params.id },
            },
        });

        if (existing) {
            return NextResponse.json(
                { error: "An admin user with this email already exists" },
                { status: 409 }
            );
        }

        // Prepare update data
        const updateData: any = {
            email,
            firstName,
            lastName,
            role,
        };

        // Only update password if provided
        if (password && password.trim() !== "") {
            const bcrypt = require("bcryptjs");
            updateData.passwordHash = await bcrypt.hash(password, 10);
        }

        const user = await prisma.adminUser.update({
            where: { id: params.id },
            data: updateData,
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                createdAt: true,
                updatedAt: true,
            },
        });

        return NextResponse.json({ user });
    } catch (error) {
        console.error("Error updating admin user:", error);
        return NextResponse.json(
            { error: "Failed to update admin user" },
            { status: 500 }
        );
    }
}

// DELETE /api/admin/users/[id] - Delete admin user
export async function DELETE(
    req: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const session = await auth();

        if (!session?.user || (session.user as any).userType !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const adminUser = session.user as any;

        // Only SUPER_ADMIN can delete admin users
        if (adminUser.role !== "SUPER_ADMIN") {
            return NextResponse.json(
                { error: "Insufficient permissions" },
                { status: 403 }
            );
        }

        // Prevent deleting yourself
        if (params.id === adminUser.id) {
            return NextResponse.json(
                { error: "Cannot delete your own account" },
                { status: 400 }
            );
        }

        await prisma.adminUser.delete({
            where: { id: params.id },
        });

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Error deleting admin user:", error);
        return NextResponse.json(
            { error: "Failed to delete admin user" },
            { status: 500 }
        );
    }
}
