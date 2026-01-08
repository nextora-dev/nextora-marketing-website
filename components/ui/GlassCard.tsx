'use client';

import { Box, SxProps, Theme } from '@mui/material';
import { motion } from 'framer-motion';

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
  return (
    <motion.div
      whileHover={hover ? { y: -8, scale: 1.02 } : undefined}
      transition={{ duration: 0.3, ease: 'easeOut' }}
      className={className}
    >
      <Box
        sx={{
          background: gradient
            ? 'linear-gradient(135deg, rgba(124, 58, 237, 0.15) 0%, rgba(20, 184, 166, 0.15) 100%)'
            : 'rgba(15, 23, 42, 0.6)',
          backdropFilter: 'blur(20px)',
          WebkitBackdropFilter: 'blur(20px)',
          border: '1px solid rgba(148, 163, 184, 0.1)',
          borderRadius: 4,
          padding: 4,
          position: 'relative',
          overflow: 'hidden',
          height: '100%',
          '&::before': glow
            ? {
                content: '""',
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                background: `radial-gradient(circle at 50% 0%, ${glow}20 0%, transparent 50%)`,
                pointerEvents: 'none',
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
