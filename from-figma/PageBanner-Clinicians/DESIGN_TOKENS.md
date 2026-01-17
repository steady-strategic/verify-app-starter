# PageBanner-Clinicians Design Tokens

## Overview
This directory contains the design tokens, styles, and assets extracted from the Figma design for the **PageBanner-Clinicians** component.

## Directory Structure
```
PageBanner-Clinicians/
├── assets/
│   ├── info-icon.svg
│   ├── chevron-down.svg
│   └── background-gradient.png
├── tailwind.config.js
├── tailwind.css
└── DESIGN_TOKENS.md
```

## Design Tokens

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| `--color-magenta` | `#FF00FF` | Brand color, "MORE" text, button background |
| `--color-purple-dark` | `#6D28D9` | Dark purple in gradient background |
| `--color-purple-light` | `#A855F7` | Light purple in gradient background |
| `--color-text-primary` | `#374151` | Main title text |
| `--color-text-dark` | `#111928` | Body text |
| `--color-text-white` | `#ffffff` | Form labels, white text on purple background |
| `--color-text-placeholder` | `#6b7280` | Placeholder text, secondary text |
| `--color-border` | `#9ca3af` | Icon borders and backgrounds |

### Typography
| Token | Value | Details |
|-------|-------|---------|
| Font Family | `Inter, sans-serif` | Primary font for all text |
| Title XL | 46px, weight 800 | Main page title "MORE Institute" |
| Title LG | 20px, weight 600 | Form headline |
| Title MD | 18px, weight 700 | Form labels |
| Body MD | 18px, weight 400 | Label text |
| Body SM | 16px, weight 400 | Placeholder text |

### Spacing
| Token | Value | Usage |
|-------|-------|-------|
| `--spacing-gap-lg` | 24px | Gap between form input groups |
| `--spacing-gap-sm` | 8px | Gap within input field groups |

### Layout
- **Page Layout**: 2-column grid layout
  - Left column: Title and description text
  - Right column: Form with background image
- **Height**: 680px minimum
- **Form padding**: 48px

## Assets

### Icons
1. **info-icon.svg** (12x12px)
   - Used next to "Email" label
   - Color: `#9ca3af` (border/background gray)

2. **chevron-down.svg** (9x5px)
   - Used in dropdown "Topic" field
   - Color: `#6b7280` (placeholder gray)

### Images
1. **background-gradient.png**
   - Purple gradient background for the form section
   - Dimensions: Full width of right column
   - Used as background-image on form container

## Responsive Considerations
The current design is for desktop (1440px width). Consider:
- Stacking columns vertically on mobile
- Adjusting font sizes for smaller screens
- Ensuring form remains accessible on touch devices

## Implementation Notes

### Using Tailwind Classes
```html
<div class="page-banner-clinicians">
  <!-- Left column content -->
  <div>
    <h1 class="page-banner-clinicians__title">MORE Institute</h1>
    <p class="page-banner-clinicians__description">...</p>
  </div>
  
  <!-- Right column with form -->
  <div class="page-banner-clinicians__form">
    <h2 class="page-banner-clinicians__form-title">No commitment today.</h2>
    <!-- Form fields -->
  </div>
</div>
```

### Using CSS Variables
```css
color: var(--color-text-primary);
font-family: var(--font-family);
background-color: var(--color-magenta);
```

### Using Tailwind Config
The `tailwind.config.js` extends the base theme with custom colors and font sizes:
```js
extend: {
  colors: {
    magenta: "#FF00FF",
    "gray-dark": "#111928",
    // ... more colors
  },
  fontSize: {
    "title-xl": ["46px", { fontWeight: "800", letterSpacing: "-0.92px" }],
    // ... more sizes
  }
}
```

## Usage in Your Project

1. **Copy assets to your public folder**:
   ```bash
   cp assets/* /path/to/your/project/public/assets/
   ```

2. **Merge tailwind.config.js** into your project's config (if using Tailwind)

3. **Import or reference the CSS variables** in your components

4. **Use the design token classes** when building the component

## Font Import
The design uses **Inter** font from Google Fonts. Ensure this is imported in your project:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800" rel="stylesheet">
```

Or if using a CSS file:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800');
```

## Next Steps
1. Review and adapt the design tokens to match your project's existing design system
2. Create React/Vue/etc. components using these tokens
3. Test responsive behavior and accessibility
4. Update colors/spacing as needed for brand consistency
