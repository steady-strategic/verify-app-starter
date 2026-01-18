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
          secondary: '#374151',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        title: ['46px', { fontWeight: '800', letterSpacing: '-0.92px', lineHeight: '1' }],
        body: ['18px', { fontWeight: '400', lineHeight: '27px' }],
      },
    },
  },
  plugins: [],
}
