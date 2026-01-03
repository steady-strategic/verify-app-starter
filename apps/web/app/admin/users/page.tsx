import Link from "next/link";
import { redirect } from "next/navigation";
import { auth } from "@/lib/auth";
import { prisma } from "@/lib/db";

export default async function AdminUsersPage() {
    const session = await auth();
    const adminUser = session?.user as any;

    // Check if user is SUPER_ADMIN
    if (adminUser.role !== "SUPER_ADMIN") {
        redirect("/admin");
    }

    const users = await prisma.adminUser.findMany({
        select: {
            id: true,
            email: true,
            firstName: true,
            lastName: true,
            role: true,
            createdAt: true,
            _count: {
                select: {
                    stories: true,
                    lessons: true,
                },
            },
        },
        orderBy: { createdAt: "desc" },
    });

    const getRoleBadge = (role: string) => {
        switch (role) {
            case "SUPER_ADMIN":
                return "bg-purple-100 text-purple-700";
            case "ADMIN":
                return "bg-blue-100 text-blue-700";
            case "EDITOR":
                return "bg-green-100 text-green-700";
            default:
                return "bg-gray-100 text-gray-700";
        }
    };

    const getRoleLabel = (role: string) => {
        return role.replace(/_/g, " ");
    };

    return (
        <div className="p-8">
            <div className="max-w-6xl mx-auto">
                {/* Header */}
                <div className="flex items-center justify-between mb-8">
                    <div>
                        <h1 className="text-4xl serif text-stone-900 mb-2">Admin Users</h1>
                        <p className="text-stone-500">Manage admin accounts and permissions</p>
                    </div>
                    <Link
                        href="/admin/users/new"
                        className="px-6 py-3 bg-stone-900 text-white rounded-full font-semibold text-sm hover:bg-stone-800 transition-all"
                    >
                        + New Admin User
                    </Link>
                </div>

                {/* Users List */}
                {users.length === 0 ? (
                    <div className="bg-white rounded-[2rem] p-12 text-center shadow-sm border border-stone-100">
                        <div className="text-6xl mb-4">👥</div>
                        <h3 className="text-xl font-bold text-stone-900 mb-2">
                            No admin users yet
                        </h3>
                        <p className="text-stone-500 mb-6">
                            Create your first admin user to get started
                        </p>
                        <Link
                            href="/admin/users/new"
                            className="inline-block px-6 py-3 bg-amber-600 text-white rounded-full font-semibold text-sm hover:bg-amber-700 transition-all"
                        >
                            Create Admin User
                        </Link>
                    </div>
                ) : (
                    <div className="bg-white rounded-[2rem] shadow-sm border border-stone-100 overflow-hidden">
                        <table className="w-full">
                            <thead className="bg-stone-50 border-b border-stone-200">
                                <tr>
                                    <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                                        Name
                                    </th>
                                    <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                                        Email
                                    </th>
                                    <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                                        Role
                                    </th>
                                    <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                                        Content
                                    </th>
                                    <th className="text-left px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                                        Created
                                    </th>
                                    <th className="text-right px-6 py-4 text-[10px] font-bold uppercase tracking-widest text-stone-400">
                                        Actions
                                    </th>
                                </tr>
                            </thead>
                            <tbody>
                                {users.map((user) => (
                                    <tr
                                        key={user.id}
                                        className="border-b border-stone-100 hover:bg-stone-50"
                                    >
                                        <td className="px-6 py-4">
                                            <p className="font-semibold text-stone-900">
                                                {user.firstName} {user.lastName}
                                            </p>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-stone-600">
                                            {user.email}
                                        </td>
                                        <td className="px-6 py-4">
                                            <span
                                                className={`inline-block px-2 py-1 rounded text-xs font-bold ${getRoleBadge(
                                                    user.role
                                                )}`}
                                            >
                                                {getRoleLabel(user.role)}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 text-sm text-stone-600">
                                            {user._count.stories} stories, {user._count.lessons}{" "}
                                            lessons
                                        </td>
                                        <td className="px-6 py-4 text-sm text-stone-500">
                                            {new Date(user.createdAt).toLocaleDateString()}
                                        </td>
                                        <td className="px-6 py-4 text-right">
                                            <Link
                                                href={`/admin/users/${user.id}/edit`}
                                                className="text-amber-600 hover:text-amber-700 font-medium text-sm"
                                            >
                                                Edit
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}
