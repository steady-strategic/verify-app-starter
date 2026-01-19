import Link from "next/link";
import { prisma } from "../../../lib/db";
import { ClinicianList } from "@/components/admin/ClinicianList";

export const dynamic = "force-dynamic";

export default async function ClinicianDirectoryPage() {
    const clinicians = await prisma.clinician.findMany({
        orderBy: { lastName: "asc" },
    });

    return (
        <div className="p-8">
            <div className="max-w-6xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl serif text-stone-900 mb-2">Clinician Directory</h1>
                        <p className="text-stone-500">Manage certified practitioners</p>
                    </div>
                    <Link
                        href="/admin/clinician-directory/new"
                        className="px-6 py-3 bg-stone-900 text-white rounded-full font-semibold text-sm hover:bg-stone-800 transition-all"
                    >
                        + Add Clinician
                    </Link>
                </div>

                {clinicians.length === 0 ? (
                    <div className="bg-white rounded-[2rem] p-12 text-center shadow-sm border border-stone-100">
                        <div className="text-6xl mb-4">🩺</div>
                        <h3 className="text-xl font-bold text-stone-900 mb-2">No clinicians yet</h3>
                        <p className="text-stone-500 mb-6">Add your first clinician to the directory</p>
                        <Link
                            href="/admin/clinician-directory/new"
                            className="inline-block px-6 py-3 bg-amber-600 text-white rounded-full font-semibold text-sm hover:bg-amber-700 transition-all"
                        >
                            Add Clinician
                        </Link>
                    </div>
                ) : (
                    <ClinicianList clinicians={clinicians} />
                )}
            </div>
        </div>
    );
}
