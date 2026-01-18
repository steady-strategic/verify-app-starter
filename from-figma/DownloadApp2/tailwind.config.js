/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        'text-primary': '#ffffff',
        'text-secondary': '#6b7280',
        accent: {
          magenta: '#e704e7',
        },
        'separator': '#a859f2',
        'button-primary': '#e704e7',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      fontSize: {
        title: ['64px', { fontWeight: 300, letterSpacing: '-3.20px' }],
        body: ['20px', { fontWeight: 400, lineHeight: '30px' }],
        'feature-title': ['16px', { fontWeight: 700 }],
        'button-small': ['12px', { fontWeight: 400, lineHeight: '12px' }],
        'button-label': ['14px', { fontWeight: 700 }],
      },
      borderRadius: {
        button: '8px',
      },
      backgroundImage: {
        'gradient-dark': 'linear-gradient(135deg, #0f0c2e 0%, #3d1f7e 50%, #7b1fa2 100%)',
      },
    },
  },
  plugins: [],
}
