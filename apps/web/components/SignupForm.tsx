"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { registerSchema, type RegisterInput } from "@verify/validation";
import { licenseTypes, states } from "@verify/config";

type FormErrors = Partial<Record<keyof RegisterInput, string>>;

export function SignupForm() {
    const router = useRouter();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [errors, setErrors] = useState<FormErrors>({});
    const [apiError, setApiError] = useState<string | null>(null);

    const [formData, setFormData] = useState<RegisterInput>({
        firstName: "",
        lastName: "",
        email: "",
        businessName: "",
        licenseNumber: "",
        licenseType: "",
        state: "",
    });

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        if (errors[name as keyof RegisterInput]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
        setApiError(null);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setErrors({});
        setApiError(null);

        const validation = registerSchema.safeParse(formData);
        if (!validation.success) {
            const fieldErrors: FormErrors = {};
            validation.error.issues.forEach((issue) => {
                const field = issue.path[0] as keyof RegisterInput;
                fieldErrors[field] = issue.message;
            });
            setErrors(fieldErrors);
            setIsSubmitting(false);
            return;
        }

        try {
            const response = await fetch("/api/register", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                setApiError(data.error || "Registration failed");
                setIsSubmitting(false);
                return;
            }

            router.push("/pending");
        } catch (error) {
            setApiError("An unexpected error occurred. Please try again.");
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {apiError && (
                <div className="bg-rose-50 border border-rose-200 text-rose-700 px-6 py-4 rounded-2xl text-sm">
                    {apiError}
                </div>
            )}

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
                        className={`w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900 ${errors.firstName ? "ring-2 ring-rose-300" : ""
                            }`}
                        placeholder="John"
                    />
                    {errors.firstName && (
                        <span className="text-rose-600 text-xs">{errors.firstName}</span>
                    )}
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
                        className={`w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900 ${errors.lastName ? "ring-2 ring-rose-300" : ""
                            }`}
                        placeholder="Doe"
                    />
                    {errors.lastName && (
                        <span className="text-rose-600 text-xs">{errors.lastName}</span>
                    )}
                </div>
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    Email
                </label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900 ${errors.email ? "ring-2 ring-rose-300" : ""
                        }`}
                    placeholder="john@example.com"
                />
                {errors.email && (
                    <span className="text-rose-600 text-xs">{errors.email}</span>
                )}
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    Business Name (Optional)
                </label>
                <input
                    type="text"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900"
                    placeholder="Acme Healthcare"
                />
            </div>

            <div className="space-y-2">
                <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                    License Number
                </label>
                <input
                    type="text"
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    className={`w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900 ${errors.licenseNumber ? "ring-2 ring-rose-300" : ""
                        }`}
                    placeholder="MD-12345"
                />
                {errors.licenseNumber && (
                    <span className="text-rose-600 text-xs">{errors.licenseNumber}</span>
                )}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                        License Type
                    </label>
                    <select
                        name="licenseType"
                        value={formData.licenseType}
                        onChange={handleChange}
                        className={`w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900 appearance-none ${errors.licenseType ? "ring-2 ring-rose-300" : ""
                            }`}
                    >
                        <option value="">Select type...</option>
                        {licenseTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                                {type.label}
                            </option>
                        ))}
                    </select>
                    {errors.licenseType && (
                        <span className="text-rose-600 text-xs">{errors.licenseType}</span>
                    )}
                </div>

                <div className="space-y-2">
                    <label className="text-[10px] font-bold uppercase tracking-widest text-stone-400">
                        State
                    </label>
                    <select
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className={`w-full bg-stone-50 border-none rounded-2xl py-3 px-4 focus:ring-2 focus:ring-amber-200 outline-none text-stone-900 appearance-none ${errors.state ? "ring-2 ring-rose-300" : ""
                            }`}
                    >
                        <option value="">Select state...</option>
                        {states.map((s) => (
                            <option key={s.value} value={s.value}>
                                {s.label}
                            </option>
                        ))}
                    </select>
                    {errors.state && (
                        <span className="text-rose-600 text-xs">{errors.state}</span>
                    )}
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full py-5 bg-amber-600 text-white rounded-full font-bold text-sm uppercase tracking-widest hover:bg-amber-700 transition-all shadow-lg shadow-amber-100 disabled:opacity-50 disabled:cursor-not-allowed"
            >
                {isSubmitting ? "Submitting..." : "Submit for Verification"}
            </button>
        </form>
    );
}
