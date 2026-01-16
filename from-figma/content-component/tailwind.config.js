/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './from-figma/content-component/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Gray palette from Figma design
        gray: {
          200: '#e5e7eb',
          700: '#374151',
          900: '#111928',
        },
        // Purple/Magenta accent for icons
        purple: {
          600: '#ec4899',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading': ['28px', {
          lineHeight: '1',
          letterSpacing: '-0.56px',
          fontWeight: '600',
        }],
        'subheading': ['20px', {
          lineHeight: '28px',
          letterSpacing: '-0.4px',
          fontWeight: '600',
        }],
        'body': ['18px', {
          lineHeight: '1.6',
          fontWeight: '400',
        }],
      },
      spacing: {
        '16': '64px', // Row gap
        '8': '32px',  // Column gap
        '4': '16px',  // Content gap
        '2.5': '10px', // Feature row gap
      },
      borderRadius: {
        'xl': '12px', // Image border radius
      },
    },
  },
  plugins: [],
}