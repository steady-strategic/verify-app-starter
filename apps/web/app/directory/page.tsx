import { prisma } from "@/lib/db";
import { DirectoryClient } from "@/components/directory/DirectoryClient";

export const dynamic = "force-dynamic";

export default async function DirectoryPage() {
    const clinicians = await prisma.clinician.findMany({
        orderBy: { lastName: "asc" },
    });

    return <DirectoryClient initialClinicians={clinicians} />;
}
