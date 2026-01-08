'use client';

import { createTheme, responsiveFontSizes } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    gradient: {
      primary: string;
      secondary: string;
      accent: string;
      hero: string;
      card: string;
    };
    coral: {
      main: string;
      light: string;
      dark: string;
    };
    teal: {
      main: string;
      light: string;
      dark: string;
    };
  }
  interface PaletteOptions {
    gradient?: {
      primary: string;
      secondary: string;
      accent: string;
      hero: string;
      card: string;
    };
    coral?: {
      main: string;
      light: string;
      dark: string;
    };
    teal?: {
      main: string;
      light: string;
      dark: string;
    };
  }
}

const baseTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1E3A8A',
      light: '#3B5CB8',
      dark: '#152A66',
    },
    secondary: {
      main: '#7C3AED',
      light: '#9B6BF2',
      dark: '#5B21B6',
    },
    coral: {
      main: '#F97316',
      light: '#FB923C',
      dark: '#EA580C',
    },
    teal: {
      main: '#14B8A6',
      light: '#2DD4BF',
      dark: '#0D9488',
    },
    gradient: {
      primary: 'linear-gradient(135deg, #1E3A8A 0%, #7C3AED 50%, #14B8A6 100%)',
      secondary: 'linear-gradient(135deg, #7C3AED 0%, #14B8A6 100%)',
      accent: 'linear-gradient(135deg, #F97316 0%, #7C3AED 100%)',
      hero: 'linear-gradient(180deg, #0A0E1A 0%, #1E3A8A 50%, #0D1425 100%)',
      card: 'linear-gradient(135deg, rgba(124, 58, 237, 0.1) 0%, rgba(20, 184, 166, 0.1) 100%)',
    },
    background: {
      default: '#0A0E1A',
      paper: '#0F172A',
    },
    text: {
      primary: '#F8FAFC',
      secondary: '#94A3B8',
    },
    divider: 'rgba(148, 163, 184, 0.12)',
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.02em',
      lineHeight: 1.1,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.2,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.01em',
      lineHeight: 1.3,
    },
    h4: {
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontWeight: 600,
      lineHeight: 1.5,
    },
    h6: {
      fontWeight: 600,
      lineHeight: 1.5,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.6,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 16,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 28px',
          fontSize: '1rem',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        },
        containedPrimary: {
          background: 'linear-gradient(135deg, #1E3A8A 0%, #7C3AED 100%)',
          boxShadow: '0 4px 20px rgba(124, 58, 237, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #2548A8 0%, #8B4FF5 100%)',
            boxShadow: '0 8px 30px rgba(124, 58, 237, 0.6)',
            transform: 'translateY(-2px)',
          },
        },
        containedSecondary: {
          background: 'linear-gradient(135deg, #7C3AED 0%, #14B8A6 100%)',
          boxShadow: '0 4px 20px rgba(20, 184, 166, 0.4)',
          '&:hover': {
            background: 'linear-gradient(135deg, #8B4FF5 0%, #2DD4BF 100%)',
            boxShadow: '0 8px 30px rgba(20, 184, 166, 0.6)',
            transform: 'translateY(-2px)',
          },
        },
        outlined: {
          borderWidth: 2,
          '&:hover': {
            borderWidth: 2,
            transform: 'translateY(-2px)',
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(148, 163, 184, 0.1)',
          borderRadius: 24,
          transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 24,
          paddingRight: 24,
          '@media (min-width: 600px)': {
            paddingLeft: 32,
            paddingRight: 32,
          },
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme);
