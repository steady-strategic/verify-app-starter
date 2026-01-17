# DownloadApp2 - Dark Variant

## Overview
The DownloadApp2 is a dark-themed call-to-action section promoting the MORE mobile application. This is a sophisticated dark variant featuring a vibrant purple gradient background with magenta accents. It includes a left content area with heading, description, and feature list, paired with a right side showcasing a gradient phone mockup with download buttons.

## Design Details

### Dimensions
- Full width responsive layout
- Left content area: max 709px
- Phone mockup: 352px width
- Background gradient: 1466px × 724px
- Sound wave background: 1440px × 306px

### Layout Sections
1. **Left Content** - Title, description, features list, and download buttons
2. **Right Content** - Gradient phone mockup with sound wave decorative background

### Assets
- `check-icon.svg` - Magenta checkmarks for feature list
- `apple-icon.svg` - Apple App Store logo
- `google-play-icon.svg` - Google Play store logo
- `phone-mockup.svg` - Phone device mockup with gradient fill
- `background.png` - Dark purple gradient background
- `sound-wave-background.png` - Decorative wave animation overlay

### Typography
- **Title**
  - Font: Inter
  - Size: 64px
  - Weight: 300
  - Letter Spacing: -3.20px
  - Color: #ffffff
  - Note: "MORE" word is weighted 900 and colored #e704e7 (magenta)

- **Body/Description**
  - Font: Inter
  - Size: 20px
  - Weight: 400
  - Line Height: 30px
  - Color: #ffffff

- **Feature Title**
  - Font: Inter
  - Size: 16px
  - Weight: 700
  - Color: #ffffff

- **Download Label**
  - Font: Inter
  - Size: 20px
  - Weight: 400
  - Color: #6b7280

- **Button Text**
  - Small: 12px, weight 400, line-height 12px
  - Large: 14px, weight 700
  - Color: #ffffff

### Colors
- Background Gradient: Linear from #0f0c2e → #3d1f7e → #7b1fa2
- Text Primary: #ffffff (white)
- Text Secondary: #6b7280 (gray)
- Accent Magenta: #e704e7
- Separator: #a859f2 (purple)
- Button Background: #e704e7 (magenta)
- Button Hover: #d603d3 (darker magenta)

### Styling
- Border Radius: 8px (buttons)
- Gap (Large): 32px
- Gap (Medium): 24px
- Gap (Small): 16px
- Gap (Tiny): 10px
- Gap (Button): 8px

## File Structure
```
DownloadApp2/
├── background.png (dark gradient background)
├── check-icon.svg (magenta checkmarks)
├── apple-icon.svg (Apple logo)
├── google-play-icon.svg (Google Play logo)
├── phone-mockup.svg (gradient phone mockup)
├── sound-wave-background.png (wave animation)
├── design-tokens.json (design token configuration)
├── tailwind.config.js (Tailwind configuration)
├── tailwind.css (component styles)
└── README.md (this file)
```

## Key Class Names
- `.download-app-dark` - Main container
- `.download-app-dark__left-content` - Left section wrapper
- `.download-app-dark__title` - Main heading
- `.download-app-dark__title-accent` - "MORE" title accent styling
- `.download-app-dark__description` - Description text
- `.download-app-dark__features-section` - Features container
- `.download-app-dark__separator` - Purple divider line
- `.download-app-dark__feature` - Individual feature row
- `.download-app-dark__feature-icon` - Magenta checkmark icon
- `.download-app-dark__feature-text` - Feature text
- `.download-app-dark__button` - Download button styling (magenta)
- `.download-app-dark__button-label-small` - Button secondary text
- `.download-app-dark__button-label-large` - Button primary text
- `.download-app-dark__right-content` - Right section with mockup
- `.download-app-dark__phone-mockup` - Phone image
- `.download-app-dark__sound-wave` - Sound wave background

## Usage
Import the Tailwind CSS and use the provided class names. The design tokens JSON file contains all color, typography, and spacing specifications.

## Features
- Two-column layout with responsive design
- Dark purple gradient background for premium look
- Three feature checkpoints with magenta icons
- Download buttons for both App Store and Google Play (magenta themed)
- Decorative phone mockup with gradient fill and sound wave background
- Clean, modern typography using Inter font family

## Differences from DownloadApp (Light Variant)
- Dark purple/blue gradient background instead of white
- Magenta (#e704e7) buttons instead of dark (#111928)
- Purple separator (#a859f2) instead of light gray (#e5e7eb)
- All text is white instead of dark
- Magenta accent checkmarks instead of green
- Larger title (64px vs 36px)
- Phone mockup has gradient fill matching the background theme

## Notes
- The component uses absolute positioning for the sound wave background
- Icons are SVG format for scalability
- Buttons have hover states for better UX
- All fonts are imported from Google Fonts (Inter)
- The "MORE" text in the title requires special styling with bold weight and magenta color
