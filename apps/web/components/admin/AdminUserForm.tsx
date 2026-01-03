"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface AdminUserFormProps {
    initialData?: {
        id?: string;
        email: string;
        firstName: string;
        lastName: string;
        role: string;
    };
    mode: "create" | "edit";
}

export function AdminUserForm({ initialData, mode }: AdminUserFormProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        email: initialData?.email || "",
        firstName: initialData?.firstName || "",
        lastName: initialData?.lastName || "",
        role: initialData?.role || "EDITOR",
        password: "",
        confirmPassword: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({
            ...prev,
            [name]: value,
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        // Validate passwords match (for create mode or if password is being changed)
        if (mode === "create" || formData.password) {
            if (formData.password !== formData.confirmPassword) {
                setError("Passwords do not match");
                setIsSubmitting(false);
                return;
            }

            if (mode === "create" && formData.password.length < 8) {
                setError("Password must be at least 8 characters");
                setIsSubmitting(false);
                return;
            }
        }

        try {
            const url =
                mode === "create"
                    ? "/api/admin/users"
                    : `/api/admin/users/${initialData?.id}`;
            const method = mode === "create" ? "POST" : "PUT";

            const body: any = {
                email: formData.email,
                firstName: formData.firstName,
                lastName: formData.lastName,
                role: formData.role,
            };

            // Only include password if it's set
            if (formData.password) {
                body.password = formData.password;
            }

            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to save admin user");
            }

            router.push("/admin/users");
            router.refresh();
        } catch (err: any) {
            setError(err.message);
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            {error && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 px-6 py-4 rounded-2xl text-sm">
                    {error}
                </div>
            )}

            {/* First Name & Last Name */}
            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                        First Name
                    </label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                        placeholder="John"
                    />
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                        Last Name
                    </label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                        placeholder="Smith"
                    />
                </div>
            </div>

            {/* Email */}
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                    placeholder="john.smith@example.com"
                />
            </div>

            {/* Role */}
            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    Role
                </label>
                <select
                    name="role"
                    value={formData.role}
                    onChange={handleChange}
                    required
                    className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                >
                    <option value="EDITOR">Editor - Can create/edit content</option>
                    <option value="ADMIN">Admin - Editor + can publish/unpublish</option>
                    <option value="SUPER_ADMIN">
                        Super Admin - Admin + user management
                    </option>
                </select>
                <p className="text-xs text-stone-500 mt-2">
                    {formData.role === "EDITOR" &&
                        "Editors can create and edit stories and lessons but cannot publish."}
                    {formData.role === "ADMIN" &&
                        "Admins have all Editor permissions plus the ability to publish and unpublish content."}
                    {formData.role === "SUPER_ADMIN" &&
                        "Super Admins have all Admin permissions plus the ability to manage admin users."}
                </p>
            </div>

            {/* Password */}
            <div className="space-y-6 pt-4 border-t border-stone-200">
                <div>
                    <h3 className="text-sm font-bold text-stone-900 mb-1">
                        {mode === "create" ? "Set Password" : "Change Password"}
                    </h3>
                    <p className="text-xs text-stone-500">
                        {mode === "edit" &&
                            "Leave blank to keep the current password"}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                            Password
                        </label>
                        <input
                            type="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required={mode === "create"}
                            className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                            placeholder={mode === "create" ? "Min. 8 characters" : "New password"}
                        />
                    </div>

                    <div className="space-y-2">
                        <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required={mode === "create" || !!formData.password}
                            className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                            placeholder="Confirm password"
                        />
                    </div>
                </div>
            </div>

            {/* Actions */}
            <div className="flex items-center space-x-4 pt-4 border-t border-stone-100">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-stone-900 text-white rounded-full font-semibold text-sm hover:bg-stone-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting
                        ? "Saving..."
                        : mode === "create"
                            ? "Create Admin User"
                            : "Update Admin User"}
                </button>
                <button
                    type="button"
                    onClick={() => router.back()}
                    className="px-8 py-3 bg-stone-100 text-stone-700 rounded-full font-semibold text-sm hover:bg-stone-200 transition-all"
                >
                    Cancel
                </button>
            </div>
        </form>
    );
}
