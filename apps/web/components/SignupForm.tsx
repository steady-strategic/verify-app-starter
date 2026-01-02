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
        // Clear error for this field when user starts typing
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

        // Client-side validation
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

            // Success - redirect to pending page
            router.push("/pending");
        } catch (error) {
            setApiError("An unexpected error occurred. Please try again.");
            setIsSubmitting(false);
        }
    };

    return (
        <form className="form" onSubmit={handleSubmit}>
            {apiError && <div className="api-error">{apiError}</div>}

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        className={errors.firstName ? "error" : ""}
                        placeholder="John"
                    />
                    {errors.firstName && (
                        <span className="error-message">{errors.firstName}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="lastName">Last Name</label>
                    <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        className={errors.lastName ? "error" : ""}
                        placeholder="Doe"
                    />
                    {errors.lastName && (
                        <span className="error-message">{errors.lastName}</span>
                    )}
                </div>
            </div>

            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={errors.email ? "error" : ""}
                    placeholder="john@example.com"
                />
                {errors.email && (
                    <span className="error-message">{errors.email}</span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="businessName">Business Name (Optional)</label>
                <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    value={formData.businessName}
                    onChange={handleChange}
                    className={errors.businessName ? "error" : ""}
                    placeholder="Acme Healthcare"
                />
                {errors.businessName && (
                    <span className="error-message">{errors.businessName}</span>
                )}
            </div>

            <div className="form-group">
                <label htmlFor="licenseNumber">License Number</label>
                <input
                    type="text"
                    id="licenseNumber"
                    name="licenseNumber"
                    value={formData.licenseNumber}
                    onChange={handleChange}
                    className={errors.licenseNumber ? "error" : ""}
                    placeholder="MD-12345"
                />
                {errors.licenseNumber && (
                    <span className="error-message">{errors.licenseNumber}</span>
                )}
            </div>

            <div className="form-row">
                <div className="form-group">
                    <label htmlFor="licenseType">License Type</label>
                    <select
                        id="licenseType"
                        name="licenseType"
                        value={formData.licenseType}
                        onChange={handleChange}
                        className={errors.licenseType ? "error" : ""}
                    >
                        <option value="">Select type...</option>
                        {licenseTypes.map((type) => (
                            <option key={type.value} value={type.value}>
                                {type.label}
                            </option>
                        ))}
                    </select>
                    {errors.licenseType && (
                        <span className="error-message">{errors.licenseType}</span>
                    )}
                </div>

                <div className="form-group">
                    <label htmlFor="state">State</label>
                    <select
                        id="state"
                        name="state"
                        value={formData.state}
                        onChange={handleChange}
                        className={errors.state ? "error" : ""}
                    >
                        <option value="">Select state...</option>
                        {states.map((s) => (
                            <option key={s.value} value={s.value}>
                                {s.label}
                            </option>
                        ))}
                    </select>
                    {errors.state && (
                        <span className="error-message">{errors.state}</span>
                    )}
                </div>
            </div>

            <button
                type="submit"
                className="submit-button"
                disabled={isSubmitting}
            >
                {isSubmitting ? "Submitting..." : "Submit for Verification"}
            </button>
        </form>
    );
}
