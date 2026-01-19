# Home-About Section - Tailwind CSS Classes

## Generated Tailwind Classes for the Home-About Design

### Container
```html
<div class="w-[1480px] h-[570px] border border-dashed border-[#8a38f5] rounded-[5px] p-8 flex gap-8 items-start">
```

### Profile Image
```html
<img class="w-[280px] h-[280px] rounded-full object-cover flex-shrink-0" />
```

### Content Wrapper
```html
<div class="flex-1 flex flex-col gap-4">
```

### Title (Part 1 - "MORE - Mindfulness-Oriented Recovery Enhancement")
```html
<h1 class="font-inter text-[28px] font-bold leading-[35px] tracking-[-0.56px] text-[#111928]">
  <span class="text-[#8a38f5]">MORE</span> - Mindfulness-Oriented Recovery Enhancement
</h1>
```

### Subtitle (Part 2 - "A Therapy Based on Science and Lasting Outcomes")
```html
<h2 class="font-inter text-[28px] font-bold leading-[35px] text-[#111928]">
  A Therapy Based on Science and Lasting Outcomes
</h2>
```

### Description
```html
<p class="font-inter text-[18px] font-normal leading-[27px] text-[#374151]">
  Designed by Dr. Eric Garland, PhD, LCSW, Endowed Professor in Health Sciences 
  at the University of California San Diego, Director of UCSD's ONEMIND and leading 
  expert on the use of mind-body therapies. Having authored 290 scientific articles, 
  Dr. Garland is the world's most prolific author of mindfulness research.
</p>
```

### Buttons Container
```html
<div class="flex gap-4 mt-auto">
```

### Button - LinkedIn Profile
```html
<button class="font-inter text-[14px] font-medium text-[#111928] border border-[#111928] rounded px-4 py-2 hover:border-[#8a38f5] hover:text-[#8a38f5] transition-all duration-300">
  LinkedIn Profile
</button>
```

### Button - Follow on X
```html
<button class="font-inter text-[14px] font-medium text-[#111928] border border-[#111928] rounded px-4 py-2 hover:border-[#8a38f5] hover:text-[#8a38f5] transition-all duration-300">
  Follow on X
</button>
```

## Custom Tailwind Configuration Additions

Add these to your `tailwind.config.ts` if using custom colors and spacing:

```typescript
theme: {
  extend: {
    colors: {
      'home-about': {
        'text-primary': '#111928',
        'text-secondary': '#374151',
        'border': '#8a38f5',
      },
    },
    spacing: {
      'component-gap': '32px',
    },
    fontSize: {
      'home-about-title': '28px',
      'home-about-body': '18px',
      'home-about-button': '14px',
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif'],
    },
  },
}
```

## Font Import

Add to your global CSS or layout:
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800');
```

Or use the font source provided: https://fonts.googleapis.com/css2?family=Inter:wght@400;500;700;800
