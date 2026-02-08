# App Section Component

A reusable section component for showcasing the MORE mobile app with two variants: "default" and "patients".

## Features

- Two distinct variants with different content layouts
- Responsive design with phone mockup
- Background image with gradient overlay
- App Store download button
- Feature list with checkmarks (default variant)
- Detailed description (patients variant)

## Usage

### Default Variant

```tsx
import { App } from "@/components/sections";

export default function Page() {
    return <App variant="default" />;
}
```

### Patients Variant

```tsx
import { App } from "@/components/sections";

export default function Page() {
    return <App variant="patients" />;
}
```

### With Custom Styling

```tsx
import { App } from "@/components/sections";

export default function Page() {
    return <App variant="default" className="my-8" />;
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `variant` | `"default" \| "patients"` | `"default"` | Determines which content layout to display |
| `className` | `string` | `""` | Additional CSS classes to apply to the root element |
| `id` | `string` | `undefined` | Optional ID attribute for the section |

## Variants

### Default Variant

The default variant includes:
- "MORE Support, Anywhere" heading with "Coming Soon!" subtitle
- Brief description about mindfulness practices
- Three feature bullet points with checkmark icons:
  - Pleasant meditations designed to help ease cravings, pain, and stress
  - Learn skills that support healing and a renewed sense of joy in daily life
  - Use alongside MORE therapy sessions for the fullest impact
- "Download the App" call-to-action
- App Store download button

### Patients Variant

The patients variant includes:
- "MORE Support, Anywhere" heading with "Coming Soon!" subtitle
- Horizontal separator line
- Extended description about the MORE Therapy app
- Two paragraphs explaining the app's purpose and benefits
- App Store download button

## Assets

The component requires the following assets to be present:

- `/assets/images/App/Background.png` - Background gradient image
- `/assets/images/App/Mockup.png` - Phone mockup with app screenshot

## Design Tokens

The component uses the following design tokens from the Tailwind config:

- `primary-1` (#d80ada) - Brand color for "MORE" text and UI elements
- `gray-200` (#e5e7eb) - Separator line color
- Font sizes: 50px (heading), 38px (subtitle), 20px (body), 16px (features)
- Font weights: extrabold (800), extralight (200), bold (700), semibold (600)

## Styling Notes

- Fixed height of 877px to match the design
- Max width of 1440px with centered layout
- Phone mockup is rotated 3.96 degrees for visual interest
- Background image covers top 724px with white section at bottom
- Responsive padding and gaps between elements
- Hover effects on the App Store button (brightness increase)

## Example Page Implementation

```tsx
// app/patients/page.tsx
import { App } from "@/components/sections";

export default function PatientsPage() {
    return (
        <main>
            <App variant="patients" />
            {/* Other sections */}
        </main>
    );
}
```

```tsx
// app/download/page.tsx
import { App } from "@/components/sections";

export default function DownloadPage() {
    return (
        <main>
            <App variant="default" />
            {/* Other sections */}
        </main>
    );
}
```
