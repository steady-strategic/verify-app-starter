import { auth } from "../../lib/auth";
import Link from "next/link";

export default async function AdminDashboard() {
    const session = await auth();
    const adminUser = session?.user as any;

    return (
        <div className="p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="mb-8">
                    <h1 className="text-4xl serif text-stone-900 mb-2">
                        Welcome back, {adminUser.name?.split(" ")[0]}
                    </h1>
                    <p className="text-stone-500">
                        Manage your content and settings from here
                    </p>
                </div>

                {/* Quick Stats */}
                <div className="grid md:grid-cols-3 gap-6 mb-8">
                    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-stone-100">
                        <div className="text-3xl mb-2">📝</div>
                        <h3 className="text-2xl font-bold text-stone-900 mb-1">Blog</h3>
                        <p className="text-stone-500 text-sm">Manage blog posts</p>
                        <Link
                            href="/admin/stories"
                            className="mt-4 inline-block text-amber-600 hover:text-amber-700 font-medium text-sm"
                        >
                            View all →
                        </Link>
                    </div>



                    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-stone-100">
                        <div className="text-3xl mb-2">🩺</div>
                        <h3 className="text-2xl font-bold text-stone-900 mb-1">Clinicians</h3>
                        <p className="text-stone-500 text-sm">Manage practitioner directory</p>
                        <Link
                            href="/admin/clinician-directory"
                            className="mt-4 inline-block text-amber-600 hover:text-amber-700 font-medium text-sm"
                        >
                            View all →
                        </Link>
                    </div>

                    {adminUser.role === "SUPER_ADMIN" && (
                        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-stone-100">
                            <div className="text-3xl mb-2">👥</div>
                            <h3 className="text-2xl font-bold text-stone-900 mb-1">Admin</h3>
                            <p className="text-stone-500 text-sm">Manage admin accounts</p>
                            <Link
                                href="/admin/users"
                                className="mt-4 inline-block text-amber-600 hover:text-amber-700 font-medium text-sm"
                            >
                                View all →
                            </Link>
                        </div>
                    )}
                </div>


            </div>
        </div>
    );
}
