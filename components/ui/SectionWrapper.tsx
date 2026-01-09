'use client';

import { Box, Container, ContainerProps } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { alpha } from '@mui/material/styles';
import { colors } from '@/theme/colors';

interface SectionWrapperProps extends ContainerProps {
  children: React.ReactNode;
  id?: string;
  background?: 'default' | 'gradient' | 'mesh';
  paddingY?: number;
}

export default function SectionWrapper({
  children,
  id,
  background = 'default',
  paddingY = 12,
  ...props
}: SectionWrapperProps) {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });


  const getBackground = () => {
    switch (background) {
      case 'gradient':
        return `linear-gradient(180deg, ${colors.background} 0%, ${alpha(colors.primary.main, 0.03)} 50%, ${colors.background} 100%)`;
      case 'mesh':
        return `
          radial-gradient(at 40% 20%, ${alpha(colors.primary.main, 0.06)} 0px, transparent 50%),
          radial-gradient(at 80% 0%, ${alpha(colors.indigo.main, 0.05)} 0px, transparent 50%),
          radial-gradient(at 0% 50%, ${alpha(colors.sky.main, 0.06)} 0px, transparent 50%),
          radial-gradient(at 80% 50%, ${alpha(colors.cyan.main, 0.04)} 0px, transparent 50%),
          radial-gradient(at 0% 100%, ${alpha(colors.indigo.main, 0.04)} 0px, transparent 50%),
          ${colors.background}
        `;
      default:
        return colors.background;
    }
  };

  return (
    <Box
      component="section"
      id={id}
      ref={ref}
      sx={{
        py: paddingY,
        background: getBackground(),
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      <Container maxWidth="lg" {...props}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
        >
          {children}
        </motion.div>
      </Container>
    </Box>
  );
}
