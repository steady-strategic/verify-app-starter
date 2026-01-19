# PageBanner-Research Design Specifications

## Overview
Hero banner section featuring research-focused content with a colorful gradient background and brain illustration.

## Layout Structure
```
┌─────────────────────────────────────────────┐
│                                             │
│  Research                    [Brain Image]  │
│  MORE™ Delivers Powerful     [With Glow]    │
│  Clinical Results            Effect         │
│  Lorem iPsum                                │
│                                             │
└─────────────────────────────────────────────┘
```

## Dimensions
- **Container Width:** 1451px
- **Container Height:** 685px
- **Border Radius:** 24px (card styling)

## Typography

### Title ("Research")
- **Font Family:** Inter, sans-serif
- **Font Size:** 46px
- **Font Weight:** 800 (Bold)
- **Letter Spacing:** -0.92px
- **Color:** #ffffff (White)

### Subtitle ("MORE™ Delivers Powerful Clinical Results\n\nLorem iPsum")
- **Font Family:** Inter, sans-serif
- **Font Size:** 28px
- **Font Weight:** 700 (Bold)
- **Letter Spacing:** -0.56px
- **Line Height:** 35px
- **Color:** #ffffff (White)

## Color Palette

| Color | Hex | Usage |
|-------|-----|-------|
| Text Primary | #ffffff | All text content |
| Background Start | #7c3aed | Purple gradient (left side) |
| Background End | #1a0a2e | Dark purple/black (right side) |

## Spacing

| Element | Value |
|---------|-------|
| Gap (Title to Subtitle) | 24px |
| Left Padding | 100px |
| Top Padding | 171px |

## Assets

1. **background-gradient.png** - Purple gradient background image
2. **brain-illustration.png** - Glowing brain illustration (mask applied)

## Implementation Notes

- Background uses a full-bleed image with `background-size: cover`
- Brain illustration uses `object-fit: cover` for proper scaling
- The brain image has a mask applied (rounded corners visible in design)
- White text provides high contrast against the dark gradient
- Google Fonts: Inter (weights 400, 500, 700, 800)

## Font Source
```
https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800
```

## Responsive Behavior
- Currently designed for desktop (1451px width)
- Consider breakpoints for tablet/mobile when implementing
