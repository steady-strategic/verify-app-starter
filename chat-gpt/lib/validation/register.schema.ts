// lib/validation/register.schema.ts
import { z } from "zod";
import { LicenseTypeEnum } from "./license-types";
import { USStateEnum } from "./us-states";

export const RegisterSchema = z.object({
    firstName: z
        .string()
        .trim()
        .min(1, "First name is required")
        .max(80),

    lastName: z
        .string()
        .trim()
        .min(1, "Last name is required")
        .max(80),

    email: z
        .string()
        .trim()
        .toLowerCase()
        .email("Invalid email")
        .max(254),

    password: z
        .string()
        .min(10, "Password must be at least 10 characters")
        .max(200)
        .refine((v) => /[A-Za-z]/.test(v) && /\d/.test(v), {
            message: "Password must include at least one letter and one number",
        }),

    businessName: z
        .string()
        .trim()
        .max(140)
        .optional()
        .or(z.literal("").transform(() => undefined)),

    licenseNumber: z
        .string()
        .trim()
        .min(1, "License # is required")
        .max(60),

    // Dropdown → abbreviated code (LMFT, LCSW, etc.)
    type: LicenseTypeEnum,

    // Dropdown → full state name ("California")
    state: USStateEnum,
});

export type RegisterInput = z.infer<typeof RegisterSchema>;
