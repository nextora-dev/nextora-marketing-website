'use client';

import { Typography, TypographyProps } from '@mui/material';
import { gradients } from '@/theme/colors';

interface GradientTextProps extends TypographyProps {
  children: React.ReactNode;
  gradient?: string;
}

export default function GradientText({
  children,
  gradient,
  sx,
  ...props
}: GradientTextProps) {
  const defaultGradient = gradients.blueIndigo;

  return (
    <Typography
      sx={{
        background: gradient || defaultGradient,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
        backgroundSize: '200% 200%',
        animation: 'none', // Can enable subtle animation if desired
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
