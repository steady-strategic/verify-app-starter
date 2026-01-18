# Content-forClinicians Section

This folder contains the exported assets and styling configuration for the "Content-forClinicians" section from Figma.

## Contents

### Assets
- **assets/scientist-hero-image.jpg** - Hero image showing a scientist/clinician examining brain scans
- **assets/checkmark-icon.svg** - Purple checkmark icon used in the feature list

### Configuration Files
- **tailwind.config.js** - Tailwind CSS configuration with custom design tokens for this section
- **tailwind.css** - CSS styles with utility classes for the Content-forClinicians section
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
cp -r from-figma/Content-forClinicians/assets /path/to/your/project/public/
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
<div class="content-for-clinicians-row">
  <div class="content-for-clinicians-image-container">
    <img src="/assets/scientist-hero-image.jpg" alt="Scientist examining brain scans" />
  </div>
  <div class="content-for-clinicians-content">
    <div class="content-for-clinicians-heading-section">
      <h2 class="content-for-clinicians-heading">
        MORE isn't just about reducing symptoms
      </h2>
      <p class="content-for-clinicians-description">
        it's about helping people flourish. Most mindfulness programs...
      </p>
    </div>
    <div class="content-for-clinicians-features">
      <hr class="content-for-clinicians-separator" />
      <ul class="content-for-clinicians-feature-list">
        <li class="content-for-clinicians-feature">
          <svg class="content-for-clinicians-feature-icon" viewBox="0 0 8 7">
            <!-- checkmark icon -->
          </svg>
          <p class="content-for-clinicians-feature-text">Feature text</p>
        </li>
      </ul>
    </div>
  </div>
</div>
```

## Figma Design Reference

- **Figma File ID**: GbKcLfnUaaP7NqyrEuyX4A-214-851
- **Section Name**: Content-forClinicians
- **Exported Date**: 2026-01-18

## Notes

- All color values are extracted from the Figma design
- The layout is responsive and automatically stacks on smaller screens
- The checkmark icon uses the primary accent color (#e704e7)
- Image has rounded corners (12px border-radius) to match the design
- This section is designed specifically for the clinician audience
