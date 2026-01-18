# HowItWorks Component

## Overview
The HowItWorks component displays a 3-step program structure for the MORE mindfulness-oriented recovery enhancement program. It features a visual progression with icons representing each step and includes key research insights.

## Design Details

### Dimensions
- Width: 1280px
- Height: 760px

### Layout Sections
1. **Header** - Title and lotus flower icon with "Mindfulness" label
2. **Steps Progress** - Visual representation of 3 steps with connecting arrows
3. **Cards Section** - Three circular icon cards with titles (Guided Meditations, Reappraisal, Savoring)
4. **Research Quote** - Information about MORE research benefits

### Assets
- `lotus-flower.svg` - Lotus flower icon (magenta)
- `step-progress-background.svg` - Curved background for step progression
- `meditation-icon.svg` - Guided meditation icon (magenta circle)
- `reappraisal-icon.svg` - Reappraisal icon (orange circle)
- `savoring-icon.svg` - Savoring icon (cyan circle)

### Typography
- **Title**
  - Font: Inter
  - Size: 28px
  - Weight: 700
  - Letter Spacing: -0.56px
  - Line Height: 35px
  - Color: #1f2a37

- **Subtitle (Mindfulness)**
  - Font: Inter
  - Size: 20px
  - Weight: 600
  - Color: #e704e7

- **Step Labels**
  - Font: Inter
  - Size: 18px
  - Weight: 500
  - Letter Spacing: -0.36px
  - Color: #454a55

- **Card Titles**
  - Font: Inter
  - Size: 16px
  - Weight: 600
  - Color: #454a55

- **Description/Research**
  - Font: Inter
  - Size: 18px
  - Weight: 400
  - Line Height: 27px
  - Color: #454a55

### Colors
- Background: #ffffff
- Primary Text: #1f2a37
- Secondary Text: #454a55
- Accent (Lotus): #e704e7
- Icon - Meditation: #e704e7 (magenta)
- Icon - Reappraisal: #f59e0b (orange)
- Icon - Savoring: #06b6d4 (cyan)

### Styling
- Border Radius: 12px
- Shadow: 0px 0px 9.4px rgba(0, 0, 0, 0.03)

## File Structure
```
HowItWorks/
├── lotus-flower.svg (lotus icon)
├── step-progress-background.svg (step progression background)
├── meditation-icon.svg (guided meditations icon)
├── reappraisal-icon.svg (reappraisal icon)
├── savoring-icon.svg (savoring icon)
├── design-tokens.json (design token configuration)
├── tailwind.config.js (Tailwind configuration)
├── tailwind.css (component styles)
└── README.md (this file)
```

## Key Class Names
- `.how-it-works` - Main container
- `.how-it-works__title` - Title styling
- `.how-it-works__lotus` - Lotus section with icon and label
- `.how-it-works__steps` - Step progression container
- `.how-it-works__step` - Individual step button
- `.how-it-works__cards` - Card container
- `.how-it-works__card` - Individual card with icon
- `.how-it-works__icon` - Icon styling with color variants
- `.how-it-works__card-title` - Card title styling
- `.how-it-works__description` - Description text styling

## Usage
Import the Tailwind CSS and use the provided class names to build the component. The design tokens JSON file contains all color, typography, and spacing specifications.

## Notes
- All icons use SVG format for scalability
- The component is responsive and uses Tailwind CSS utilities
- Fonts are imported from Google Fonts (Inter)
- The step progression uses a curved background SVG for visual flow
