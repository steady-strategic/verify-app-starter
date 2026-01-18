# Text-Clinicians Design

## Overview
A six-feature showcase section divided into two rows of three features each. This section presents what can be learned over 13 hours of training, covering both clinical and operational aspects.

## Design Specifications

### Header Text
- **Content**: "Over the course of 13 hours of training, you can expect to learn:"
- **Font Family**: Inter
- **Font Size**: 28px
- **Font Weight**: 700
- **Letter Spacing**: -0.56px
- **Color**: #111928

### Grid Layout
- **Type**: 2 rows × 3 columns layout
- **Gap between columns**: 48px
- **Gap between rows**: 48px
- **Container gap**: 48px

### Feature Card Structure
Each feature card contains:
1. **Icon**: 14-24px SVG icon with colored background
2. **Title**: 20px, 700 weight, #111928 color
3. **Description**: 16px, 400 weight, #6B7280 color, 24px line height

#### Row 1 Features

##### Feature 1: Understand the Science Behind Suffering
- **Icon**: chart-line.svg
- **Icon Size**: 24x24px
- **Background Color**: Blue (#1a56db)

##### Feature 2: Master Innovative Techniques
- **Icon**: scales.svg
- **Icon Size**: 24x24px
- **Background Color**: Blue (#1a56db)

##### Feature 3: Boost Patient Engagement & Motivation
- **Icon**: meditation-bowl.svg
- **Icon Size**: 24x22px
- **Background Color**: Blue (#1a56db)

#### Row 2 Features

##### Feature 4: Finance
- **Icon**: dollar-sign.svg
- **Icon Size**: 14x24px
- **Background Color**: Blue (#1a56db)

##### Feature 5: Enterprise Design
- **Icon**: palette.svg
- **Icon Size**: 24x24px
- **Background Color**: Blue (#1a56db)

##### Feature 6: Operations
- **Icon**: layers.svg
- **Icon Size**: 22x24px
- **Background Color**: Blue (#1a56db)

## Asset Files
- `chart-line.svg` - Science Behind Suffering icon
- `scales.svg` - Master Innovative Techniques icon
- `meditation-bowl.svg` - Boost Patient Engagement icon
- `dollar-sign.svg` - Finance icon
- `palette.svg` - Enterprise Design icon
- `layers.svg` - Operations icon

## Design Tokens

### Colors
- Primary Text (Headers): #111928
- Secondary Text (Descriptions): #6B7280
- Icon Background: #1a56db (Blue)

### Typography
- Font Family: Inter (weights: 400, 700)
- Header: 28px, 700 weight, -0.56px letter-spacing
- Feature Title: 20px, 700 weight
- Feature Description: 16px, 400 weight, 24px line height

### Spacing
- Features Row Gap: 48px
- Feature Card Internal Gap: 16px
- Content Gap: 8px
- Container Gap: 48px

## Component Architecture

```
Container (column)
├── Header Text
├── Features Row 1 (row)
│   ├── Feature Card 1 (Science)
│   │   ├── Icon
│   │   └── Content
│   │       ├── Title
│   │       └── Description
│   ├── Feature Card 2 (Techniques)
│   │   ├── Icon
│   │   └── Content
│   │       ├── Title
│   │       └── Description
│   └── Feature Card 3 (Engagement)
│       ├── Icon
│       └── Content
│           ├── Title
│           └── Description
└── Features Row 2 (row)
    ├── Feature Card 4 (Finance)
    │   ├── Icon
    │   └── Content
    │       ├── Title
    │       └── Description
    ├── Feature Card 5 (Design)
    │   ├── Icon
    │   └── Content
    │       ├── Title
    │       └── Description
    └── Feature Card 6 (Operations)
        ├── Icon
        └── Content
            ├── Title
            └── Description
```

## Implementation Notes
- This is a responsive design with a 2-row × 3-column grid layout
- All icons share the same blue background color (#1a56db)
- Icons are SVG format for scalability and can be colored programmatically
- The design uses clean, minimal styling with consistent spacing
- First three features focus on clinical training aspects
- Last three features focus on operational/business aspects
- Typography uses Inter font family with consistent sizing
