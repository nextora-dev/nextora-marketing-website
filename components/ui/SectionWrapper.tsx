'use client';

import { Box, Container, ContainerProps } from '@mui/material';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface SectionWrapperProps extends ContainerProps {
  children: React.ReactNode;
  id?: string;
  background?: 'default' | 'gradient' | 'dark' | 'mesh';
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
        return 'linear-gradient(180deg, rgba(124, 58, 237, 0.05) 0%, rgba(20, 184, 166, 0.05) 100%)';
      case 'dark':
        return '#0A0E1A';
      case 'mesh':
        return `
          radial-gradient(at 40% 20%, rgba(124, 58, 237, 0.15) 0px, transparent 50%),
          radial-gradient(at 80% 0%, rgba(20, 184, 166, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 50%, rgba(30, 58, 138, 0.15) 0px, transparent 50%),
          radial-gradient(at 80% 50%, rgba(249, 115, 22, 0.1) 0px, transparent 50%),
          radial-gradient(at 0% 100%, rgba(124, 58, 237, 0.1) 0px, transparent 50%),
          #0A0E1A
        `;
      default:
        return 'transparent';
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
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          {children}
        </motion.div>
      </Container>
    </Box>
  );
}
