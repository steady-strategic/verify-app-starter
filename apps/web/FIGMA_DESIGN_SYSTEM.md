# Figma Design System - Usage Guide

This document explains how to use the Figma design tokens in your components.

## Colors

### Primary Colors
```tsx
// Magenta/Purple gradient colors
className="bg-primary-1"  // rgba(198, 14, 200, 1) - Bright magenta
className="bg-primary-2"  // rgba(103, 11, 108, 1) - Dark purple
className="bg-primary-11" // rgba(168, 89, 242, 1) - Purple

// Accent colors
className="bg-primary-3"  // rgba(72, 216, 253, 1) - Cyan/Blue
className="bg-primary-4"  // rgba(255, 183, 38, 1) - Yellow/Gold
className="bg-primary-5"  // rgba(255, 255, 255, 1) - White
```

### Gray Scale
```tsx
className="bg-colors-gray-200" // Light gray
className="bg-colors-gray-500" // Medium gray
className="bg-colors-gray-700" // Dark gray
className="bg-colors-gray-800" // Darker gray
className="bg-colors-gray-900" // Almost black
```

### Text Colors
```tsx
className="text-paragraph" // rgba(69, 74, 85, 1) - Body text color
```

## Typography

### Font Families
```tsx
// Hero headers (46px, weight 800)
className="font-HERO-headers"

// Content headers
className="font-content-header-1" // 38px, weight 300
className="font-content-header-2" // 28px, weight 600

// Title (20px, weight 600)
className="font-title"

// Paragraph (18px, weight 400)
className="font-paragraph"
```

### Using Typography with CSS Variables
For complete typography styles including size, weight, spacing:

```tsx
// Hero Header
<h1 style={{
  fontFamily: 'var(--HERO-headers-font-family)',
  fontSize: 'var(--HERO-headers-font-size)',
  fontWeight: 'var(--HERO-headers-font-weight)',
  letterSpacing: 'var(--HERO-headers-letter-spacing)',
  lineHeight: 'var(--HERO-headers-line-height)',
}}>
  Your Hero Text
</h1>

// Or use a custom class in your component CSS
.hero-text {
  font-family: var(--HERO-headers-font-family);
  font-size: var(--HERO-headers-font-size);
  font-weight: var(--HERO-headers-font-weight);
  letter-spacing: var(--HERO-headers-letter-spacing);
  line-height: var(--HERO-headers-line-height);
}
```

## Spacing

Use Figma spacing tokens with the `figma-` prefix:

```tsx
className="p-figma-4"   // 16px padding
className="m-figma-6"   // 24px margin
className="gap-figma-3" // 12px gap
```

Available spacing values:
- `figma-0` → 0px
- `figma-0.5` → 2px
- `figma-1` → 4px
- `figma-2` → 8px
- `figma-3` → 12px
- `figma-4` → 16px
- `figma-5` → 20px
- `figma-6` → 24px
- `figma-8` → 32px
- `figma-12` → 48px
- `figma-16` → 64px
- `figma-24` → 96px

## Border Radius

```tsx
className="rounded-figma-md"   // 6px
className="rounded-figma-lg"   // 8px
className="rounded-figma-full" // 9999px (fully rounded)
```

## Shadows

```tsx
className="shadow-elevation-1" // Subtle shadow from Figma
```

## Animations

### Fade Animations
```tsx
className="animate-fade-in"  // Fade in from top
className="animate-fade-up"  // Fade up from bottom
```

### Marquee Animations
```tsx
// Horizontal scrolling
<div className="animate-marquee" style={{ '--duration': '20s' }}>
  Content
</div>

// Vertical scrolling
<div className="animate-marquee-vertical" style={{ '--duration': '20s' }}>
  Content
</div>
```

### Other Animations
```tsx
className="animate-shimmer" // Shimmer effect
className="animate-spin"    // Spinning animation
```

## Example Component

Here's a complete example using Figma design tokens:

```tsx
export default function HeroSection() {
  return (
    <section className="bg-primary-5 py-figma-16">
      <div className="container mx-auto px-figma-6">
        <h1 
          className="font-HERO-headers text-colors-gray-900 mb-figma-4 animate-fade-in"
          style={{
            fontSize: 'var(--HERO-headers-font-size)',
            fontWeight: 'var(--HERO-headers-font-weight)',
            letterSpacing: 'var(--HERO-headers-letter-spacing)',
            lineHeight: 'var(--HERO-headers-line-height)',
          }}
        >
          Welcome to MORE
        </h1>
        
        <p 
          className="font-paragraph text-paragraph mb-figma-8"
          style={{
            fontSize: 'var(--paragraph-font-size)',
            lineHeight: 'var(--paragraph-line-height)',
          }}
        >
          Evidence-based mindfulness for recovery
        </p>
        
        <button className="bg-primary-1 text-white px-figma-6 py-figma-3 rounded-figma-lg shadow-elevation-1 hover:bg-primary-2 transition-colors">
          Get Started
        </button>
      </div>
    </section>
  );
}
```

## Direct CSS Variable Access

You can also use CSS variables directly in your styles:

```tsx
<div style={{
  backgroundColor: 'var(--primary-1)',
  padding: 'var(--spacing-6)',
  borderRadius: 'var(--border-radius-rounded-lg)',
  boxShadow: 'var(--elevation-1)',
}}>
  Content
</div>
```

## Color Reference

### Primary Palette
- **primary-1**: `#C60EC8` - Bright Magenta (main brand color)
- **primary-2**: `#670B6C` - Dark Purple (hover/accent)
- **primary-3**: `#48D8FD` - Cyan (accent)
- **primary-4**: `#FFB726` - Yellow/Gold (accent)
- **primary-11**: `#A859F2` - Purple (gradient)

### Usage Recommendations
- Use `primary-1` for primary CTAs and brand elements
- Use `primary-2` for hover states and darker accents
- Use `primary-3` and `primary-4` for highlights and secondary elements
- Use gray scale for text and backgrounds
