/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
        white1: "#fff",
        "gray-700": "#374151",
        "gray-900": "#111928",
        "gray-9001": "#111928",
      },
      spacing: {
        0: "0px",
        2: "8px",
        4: "16px",
        5: "20px",
        6: "24px",
        12: "48px",
      },
      borderRadius: {
        "rounded-full": "9999px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
