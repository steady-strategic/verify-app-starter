/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand colors
        magenta: "#FF00FF",
        "gray-dark": "#111928",
        "gray-main": "#374151",
        "gray-placeholder": "#6b7280",
        "gray-border": "#9ca3af",
        // Background gradient colors
        "purple-dark": "#6D28D9",
        "purple-light": "#A855F7",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      fontSize: {
        // Custom font sizes from design
        "title-xl": ["46px", { fontWeight: "800", letterSpacing: "-0.92px" }],
        "title-lg": ["20px", { fontWeight: "600", letterSpacing: "-0.40px", lineHeight: "28px" }],
        "title-md": ["18px", { fontWeight: "700" }],
        "body-md": ["18px", { fontWeight: "400" }],
        "body-sm": ["16px", { fontWeight: "400" }],
      },
      spacing: {
        // Custom spacing from design
        "gap-lg": "24px",
        "gap-sm": "8px",
      },
      backgroundImage: {
        "gradient-purple": "linear-gradient(135deg, #6D28D9 0%, #A855F7 100%)",
      },
    },
  },
  plugins: [],
};
