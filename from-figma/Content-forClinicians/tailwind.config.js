module.exports = {
  theme: {
    extend: {
      colors: {
        // Design token colors extracted from Content-forClinicians section
        "text-primary": "#111928", // Main heading and feature text color
        "text-secondary": "#374151", // Subheading color
        "text-muted": "#6b7280", // Muted text (if needed)
        "border-light": "#e5e7eb", // Separator line color
      },
      fontFamily: {
        // Typography from the design
        sans: ["Inter", "sans-serif"],
      },
      fontSize: {
        // Custom font sizes for this section
        "heading-lg": ["28px", { fontWeight: "700", letterSpacing: "-0.56px", lineHeight: "1" }],
        "heading-md": ["20px", { fontWeight: "600", letterSpacing: "-0.40px", lineHeight: "28px" }],
        "body-lg": ["18px", { fontWeight: "400" }],
        "body-base": ["18px", { fontWeight: "400" }],
      },
      gap: {
        // Spacing tokens from the design
        "content": "32px", // Gap between image and content
        "section": "16px", // Gap between heading and description
        "list": "16px", // Gap between features
        "icon": "10px", // Gap between icon and text
      },
      borderRadius: {
        // Image border radius
        "image": "12px",
      },
      spacing: {
        // Custom spacing for layout
        "section-h": "32px", // Vertical spacing
        "section-v": "64px", // Horizontal spacing between image and content
      },
    },
  },
};
