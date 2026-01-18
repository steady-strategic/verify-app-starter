# Text-HowItWorks Design

## Overview
A three-column feature showcase section explaining three core practices: Mindfulness, Reappraisal, and Savoring. This section is part of an 8-week training program.

## Design Specifications

### Header Text
- **Content**: "Over the course of 8 weekly sessions, patients will experience guided meditations in a group or individual setting that guide them through mindfulness, reappraisal and savoring."
- **Font Family**: Inter
- **Font Size**: 28px
- **Font Weight**: 700
- **Line Height**: 35px
- **Letter Spacing**: -0.56px
- **Color**: #374151

### Grid Layout
- **Type**: 3-column row layout
- **Gap between items**: 48px
- **Container gap**: 92px (between header and features row)

### Feature Card Structure
Each feature card contains:
1. **Icon**: 24-32px SVG icon with colored background
2. **Title**: 20px, 700 weight, #111928 color
3. **Description**: 18px, 400 weight, #374151 color, 27px line height

#### Feature 1: Mindfulness
- **Icon**: lotus-flower-white.svg
- **Background Color**: Magenta/Pink
- **Icon Size**: 32x28px
- **Description Length**: Long-form descriptive text

#### Feature 2: Reappraisal
- **Icon**: reappraisal-icon.svg
- **Background Color**: Orange/Yellow
- **Icon Size**: 41x38px
- **Description Length**: Long-form descriptive text

#### Feature 3: Savoring
- **Icon**: savoring-icon.svg
- **Background Color**: Cyan/Light Blue
- **Icon Size**: 24x22px
- **Description Length**: Long-form descriptive text

## Asset Files
- `lotus-flower-white.svg` - Mindfulness feature icon
- `reappraisal-icon.svg` - Reappraisal feature icon
- `savoring-icon.svg` - Savoring feature icon

## Design Tokens

### Colors
- Primary Text: #111928
- Secondary Text: #374151
- Icon Background (Mindfulness): Magenta/Pink
- Icon Background (Reappraisal): Orange/Yellow
- Icon Background (Savoring): Cyan/Light Blue

### Typography
- Font Family: Inter (weights: 400, 700, 800)
- Header: 28px, 700 weight
- Feature Title: 20px, 700 weight
- Feature Description: 18px, 400 weight

### Spacing
- Container Gap: 92px
- Features Row Gap: 48px
- Feature Card Internal Gap: 16px
- Content Gap: 8px
- Padding: Varies by container

## Component Architecture

```
Container (column)
├── Header Text
└── Features Row (row)
    ├── Feature Card 1 (Mindfulness)
    │   ├── Icon
    │   └── Content
    │       ├── Title
    │       └── Description
    ├── Feature Card 2 (Reappraisal)
    │   ├── Icon
    │   └── Content
    │       ├── Title
    │       └── Description
    └── Feature Card 3 (Savoring)
        ├── Icon
        └── Content
            ├── Title
            └── Description
```

## Implementation Notes
- This is a responsive design with a 3-column layout
- Icons have colored backgrounds in circular/rounded containers
- All text uses the Inter font family
- The design uses a clean, minimal aesthetic with generous spacing
- Icons are SVG format for scalability
