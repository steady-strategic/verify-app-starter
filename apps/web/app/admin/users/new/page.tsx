import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { AdminUserForm } from "@/components/admin/AdminUserForm";

export default async function NewAdminUserPage() {
    const session = await auth();
    const adminUser = session?.user as any;

    // Check if user is SUPER_ADMIN
    if (adminUser.role !== "SUPER_ADMIN") {
        redirect("/admin");
    }

    return (
        <div className="p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl serif text-stone-900 mb-2">
                        Create Admin User
                    </h1>
                    <p className="text-stone-500">Add a new administrator to the system</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100">
                    <AdminUserForm mode="create" />
                </div>
            </div>
        </div>
    );
}
