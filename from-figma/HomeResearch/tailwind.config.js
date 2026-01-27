/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#d80ada',
        'text-primary': '#111928',
        'text-secondary': '#374151',
        white: '#ffffff',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading-lg': ['28px', { lineHeight: '35px', letterSpacing: '-0.56px', fontWeight: '700' }],
        'heading-md': ['20px', { fontWeight: '700', lineHeight: '25px' }],
        'body-lg': ['18px', { fontWeight: '400', lineHeight: '27px' }],
      },
      spacing: {
        'gap-lg': '64px',
        'gap-md': '48px',
        'gap-sm': '16px',
        'gap-xs': '8px',
      },
    },
  },
  plugins: [],
}
