# FAQ Component Design Specification

## Overview
This is a FAQ accordion component with a heading and multiple expandable questions/answers.

## Design Tokens

### Colors
- **Primary Text (Dark)**: `#111928` - Used for headings and question text
- **Secondary Text (Gray)**: `#6b7280` - Used for answer/body text
- **Accent (Magenta)**: `#d80ada` - Used for question mark icons
- **Border**: `#e5e7eb` - Light gray border between accordion items
- **Icon Gray**: `#6b7280` - Used for collapse/expand arrows

### Typography
- **Font Family**: Inter, sans-serif
- **Heading (FAQ's)**:
  - Font size: 50px
  - Font weight: 800
  - Letter spacing: -1px
  - Color: #111928

- **Question Text**:
  - Font size: 18px
  - Font weight: 400
  - Color: #111928

- **Answer Text**:
  - Font size: 16px
  - Font weight: 400
  - Line height: 24px
  - Color: #6b7280

### Spacing
- **Container Gap**: 48px (between title and accordion)
- **Heading & Icon Gap**: 8px
- **Paragraphs Gap**: 6px

### Borders & Radius
- **Accordion Item Border**: 1px solid #e5e7eb
- **Border Radius**: 8px 8px 0px 0px (top) and 0px 0px 8px 8px (bottom)

## Component Structure

### Main Container
- `gap: 48px`
- Vertical layout (column)

### Heading
- Text: "FAQ's"
- 50px, 800 weight, -1px letter-spacing

### Accordion
- Multiple accordion items
- Each item has:
  - **Button Row**: Contains question + icons
    - Question icon: 16x16px, magenta (#d80ada)
    - Question text: 18px, regular weight
    - Collapse/expand icon: 11x6px, gray (#6b7280)
  - **Answer Content**: Hidden when closed
    - Multiple paragraphs
    - 16px font, gray text (#6b7280)

## Assets
- `assets/question-icon.svg` - Question mark icon (16x16px, should be colored #d80ada)
- `assets/chevron-up-icon.svg` - Chevron up (expand arrow)
- `assets/chevron-down-icon.svg` - Chevron down (collapse arrow)

## Interactive Behavior
- First accordion item (Q1) is expanded by default
- Other items are collapsed by default
- Clicking on a question toggles the answer visibility
- Icon rotates/changes based on state (up = expanded, down = collapsed)
