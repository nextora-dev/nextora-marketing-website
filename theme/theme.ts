'use client';

/**
 * NextOra Light Theme Configuration
 * =================================
 * This project uses LIGHT THEME ONLY.
 * All colors, backgrounds, and components are optimized for light mode.
 */

import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { colors, gradients } from './colors';

declare module '@mui/material/styles' {
  interface Palette {
    gradient: {
      primary: string;
      secondary: string;
      accent: string;
      hero: string;
      card: string;
      cardHover: string;
      bluePrimary: string;
      blueIndigo: string;
      skyBlue: string;
      indigoAccent: string;
      cyanAccent: string;
      success: string;
      glassLight: string;
      glassMedium: string;
    };
    sky: {
      main: string;
      light: string;
      lighter: string;
    };
    cyan: {
      main: string;
      light: string;
      lighter: string;
    };
    indigo: {
      main: string;
      light: string;
      lighter: string;
    };
  }
  interface PaletteOptions {
    gradient?: {
      primary: string;
      secondary: string;
      accent: string;
      hero: string;
      card: string;
      cardHover: string;
      bluePrimary: string;
      blueIndigo: string;
      skyBlue: string;
      indigoAccent: string;
      cyanAccent: string;
      success: string;
      glassLight: string;
      glassMedium: string;
    };
    sky?: {
      main: string;
      light: string;
      lighter: string;
    };
    cyan?: {
      main: string;
      light: string;
      lighter: string;
    };
    indigo?: {
      main: string;
      light: string;
      lighter: string;
    };
  }
}

