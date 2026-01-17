// Tailwind theme configuration for Text-HowItWorks design
module.exports = {
  extend: {
    colors: {
      'text': {
        primary: '#111928',
        secondary: '#374151'
      },
      'icon': {
        mindfulness: '#E879F9',
        reappraisal: '#FFA500',
        savoring: '#00D4FF'
      }
    },
    spacing: {
      'container-gap': '92px',
      'features-gap': '48px',
      'card-gap': '16px',
      'content-gap': '8px'
    },
    fontSize: {
      'heading': ['28px', { lineHeight: '35px', letterSpacing: '-0.56px', fontWeight: 700 }],
      'feature-title': ['20px', { lineHeight: '25px', fontWeight: 700 }],
      'feature-desc': ['18px', { lineHeight: '27px', fontWeight: 400 }]
    },
    fontFamily: {
      'inter': ['Inter', 'sans-serif']
    }
  }
};
