/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './from-figma/cards3x3/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Gray palette from Figma design
        gray: {
          200: '#e5e7eb',
          600: '#6b7280',
          700: '#374151',
          900: '#111928',
        },
        // Purple accent color from Figma
        purple: {
          600: '#ec4899',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'title': ['28px', {
          lineHeight: '35px',
          letterSpacing: '-0.56px',
          fontWeight: '600',
        }],
        'subheading': ['20px', {
          lineHeight: '30px',
          fontWeight: '400',
        }],
        'card-title': ['20px', {
          lineHeight: '1.4',
          letterSpacing: '-0.4px',
          fontWeight: '600',
        }],
        'body': ['18px', {
          lineHeight: '27px',
          fontWeight: '400',
        }],
        'button': ['20px', {
          fontWeight: '600',
        }],
      },
      spacing: {
        '18': '72px', // Main container gap
      },
      borderRadius: {
        'xl': '24px', // Container border-radius
      },
      boxShadow: {
        'card': '0px 0px 9.4px rgba(0, 0, 0, 0.03)',
      },
    },
  },
  plugins: [],
}