const baseTheme = createTheme({
  palette: {
    mode: 'light', // LIGHT THEME ONLY - Do not change
    primary: {
      main: colors.primary.main,      // Primary Blue
      light: colors.primary.light,
      dark: colors.primary.main,      // Use main as dark fallback
      contrastText: colors.white,
    },
    secondary: {
      main: colors.indigo.main,       // Indigo Accent
      light: colors.indigo.light,
      dark: colors.indigo.main,       // Use main as dark fallback
      contrastText: colors.white,
    },
    sky: {
      main: colors.sky.main,          // Sky Blue
      light: colors.sky.light,
      lighter: colors.sky.lighter,
    },
    cyan: {
      main: colors.cyan.main,         // Cyan Accent
      light: colors.cyan.light,
      lighter: colors.cyan.lighter,
    },
    indigo: {
      main: colors.indigo.main,
      light: colors.indigo.light,
      lighter: colors.indigo.lighter,
    },
    success: {
      main: colors.success.main,      // Success
      light: colors.success.light,
      dark: colors.success.main,      // Use main as dark fallback
      contrastText: colors.white,
    },
    error: {
      main: colors.error.main,        // Error/Urgent
      light: colors.error.light,
      dark: colors.error.main,        // Use main as dark fallback
    },
    warning: {
      main: colors.warning.main,      // Warning
      light: colors.warning.light,
      dark: colors.warning.main,      // Use main as dark fallback
    },
    info: {
      main: colors.sky.main,
      light: colors.sky.light,
      dark: colors.sky.main,          // Use main as dark fallback
    },
    gradient: {
      primary: gradients.bluePrimary,
      secondary: gradients.blueIndigo,
      accent: gradients.indigoAccent,
      hero: gradients.hero,
      card: gradients.card,
      cardHover: gradients.cardHover,
      bluePrimary: gradients.bluePrimary,
      blueIndigo: gradients.blueIndigo,
      skyBlue: gradients.skyBlue,
      indigoAccent: gradients.indigoAccent,
      cyanAccent: gradients.cyanAccent,
      success: gradients.success,
      glassLight: gradients.glassLight,
      glassMedium: gradients.glassMedium,
    },
    background: {
      default: colors.background,     // Light grey background
      paper: colors.white,            // White paper (cards stay white)
    },
    text: {
      primary: colors.text.primary,
      secondary: colors.text.secondary,
    },
    divider: 'rgba(148, 163, 184, 0.12)',
    grey: colors.grey,
  },
  typography: {
    fontFamily: '"Plus Jakarta Sans", "Inter", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontWeight: 800,
      letterSpacing: '-0.025em',
      lineHeight: 1.1,
      color: colors.text.primary,
    },
    h2: {
      fontWeight: 700,
      letterSpacing: '-0.02em',
      lineHeight: 1.2,
      color: colors.text.primary,
    },
    h3: {
      fontWeight: 700,
      letterSpacing: '-0.015em',
      lineHeight: 1.3,
      color: colors.text.primary,
    },
    h4: {
      fontWeight: 600,
      letterSpacing: '-0.01em',
      lineHeight: 1.4,
      color: colors.text.primary,
    },
    h5: {
      fontWeight: 600,
      letterSpacing: '-0.005em',
      lineHeight: 1.5,
      color: colors.text.primary,
    },
    h6: {
      fontWeight: 600,
      lineHeight: 1.5,
      color: colors.text.primary,
    },
    subtitle1: {
      fontSize: '1.125rem',
      fontWeight: 500,
      lineHeight: 1.6,
      color: colors.text.secondary,
    },
    subtitle2: {
      fontSize: '0.875rem',
      fontWeight: 600,
      lineHeight: 1.6,
      color: colors.text.secondary,
    },
    body1: {
      fontSize: '1rem',
      lineHeight: 1.7,
      color: colors.text.secondary,
    },
    body2: {
      fontSize: '0.875rem',
      lineHeight: 1.65,
      color: colors.text.secondary,
    },
    caption: {
      fontSize: '0.75rem',
      lineHeight: 1.5,
      color: colors.text.muted,
    },
    overline: {
      fontSize: '0.75rem',
      fontWeight: 700,
      letterSpacing: '0.1em',
      lineHeight: 1.5,
      textTransform: 'uppercase',
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
      letterSpacing: '0.01em',
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    'none',
    '0 1px 2px 0 rgba(0, 0, 0, 0.03)',
    '0 1px 3px 0 rgba(0, 0, 0, 0.06), 0 1px 2px -1px rgba(0, 0, 0, 0.06)',
    '0 4px 6px -1px rgba(0, 0, 0, 0.06), 0 2px 4px -2px rgba(0, 0, 0, 0.06)',
    '0 10px 15px -3px rgba(0, 0, 0, 0.06), 0 4px 6px -4px rgba(0, 0, 0, 0.06)',
    '0 20px 25px -5px rgba(0, 0, 0, 0.06), 0 8px 10px -6px rgba(0, 0, 0, 0.06)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
    '0 25px 50px -12px rgba(0, 0, 0, 0.15)',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          scrollBehavior: 'smooth',
          WebkitFontSmoothing: 'antialiased',
          MozOsxFontSmoothing: 'grayscale',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '12px 28px',
          fontSize: '0.9375rem',
          fontWeight: 600,
          transition: 'all 0.25s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:focus-visible': {
            outline: `3px solid ${colors.primary.light}`,
            outlineOffset: 2,
          },
        },
        containedPrimary: {
          background: gradients.bluePrimary,
          boxShadow: '0 4px 14px rgba(96, 165, 250, 0.35)',
          color: colors.white,
          '&:hover': {
            background: `linear-gradient(135deg, ${colors.primary.lighter} 0%, ${colors.primary.light} 100%)`,
            boxShadow: '0 8px 25px rgba(96, 165, 250, 0.45)',
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0)',
            boxShadow: '0 2px 8px rgba(96, 165, 250, 0.4)',
          },
        },
        containedSecondary: {
          background: gradients.indigoAccent,
          boxShadow: '0 4px 14px rgba(129, 140, 248, 0.35)',
          color: colors.white,
          '&:hover': {
            background: `linear-gradient(135deg, ${colors.indigo.light} 0%, ${colors.indigo.lighter} 100%)`,
            boxShadow: '0 8px 25px rgba(129, 140, 248, 0.45)',
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0)',
            boxShadow: '0 2px 8px rgba(129, 140, 248, 0.4)',
          },
        },
        outlined: {
          borderWidth: 2,
          borderColor: colors.grey[300],
          color: colors.text.primary,
          '&:hover': {
            borderWidth: 2,
            borderColor: colors.primary.main,
            backgroundColor: 'rgba(96, 165, 250, 0.08)',
            transform: 'translateY(-2px)',
          },
          '&:active': {
            transform: 'translateY(0)',
          },
        },
        text: {
          color: colors.primary.main,
          '&:hover': {
            backgroundColor: 'rgba(96, 165, 250, 0.1)',
          },
        },
        sizeLarge: {
          padding: '14px 32px',
          fontSize: '1rem',
        },
        sizeSmall: {
          padding: '8px 20px',
          fontSize: '0.875rem',
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: colors.white,
          backdropFilter: 'blur(20px)',
          border: `1px solid ${colors.grey[200]}`,
          borderRadius: 20,
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.07), 0 2px 4px -1px rgba(0, 0, 0, 0.04)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': {
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04)',
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 600,
          fontSize: '0.75rem',
        },
        colorPrimary: {
          backgroundColor: 'rgba(96, 165, 250, 0.15)',
          color: colors.primary.main,
          '&:hover': {
            backgroundColor: 'rgba(96, 165, 250, 0.25)',
          },
        },
        colorSecondary: {
          backgroundColor: 'rgba(129, 140, 248, 0.15)',
          color: colors.indigo.main,
          '&:hover': {
            backgroundColor: 'rgba(129, 140, 248, 0.25)',
          },
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: {
          paddingLeft: 20,
          paddingRight: 20,
          '@media (min-width: 600px)': {
            paddingLeft: 32,
            paddingRight: 32,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: 'transparent',
          backdropFilter: 'none',
          boxShadow: 'none',
          color: colors.text.primary,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          transition: 'all 0.2s ease',
          '&:focus-visible': {
            outline: `3px solid ${colors.primary.light}`,
            outlineOffset: 2,
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
            transition: 'all 0.2s ease',
            '& fieldset': {
              borderColor: colors.grey[300],
              borderWidth: 1.5,
            },
            '&:hover fieldset': {
              borderColor: colors.grey[400],
            },
            '&.Mui-focused fieldset': {
              borderColor: colors.primary.main,
              borderWidth: 2,
            },
          },
        },
      },
    },
    MuiAccordion: {
      styleOverrides: {
        root: {
          borderRadius: '16px !important',
          boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
          '&:before': {
            display: 'none',
          },
          '&.Mui-expanded': {
            margin: 0,
          },
        },
      },
    },
    MuiLink: {
      styleOverrides: {
        root: {
          color: colors.primary.main,
          textDecoration: 'none',
          fontWeight: 500,
          transition: 'color 0.2s ease',
          '&:hover': {
            color: colors.primary.light,
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          borderColor: colors.grey[200],
        },
      },
    },
  },
});

export const theme = responsiveFontSizes(baseTheme);
