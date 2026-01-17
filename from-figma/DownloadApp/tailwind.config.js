/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        dark: '#111928',
        secondary: '#454a55',
        light: '#6b7280',
        accent: {
          green: '#0e9f6e',
        },
        border: '#e5e7eb',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        title: ['36px', { fontWeight: 300, letterSpacing: '-0.36px' }],
        body: ['20px', { fontWeight: 400, lineHeight: '30px' }],
        'feature-title': ['16px', { fontWeight: 700 }],
        'button-small': ['12px', { fontWeight: 400, lineHeight: '12px' }],
        'button-label': ['14px', { fontWeight: 700 }],
      },
      borderRadius: {
        button: '8px',
      },
    },
  },
  plugins: [],
}
