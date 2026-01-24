/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'faq-dark': '#111928',
        'faq-gray': '#6b7280',
        'faq-magenta': '#d80ada',
        'faq-border': '#e5e7eb',
      },
      fontFamily: {
        'inter': ['Inter', 'sans-serif'],
      },
      fontSize: {
        'faq-heading': ['50px', { lineHeight: '1', letterSpacing: '-1px' }],
        'faq-question': ['18px', { lineHeight: '1.5' }],
        'faq-answer': ['16px', { lineHeight: '24px' }],
      },
      spacing: {
        'faq-container-gap': '48px',
        'faq-icon-gap': '8px',
        'faq-text-gap': '6px',
      },
      borderRadius: {
        'faq-top': '8px 8px 0px 0px',
        'faq-bottom': '0px 0px 8px 8px',
      },
    },
  },
  plugins: [],
}
