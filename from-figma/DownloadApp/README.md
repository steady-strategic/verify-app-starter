# DownloadApp Component

## Overview
The DownloadApp component is a call-to-action section promoting the MORE mobile application. It features a left content area with heading, description, and feature list, paired with a right side showcasing a phone mockup with download buttons.

## Design Details

### Dimensions
- Full width responsive layout
- Left content area: max 640px
- Phone mockup: 352px width
- Sound wave background: 847px × 306px

### Layout Sections
1. **Left Content** - Title, description, features list, and download buttons
2. **Right Content** - Phone mockup with sound wave decorative background

### Assets
- `check-icon.svg` - Green check mark for features (8×7px)
- `google-play-icon.svg` - Google Play store logo
- `app-store-button.svg` - Apple App Store download button
- `phone-mockup.svg` - Phone device mockup with app interface
- `sound-wave-background.png` - Decorative wave/sound visualization

### Typography
- **Title**
  - Font: Inter
  - Size: 36px
  - Weight: 300
  - Letter Spacing: -0.36px
  - Color: #111928

- **Body/Description**
  - Font: Inter
  - Size: 20px
  - Weight: 400
  - Line Height: 30px
  - Color: #454a55

- **Feature Title**
  - Font: Inter
  - Size: 16px
  - Weight: 700
  - Color: #454a55

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
- Background: #ffffff
- Text Dark: #111928
- Text Secondary: #454a55
- Text Light: #6b7280
- Accent Green: #0e9f6e (check icons)
- Button Dark: #111928
- Border Light: #e5e7eb (separator line)
- Button Text: #ffffff

### Styling
- Border Radius: 8px (buttons)
- Gap (Large): 32px
- Gap (Medium): 24px
- Gap (Small): 16px
- Gap (Tiny): 10px
- Gap (Button): 8px

## File Structure
```
DownloadApp/
├── check-icon.svg (feature list check marks)
├── google-play-icon.svg (Google Play logo)
├── app-store-button.svg (Apple App Store button)
├── phone-mockup.svg (phone device mockup)
├── sound-wave-background.png (wave animation background)
├── design-tokens.json (design token configuration)
├── tailwind.config.js (Tailwind configuration)
├── tailwind.css (component styles)
└── README.md (this file)
```

## Key Class Names
- `.download-app` - Main container
- `.download-app__left-content` - Left section wrapper
- `.download-app__title` - Main heading
- `.download-app__description` - Description text
- `.download-app__features-section` - Features container
- `.download-app__feature` - Individual feature row
- `.download-app__feature-icon` - Check mark icon
- `.download-app__feature-text` - Feature text
- `.download-app__button` - Download button styling
- `.download-app__button-label-small` - Button secondary text
- `.download-app__button-label-large` - Button primary text
- `.download-app__right-content` - Right section with mockup
- `.download-app__phone-mockup` - Phone image
- `.download-app__sound-wave` - Sound wave background

## Usage
Import the Tailwind CSS and use the provided class names. The design tokens JSON file contains all color, typography, and spacing specifications.

## Features
- Two-column layout with responsive design
- Three feature checkpoints with icons
- Download buttons for both App Store and Google Play
- Decorative phone mockup with sound wave background
- Clean, modern typography using Inter font family

## Notes
- The component uses absolute positioning for the sound wave background
- Icons are SVG format for scalability
- Buttons have hover states for better UX
- All fonts are imported from Google Fonts (Inter)
