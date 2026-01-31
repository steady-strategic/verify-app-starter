# PageBanner-directory Design Specifications

## Overview
This is the "Find a Clinician" hero banner component for the directory page. It features a dark purple background with a state selector dropdown and search button.

## Component Structure

### Main Container (n_815dc)
- **Name:** Content
- **Layout:** Column
- **Gap:** 64px
- **Background:** Dark purple gradient (visible in page-banner-bg.png)

### Title & Description Section (n_33c9a)
- **Name:** Title & Desc
- **Layout:** Column
- **Gap:** 24px

#### Title (n_8ef35)
- **Text:** "Find a Clinician"
- **Font:** Inter, 800 weight
- **Size:** 50px
- **Line Height:** 55px
- **Letter Spacing:** -1px
- **Color:** #ffffff (white)
- **Box:** [80, 120, 768, 55]

#### Description (n_cb0d5)
- **Text:** "Looking to receive MORE therapy from a clinician near you? Select your state to begin your search. Each listed clinician has been officially trained and certified in MORE therapy by Dr. Eric Garland."
- **Font:** Inter, 400 weight
- **Size:** 18px
- **Line Height:** 27px
- **Color:** #ffffff (white)
- **Box:** [80, 199, 768, 81]

### Form Section (n_209f0)
- **Name:** Form
- **Layout:** Row Container
- **Gap:** 10px
- **Border Radius:** 8px
- **Background Color:** white
- **Box:** [80, 344, 469, 72]

#### Dropdown Input (n_7f685)
- **Name:** Content
- **Layout:** Row
- **Gap:** 10px

##### State Label (n_bf92d)
- **Text:** "California"
- **Font:** Inter, 400 weight
- **Size:** 16px
- **Color:** #111928 (dark gray)
- **Box:** [106, 368, 252, 24]

##### Dropdown Icon (n_cf444)
- **SVG:** assets/97d78c.svg
- **Color:** #6f6f6f (gray)
- **Box:** [368, 374, 18, 12]

### Search Button (n_7097b)
- **Name:** Button
- **Layout:** Row Container
- **Gap:** 8px
- **Border Radius:** 8px
- **Background Color:** #d80ada (magenta/pink)
- **Box:** [412, 354, 127, 52]

#### Search Icon (n_06fd2)
- **SVG:** assets/34ebc5.svg
- **Color:** #ffffff (white)
- **Box:** [436, 372, 16, 16]

#### Button Text (n_f2411)
- **Text:** "Search"
- **Font:** Inter, 700 weight
- **Size:** 16px
- **Color:** #ffffff (white)
- **Box:** [460, 368, 55, 24]

## Design Tokens

### Colors
| Name | Value | Usage |
|------|-------|-------|
| Primary Button | #d80ada | Search button background |
| Text Primary | #ffffff | Headings, body text |
| Text Dark | #111928 | Dropdown text |
| Icon/Divider | #6f6f6f | Icon colors |

### Typography
| Element | Font | Size | Weight | Line Height |
|---------|------|------|--------|-------------|
| Title | Inter | 50px | 800 | 55px |
| Description | Inter | 18px | 400 | 27px |
| Label | Inter | 16px | 400 | - |
| Button | Inter | 16px | 700 | - |

### Spacing
| Element | Spacing |
|---------|---------|
| Content Gap | 64px |
| Section Gap | 24px |
| Form Items Gap | 10px |
| Button Items Gap | 8px |

### Border Radius
- Form container: 8px
- Button: 8px

## Assets
- `dropdown-chevron.svg` - Dropdown arrow icon
- `search-icon.svg` - Search icon
- `page-banner-bg.png` - Background image/gradient

## Font Resources
- Source: https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800
