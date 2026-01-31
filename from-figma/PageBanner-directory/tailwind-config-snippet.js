// Tailwind v3 Configuration Snippet for PageBanner-directory
// Add these extends to your tailwind.config.js

module.exports = {
  theme: {
    extend: {
      colors: {
        'primary-magenta': '#d80ada',
        'text-dark': '#111928',
        'text-secondary': '#6f6f6f',
      },
      spacing: {
        'gap-content': '64px',
        'gap-section': '24px',
        'gap-form': '10px',
        'gap-button': '8px',
      },
      borderRadius: {
        'form': '8px',
      },
      fontSize: {
        'title': ['50px', { lineHeight: '55px', letterSpacing: '-1px', fontWeight: '800' }],
        'description': ['18px', { lineHeight: '27px' }],
        'label': ['16px', { fontWeight: '400' }],
        'button': ['16px', { fontWeight: '700' }],
      },
      fontFamily: {
        'base': ['Inter', 'sans-serif'],
      },
    },
  },
}
