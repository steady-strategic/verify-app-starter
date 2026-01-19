import { ClinicianForm } from "@/components/admin/ClinicianForm";

export default function NewClinicianPage() {
    return (
        <div className="p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl serif text-stone-900 mb-2">Add Clinician</h1>
                    <p className="text-stone-500">Add a new certified practitioner to the directory</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100">
                    <ClinicianForm mode="create" />
                </div>
            </div>
        </div>
    );
}
