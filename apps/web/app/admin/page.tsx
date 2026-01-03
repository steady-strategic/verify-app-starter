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
                        <h3 className="text-2xl font-bold text-stone-900 mb-1">Stories</h3>
                        <p className="text-stone-500 text-sm">Manage blog posts</p>
                        <Link
                            href="/admin/stories"
                            className="mt-4 inline-block text-amber-600 hover:text-amber-700 font-medium text-sm"
                        >
                            View all →
                        </Link>
                    </div>

                    <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-stone-100">
                        <div className="text-3xl mb-2">🎧</div>
                        <h3 className="text-2xl font-bold text-stone-900 mb-1">Lessons</h3>
                        <p className="text-stone-500 text-sm">Manage audio content</p>
                        <Link
                            href="/admin/lessons"
                            className="mt-4 inline-block text-amber-600 hover:text-amber-700 font-medium text-sm"
                        >
                            View all →
                        </Link>
                    </div>

                    {adminUser.role === "SUPER_ADMIN" && (
                        <div className="bg-white rounded-[2rem] p-6 shadow-sm border border-stone-100">
                            <div className="text-3xl mb-2">👥</div>
                            <h3 className="text-2xl font-bold text-stone-900 mb-1">Users</h3>
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

                {/* Quick Actions */}
                <div className="bg-white rounded-[2rem] p-8 shadow-sm border border-stone-100">
                    <h2 className="text-xl font-bold text-stone-900 mb-6">Quick Actions</h2>
                    <div className="grid md:grid-cols-2 gap-4">
                        <Link
                            href="/admin/stories/new"
                            className="flex items-center justify-between p-4 bg-stone-50 rounded-xl hover:bg-stone-100 transition-colors group"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700">
                                    ➕
                                </div>
                                <div>
                                    <p className="font-semibold text-stone-900">Create Story</p>
                                    <p className="text-xs text-stone-500">Write a new blog post</p>
                                </div>
                            </div>
                            <span className="text-stone-400 group-hover:text-stone-600">→</span>
                        </Link>

                        <Link
                            href="/admin/lessons/new"
                            className="flex items-center justify-between p-4 bg-stone-50 rounded-xl hover:bg-stone-100 transition-colors group"
                        >
                            <div className="flex items-center space-x-3">
                                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700">
                                    ➕
                                </div>
                                <div>
                                    <p className="font-semibold text-stone-900">Create Lesson</p>
                                    <p className="text-xs text-stone-500">Upload new audio content</p>
                                </div>
                            </div>
                            <span className="text-stone-400 group-hover:text-stone-600">→</span>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
