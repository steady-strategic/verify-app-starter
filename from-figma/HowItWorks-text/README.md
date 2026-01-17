# HowItWorks-text Component Design

## Overview
This design showcases the three core therapeutic approaches used in the 8-week program: Mindfulness, Reappraisal, and Savoring. Each approach is presented with an icon, title, and detailed description.

## Design Structure

### Container Layout
- **Type**: Column layout with vertical spacing
- **Gap**: 92px (between heading and features row)
- **Background**: Light gray (#fafafa)
- **Content Width**: Full width with centered content

### Header Section
- **Title**: "Over the course of 8 weekly sessions, patients will experience guided meditations in a group or individual setting that guide them through mindfulness, reappraisal and savoring."
- **Font**: Inter, 28px, Bold (700)
- **Weight**: 700
- **Letter Spacing**: -0.56px
- **Line Height**: 35px
- **Color**: #374151

### Features Row
- **Type**: Row layout with 3 columns
- **Gap**: 48px (between columns)
- **Layout**: Horizontal distribution with equal spacing

### Feature Column (x3: Mindfulness, Reappraisal, Savoring)
- **Gap**: 16px (between icon and content)
- **Alignment**: Start alignment
- **Content Structure**:
  1. Icon (SVG)
  2. Content Column
     - Title
     - Description

#### Feature Title
- **Font**: Inter, 20px, Bold (700)
- **Color**: #111928
- **Gap from icon**: 16px

#### Feature Description
- **Font**: Inter, 18px, Regular (400)
- **Line Height**: 27px
- **Color**: #374151
- **Gap from title**: 8px

## Assets

### Icons
All icons are monochrome SVGs that should be colored appropriately:

1. **mindfulness-icon.svg** - Lotus flower icon
   - Color: Magenta/Pink (#e704e7 or similar)
   - Used for Mindfulness feature

2. **reappraisal-icon.svg** - Head/brain with rays icon
   - Color: Orange/Yellow (#f59e0b or similar)
   - Used for Reappraisal feature

3. **savoring-icon.svg** - Relaxed person/meditation icon
   - Color: Cyan/Light Blue (#06b6d4 or similar)
   - Used for Savoring feature

## Font Requirements
- **Primary Font**: Inter
- **Weights**: 400, 700
- **Import**: https://fonts.googleapis.com/css2?family=Inter:wght@400;700;800

## Color Palette
- **Text Primary**: #111928 (headings)
- **Text Secondary**: #374151 (descriptions)
- **Background**: #fafafa (section background)
- **Accent Colors**:
  - Mindfulness: #e704e7 (Magenta)
  - Reappraisal: #f59e0b (Amber)
  - Savoring: #06b6d4 (Cyan)

## Spacing Details
- Container gap: 92px
- Features row gap: 48px
- Feature column gap: 16px
- Content gap: 8px

## Implementation Notes
- All text should use Inter font family
- Icons should be displayed as SVG components with color styling
- The layout is responsive and should adapt to smaller screens
- Each feature section maintains consistent vertical spacing
- Consider using CSS Grid or Flexbox for the three-column layout

## Related Files
- Design XML: `from-figma/HowItWorks-text/design.xml`
- Current Implementation: `apps/web/components/sections/HowItWorks.tsx`
