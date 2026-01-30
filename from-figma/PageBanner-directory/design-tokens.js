// Design tokens for PageBanner-directory component
// Extracted from Figma design

module.exports = {
  colors: {
    text: {
      primary: '#ffffff', // headings and button text
      secondary: '#111928', // form text
      accent: '#d80ada', // button background
    },
    background: {
      primary: '#1a1a2e', // dark purple/navy
      button: '#d80ada', // magenta button
      icon: '#6f6f6f', // gray icon
    },
    border: {
      default: '#e5e7eb',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    heading: {
      fontSize: '50px',
      fontWeight: '800',
      letterSpacing: '-1px',
      lineHeight: '55px',
    },
    body: {
      fontSize: '18px',
      fontWeight: '400',
      lineHeight: '27px',
    },
    formLabel: {
      fontSize: '16px',
      fontWeight: '400',
    },
    button: {
      fontSize: '16px',
      fontWeight: '700',
    },
  },
  spacing: {
    contentGap: '64px',
    titleDescGap: '24px',
    formGap: '10px',
    buttonGap: '8px',
  },
  borderRadius: {
    default: '8px',
  },
};
