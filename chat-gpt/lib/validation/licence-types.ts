// lib/validation/license-types.ts
import { z } from "zod";

export const LicenseTypeEnum = z.enum([
  "LMFT", // Licensed Marriage & Family Therapist
  "LCSW", // Licensed Clinical Social Worker
  "LPCC", // Licensed Professional Clinical Counselor
  "LPC",  // Licensed Professional Counselor
  "LMHC", // Licensed Mental Health Counselor
  "PsyD", // Doctor of Psychology
  "PhD",  // Doctor of Philosophy (Psychology)
  "MD",   // Psychiatrist
]);

export type LicenseType = z.infer<typeof LicenseTypeEnum>;
