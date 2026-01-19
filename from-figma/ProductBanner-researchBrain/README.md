# ProductBanner-researchBrain Component

This directory contains all design assets and specifications for the ProductBanner-researchBrain hero section component.

## Files Included

### Design Documentation
- **DESIGN_SPECS.md** - Complete design specifications including layout, typography, colors, and spacing
- **design-tokens.css** - CSS custom properties (variables) for all design tokens
- **tailwind-styles.css** - Tailwind CSS utility classes and responsive styles
- **tailwind.config.extension.js** - Tailwind config extensions ready to merge

### Assets
- **background-gradient.png** - Purple gradient background image (1440×680px)
- **brain-illustration.png** - Glowing brain illustration with rounded corners

### Component Example
- **ProductBannerResearchBrain.component.example.tsx** - Example React/Next.js component

## Quick Start

### 1. Copy Assets to Your Project
```bash
cp background-gradient.png YOUR_PROJECT/public/images/banners/research-background.png
cp brain-illustration.png YOUR_PROJECT/public/images/banners/research-brain.png
```

### 2. Add Tailwind Configuration
Merge `tailwind.config.extension.js` into your main `tailwind.config.js`:

```javascript
module.exports = {
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'banner-primary': '#ffffff',
        'banner-bg-start': '#7c3aed',
        'banner-bg-end': '#1a0a2e',
      },
      // ... rest of the extensions
    },
  },
};
```

### 3. Add Styles to Your Project
Copy the styles from `tailwind-styles.css` to your global CSS or component stylesheet.

### 4. Create the Component
Use `ProductBannerResearchBrain.component.example.tsx` as a template to create your component.

## Design Details

### Dimensions
- **Width:** 1440px (desktop)
- **Height:** 680px
- **Border Radius:** 24px

### Typography
- **Font:** Inter (weights: 400, 500, 700, 800)
- **Title:** 46px, weight 800, letter-spacing -0.92px
- **Subtitle:** 28px, weight 700, letter-spacing -0.56px, line-height 35px

### Color Palette
- **Text:** #ffffff (white)
- **Background Gradient:** #7c3aed to #1a0a2e (purple to dark)

### Spacing
- **Container Padding:** 20px
- **Left Padding:** 100px
- **Top Padding:** 171px
- **Gap Between Title & Subtitle:** 24px

## Font Requirements

The component uses the Inter font family from Google Fonts. Make sure to import it in your project:

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800" rel="stylesheet">
```

Or in your CSS:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800');
```

## Responsive Design

The included `tailwind-styles.css` includes responsive breakpoints:
- **Desktop (≥1024px):** Full design as shown
- **Tablet (<1024px):** Adjusted layout with stacked content
- **Mobile (<640px):** Smaller font sizes and adjusted spacing

## Integration Notes

- The background image uses `background-size: cover` for proper scaling
- The brain illustration uses `object-fit: cover` to maintain aspect ratio
- The design is optimized for dark mode with high-contrast white text
- Consider lazy loading the images for better performance

## Font Source
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800
