/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './ContactHero.tsx',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d946ef',
        'primary-dark': '#c026d3',
        text: {
          primary: '#111928',
          secondary: '#6b7280',
          light: '#9ca3af',
        },
        border: '#e5e7eb',
        'border-light': '#f4f4f4',
      },
      spacing: {
        '3xs': '8px',
        '2xs': '16px',
        xs: '24px',
        sm: '32px',
        md: '48px',
      },
      borderRadius: {
        xl: '24px',
      },
      fontSize: {
        'heading-lg': ['36px', { fontWeight: '800', letterSpacing: '-0.36px' }],
        'heading-sm': ['20px', { fontWeight: '400', lineHeight: '30px' }],
        'label': ['14px', { fontWeight: '500' }],
        'body': ['14px', { fontWeight: '400' }],
        'button': ['16px', { fontWeight: '700' }],
      },
      boxShadow: {
        'card': '0px 0px 9.4px rgba(0, 0, 0, 0.03)',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
