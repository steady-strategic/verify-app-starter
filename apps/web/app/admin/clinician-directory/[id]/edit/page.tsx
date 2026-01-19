import { notFound } from "next/navigation";
import { prisma } from "@/lib/db";
import { ClinicianForm } from "@/components/admin/ClinicianForm";

export default async function EditClinicianPage({
    params,
}: {
    params: { id: string };
}) {
    const clinician = await prisma.clinician.findUnique({
        where: { id: params.id },
    });

    if (!clinician) {
        notFound();
    }

    return (
        <div className="p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl serif text-stone-900 mb-2">Edit Clinician</h1>
                    <p className="text-stone-500">Update clinician details</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100">
                    <ClinicianForm
                        mode="edit"
                        initialData={{
                            id: clinician.id,
                            firstName: clinician.firstName,
                            lastName: clinician.lastName,
                            title: clinician.title,
                            city: clinician.city,
                            state: clinician.state,
                            zipCode: clinician.zipCode || "",
                            image: clinician.image || "",
                            bio: clinician.bio || "",
                            specialties: clinician.specialties,
                            email: clinician.email || "",
                            phone: clinician.phone || "",
                            website: clinician.website || "",
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
