import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./components/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
      },
      colors: {
        "text-primary": "#111928",
        "text-secondary": "#374151",
        "border-light": "#e5e7eb",
        "icon-magenta": "#e704e7",
      },
      borderRadius: {
        "lg-custom": "20px",
      },
      gap: {
        "content": "64px",
        "section": "32px",
        "list": "16px",
      },
    },
  },
};

export default config;
