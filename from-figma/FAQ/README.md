# FAQ Component - Figma Design Implementation

## Overview
This folder contains the FAQ accordion component extracted from the Figma design. It includes all necessary design tokens, assets, and component scaffolds.

## Files Included

### Design Files
- **DESIGN_SPEC.md** - Complete design specification with colors, typography, spacing, and component structure
- **tailwind.config.js** - Tailwind CSS configuration with custom color and spacing tokens
- **tailwind.css** - Tailwind-based CSS utilities for the FAQ component

### Assets
- **assets/question-icon.svg** - Question mark icon (16x16px, magenta #d80ada)
- **assets/chevron-up-icon.svg** - Chevron up icon for expanded state
- **assets/chevron-down-icon.svg** - Chevron down icon for collapsed state

### Component Implementations

#### React + Tailwind (Recommended)
- **FAQ.tsx** - Complete React component using Tailwind CSS
  - Supports custom items and title
  - Includes default FAQ data
  - Accessible (ARIA labels)
  - First item expanded by default
  - Fully interactive with expand/collapse functionality

#### Vanilla CSS
- **FAQ.module.css** - CSS Module version for projects not using Tailwind

## Design Specifications

### Layout
- **Container Gap**: 48px (between heading and accordion)
- **Item Spacing**: Border-bottom 1px solid #e5e7eb
- **Border Radius**: 8px on top and bottom items
- **Padding**: 16px vertical, 24px horizontal per item

### Typography
- **Heading**: 50px, weight 800, -1px letter-spacing, color #111928
- **Question**: 18px, weight 400, color #111928
- **Answer**: 16px, weight 400, line-height 24px, color #6b7280
- **Font**: Inter, sans-serif

### Colors
- **Primary Text**: #111928 (dark)
- **Secondary Text**: #6b7280 (gray)
- **Accent**: #d80ada (magenta for question icons)
- **Border**: #e5e7eb
- **Background**: #ffffff

## Usage

### React Component
```tsx
import FAQ from './FAQ';

export default function Page() {
  return <FAQ />;
}
```

### Custom Items
```tsx
const customItems = [
  {
    id: 'custom-1',
    question: 'Your question?',
    answer: <p>Your answer here</p>,
  },
];

<FAQ items={customItems} title="Custom FAQ" />
```

### CSS Module Version
```tsx
import styles from './FAQ.module.css';

export default function FAQ() {
  const [expanded, setExpanded] = useState('');
  
  return (
    <div className={styles.faqContainer}>
      {/* Implementation */}
    </div>
  );
}
```

## Integration Steps

1. **Copy component files** to your project's components directory
2. **Copy SVG assets** to your public/assets directory
3. **Import Tailwind CSS** in your global styles (if using Tailwind version)
4. **Import and use** the FAQ component in your pages

## Design Tokens Used

### Colors
```
--faq-dark: #111928
--faq-gray: #6b7280
--faq-magenta: #d80ada
--faq-border: #e5e7eb
```

### Spacing
```
--faq-container-gap: 48px
--faq-icon-gap: 8px
--faq-text-gap: 6px
```

### Font Sizes
```
--faq-heading: 50px
--faq-question: 18px
--faq-answer: 16px
```

## Accessibility
- Semantic HTML with `<button>` elements
- ARIA labels: `aria-expanded` and `aria-controls`
- Keyboard navigation support
- Proper heading hierarchy

## Browser Support
- Chrome/Edge: Latest 2 versions
- Firefox: Latest 2 versions
- Safari: Latest 2 versions
- Mobile browsers: iOS Safari 12+, Chrome Android latest

## Notes
- The component uses `'use client'` directive for Next.js 14
- SVG icons are imported as React components (requires SVGR configuration)
- First accordion item is expanded by default
- Hover state on buttons for better UX
- Smooth transitions on toggle state
