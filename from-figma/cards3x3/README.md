# Why MORE Works - Cards Component

This is a 3x2 grid cards component generated from the Figma design showing key benefits of the MORE program.

## Files

- **tailwind.config.js** - Tailwind configuration with design tokens extracted from Figma
- **tailwind.css** - Tailwind CSS with base, component, and utility layers

## Design Tokens

### Colors
- **Primary Text**: #374151 (gray-700)
- **Heading Text**: #111928 (gray-900)  
- **Secondary Text**: #6b7280 (gray-600)
- **Dividers**: #e5e7eb (gray-200)
- **Accent (MORE)**: #ec4899 (magenta/pink)
- **White**: #ffffff

### Typography
- **Title**: 28px, font-weight 600, letter-spacing -0.56px, line-height 35px
- **Subheading**: 20px, font-weight 400, line-height 30px
- **Card Title**: 20px, font-weight 600, letter-spacing -0.4px
- **Body Text**: 18px, font-weight 400, line-height 27px
- **Button Text**: 20px, font-weight 600

### Spacing & Layout
- **Main Container Gap**: 72px
- **Card Internal Gap**: 16px
- **Card Padding**: 32px
- **Border Radius**: 24px (rounded-xl)
- **Shadow**: 0px 0px 9.4px rgba(0, 0, 0, 0.03)

## Component Structure

The component consists of:
- Main container with 72px gap
- Header section with title and description
- 3x2 grid of cards with:
  - Vertical dividers between columns
  - Horizontal dividers between rows
  - Card titles and descriptive text

## CSS Component Classes

- `.why-more-container` - Main container
- `.why-more-header` - Header section
- `.why-more-title` - Main title
- `.why-more-highlight` - Highlight text (MORE)
- `.why-more-description` - Description text
- `.why-more-grid` - Grid container
- `.why-more-row` - Row wrapper
- `.why-more-card` - Individual card
- `.why-more-card-title` - Card title
- `.why-more-card-text` - Card text
- `.why-more-divider-vertical` - Vertical divider
- `.why-more-divider-horizontal` - Horizontal divider
- `.why-more-button` - CTA button

## Integration

To use these files in your project:

1. **Merge the color palette** into your main tailwind.config.js
2. **Merge the typography tokens** into your main config
3. **Import the CSS** or copy the component classes into your global CSS