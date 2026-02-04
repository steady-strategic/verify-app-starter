"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface ClinicianFormProps {
    initialData?: {
        id?: string;
        firstName: string;
        lastName: string;
        title: string;
        training: string;
        city: string;
        state: string;
        country: string;
        email: string;
        phone: string;
    };
    mode: "create" | "edit";
}

export function ClinicianForm({ initialData, mode }: ClinicianFormProps) {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    const [formData, setFormData] = useState({
        firstName: initialData?.firstName || "",
        lastName: initialData?.lastName || "",
        title: initialData?.title || "",
        training: initialData?.training || "",
        city: initialData?.city || "",
        state: initialData?.state || "",
        country: initialData?.country || "",
        email: initialData?.email || "",
        phone: initialData?.phone || "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
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

        try {
            const url =
                mode === "create"
                    ? "/api/admin/clinicians"
                    : `/api/admin/clinicians/${initialData?.id}`;
            const method = mode === "create" ? "POST" : "PUT";

            const response = await fetch(url, {
                method,
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || "Failed to save clinician");
            }

            router.push("/admin/clinician-directory");
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

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">First Name</label>
                    <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        required
                        className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Last Name</label>
                    <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        required
                        className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Title (e.g. LCSW)</label>
                    <input
                        type="text"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        required
                        className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Training</label>
                    <input
                        type="text"
                        name="training"
                        value={formData.training}
                        onChange={handleChange}
                        className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">City</label>
                    <input
                        type="text"
                        name="city"
                        value={formData.city}
                        onChange={handleChange}
                        required
                        className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">State</label>
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        required
                        className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Country</label>
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
                        onChange={handleChange}
                        className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none"
                    />
                </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Email</label>
                    <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none"
                    />
                </div>
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">Phone</label>
                    <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none"
                    />
                </div>
            </div>

            <div className="flex items-center space-x-4 pt-4 border-t border-stone-100">
                <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-8 py-3 bg-stone-900 text-white rounded-full font-semibold text-sm hover:bg-stone-800 transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                    {isSubmitting
                        ? "Saving..."
                        : mode === "create"
                            ? "Add Clinician"
                            : "Update Clinician"}
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
