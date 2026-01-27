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
        'text-secondary': '#454a55',
        'border-light': '#f4f4f4',
      },
      fontFamily: {
        inter: ['Inter', 'sans-serif'],
      },
      fontSize: {
        'heading-lg': ['28px', { lineHeight: '35px', letterSpacing: '-0.56px', fontWeight: '700' }],
        'heading-md': ['20px', { lineHeight: '28px', letterSpacing: '-0.40px', fontWeight: '600' }],
        'body-lg': ['18px', { fontWeight: '500', letterSpacing: '-0.36px' }],
        'body-md': ['16px', { fontWeight: '600' }],
      },
      borderRadius: {
        'lg': '12px',
      },
      boxShadow: {
        'subtle': '0px 0px 9.9px rgba(0, 0, 0, 0.03)',
      },
      spacing: {
        'gap-lg': '54px',
        'gap-md': '24px',
      },
    },
  },
  plugins: [],
}
