// Primary Colors
export const colors = {
  // Primary Colors - Blue family (light variants only)
  primary: {
    main: '#3B82F6',      // Primary Blue
    light: '#60A5FA',
    lighter: '#93C5FD',
  },
  // Indigo for accents and gradients (light variants only)
  indigo: {
    main: '#818CF8',      // Indigo Accent
    light: '#A5B4FC',
    lighter: '#C7D2FE',
    accent: '#A78BFA',
  },
  // Sky blue for informational elements (light variants only)
  sky: {
    main: '#38BDF8',      // Sky Blue
    light: '#7DD3FC',
    lighter: '#BAE6FD',
  },
  // Cyan for highlights and tertiary elements (light variants only)
  cyan: {
    main: '#22D3EE',      // Cyan Accent
    light: '#67E8F9',
    lighter: '#A5F3FC',
  },
  white: '#FFFFFF',       // White Base

  // Semantic Colors (light variants only)
  success: {
    main: '#34D399',
    light: '#6EE7B7',
    lighter: '#A7F3D0',
  },
  error: {
    main: '#F87171',      // Error/Urgent
    light: '#FCA5A5',
    lighter: '#FECACA',
  },
  warning: {
    main: '#FBBF24',
    light: '#FCD34D',
    lighter: '#FDE68A',
  },
  neutral: '#94A3B8',     // Neutral
  background: '#F8FAFC',  // Light grey background

  // Text Colors - For readability on light backgrounds
  text: {
    primary: '#334155',   // Slate 700 - readable but not too dark
    secondary: '#64748B', // Slate 500
    muted: '#94A3B8',
    disabled: '#CBD5E1',
  },

  // Grey Scale - Light colors only
  grey: {
    50: '#F8FAFC',
    100: '#F1F5F9',
    200: '#E2E8F0',
    300: '#CBD5E1',
    400: '#94A3B8',
    500: '#64748B',
  },
} as const;

// Gradient Combinations - Light theme gradients
export const gradients = {
  // Blue Primary Gradient - Light CTA gradient
  bluePrimary: 'linear-gradient(135deg, #60A5FA 0%, #3B82F6 100%)',

  // Blue to Indigo Gradient - Secondary gradient
  blueIndigo: 'linear-gradient(135deg, #60A5FA 0%, #818CF8 100%)',

  // Sky to Blue Gradient - Info/Supporting gradient
  skyBlue: 'linear-gradient(135deg, #38BDF8 0%, #60A5FA 100%)',

  // Indigo Accent Gradient - Accent elements
  indigoAccent: 'linear-gradient(135deg, #818CF8 0%, #A78BFA 100%)',

  // Cyan Accent Gradient - Tertiary elements
  cyanAccent: 'linear-gradient(135deg, #22D3EE 0%, #38BDF8 100%)',

  // Success Gradient
  success: 'linear-gradient(135deg, #34D399 0%, #6EE7B7 100%)',

  // Additional UI Gradients - All light backgrounds
  hero: 'linear-gradient(180deg, #FFFFFF 0%, #EEF2FF 50%, #FFFFFF 100%)',
  heroMesh: `
    radial-gradient(ellipse at 20% 0%, rgba(99, 102, 241, 0.18) 0%, transparent 50%),
    radial-gradient(ellipse at 80% 0%, rgba(139, 92, 246, 0.15) 0%, transparent 50%),
    radial-gradient(ellipse at 50% 100%, rgba(59, 130, 246, 0.12) 0%, transparent 50%),
    linear-gradient(180deg, #FFFFFF 0%, #F5F3FF 50%, #FFFFFF 100%)
  `,
  card: 'linear-gradient(135deg, rgba(96, 165, 250, 0.04) 0%, rgba(129, 140, 248, 0.04) 100%)',
  cardHover: 'linear-gradient(135deg, rgba(96, 165, 250, 0.08) 0%, rgba(129, 140, 248, 0.08) 100%)',

  // Subtle section gradients
  sectionLight: 'linear-gradient(180deg, #FFFFFF 0%, #F8FAFC 100%)',
  sectionMesh: `
    radial-gradient(at 40% 20%, rgba(96, 165, 250, 0.08) 0px, transparent 50%),
    radial-gradient(at 80% 0%, rgba(129, 140, 248, 0.06) 0px, transparent 50%),
    radial-gradient(at 0% 50%, rgba(56, 189, 248, 0.08) 0px, transparent 50%),
    radial-gradient(at 80% 50%, rgba(34, 211, 238, 0.06) 0px, transparent 50%),
    radial-gradient(at 0% 100%, rgba(129, 140, 248, 0.06) 0px, transparent 50%),
    #FFFFFF
  `,

  // Box Shadow Gradients - Soft glow effects
  primaryGlow: '0 4px 20px rgba(96, 165, 250, 0.25)',
  primaryGlowHover: '0 8px 32px rgba(96, 165, 250, 0.35)',
  secondaryGlow: '0 4px 20px rgba(129, 140, 248, 0.25)',
  secondaryGlowHover: '0 8px 32px rgba(129, 140, 248, 0.35)',
  skyGlow: '0 4px 20px rgba(56, 189, 248, 0.25)',
  cyanGlow: '0 4px 20px rgba(34, 211, 238, 0.25)',

  // Glass effect backgrounds - Light only
  glassLight: 'rgba(255, 255, 255, 0.9)',
  glassMedium: 'rgba(255, 255, 255, 0.95)',
} as const;

// Alpha color utilities
export const withAlpha = (hex: string, alpha: number): string => {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `rgba(${r}, ${g}, ${b}, ${alpha})`;
};

// Feature card colors (cycling through palette)
export const featureColors = [
  colors.primary.main,
  colors.indigo.main,
  colors.sky.main,
  colors.cyan.main,
  colors.indigo.accent,
] as const;

// Feature card gradients (matching colors)
export const featureGradients = [
  gradients.bluePrimary,
  gradients.indigoAccent,
  gradients.skyBlue,
  gradients.cyanAccent,
  gradients.blueIndigo,
] as const;

// Avatar gradients for team members - Light colors
export const avatarGradients = [
  'linear-gradient(135deg, #60A5FA 0%, #818CF8 100%)',
  'linear-gradient(135deg, #818CF8 0%, #A78BFA 100%)',
  'linear-gradient(135deg, #38BDF8 0%, #60A5FA 100%)',
  'linear-gradient(135deg, #22D3EE 0%, #38BDF8 100%)',
] as const;

export default colors;