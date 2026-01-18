/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1f2a37',
        secondary: '#454a55',
        accent: {
          magenta: '#e704e7',
          orange: '#f59e0b',
          cyan: '#06b6d4',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        title: ['28px', { fontWeight: 700, letterSpacing: '-0.56px', lineHeight: '35px' }],
        subtitle: ['20px', { fontWeight: 600 }],
        'step-label': ['18px', { fontWeight: 500, letterSpacing: '-0.36px' }],
        'card-title': ['16px', { fontWeight: 600 }],
        description: ['18px', { fontWeight: 400, lineHeight: '27px' }],
      },
      boxShadow: {
        'card-shadow': '0px 0px 9.4px rgba(0, 0, 0, 0.03)',
      },
      borderRadius: {
        card: '12px',
      },
    },
  },
  plugins: [],
}
