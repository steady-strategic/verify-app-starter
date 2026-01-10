"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";

interface SetPasswordFormProps {
    token: string;
}

export function SetPasswordForm({ token }: SetPasswordFormProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);
    const [formData, setFormData] = useState({
        password: "",
        confirmPassword: "",
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

        // Validate passwords match
        if (formData.password !== formData.confirmPassword) {
            setError("Passwords do not match");
            setIsSubmitting(false);
            return;
        }

        // Validate password length
        if (formData.password.length < 8) {
            setError("Password must be at least 8 characters long");
            setIsSubmitting(false);
            return;
        }

        try {
            // Step 1: Set the password via API
            const response = await fetch("/api/auth/set-password", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({
                    token,
                    password: formData.password,
                }),
            });

            const data = await response.json();

            if (!response.ok) {
                setError(data.error || "Failed to set password");
                setIsSubmitting(false);
                return;
            }

            // Step 2: Auto-sign-in with the new password
            const signInResult = await signIn("member-credentials", {
                email: data.email,
                password: formData.password,
                redirect: false,
            });

            if (signInResult?.error) {
                // Password was set but auto-login failed - redirect to login
                setError("Password set successfully! Redirecting to login...");
                setTimeout(() => {
                    router.push("/login");
                }, 2000);
                return;
            }

            // Step 3: Success - redirect to modules page
            router.push("/account/modules");
        } catch (error) {
            setError("An unexpected error occurred. Please try again.");
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
                    New Password
                </label>
                <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                    placeholder="••••••••"
                    minLength={8}
                />
                <p className="text-xs text-stone-400">Minimum 8 characters</p>
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
                    required
                    className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                    placeholder="••••••••"
                    minLength={8}
                />
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-amber-600 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-amber-700 transition-all shadow-lg shadow-amber-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? "Setting Password..." : "Set Password & Continue"}
            </button>
        </form>
    );
}
