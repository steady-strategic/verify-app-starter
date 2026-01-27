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
        'border-light': '#e5e7eb',
        white: '#ffffff',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading-lg': ['28px', { lineHeight: '35px', letterSpacing: '-0.56px', fontWeight: '700' }],
        'heading-md': ['20px', { fontWeight: '600', letterSpacing: '-0.40px' }],
        'body-lg': ['18px', { fontWeight: '400' }],
        'label-sm': ['14px', { fontWeight: '500' }],
      },
      borderRadius: {
        'lg': '12px',
        'xl': '16px',
      },
      spacing: {
        'gap-lg': '96px',
        'gap-md': '64px',
        'gap-base': '32px',
        'gap-sm': '24px',
        'gap-xs': '16px',
        'gap-2xs': '10px',
      },
    },
  },
  plugins: [],
}
