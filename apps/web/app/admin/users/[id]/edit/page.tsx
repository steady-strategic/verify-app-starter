import { notFound, redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";
import { AdminUserForm } from "@/components/admin/AdminUserForm";

export default async function EditAdminUserPage({
    params,
}: {
    params: { id: string };
}) {
    const session = await auth();
    const adminUser = session?.user as any;

    // Check if user is SUPER_ADMIN
    if (adminUser.role !== "SUPER_ADMIN") {
        redirect("/admin");
    }

    const user = await prisma.adminUser.findUnique({
        where: { id: params.id },
        select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            role: true,
        },
    });

    if (!user) {
        notFound();
    }

    return (
        <div className="p-8">
            <div className="max-w-4xl mx-auto">
                <div className="mb-8">
                    <h1 className="text-4xl serif text-stone-900 mb-2">
                        Edit Admin User
                    </h1>
                    <p className="text-stone-500">Update user details and permissions</p>
                </div>

                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100">
                    <AdminUserForm
                        mode="edit"
                        initialData={{
                            id: user.id,
                            email: user.email,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            role: user.role,
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
