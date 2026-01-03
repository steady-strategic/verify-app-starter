import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./components/**/*.{js,ts,jsx,tsx,mdx}",
        "./app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            colors: {
                // Warm cream background from AIStudio
                cream: "#fefaf6",
            },
            fontFamily: {
                sans: ["Inter", "sans-serif"],
                serif: ["Playfair Display", "serif"],
            },
            animation: {
                "morph": "morph-bg 15s ease infinite",
                "morph-alt": "morph-bg-alt 18s ease infinite",
                "vibrant-morph": "vibrant-morph 15s infinite ease-in-out",
                "vibrant-morph-alt": "vibrant-morph-alt 18s infinite ease-in-out",
            },
            keyframes: {
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
            },
        },
    },
    plugins: [],
};

export default config;
