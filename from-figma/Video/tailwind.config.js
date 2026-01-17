/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffffff',
        gradient: {
          from: '#c60ec8',
          to: '#48d8fd',
        },
        accent: '#fafafa',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        title: ['46px', { fontWeight: 800, letterSpacing: '-0.92px' }],
        body: ['16px', { fontWeight: 500, lineHeight: '24px' }],
      },
      spacing: {
        gap: '16px',
      },
    },
  },
  plugins: [],
}
