import { z } from "zod";

export const registerSchema = z.object({
    firstName: z
        .string()
        .min(1, "First name is required")
        .max(50, "First name must be 50 characters or less"),
    lastName: z
        .string()
        .min(1, "Last name is required")
        .max(50, "Last name must be 50 characters or less"),
    email: z
        .string()
        .min(1, "Email is required")
        .email("Invalid email address"),
    password: z
        .string()
        .min(8, "Password must be at least 8 characters")
        .max(100, "Password must be 100 characters or less"),
    businessName: z
        .string()
        .max(100, "Business name must be 100 characters or less")
        .optional(),
    licenseNumber: z
        .string()
        .min(1, "License number is required")
        .max(50, "License number must be 50 characters or less"),
    licenseType: z
        .string()
        .min(1, "License type is required"),
    state: z
        .string()
        .min(1, "State is required")
        .length(2, "State must be a 2-letter code"),
});

export type RegisterInput = z.infer<typeof registerSchema>;
