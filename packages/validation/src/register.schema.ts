import { z } from "zod";

// Valid license type codes (abbreviated)
const VALID_LICENSE_TYPES = ["LMFT", "LCSW", "LPCC", "LPC", "LMHC", "PsyD", "PhD", "MD"] as const;

// Valid state names (full names)
const VALID_STATES = [
    "Alabama", "Alaska", "Arizona", "Arkansas", "California", "Colorado",
    "Connecticut", "Delaware", "Florida", "Georgia", "Hawaii", "Idaho",
    "Illinois", "Indiana", "Iowa", "Kansas", "Kentucky", "Louisiana",
    "Maine", "Maryland", "Massachusetts", "Michigan", "Minnesota",
    "Mississippi", "Missouri", "Montana", "Nebraska", "Nevada",
    "New Hampshire", "New Jersey", "New Mexico", "New York",
    "North Carolina", "North Dakota", "Ohio", "Oklahoma", "Oregon",
    "Pennsylvania", "Rhode Island", "South Carolina", "South Dakota",
    "Tennessee", "Texas", "Utah", "Vermont", "Virginia", "Washington",
    "West Virginia", "Wisconsin", "Wyoming", "District of Columbia"
] as const;

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
    licenseType: z.enum(VALID_LICENSE_TYPES, {
        errorMap: () => ({ message: "Please select a valid license type" })
    }),
    state: z.enum(VALID_STATES, {
        errorMap: () => ({ message: "Please select a valid state" })
    }),
});

export type RegisterInput = z.infer<typeof registerSchema>;
