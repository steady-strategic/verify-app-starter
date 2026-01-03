"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export function AdminLoginForm() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        setError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setError(null);

        try {
            // With redirect: true, NextAuth will handle the redirect automatically
            // This won't return if successful - page will redirect
            await signIn("admin-credentials", {
                email: formData.email,
                password: formData.password,
                callbackUrl: "/admin",
            });

            // If we get here, login failed
            setError("Invalid email or password");
            setIsSubmitting(false);
        } catch (error) {
            console.error("Login error:", error);
            setError("Invalid email or password");
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {error && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 px-6 py-4 rounded-2xl text-sm">
                    {error}
                </div>
            )}

            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    Admin Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                    placeholder="admin@example.com"
                />
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    Password
                </label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                    placeholder="••••••••"
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-stone-900 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-stone-800 transition-all shadow-lg shadow-stone-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? "Signing In..." : "Sign In to Admin Panel"}
            </button>
        </form>
    );
}
