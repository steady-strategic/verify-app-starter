# PageBanner-directory Component Specification

## Overview
This is a hero banner section for finding clinicians, featuring a title, description, state selector dropdown, and search button.

## Component Structure

```
Content (column)
├── Title & Description
│   ├── Heading: "Find a Clinician"
│   └── Description: "Looking to receive MORE therapy..."
└── Form (row container)
    ├── Dropdown
    │   ├── Text: "California"
    │   └── Icon: dropdown-icon.svg
    └── CTA Button
        ├── Icon: search-icon.svg
        └── Text: "Search"
```

## Design Specifications

### Colors
- Heading & Description Text: `#ffffff` (white)
- Form Text: `#111928` (dark gray)
- Button Background: `#d80ada` (magenta)
- Dropdown Icon: `#6f6f6f` (gray)
- Background: Dark purple/navy gradient or solid color

### Typography
All text uses Inter font family with the following specifications:

#### Heading
- Size: 50px
- Weight: 800 (bold)
- Letter Spacing: -1px
- Line Height: 55px

#### Description
- Size: 18px
- Weight: 400 (regular)
- Line Height: 27px

#### Form Elements
- Size: 16px
- Weight: 400 (dropdown), 700 (button text)

### Spacing
- Main content gap: 64px (between title section and form)
- Title/Description gap: 24px
- Form elements gap: 10px
- Icon-text gap in button: 8px

### Border Radius
- All containers: 8px

### Dimensions
- Container width: 469px
- Button: 127px × 52px

## Assets
- `dropdown-icon.svg` - Chevron down icon for state selector
- `search-icon.svg` - Search/magnifying glass icon
- `background.png` - Background image for the banner section

## Implementation Notes
- The background appears to be a dark gradient or solid purple/navy color
- Button uses magenta accent color (#d80ada)
- Form has white background containers on dark background
- Layout is responsive and should adapt to mobile screens
