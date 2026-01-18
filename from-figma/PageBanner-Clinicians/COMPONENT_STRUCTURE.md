# PageBanner-Clinicians Component Structure

## Design Overview
The PageBanner-Clinicians is a promotional banner component with two main sections:
- **Left Section**: Information about MORE Institute
- **Right Section**: Pre-registration form with purple gradient background

## Component Hierarchy

```
PageBanner-Clinicians (Main Container)
├── Title & Description Section (Left Column)
│   ├── Title: "MORE Institute"
│   ├── Description: Multi-paragraph text about the platform
│   │   ├ Bullet point 1: Engaging training
│   │   ├ Bullet point 2: 13 CEUs
│   │   ├ Bullet point 3: Professional content
│   │   ├ Bullet point 4: Ready-to-use tools
│   │   ├ Bullet point 5: Professional development
│   │   └ Closing paragraph
│   └── Spacing: 60px below title
│
└── Form Section (Right Column)
    ├── Background: Purple gradient image
    ├── Title: "No commitment today."
    ├── Subtitle: "Pre-register and you'll save 15% off the cost of $895."
    ├── Form Container
    │   ├── Input Group 1
    │   │   ├── Label: "First and Last Name"
    │   │   └── Input: Text field with placeholder "name@example.com"
    │   │
    │   ├── Input Group 2
    │   │   ├── Label: "Email" + Info Icon
    │   │   └── Input: Text field with placeholder "name@example.com"
    │   │
    │   ├── Input Group 3
    │   │   ├── Label: "Email" (Note: seems should be "Topic")
    │   │   ├── Dropdown: "Topic" with chevron icon
    │   │   └── Spacing between groups: 24px
    │   │
    │   └── Button: "Pre-Register"
    │       ├── Color: Magenta
    │       └── Position: Bottom right
    │
    └── Form Padding: 48px on all sides

```

## Element Breakdown by ID

### Left Column (Title & Description)
- **n_d40ba**: Container for title and description
- **n_1d5ce**: "MORE Institute" title
  - Font: Inter 46px, weight 800
  - Color: #374151
  - Spacing: 80px from left, 107px from top
  
- **n_b8bdb**: Description text with bullet points
  - Font: Inter 18px, weight 400
  - Color: #111928
  - Line height: 27px
  - Content includes 5 bullet points + closing paragraph

### Right Column (Form Section)
- **n_139b8**: Mask group with background image
  - Background: assets/05985f.png
  - Background size: Cover
  - Layout: Flex column with gap 24px

#### Form Title & Subtitle
- **n_6a704**: "No commitment today. Pre-register and you'll save 15% off the cost of $895."
  - Font: Inter 20px, weight 600
  - Color: #ffffff
  - Letter spacing: -0.40px
  - Line height: 28px

#### Form Inputs Container
- **n_9aec1**: Wrapper for all form inputs
  - Layout: Column
  - Gap: 24px between input groups

##### First Name/Last Name Input
- **n_e2289**: Input field container
  - Gap: 8px (between label and input)
  - **n_e8848**: Label "First and Last Name"
    - Font: Inter 18px, weight 400
    - Color: #ffffff
  - **n_65c28**: Placeholder text "name@example.com"
    - Font: Inter 16px, weight 400
    - Color: #6b7280

##### Email Select Input
- **n_10d61**: Select input container

###### Email Label Row
- **n_685a1**: Label row with icon
  - Gap: 8px
  - **n_c24ff**: Label "Email"
    - Font: Inter 18px, weight 400
    - Color: #ffffff
  - **n_15d10**: Info SVG icon
    - Source: assets/0c8a2b.svg
    - Border: 1px solid #9ca3af
    - Background: #9ca3af
    - Size: 12x12px

###### Topic Dropdown Row
- **n_d58e7**: Dropdown row
  - **n_20dc4**: Dropdown text "Topic"
    - Font: Inter 16px, weight 400
    - Color: #6b7280
  - **n_88e9a**: Chevron SVG icon
    - Source: assets/a4b0c0.svg
    - Border: 1px solid #6b7280
    - Background: #6b7280
    - Size: 9x5px

#### Submit Button
- **n_4b7a6**: "Pre-Register" button
  - Font: Inter 18px, weight 700
  - Color: #ffffff
  - Background: #FF00FF (magenta)
  - Position: Bottom right aligned
  - Dimensions: 112x27px

## Design Specifications

### Container
- Total width: 1440px
- Total height: 680px
- Layout: 2 equal columns (720px each)

### Left Column
- Width: 571px (with 80px left margin)
- Height: 588px (with 107px top margin)
- Background: #ffffff

### Right Column (Form)
- Width: 729px (full remaining width)
- Height: 680px (full height)
- Background: Purple gradient (assets/05985f.png)
- Padding: 48px

### Typography Scale
- **46px** - Main title (800 weight)
- **20px** - Form headline (600 weight)
- **18px** - Labels and body (400-700 weight)
- **16px** - Placeholders (400 weight)

### Color Usage
- **#FF00FF** (Magenta) - "MORE" text, button
- **#6D28D9** - Purple gradient dark
- **#A855F7** - Purple gradient light
- **#374151** - Primary text (title)
- **#111928** - Dark text (body)
- **#ffffff** - White text on purple
- **#6b7280** - Placeholder/secondary text
- **#9ca3af** - Borders/icons

## Responsive Behavior (Recommended)
For mobile/tablet, consider:
1. Stack columns vertically
2. Adjust font sizes proportionally
3. Maintain aspect ratio of background image
4. Ensure form remains accessible
5. Stack form inputs full-width
6. Position button centered or full-width

## Accessibility Considerations
- Info icon should have aria-label or title attribute
- Form inputs need proper labels (not just placeholders)
- Color contrast meets WCAG standards
- Button should be keyboard accessible
- Dropdown should be semantic `<select>` or proper ARIA role

## Interactive Elements
1. Form inputs - text entry
2. Dropdown - selection of topic
3. Pre-Register button - submission action
4. Info icon - may have tooltip/popover
