# ContactHero Component

A React component for a contact form hero section with a gradient background image.

## Files

- **ContactHero.tsx** - Main React component
- **tailwind.config.js** - Tailwind CSS configuration with custom theme
- **postcss.config.js** - PostCSS configuration
- **globals.css** - Global styles and font imports
- **contact-hero-bg.png** - Background image asset

## Features

- Responsive contact form with fields for:
  - First name and last name
  - Email
  - Phone number
  - Message textarea
- Purple gradient background image
- White form card with shadow and rounded borders
- Submit button with hover state
- Form inputs with proper labels and placeholders

## Usage

```tsx
import ContactHero from '@/from-figma/ContactHero/ContactHero';

export default function Page() {
  return <ContactHero />;
}
```

## Design Tokens

The component uses the following design tokens:

### Colors
- Primary: `#d946ef` (Magenta)
- Primary Dark: `#c026d3` (Dark Magenta)
- Text Primary: `#111928` (Dark Gray)
- Text Secondary: `#6b7280` (Medium Gray)
- Text Light: `#9ca3af` (Light Gray)
- Border: `#e5e7eb`
- Border Light: `#f4f4f4`

### Typography
- Font Family: Inter, sans-serif
- Heading Large: 36px, 800 weight, -0.36px tracking
- Heading Small: 20px, 400 weight, 30px line-height
- Label: 14px, 500 weight
- Body: 14px, 400 weight
- Button: 16px, 700 weight

### Spacing
- 3xs: 8px
- 2xs: 16px
- xs: 24px
- sm: 32px
- md: 48px

### Border Radius
- XL: 24px

## Styling

The component uses Tailwind CSS with custom theme extensions. All styling is defined inline with Tailwind utility classes and custom color tokens for consistency.

## Form Submission

The component includes a `handleSubmit` function that can be extended to handle form submission logic, validation, and API calls.
