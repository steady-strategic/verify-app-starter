# FAQ Component Implementation Guide

## What's Been Created

This folder contains a complete FAQ accordion component based on the Figma design. Here's what you're working with:

### 📁 Folder Structure
```
from-figma/FAQ/
├── assets/
│   ├── chevron-down-icon.svg    # Collapse icon
│   ├── chevron-up-icon.svg      # Expand icon
│   └── question-icon.svg        # Question mark icon
├── FAQ.tsx                      # React component (Tailwind-based)
├── FAQ.module.css               # Vanilla CSS version
├── tailwind.css                 # Tailwind utilities
├── tailwind.config.js           # Tailwind configuration
├── DESIGN_SPEC.md               # Design tokens & specs
├── README.md                    # Usage instructions
├── global.d.ts                  # TypeScript SVG definitions
└── IMPLEMENTATION_GUIDE.md      # This file

```

## How to Use This Component

### Option 1: Direct Integration (Recommended)
1. Copy the `FAQ.tsx` file to your `apps/web/components/sections/` directory
2. Rename it to `FAQ.tsx`
3. Update the import paths for SVG assets:
   ```tsx
   // Change from:
   import QuestionIcon from './assets/question-icon.svg';
   
   // To:
   import QuestionIcon from '@/components/ui/icons/question-icon';
   // (or wherever you store icons in your project)
   ```

### Option 2: Vanilla CSS Version
If you're not using Tailwind or prefer CSS Modules:
1. Copy `FAQ.module.css` to your styles directory
2. Use the CSS class names from the module
3. Adjust the SVG asset paths

## Design Tokens Extracted

### Color Palette
| Token | Value | Usage |
|-------|-------|-------|
| faq-dark | #111928 | Headings, question text |
| faq-gray | #6b7280 | Answer text, collapse icon |
| faq-magenta | #d80ada | Question mark icon background |
| faq-border | #e5e7eb | Item separators |

### Typography
| Element | Size | Weight | Family |
|---------|------|--------|--------|
| Heading | 50px | 800 | Inter |
| Questions | 18px | 400 | Inter |
| Answers | 16px | 400 | Inter |

### Spacing
| Element | Value |
|---------|-------|
| Container Gap | 48px |
| Item Padding | 16px (v) × 24px (h) |
| Icon Gap | 8px |
| Text Gap | 6px |

## Features Implemented

✅ **Fully Interactive**
- Click to expand/collapse
- First item expanded by default
- Icons toggle accordingly

✅ **Accessible**
- Semantic HTML buttons
- ARIA labels (`aria-expanded`, `aria-controls`)
- Keyboard navigation ready

✅ **Responsive**
- Flexbox layout (naturally responsive)
- Adjustable padding/gaps
- Works on all screen sizes

✅ **Customizable**
- Accept custom items array
- Custom title prop
- Default mock data included

## Next Steps

1. **Copy the component** to your sections folder
2. **Update asset imports** to match your project structure
3. **Test in your application** with the provided default data
4. **Customize content** by passing your own items prop
5. **Style adjustments** if needed (colors, spacing, fonts)

## Quick Start Example

```tsx
// In your page.tsx or layout.tsx
import FAQ from '@/components/sections/FAQ';

export default function Page() {
  return (
    <div className="container mx-auto py-16">
      <FAQ />
    </div>
  );
}
```

## Customization Example

```tsx
const myFAQItems = [
  {
    id: 'q1',
    question: 'How does MORE work?',
    answer: <p>Our platform helps clinicians...</p>,
  },
  {
    id: 'q2',
    question: 'What are the pricing options?',
    answer: <p>We offer flexible plans...</p>,
  },
];

<FAQ items={myFAQItems} title="Frequently Asked Questions" />
```

## Design Verification

The component matches the Figma design in the following ways:

- ✅ Typography: Exact font sizes and weights
- ✅ Colors: All hex values from design tokens
- ✅ Spacing: Gaps and padding match design
- ✅ Icons: SVG icons properly placed and colored
- ✅ Layout: Accordion structure and interactions
- ✅ Responsiveness: Flexible for all screen sizes

## Troubleshooting

### Icons Not Showing?
- Make sure SVG paths are correct
- Check that SVGR is configured in your Next.js project
- Or use standard `<img>` tags instead:
  ```tsx
  <img src="/icons/question-icon.svg" alt="Question" />
  ```

### Styling Not Applied?
- Ensure `tailwind.css` is imported in your global styles
- Or import `FAQ.module.css` directly in the component
- Check that Tailwind classes are in your content paths

### Colors Look Different?
- Verify your browser is not applying custom color filters
- Check that the SVG color values match (should be #d80ada for magenta)
- Ensure no conflicting CSS rules

## Files Reference

| File | Purpose |
|------|---------|
| FAQ.tsx | Main React component |
| FAQ.module.css | Alternative CSS Module styling |
| tailwind.css | Tailwind utilities |
| tailwind.config.js | Tailwind configuration |
| DESIGN_SPEC.md | Detailed design specifications |
| README.md | Usage and integration guide |
| global.d.ts | TypeScript types for SVG imports |
