/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        "gray-900": "#111928",
        "gray-200": "#e5e7eb",
        "gray-700": "#374151",
        "gray-800": "#1f2a37",
        "gray-9001": "#111928",
        "green-100": "#def7ec",
        "gray-500": "#6b7280",
        white1: "#fff",
        "primary-1": "#d80ada",
        "gray-2001": "#e5e7eb",
        "primary-5": "#fff",
      },
      spacing: {
        0: "0px",
        1: "4px",
        2: "8px",
        4: "16px",
        5: "20px",
        6: "24px",
        8: "32px",
        12: "48px",
        24: "96px",
        25: "10px",
        35: "14px",
      },
      borderRadius: {
        "rounded-full": "9999px",
        "rounded-lg": "8px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
