"use client";

import { useState } from "react";
import { useFormStatus } from "react-dom";
import { adminLogin } from "../../app/admin-login/actions";

function SubmitButton() {
    const { pending } = useFormStatus();

    return (
        <button
            type="submit"
            disabled={pending}
            className="w-full py-5 bg-stone-900 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-stone-800 transition-all shadow-lg shadow-stone-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
            {pending ? "Signing In..." : "Sign In to Admin Panel"}
        </button>
    );
}

export function AdminLoginForm() {
    const [error, setError] = useState<string | null>(null);

    async function handleSubmit(formData: FormData) {
        setError(null);
        const result = await adminLogin(formData);

        if (result?.error) {
            setError(result.error);
        }
    }

    return (
        <form action={handleSubmit} className="space-y-6">
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
                    required
                    className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                    placeholder="••••••••"
                />
            </div>

            <SubmitButton />
        </form>
    );
}
