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
                // Fixed Palette from Locofy/Figma
                white: "#ffffff",
                "gray-900": "#111928",
                "gray-700": "#374151",
                "gray-500": "#6b7280",
                "gray-200": "#e5e7eb",
                "primary-1": "#d80ada",
                "primary-2": "#670b6c",
                "primary-3": "#48d8fd",
                "primary-4": "#ffb726",
                "primary-5": "#ffffff",
                cream: "#fefaf6", // Keep existing cream
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
            },
            spacing: {
                // Common fixed spacings if needed, or rely on arbitrary values for pixel perfection
                "128": "32rem",
            },
        },
    },
    plugins: [flowbiteReact],
};

export default config;