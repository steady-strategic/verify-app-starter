# For Patients Content Component

This is a content component design from Figma showing patient-focused benefits with a hero image and feature list.

## Files

- **tailwind.config.js** - Tailwind configuration with design tokens extracted from Figma
- **tailwind.css** - Tailwind CSS with base, component, and utility layers
- **assets/check-icon.svg** - Checkmark icon used for feature list items
- **assets/patient-hero-image.jpg** - Hero image for the left side

## Design Structure

The component consists of a horizontal layout with:
- **Left side**: Hero image with rounded corners
- **Right side**: Content column containing:
  - Heading: "For Patients"
  - Subheading: Description of benefits
  - Separator line
  - Feature list with 4 items, each with:
    - Magenta checkmark icon
    - Feature text

## Design Tokens

### Colors
- **Primary Text**: #111928 (gray-900)
- **Secondary Text**: #374151 (gray-700)
- **Separator/Border**: #e5e7eb (gray-200)
- **Icon Color**: #ec4899 (purple/magenta)

### Typography
- **Font Family**: Inter
- **Heading**: 28px, font-weight 600, letter-spacing -0.56px
- **Subheading**: 20px, font-weight 600, letter-spacing -0.4px, line-height 28px
- **Body**: 18px, font-weight 400

### Spacing
- **Row Gap**: 64px
- **Column Gap**: 32px
- **Content Gap**: 16px
- **Feature Item Gap**: 10px

### Border Radius
- **Image**: 12px rounded corners

## CSS Component Classes

Available component classes in the tailwind.css:
- `.content-row` - Main container row
- `.content-image` - Image wrapper
- `.content-column` - Content column
- `.content-header` - Header section
- `.content-title` - Main title
- `.content-subtitle` - Subtitle text
- `.content-features` - Features container
- `.content-separator` - Horizontal line divider
- `.content-list` - Feature list
- `.content-feature` - Individual feature item
- `.content-feature-icon` - Icon container
- `.content-feature-text` - Feature text

## Integration

To use these files in your project:

1. **Merge the color palette** into your main tailwind.config.js
2. **Merge the typography tokens** into your config
3. **Import the CSS** or copy the component classes into your global CSS
4. **Place the assets** in your project's public/static folder or import them as needed