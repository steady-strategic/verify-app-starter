// Tailwind theme configuration for Text-Clinicians design
module.exports = {
  extend: {
    colors: {
      'text': {
        primary: '#111928',
        secondary: '#6B7280'
      },
      'icon-bg': '#1a56db'
    },
    spacing: {
      'container-gap': '48px',
      'features-gap': '48px',
      'card-gap': '16px',
      'content-gap': '8px'
    },
    fontSize: {
      'heading': ['28px', { letterSpacing: '-0.56px', fontWeight: 700 }],
      'feature-title': ['20px', { fontWeight: 700 }],
      'feature-desc': ['16px', { lineHeight: '24px', fontWeight: 400 }]
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    }
  }
};
