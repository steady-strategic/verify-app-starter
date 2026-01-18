# Content-HowItWorks Section

This folder contains the exported assets and styling configuration for the "Content-HowItWorks" section from Figma.

## Contents

### Assets
- **assets/hero-image.png** - Main hero image showing a person with raised arms on a mountain at sunset
- **assets/checkmark-icon.svg** - Purple checkmark icon used in the feature list

### Configuration Files
- **tailwind.config.js** - Tailwind CSS configuration with custom design tokens for this section
- **tailwind.css** - CSS styles with utility classes for the Content-HowItWorks section
- **README.md** - This file

## Design Specifications

### Color Palette
- **Primary Text**: #111928 (Dark Gray/Black)
- **Secondary Text**: #374151 (Medium Gray)
- **Accent Color**: #e704e7 (Magenta/Purple for icons)
- **Border Color**: #e5e7eb (Light Gray)

### Typography
- **Font Family**: Inter, sans-serif
- **Heading (H1)**: 28px, Weight 700, Letter-spacing -0.56px
- **Subheading (H2)**: 20px, Weight 600, Letter-spacing -0.40px
- **Body Text**: 18px, Weight 400

### Layout
- **Main Row Gap**: 64px (between image and content)
- **Section Gap**: 16px (between heading and description)
- **List Gap**: 16px (between features)
- **Icon Gap**: 10px (between icon and text)
- **Image Border Radius**: 12px

### Responsive Breakpoints
- Desktop: Full width layout with image on left, content on right
- Tablet (1024px): Stack vertically
- Mobile (768px): Adjusted font sizes and spacing

## Implementation

### Using the Assets

Copy the asset files to your project's public folder:
```bash
cp -r from-figma/Content-HowItWorks/assets /path/to/your/project/public/
```

### Using the Styles

Import the tailwind.css file in your component:
```tsx
import './tailwind.css';
```

Or integrate the tailwind.config.js settings into your project's main tailwind.config.

### Component Structure

The section follows this HTML structure:
```html
<div class="content-how-it-works-row">
  <div class="content-how-it-works-image-container">
    <img src="/assets/hero-image.png" alt="Mindfulness hero" />
  </div>
  <div class="content-how-it-works-content">
    <div class="content-how-it-works-heading-section">
      <h2 class="content-how-it-works-heading">
        MORE isn't just about reducing symptoms
      </h2>
      <p class="content-how-it-works-description">
        it's about helping people flourish. Most mindfulness programs...
      </p>
    </div>
    <div class="content-how-it-works-features">
      <hr class="content-how-it-works-separator" />
      <ul class="content-how-it-works-feature-list">
        <li class="content-how-it-works-feature">
          <svg class="content-how-it-works-feature-icon" viewBox="0 0 8 7">
            <!-- checkmark icon -->
          </svg>
          <p class="content-how-it-works-feature-text">Feature text</p>
        </li>
      </ul>
    </div>
  </div>
</div>
```

## Figma Design Reference

- **Figma File ID**: GbKcLfnUaaP7NqyrEuyX4A-214-777
- **Section Name**: Content-HowItWorks
- **Exported Date**: 2026-01-18

## Notes

- All color values are extracted from the Figma design
- The layout is responsive and automatically stacks on smaller screens
- The checkmark icon uses the primary accent color (#e704e7)
- Image has rounded corners (12px border-radius) to match the design
