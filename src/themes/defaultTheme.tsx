export const defaultTheme = {
  colors: {
    // all colors
    black: '#0D0D0D',
    navy: '#004899',
  },
  zIndex: {
    modal: 10,
    background: -1,
  },
  boxShadows: {},
  gradient: {},
  radius: {
    none: '0',
    xsmall: '2px',
    small: '5px',
    medium: '10px',
  },
  fontSizes: {
    xxsmall: '10px',
    xsmall: '11px',
    small: '13px',
    medium: '16px',
    large: '18px',
    xlarge: '24px',
    xxlarge: '36px',
  },
  fontWeight: {
    light: '300',
    regular: '400',
    semibold: '600',
    bold: '700',
    extrabold: '800',
  },
  breakpoints: {
    xs: 480,
    s: 768,
    m: 900,
    l: 1200,
    xl: 1600,
  },
  fontFamily: {
    primary: "'Lato', sans-serif",
  },
} as const;

export type ThemeType = typeof defaultTheme;
