import { redirect } from "next/navigation";
import { auth } from "../../lib/auth";
import { AdminSidebar } from "../../components/admin/AdminSidebar";

export default async function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const session = await auth();

    // Check if user is authenticated as admin
    if (!session?.user || (session.user as any).userType !== "ADMIN") {
        redirect("/admin-login");
    }

    const adminUser = session.user as any;

    return (
        <div className="flex h-screen overflow-hidden">
            <AdminSidebar role={adminUser.role} userName={adminUser.name} />
            <main className="flex-1 overflow-auto bg-cream">
                {children}
            </main>
        </div>
    );
}
