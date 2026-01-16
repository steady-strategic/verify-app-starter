# Research Statistics Component

This component was generated from the Figma design showing research statistics for the MORE program.

## Files

- **ResearchStatistics.tsx** - Main component file
- **tailwind.config.js** - Tailwind configuration with design tokens from Figma
- **tailwind.css** - Tailwind base file with custom component classes
- **assets/divider.svg** - SVG divider asset (currently using CSS borders instead)

## Setup

To use these files in your project:

1. **Merge tailwind.config.js** with your existing Tailwind config:
   - Copy the color extensions (gray and purple palette)
   - Copy the fontSize custom values
   - Add the content path for the from-figma folder

2. **Import the CSS** in your main CSS file or component:
   ```css
   @import './from-figma/tailwind.css';
   ```

3. **Alternative**: Use the utility classes directly instead of importing the CSS file

## Usage

```tsx
import ResearchStatistics from "./from-figma/ResearchStatistics";

export default function Page() {
    return (
        <div>
            <ResearchStatistics />
        </div>
    );
}
```

## Design Details

- **Colors**:
  - Primary Purple: `#8a38f5`
  - Text Gray: `#374151` (gray-700)
  - Heading: `#111928` (gray-900)
  - Dividers: `#e5e7eb` (gray-200)
  - Background: White

- **Typography**:
  - Uses Inter font family
  - Headline: 28px, font-weight 600
  - Card titles: 20px, font-weight 600
  - Stats text: 18px, font-weight 400, line-height 27px

- **Layout**:
  - 2x2 grid layout with dividers
  - Card shadow: `0px 1px 10px rgba(0,0,0,0.04)`
  - Border radius: 8px
  - Gap between sections: 56px (gap-14)
  - Card padding: 48px (p-12)

## Responsive Considerations

The current implementation uses flexbox with flex-1 for equal width columns. For mobile responsiveness, you may want to add:

```tsx
<div className="flex flex-col md:flex-row">
```

to stack the cards vertically on mobile devices.