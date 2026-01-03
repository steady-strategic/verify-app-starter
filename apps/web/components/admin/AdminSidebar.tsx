"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { signOut } from "next-auth/react";

interface AdminSidebarProps {
    role: string;
    userName: string;
}

export function AdminSidebar({ role, userName }: AdminSidebarProps) {
    const pathname = usePathname();

    const isActive = (path: string) => pathname === path || pathname.startsWith(path + "/");

    const navItems = [
        { href: "/admin", label: "Dashboard", icon: "📊" },
        { href: "/admin/stories", label: "Stories", icon: "📝" },
        { href: "/admin/lessons", label: "Lessons", icon: "🎧" },
    ];

    // Only SUPER_ADMIN can access user management
    if (role === "SUPER_ADMIN") {
        navItems.push({ href: "/admin/users", label: "Admin Users", icon: "👥" });
    }

    return (
        <div className="w-64 bg-stone-100 border-r border-stone-200 flex flex-col h-screen">
            {/* Logo */}
            <div className="p-6 border-b border-stone-200">
                <Link href="/" className="flex items-center space-x-2">
                    <div className="w-8 h-8 rounded-full bg-stone-900 flex items-center justify-center">
                        <span className="text-white font-bold text-xs">M</span>
                    </div>
                    <span className="text-xl font-bold tracking-tighter text-stone-900">
                        MORE
                    </span>
                </Link>
                <p className="text-xs text-stone-500 mt-2">Admin Panel</p>
            </div>

            {/* Navigation */}
            <nav className="flex-1 p-4 space-y-1">
                {navItems.map((item) => (
                    <Link
                        key={item.href}
                        href={item.href}
                        className={`flex items-center space-x-3 px-4 py-3 rounded-xl transition-all ${isActive(item.href)
                                ? "bg-amber-100 text-amber-900 font-semibold"
                                : "text-stone-600 hover:bg-stone-200"
                            }`}
                    >
                        <span className="text-lg">{item.icon}</span>
                        <span className="text-sm">{item.label}</span>
                    </Link>
                ))}
            </nav>

            {/* User Info & Logout */}
            <div className="p-4 border-t border-stone-200">
                <div className="mb-3">
                    <p className="text-sm font-semibold text-stone-900">{userName}</p>
                    <p className="text-xs text-stone-500">
                        <span className="inline-block px-2 py-0.5 bg-amber-100 text-amber-700 rounded text-[10px] font-bold">
                            {role}
                        </span>
                    </p>
                </div>
                <button
                    onClick={() => signOut({ callbackUrl: "/" })}
                    className="w-full px-4 py-2 bg-stone-200 text-stone-700 rounded-lg text-sm font-medium hover:bg-stone-300 transition-colors"
                >
                    Sign Out
                </button>
            </div>
        </div>
    );
}
