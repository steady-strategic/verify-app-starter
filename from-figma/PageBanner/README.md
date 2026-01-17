# PageBanner Component

## Overview
The PageBanner is a hero section component featuring a "How it Works" section with a split layout design. It displays an informational heading and description on the left with a brain illustration on the right.

## Design Details

### Dimensions
- Width: 1440px
- Height: 680px

### Assets
- `background.png` - Gradient background image
- `brain-image.jpg` - Brain illustration with neural connections

### Typography
- **Title**
  - Font: Inter
  - Size: 46px
  - Weight: 800
  - Letter Spacing: -0.92px
  - Color: #ffffff

- **Description**
  - Font: Inter
  - Size: 18px
  - Weight: 400
  - Line Height: 27px
  - Color: #ffffff

### Colors
- Text: #ffffff (white)
- Background: Gradient from #6b21a8 (purple) to #0f172a (dark navy)

### Spacing
- Content Gap: 24px
- Left Padding: 80px

## File Structure
```
PageBanner/
├── background.png (background image)
├── brain-image.jpg (mask group image)
├── design-tokens.json (design token configuration)
├── tailwind.config.js (Tailwind configuration)
├── tailwind.css (component styles)
└── README.md (this file)
```

## Usage
Import the Tailwind CSS and use the provided class names:
- `.page-banner` - Main container
- `.page-banner__title` - Title styling
- `.page-banner__description` - Description text styling
- `.page-banner__image` - Brain image styling

## Notes
- The component uses a responsive layout with absolute positioning for the image
- Fonts are imported from Google Fonts (Inter)
- The background uses a linear gradient with cover background size
