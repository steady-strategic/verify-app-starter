/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        text: {
          primary: '#111928',
          secondary: '#6b7280',
        },
        border: '#e5e7eb',
        dark: {
          primary: '#111928',
          secondary: '#1f2a37',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'blog-title': ['28px', { fontWeight: '700', letterSpacing: '-0.56px', lineHeight: '35px' }],
        'blog-body': ['18px', { fontWeight: '400', lineHeight: '27px' }],
        'blog-button': ['14px', { fontWeight: '500' }],
      },
      borderRadius: {
        'blog-lg': '8px',
      },
      boxShadow: {
        'blog-card': '0px 4px 6px rgba(0, 0, 0, 0.05), 0px 10px 15px rgba(0, 0, 0, 0.10)',
      },
      spacing: {
        'container-gap': '64px',
        'row-gap': '80px',
        'column-gap': '24px',
        'button-gap': '8px',
      },
    },
  },
  plugins: [],
}
