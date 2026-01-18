# HowItWorks Section Component

## Overview
The HowItWorks component is a reusable section that displays the MORE program structure, featuring a 3-step progression with visual icons and research insights.

## Component Location
`apps/web/components/sections/HowItWorks.tsx`

## Props Interface
```typescript
interface HowItWorksCard {
    title: string;
    iconSrc: string;  // Path to icon SVG
    iconColor: string;  // Background color for icon circle
}

interface HowItWorksSectionProps extends BaseSectionProps {
    variant?: "default";
    title: string;
    subtitle: string;  // Text below lotus icon (e.g., "Mindfulness")
    steps: string[];  // Array of step labels (e.g., ["Step 1", "Step 2", "Step 3"])
    cards: HowItWorksCard[];  // Array of 3 cards with icons
    research: string;  // Research quote text
}
```

## Usage Example
```tsx
import { HowItWorks } from "@/components/sections/HowItWorks";

<HowItWorks
    title="Carefully curated structure 3 step, 8 week program based on years of research"
    subtitle="Mindfulness"
    steps={["Step 1", "Step 2", "Step 3"]}
    cards={[
        {
            title: "Guided Meditations",
            iconSrc: "/assets/images/meditation-icon.svg",
            iconColor: "#e704e7",
        },
        {
            title: "Reappraisal",
            iconSrc: "/assets/images/reappraisal-icon.svg",
            iconColor: "#f59e0b",
        },
        {
            title: "Savoring",
            iconSrc: "/assets/images/savoring-icon.svg",
            iconColor: "#06b6d4",
        },
    ]}
    research="As your prefrontal cortex grows - your cravings decrease and your capacity for joy increases"
    variant="default"
    id="how-it-works-section"
/>
```

## Features
- **Header Section**: Displays main title with lotus flower icon and subtitle
- **Step Progression**: Shows 3 steps with curved background and connecting arrows
- **Icon Cards**: Three circular icon cards with customizable colors
- **Research Quote**: Highlighted research findings at the bottom

## Assets Required
The component uses the following SVG assets (located in `public/assets/images/`):
- `lotus-flower.svg` - Lotus flower icon (magenta)
- `step-progress-background.svg` - Curved background for step progression
- `meditation-icon.svg` - Guided meditation icon
- `reappraisal-icon.svg` - Reappraisal icon
- `savoring-icon.svg` - Savoring icon

## Design Specifications
- **Typography**: Inter font family
- **Title**: 28px, weight 700, -0.56px letter spacing
- **Subtitle**: 20px, weight 600, color #e704e7
- **Step Labels**: 18px, weight 500, -0.36px letter spacing
- **Card Titles**: 16px, weight 600
- **Research Text**: 18px, weight 400, 27px line height

## Colors
- Primary Text: #1f2a37
- Secondary Text: #454a55
- Accent (Lotus/Meditation): #e704e7 (magenta)
- Reappraisal: #f59e0b (orange)
- Savoring: #06b6d4 (cyan)

## Variants
Currently supports:
- `default` - Standard layout with all features

## Test Page
A test page is available at `/test-how-it-works` for component verification.

## Integration
The component is integrated into:
- `/how-it-works` page - Main implementation

## Notes
- Component is fully responsive
- Uses Next.js Image component for optimized image loading
- All icons use SVG format for scalability
- Follows Figma design specifications exactly
