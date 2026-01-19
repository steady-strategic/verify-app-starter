
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function POST(req: Request) {
    try {
        const session = await auth();
        // Check permissions
        if (!session?.user || (session.user as any).userType !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const data = await req.json();

        // Basic validation
        if (!data.firstName || !data.lastName || !data.city || !data.state) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const clinician = await prisma.clinician.create({
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                title: data.title,
                city: data.city,
                state: data.state,
                zipCode: data.zipCode,
                image: data.image,
                bio: data.bio,
                specialties: data.specialties || [], // Ensure array
                email: data.email,
                phone: data.phone,
                website: data.website,

            },
        });

        return NextResponse.json(clinician);
    } catch (error: any) {
        console.error("Error creating clinician:", error);
        return NextResponse.json(
            { error: "Failed to create clinician" },
            { status: 500 }
        );
    }
}
