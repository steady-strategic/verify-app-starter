# Blog Feed Component Design Specifications

## Overview
The Blog Feed component displays a vertical list of blog post cards with an image mockup on the left and content on the right. Each card follows a consistent layout pattern.

## Design Tokens

### Colors
- **Primary Dark**: `#111928` - Used for text, heading, and button text
- **Secondary Dark**: `#1f2a37` - Used for SVG icon backgrounds
- **Text Secondary**: `#6b7280` - Used for body text
- **Border**: `#e5e7eb` - Used for button borders

### Typography
- **Title**: 28px, Weight 700, Letter Spacing -0.56px, Line Height 35px
- **Body**: 18px, Weight 400, Line Height 27px
- **Button**: 14px, Weight 500
- **Font Family**: Inter, sans-serif

### Spacing
- **Container Gap**: 64px (vertical gap between rows)
- **Row Gap**: 80px (horizontal gap between image and content)
- **Column Gap**: 24px (vertical gap within content column)
- **Button Gap**: 8px (gap between text and icon in button)

### Border Radius
- **Blog Large**: 8px (applied to mockup boxes and button containers)

### Shadows
- **Card Shadow**: `0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px rgba(0, 0, 0, 0.10)`

## Layout Structure

```
Container (flex column, gap: 64px)
├── Row 1 (flex row, gap: 80px, align-items: center)
│   ├── Mockup Box (dark background, rounded, shadow)
│   └── Content Column (gap: 24px)
│       ├── Title
│       ├── Body Text
│       └── Button Container (flex row, gap: 8px, border)
│           ├── "Read more" Text
│           └── Arrow SVG Icon
├── Row 2
│   ├── Mockup Box
│   └── Content Column
│       └── ...
└── ... (repeats for 5 rows total)
```

## Component Dimensions

### Image Mockups
- **Width**: 540px
- **Height**: 407px
- **Border Radius**: 8px

### Titles
- **Width**: 640px
- **Height**: 70px

### Body Text
- **Width**: 640px
- **Height**: 81px

### Buttons
- **Width**: 134px
- **Height**: 41px

## Assets
- Arrow icons (SVG): 5 different arrow icons
  - arrow-1.svg
  - arrow-2.svg
  - arrow-3.svg
  - arrow-4.svg
  - arrow-5.svg

## Notes
- All mockup boxes have the same dark background color
- All buttons have the same border and styling
- SVG icons have a dark secondary background applied
- Text maintains consistent color scheme across all rows
- The component is responsive with flexbox layout
