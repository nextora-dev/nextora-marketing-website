'use client';

import { Typography, TypographyProps } from '@mui/material';

interface GradientTextProps extends TypographyProps {
  children: React.ReactNode;
  gradient?: string;
}

export default function GradientText({
  children,
  gradient = 'linear-gradient(135deg, #7C3AED 0%, #14B8A6 50%, #F97316 100%)',
  sx,
  ...props
}: GradientTextProps) {
  return (
    <Typography
      sx={{
        background: gradient,
        backgroundClip: 'text',
        WebkitBackgroundClip: 'text',
        WebkitTextFillColor: 'transparent',
        display: 'inline-block',
        ...sx,
      }}
      {...props}
    >
      {children}
    </Typography>
  );
}
