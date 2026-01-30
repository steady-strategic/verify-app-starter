# ClinicianCard Component Specification

## Overview
This is a card component that displays a clinician's profile information including name, contact details, training level, location, and a call-to-action contact button.

## Component Structure

```
ClinicianCard (column container)
├── Name: "John Smith"
├── Separator Line
├── Body (column)
│   ├── Phone: "Phone: 883-723-4567"
│   ├── Training Level: "Level of Training: Level 1"
│   ├── City: "City: Chicago"
│   └── State: "State: Illinois"
├── Separator Line
└── Button (row container)
    ├── Text: "Contact"
    └── Icon: arrow-icon.svg
```

## Design Specifications

### Colors
- Primary Text: `#111928` (dark gray/charcoal)
- Separator Lines: `#f3f4f6` (light gray)
- Button Background: `#ffffff` (white)
- Button Border: `#e5e7eb` (medium light gray)
- Icon Color: `#1f2a37` (dark gray)

### Typography
All text uses Inter font family with the following specifications:

#### Heading (Name)
- Size: 28px
- Weight: 700 (bold)
- Letter Spacing: -0.56px

#### Body Text (Phone, Training, City, State)
- Size: 18px
- Weight: 400 (regular)

#### Button Text
- Size: 14px
- Weight: 500 (medium)

### Spacing
- Card internal gap: 6px (minimal spacing between elements)
- Button content gap: 8px (between icon and text)

### Border Radius
- Card: 8px
- Button: 8px

### Shadow
- Box Shadow: `0px 0px 9.9px rgba(0, 0, 0, 0.03)` (very subtle shadow)

### Dimensions
- Card: 592px × 309px
- Button: 116px × 41px
- Separator lines: 592px × 1px
- Arrow icon: 11px × 7px

## Assets
- `arrow-icon.svg` - Right arrow icon for contact button

## Implementation Notes
- The card has a clean, minimalist design with subtle shadows
- Separators are thin lines with very light gray color
- The button is outlined/bordered style with white background
- All elements are left-aligned except the button which is centered horizontally
- The card appears to be part of a listing or grid of clinicians
- Icons should be colored appropriately (dark gray for the arrow)
