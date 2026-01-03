export type LicenseTypeOption = {
    value: string;       // Abbreviated code (LMFT, LCSW, etc.)
    label: string;       // Full display with description
    description: string; // Full title
};

export const licenseTypes: LicenseTypeOption[] = [
    {
        value: "LMFT",
        label: "LMFT - Licensed Marriage & Family Therapist",
        description: "Licensed Marriage & Family Therapist"
    },
    {
        value: "LCSW",
        label: "LCSW - Licensed Clinical Social Worker",
        description: "Licensed Clinical Social Worker"
    },
    {
        value: "LPCC",
        label: "LPCC - Licensed Professional Clinical Counselor",
        description: "Licensed Professional Clinical Counselor"
    },
    {
        value: "LPC",
        label: "LPC - Licensed Professional Counselor",
        description: "Licensed Professional Counselor"
    },
    {
        value: "LMHC",
        label: "LMHC - Licensed Mental Health Counselor",
        description: "Licensed Mental Health Counselor"
    },
    {
        value: "PsyD",
        label: "PsyD - Doctor of Psychology",
        description: "Doctor of Psychology"
    },
    {
        value: "PhD",
        label: "PhD - Doctor of Philosophy (Psychology)",
        description: "Doctor of Philosophy (Psychology)"
    },
    {
        value: "MD",
        label: "MD - Psychiatrist",
        description: "Psychiatrist"
    },
];
