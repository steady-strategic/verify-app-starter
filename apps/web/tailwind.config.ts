import type { Config } from "tailwindcss";
import flowbiteReact from "flowbite-react/plugin/tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
        ".flowbite-react/class-list.json"
    ],
    theme: {
        extend: {
            colors: {
                // Existing cream color
                cream: "#fefaf6",

                // Figma Color Palette - Grays
                "colors-gray-200": "var(--colors-gray-200)",
                "colors-gray-500": "var(--colors-gray-500)",
                "colors-gray-700": "var(--colors-gray-700)",
                "colors-gray-800": "var(--colors-gray-800)",
                "colors-gray-900": "var(--colors-gray-900)",

                // Figma Color Palette - Green
                "colors-green-100": "var(--colors-green-100)",

                // Figma Color Palette - White
                "colors-white": "var(--colors-white)",

                // Figma Primary Colors
                "primary-1": "var(--primary-1)",
                "primary-2": "var(--primary-2)",
                "primary-3": "var(--primary-3)",
                "primary-4": "var(--primary-4)",
                "primary-5": "var(--primary-5)",
                "primary-11": "var(--primary-11)",

                // Figma Paragraph Color
                "paragraph": "var(--variable-collection-paragraph)",
            },
            fontFamily: {
                // Existing fonts
                sans: ["Inter", "sans-serif"],
                serif: ["Playfair Display", "serif"],

                // Figma Typography Families
                "content-header-1": "var(--content-header-1-font-family)",
                "content-header-2": "var(--content-header-2-font-family)",
                "HERO-headers": "var(--HERO-headers-font-family)",
                "paragraph": "var(--paragraph-font-family)",
                "title": "var(--title-font-family)",
                "text-base-font-normal": "var(--text-base-font-normal-font-family)",
                "text-sm-font-medium": "var(--text-sm-font-medium-font-family)",
                "text-xl-font-normal": "var(--text-xl-font-normal-font-family)",
                "text-xs-font-medium": "var(--text-xs-font-medium-font-family)",
            },
            boxShadow: {
                "elevation-1": "var(--elevation-1)",
            },
            borderRadius: {
                "figma-full": "var(--border-radius-rounded-full)",
                "figma-lg": "var(--border-radius-rounded-lg)",
                "figma-md": "var(--border-radius-rounded-md)",
            },
            spacing: {
                "figma-0": "var(--spacing-0)",
                "figma-0.5": "var(--spacing-0-5)",
                "figma-1": "var(--spacing-1)",
                "figma-1.5": "var(--spacing-1-5)",
                "figma-2": "var(--spacing-2)",
                "figma-2.5": "var(--spacing-2-5)",
                "figma-3": "var(--spacing-3)",
                "figma-3.5": "var(--spacing-3-5)",
                "figma-4": "var(--spacing-4)",
                "figma-5": "var(--spacing-5)",
                "figma-6": "var(--spacing-6)",
                "figma-7": "var(--spacing-7)",
                "figma-8": "var(--spacing-8)",
                "figma-12": "var(--spacing-12)",
                "figma-16": "var(--spacing-16)",
                "figma-24": "var(--spacing-24)",
            },
            animation: {
                // Existing animations
                "morph": "morph-bg 15s ease infinite",
                "morph-alt": "morph-bg-alt 18s ease infinite",
                "vibrant-morph": "vibrant-morph 15s infinite ease-in-out",
                "vibrant-morph-alt": "vibrant-morph-alt 18s infinite ease-in-out",

                // Figma animations
                "fade-in": "fade-in 1s ease forwards",
                "fade-up": "fade-up 1s ease forwards",
                "marquee": "marquee var(--duration) infinite linear",
                "marquee-vertical": "marquee-vertical var(--duration) linear infinite",
                "shimmer": "shimmer 8s infinite",
                "spin": "spin 1s linear infinite",
            },
            keyframes: {
                // Existing keyframes
                "morph-bg": {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                "morph-bg-alt": {
                    "0%, 100%": { backgroundPosition: "0% 50%" },
                    "50%": { backgroundPosition: "100% 50%" },
                },
                "vibrant-morph": {
                    "0%, 100%": { transform: "translate(100px, 100px) scale(1) rotate(0deg)" },
                    "33%": { transform: "translate(105px, 95px) scale(1.08) rotate(120deg)" },
                    "66%": { transform: "translate(95px, 105px) scale(0.95) rotate(240deg)" },
                },
                "vibrant-morph-alt": {
                    "0%, 100%": { transform: "translate(100px, 100px) scale(1) rotate(360deg)" },
                    "33%": { transform: "translate(95px, 105px) scale(1.05) rotate(240deg)" },
                    "66%": { transform: "translate(105px, 98px) scale(0.92) rotate(120deg)" },
                },

                // Figma keyframes (defined in globals.css, referenced here)
                "spin": {
                    "to": { transform: "rotate(1turn)" },
                },
                "fade-in": {
                    "0%": { opacity: "0", transform: "translateY(-10px)" },
                    "100%": { opacity: "1", transform: "none" },
                },
                "fade-up": {
                    "0%": { opacity: "0", transform: "translateY(20px)" },
                    "100%": { opacity: "1", transform: "none" },
                },
                "shimmer": {
                    "0%, 90%, 100%": { backgroundPosition: "calc(-100% - var(--shimmer-width)) 0" },
                    "30%, 60%": { backgroundPosition: "calc(100% + var(--shimmer-width)) 0" },
                },
                "marquee": {
                    "0%": { transform: "translate(0)" },
                    "100%": { transform: "translateX(calc(-100% - var(--gap)))" },
                },
                "marquee-vertical": {
                    "0%": { transform: "translateY(0)" },
                    "100%": { transform: "translateY(calc(-100% - var(--gap)))" },
                },
            },
        },
    },
    plugins: [flowbiteReact],
};

export default config;