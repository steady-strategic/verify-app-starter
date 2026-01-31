# PageBanner-directory Design Export

This folder contains the complete design specifications and assets for the **PageBanner-directory** component from Figma.

## Contents

### Assets
- **dropdown-chevron.svg** - Dropdown arrow icon (18×12px)
- **search-icon.svg** - Search icon (16×16px)
- **page-banner-bg.png** - Background image with dark purple gradient

### Documentation
- **design-specs.md** - Complete design specifications with measurements and layout details
- **design-tokens.css** - CSS custom properties (variables) for all design tokens
- **tailwind-config-snippet.js** - Tailwind v3 configuration snippet
- **component-reference.tsx** - React/NextJS component reference implementation

## Quick Reference

### Component Name
**Find a Clinician Banner**

### Purpose
Hero banner for the clinician directory page that allows users to select their state and search for available clinicians.

### Key Dimensions
- Title: 50px, 800 weight
- Description: 18px, 400 weight
- Form container: 469px × 72px
- Button: 127px × 52px

### Key Colors
- Primary Button: `#d80ada` (magenta)
- Text: `#ffffff` (white)
- Text Dark (dropdown): `#111928`
- Icon Color: `#6f6f6f`

### Key Spacing
- Main content gap: 64px
- Section gap: 24px
- Form gap: 10px
- Button gap: 8px

## Using This Export

1. **Copy Assets**: Place SVG files in your project's assets folder
2. **Apply Tokens**: Use the design tokens from `design-tokens.css` or add to your Tailwind config
3. **Reference Implementation**: Use `component-reference.tsx` as a starting point for your component
4. **Font**: Import Inter from Google Fonts (weights: 400, 500, 700, 800)

## Related Components
- PageBanner (main page banner component)
- PageBanner-Clinicians (clinicians page banner)
- PageBanner-Research (research page banner)

## Export Date
Generated: 2026-01-31
