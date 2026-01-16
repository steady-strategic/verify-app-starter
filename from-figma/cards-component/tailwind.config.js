/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './from-figma/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Gray palette from Figma
        gray: {
          200: '#e5e7eb',
          700: '#374151',
          900: '#111928',
        },
        // Purple accent color from Figma
        purple: {
          600: '#8a38f5',
          700: '#7829d9',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading-lg': ['28px', {
          lineHeight: '35px',
          letterSpacing: '-0.56px',
          fontWeight: '600',
        }],
        'heading-md': ['20px', {
          lineHeight: '1.4',
          letterSpacing: '-0.4px',
          fontWeight: '600',
        }],
        'body-lg': ['18px', {
          lineHeight: '27px',
          fontWeight: '400',
        }],
        'button': ['18px', {
          fontWeight: '700',
        }],
      },
      spacing: {
        '14': '56px', // Main gap between sections
      },
      borderRadius: {
        'lg': '8px',
      },
      boxShadow: {
        'card': '0px 1px 10px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}