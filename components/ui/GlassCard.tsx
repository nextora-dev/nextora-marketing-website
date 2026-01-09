'use client';

import { Box, SxProps, Theme, useTheme } from '@mui/material';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import { colors, gradients } from '@/theme/colors';

interface GlassCardProps {
  children: React.ReactNode;
  hover?: boolean;
  gradient?: boolean;
  glow?: string;
  sx?: SxProps<Theme>;
  className?: string;
}

export default function GlassCard({
  children,
  hover = true,
  gradient = false,
  glow,
  sx,
  className,
}: GlassCardProps) {
  const theme = useTheme();

  return (
    <motion.div
      whileHover={hover ? { y: -6, scale: 1.01 } : undefined}
      transition={{ duration: 0.25, ease: 'easeOut' }}
      className={className}
      style={{ height: '100%' }}
    >
      <Box
        sx={{
          background: gradient
            ? gradients.card
            : theme.palette.background.paper,
          backdropFilter: 'blur(20px) saturate(180%)',
          WebkitBackdropFilter: 'blur(20px) saturate(180%)',
          border: `1px solid ${alpha(colors.grey[300], 0.3)}`,
          borderRadius: 4,
          padding: 4,
          position: 'relative',
          overflow: 'hidden',
          height: '100%',
          boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03)',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
          '&:hover': hover ? {
            boxShadow: '0 20px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.03)',
            borderColor: glow
              ? alpha(glow, 0.25)
              : alpha(colors.primary.main, 0.15),
          } : undefined,
          '&::before': glow
            ? {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '100%',
                background: `radial-gradient(ellipse at 50% 0%, ${alpha(glow, 0.1)} 0%, transparent 60%)`,
                pointerEvents: 'none',
                transition: 'opacity 0.3s ease',
              }
            : undefined,
          ...sx,
        }}
      >
        {children}
      </Box>
    </motion.div>
  );
}
