/**
 * Tailwind Configuration Extension for PageBanner-Research
 * 
 * Add these configurations to your main tailwind.config.js file
 * in the theme.extend section
 */

module.exports = {
  theme: {
    extend: {
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      colors: {
        'banner-primary': '#ffffff',
        'banner-bg-start': '#7c3aed',
        'banner-bg-end': '#1a0a2e',
      },
      fontSize: {
        'banner-title': ['46px', { lineHeight: '1.3', letterSpacing: '-0.92px' }],
        'banner-subtitle': ['28px', { lineHeight: '35px', letterSpacing: '-0.56px' }],
      },
      spacing: {
        'banner-gap': '24px',
        'banner-pad-left': '100px',
        'banner-pad-top': '171px',
      },
      borderRadius: {
        'banner-card': '24px',
      },
      width: {
        'banner-full': '1451px',
        'banner-image': '655px',
      },
      height: {
        'banner-full': '685px',
        'banner-image': '485px',
      },
    },
  },
};
