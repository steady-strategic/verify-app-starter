import { prisma } from "@/lib/db";
import { DirectoryClient } from "@/components/directory/DirectoryClient";

export const dynamic = "force-dynamic";

export default async function DirectoryPage() {
    let clinicians: any[] = [];
    let error = null;

    try {
        if (!prisma.clinician) throw new Error("Database model missing. Restart server.");
        clinicians = await prisma.clinician.findMany({
            orderBy: { lastName: "asc" },
        });
    } catch (e: any) {
        console.error("Directory fetch error:", e);
        error = e.message;
    }

    if (error) {
        return (
            <div className="min-h-screen flex items-center justify-center p-8 bg-stone-50">
                <div className="max-w-md bg-white p-8 rounded-2xl shadow-sm border border-stone-200 text-center">
                    <h3 className="text-xl font-bold text-stone-900 mb-2">Temporary System Notice</h3>
                    <p className="text-stone-600 mb-4">We're updating our directory system. Please check back in a few minutes.</p>
                    <p className="text-xs text-stone-400">Error: {error}</p>
                </div>
            </div>
        );
    }

    return <DirectoryClient initialClinicians={clinicians} />;
}
