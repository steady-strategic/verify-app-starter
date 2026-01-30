// Design tokens for ClinicianCard component
// Extracted from Figma design

module.exports = {
  colors: {
    text: {
      primary: '#111928', // heading and body text
      button: '#111928', // button text
    },
    background: {
      separator: '#f3f4f6', // light gray separators
      button: '#ffffff', // white button background
    },
    border: {
      button: '#e5e7eb', // light gray button border
    },
    shadow: {
      default: 'rgba(0, 0, 0, 0.03)', // subtle shadow
      offset: '0px 0px 9.9px',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
    heading: {
      fontSize: '28px',
      fontWeight: '700',
      letterSpacing: '-0.56px',
    },
    body: {
      fontSize: '18px',
      fontWeight: '400',
    },
    button: {
      fontSize: '14px',
      fontWeight: '500',
    },
  },
  spacing: {
    cardGap: '6px',
    buttonGap: '8px',
  },
  borderRadius: {
    card: '8px',
    button: '8px',
  },
  dimensions: {
    cardWidth: '592px',
    cardHeight: '309px',
    buttonWidth: '116px',
    buttonHeight: '41px',
  },
};
