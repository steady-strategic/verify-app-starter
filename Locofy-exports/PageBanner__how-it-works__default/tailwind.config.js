/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        white: "#fff",
      },
      spacing: {
        0: "0px",
        5: "20px",
        6: "24px",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
};
