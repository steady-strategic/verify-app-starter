# Blog-hero Section Design Specifications

## Overview
This is the design for the "Blog-hero" section featuring a blog header with featured research articles and blog posts by Dr. Eric Garland. The section includes chart visualizations and blog card components displaying research content.

## Container
- **Width**: 1480px
- **Height**: 990px
- **Border**: 1px dashed #8a38f5
- **Border Radius**: 5px

## Main Sections

### Header Section
- **Gap**: 48px

#### Heading & Description
- **Gap**: 16px

##### Heading ("Our Blog")
- **Font**: Inter, sans-serif
- **Font Size**: 46px
- **Font Weight**: 800
- **Letter Spacing**: -0.92px
- **Color**: #111928

##### Description ("Read the research and learn more about MORE")
- **Font**: Inter, sans-serif
- **Font Size**: 20px
- **Font Weight**: 400
- **Color**: #6b7280

### Charts Row
- **Number of Charts**: 3
- **Assets**: 
  - `chart-research-paper.svg`
  - `chart-blog-post-1.svg`
  - `chart-blog-post-2.svg`
- **Size**: 358px × 200px each

### Blog Card Components
- **Number of Cards**: 3
- **Card Width**: 405-406px
- **Card Height**: 579-608px
- **Border Radius**: 8px
- **Box Shadow**: 0px 0px 9.4px rgba(0, 0, 0, 0.03)
- **Gap**: 16px

#### Card Header
- **Background**: Varies by card (colored header area)
- **Content Gap**: 12px

#### Card Content
- **Gap**: 12px

##### Badge/Tag
- **Font**: Inter, sans-serif
- **Font Size**: 12px
- **Font Weight**: 500
- **Color**: #ffffff (white text on colored background)
- **Examples**: "Research Paper", "Blog Post"

##### Title
- **Font**: Inter, sans-serif
- **Font Size**: 20px
- **Font Weight**: 600
- **Letter Spacing**: -0.40px
- **Line Height**: 28px
- **Color**: #111928

##### Description
- **Font**: Inter, sans-serif
- **Font Size**: 16px
- **Font Weight**: 400
- **Line Height**: 24px
- **Color**: #6b7280

#### Author Section
- **Gap**: 12px
- **Avatar Size**: 32px × 32px
- **Border Radius**: 100px (circular)

##### Author Name
- **Font**: Inter, sans-serif
- **Font Size**: 14px
- **Font Weight**: 500
- **Color**: #111928

##### Publish Date & Read Time
- **Font**: Inter, sans-serif
- **Font Size**: 14px
- **Font Weight**: 400
- **Color**: #6b7280

## Cards Content

### Card 1 - Research Paper
- **Tag**: "Research Paper"
- **Title**: "Quieting the Addicted Brain: Theta Waves, the Default Mode Network, and thePower of MORE"
- **Description**: "For therapists working at the intersection of addiction, emotional distress, and chronic pain, the need for effective, evidencebased interventions has never been more urgent."
- **Author**: Dr. Eric Garland
- **Date**: Aug 10, 2025 · 6 min read

### Card 2 - Blog Post
- **Tag**: "Blog Post"
- **Title**: "Treating Trauma, Pain, and Addiction Together How Mindfulness-Oriented Recovery Enhancement (MORE) Builds Emotional Regulation and Reduces Substance Misuse"
- **Description**: "How Mindfulness-Oriented Recovery Enhancement (MORE) Builds Emotional Regulation and Reduces Substance Misuse"
- **Author**: Dr. Eric Garland
- **Date**: Aug 10, 2025 · 6 min read

### Card 3 - Blog Post
- **Tag**: "Blog Post"
- **Title**: "Rewiring the Brain to Heal from Addiction: How Mindfulness-Oriented Recovery Enhancement (MORE) Restores Joy and Reduces Craving"
- **Description**: "As a scientist and clinician, I've seen how addiction doesn't just hijack behavior, it fundamentally rewires the brain."
- **Author**: Dr. Eric Garland
- **Date**: Aug 1, 2026 · 23 min read

## Design Tokens

| Token | Value |
|-------|-------|
| Container Border | 1px dashed #8a38f5 |
| Primary Text Color | #111928 |
| Secondary Text Color | #6b7280 |
| Heading Font Size | 46px |
| Card Radius | 8px |
| Card Shadow | 0px 0px 9.4px rgba(0, 0, 0, 0.03) |
| Badge Text Color | #ffffff |
| Main Gap | 48px |
| Content Gap | 16px |

## Asset Files
- `chart-research-paper.svg` - Statistical chart visualization for research paper
- `chart-blog-post-1.svg` - Statistical chart visualization for blog post 1
- `chart-blog-post-2.svg` - Statistical chart visualization for blog post 2
- `dr-eric-garland-avatar.jpg` - Author avatar image (32x32px, circular)
