# Video Component

## Overview
The Video section is a prominent content area featuring "See MORE in action" messaging with a video/action context. It includes a background image, decorative SVG elements, and a play icon overlay.

## Design Details

### Dimensions
- Width: 1440px
- Height: 806px

### Assets
- `background.png` - Main video/content background image
- `play-icon.svg` - Vector play icon overlay
- `polygon.svg` - Decorative polygon shape with gradient

### Typography
- **Title**
  - Font: Inter
  - Size: 46px
  - Weight: 800
  - Letter Spacing: -0.92px
  - Color: #ffffff

- **Description**
  - Font: Inter
  - Size: 16px
  - Weight: 500
  - Line Height: 24px
  - Color: #ffffff

### Colors
- Text: #ffffff (white)
- Background: Gradient from #6b21a8 (purple) to #0f172a (dark navy)
- Accent Gradient: From rgba(198,14,200,1) to rgba(72,216,253,1)
- Light Bar: #fafafa

### Spacing
- Content Gap: 16px

## File Structure
```
Video/
├── background.png (background image)
├── play-icon.svg (play icon SVG)
├── polygon.svg (polygon shape SVG)
├── design-tokens.json (design token configuration)
├── tailwind.config.js (Tailwind configuration)
├── tailwind.css (component styles)
└── README.md (this file)
```

## Usage
Import the Tailwind CSS and use the provided class names:
- `.video-section` - Main container
- `.video-section__title` - Title styling
- `.video-section__description` - Description text styling
- `.video-section__play-icon` - Play icon positioning
- `.video-section__polygon` - Polygon shape styling
- `.video-section__bottom-bar` - Light background bar at bottom

## Notes
- The component uses overlay positioning for SVG elements
- Fonts are imported from Google Fonts (Inter)
- Includes gradient background and decorative accent gradient
- The bottom bar serves as a visual separator with light background color
