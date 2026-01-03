import { redirect } from "next/navigation";
import { auth } from "../../lib/auth";

export default async function AdminDashboard() {
    const session = await auth();

    // Check if user is authenticated as admin
    if (!session?.user || (session.user as any).userType !== "ADMIN") {
        redirect("/admin/login");
    }

    const adminUser = session.user as any;

    return (
        <div className="min-h-screen bg-cream p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="mb-12">
                    <h1 className="text-4xl serif text-stone-900 mb-2">
                        Admin Dashboard
                    </h1>
                    <p className="text-stone-500">
                        Welcome back, {adminUser.name}
                    </p>
                </div>

                {/* User Info Card */}
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100 mb-6">
                    <h2 className="text-xl font-bold text-stone-900 mb-4">Your Profile</h2>
                    <dl className="space-y-3">
                        <div>
                            <dt className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Email</dt>
                            <dd className="text-stone-900">{adminUser.email}</dd>
                        </div>
                        <div>
                            <dt className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Role</dt>
                            <dd className="text-stone-900">
                                <span className="inline-block px-3 py-1 bg-amber-100 text-amber-700 rounded-full text-xs font-bold">
                                    {adminUser.role}
                                </span>
                            </dd>
                        </div>
                        <div>
                            <dt className="text-[10px] font-bold uppercase tracking-widest text-stone-400">User Type</dt>
                            <dd className="text-stone-900">{adminUser.userType}</dd>
                        </div>
                    </dl>
                </div>

                {/* Coming Soon */}
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100">
                    <h2 className="text-xl font-bold text-stone-900 mb-4">Content Management</h2>
                    <p className="text-stone-500 mb-4">
                        Full admin panel coming in Phase 6C...
                    </p>
                    <ul className="space-y-2 text-stone-600 text-sm">
                        <li>✓ Stories Manager</li>
                        <li>✓ Lessons Manager</li>
                        <li>✓ AI Image Generation</li>
                        <li>✓ User Management (SUPER_ADMIN only)</li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
