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
          from: '#6b21a8',
          to: '#0f172a',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        title: ['46px', { fontWeight: 800, letterSpacing: '-0.92px' }],
        body: ['18px', { fontWeight: 400, lineHeight: '27px' }],
      },
      spacing: {
        gap: '24px',
      },
    },
  },
  plugins: [],
}
