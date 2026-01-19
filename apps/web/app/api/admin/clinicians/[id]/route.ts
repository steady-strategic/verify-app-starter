
import { NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export async function PUT(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const session = await auth();
        if (!session?.user || (session.user as any).userType !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        const data = await req.json();

        const clinician = await prisma.clinician.update({
            where: { id: params.id },
            data: {
                firstName: data.firstName,
                lastName: data.lastName,
                title: data.title,
                city: data.city,
                state: data.state,
                zipCode: data.zipCode,
                image: data.image,
                bio: data.bio,
                specialties: data.specialties,
                email: data.email,
                phone: data.phone,
                website: data.website,
            },
        });

        return NextResponse.json(clinician);
    } catch (error: any) {
        return NextResponse.json(
            { error: "Failed to update clinician" },
            { status: 500 }
        );
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { id: string } }
) {
    try {
        const session = await auth();
        if (!session?.user || (session.user as any).userType !== "ADMIN") {
            return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
        }

        await prisma.clinician.delete({
            where: { id: params.id },
        });

        return NextResponse.json({ success: true });
    } catch (error: any) {
        return NextResponse.json(
            { error: "Failed to delete clinician" },
            { status: 500 }
        );
    }
}
