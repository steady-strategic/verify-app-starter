import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

// GET /api/admin/users - List all admin users
export async function GET(req: NextRequest) {
    try {
        const session = await auth();

        if (!session?.user || (session.user as any).userType !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const adminUser = session.user as any;

        // Only SUPER_ADMIN can view all admin users
        if (adminUser.role !== "SUPER_ADMIN") {
            return NextResponse.json(
                { error: "Insufficient permissions" },
                { status: 403 }
            );
        }

        const users = await prisma.adminUser.findMany({
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                createdAt: true,
                updatedAt: true,
                _count: {
                    select: {
                        stories: true,
                        lessons: true,
                    },
                },
            },
            orderBy: { createdAt: "desc" },
        });

        return NextResponse.json({ users });
    } catch (error) {
        console.error("Error fetching admin users:", error);
        return NextResponse.json(
            { error: "Failed to fetch admin users" },
            { status: 500 }
        );
    }
}

// POST /api/admin/users - Create new admin user
export async function POST(req: NextRequest) {
    try {
        const session = await auth();

        if (!session?.user || (session.user as any).userType !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const adminUser = session.user as any;

        // Only SUPER_ADMIN can create admin users
        if (adminUser.role !== "SUPER_ADMIN") {
            return NextResponse.json(
                { error: "Insufficient permissions" },
                { status: 403 }
            );
        }

        const body = await req.json();
        const { email, firstName, lastName, role, password } = body;

        // Validate required fields
        if (!email || !firstName || !lastName || !role || !password) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        // Validate role
        if (!["EDITOR", "ADMIN", "SUPER_ADMIN"].includes(role)) {
            return NextResponse.json({ error: "Invalid role" }, { status: 400 });
        }

        // Check if email already exists
        const existing = await prisma.adminUser.findUnique({
            where: { email },
        });

        if (existing) {
            return NextResponse.json(
                { error: "An admin user with this email already exists" },
                { status: 409 }
            );
        }

        // Hash password
        const bcrypt = require("bcryptjs");
        const passwordHash = await bcrypt.hash(password, 10);

        const newUser = await prisma.adminUser.create({
            data: {
                email,
                firstName,
                lastName,
                role,
                passwordHash,
            },
            select: {
                id: true,
                email: true,
                firstName: true,
                lastName: true,
                role: true,
                createdAt: true,
            },
        });

        return NextResponse.json({ user: newUser });
    } catch (error) {
        console.error("Error creating admin user:", error);
        return NextResponse.json(
            { error: "Failed to create admin user" },
            { status: 500 }
        );
    }
}
