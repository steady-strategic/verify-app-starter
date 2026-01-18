# For Clinicians Section Component

A React component displaying the "For Clinicians" section with features and imagery.

## Overview

This component showcases a content swap layout with:
- Left side: Title, description, and feature list with icons
- Right side: Therapist/client therapy session image

## Usage

```tsx
import { ForClinicians } from "@/components/sections/Content-swap";

export default function Page() {
  return <ForClinicians />;
}
```

## Design Details

- **Layout**: Responsive row layout (stacks on mobile)
- **Colors**: 
  - Heading: #111928
  - Description: #374151
  - Separator: #e5e7eb
  - Icons: #e704e7 (Magenta)
- **Typography**: Inter font family
- **Border Radius**: 20px on image
- **Gaps**: 16px for features, 64px between left/right content

## Assets

- `assets/check-icon.svg`: Feature icon
- `assets/therapist-client.png`: Therapy session image

## Component Structure

```
ForClinicians (Main Component)
├── Heading & Description
├── Separator Line
├── Feature List
│   └── Feature Item (x4)
│       ├── Icon
│       └── Feature Text
└── Image
```

## Responsive Behavior

- Mobile: Stacked layout
- Tablet+: Side-by-side layout
- Image: Full-width responsive with aspect ratio preservation
