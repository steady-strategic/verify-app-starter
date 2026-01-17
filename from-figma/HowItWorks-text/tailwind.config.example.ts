import type { Config } from "tailwindcss";

/**
 * Example Tailwind configuration for the HowItWorks-text component
 * This shows how to extend your tailwind.config.ts to use design tokens from this Figma design
 */

export const howItWorksThemeExtension: Config["theme"] = {
  extend: {
    // Color tokens from the design
    colors: {
      "how-it-works": {
        "text-primary": "#111928",      // Headings
        "text-secondary": "#374151",    // Body text
        "mindfulness": "#e704e7",       // Magenta accent
        "reappraisal": "#f59e0b",       // Amber accent
        "savoring": "#06b6d4",          // Cyan accent
      },
    },

    // Font configurations
    fontFamily: {
      "inter": ["Inter", "sans-serif"],
    },

    // Spacing tokens
    spacing: {
      "container-gap": "92px",          // Main container vertical gap
      "features-gap": "48px",           // Gap between feature columns
      "feature-gap": "16px",            // Gap between icon and content
      "content-gap": "8px",             // Gap between title and description
    },
  },
};

/**
 * Usage in your main tailwind.config.ts:
 * 
 * import { howItWorksThemeExtension } from '@/from-figma/HowItWorks-text/tailwind.config.example';
 * 
 * export default {
 *   theme: {
 *     extend: {
 *       ...howItWorksThemeExtension.extend,
 *     },
 *   },
 * };
 */
