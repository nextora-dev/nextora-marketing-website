'use client';

import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { howItWorks } from '@/data/content';

const MotionBox = motion(Box);

export default function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works" background="gradient">
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="overline"
          sx={{
            color: '#14B8A6',
            fontWeight: 600,
            letterSpacing: 2,
            mb: 2,
            display: 'block',
          }}
        >
          HOW IT WORKS
        </Typography>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Get Started in{' '}
          <GradientText variant="h2" component="span">
            Minutes
          </GradientText>
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 600, mx: 'auto' }}
        >
          No complicated setup. Just sign in with your IIT credentials and you&apos;re ready to go.
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {howItWorks.map((item, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.step}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              sx={{ position: 'relative' }}
            >
              {/* Connector Line */}
              {index < howItWorks.length - 1 && (
                <Box
                  sx={{
                    display: { xs: 'none', md: 'block' },
                    position: 'absolute',
                    top: 40,
                    left: '60%',
                    width: '80%',
                    height: 2,
                    background: 'linear-gradient(90deg, rgba(124, 58, 237, 0.3) 0%, rgba(20, 184, 166, 0.3) 100%)',
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      right: 0,
                      top: -3,
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: 'rgba(20, 184, 166, 0.5)',
                    },
                  }}
                />
              )}

              <GlassCard
                sx={{
                  textAlign: 'center',
                  height: '100%',
                  position: 'relative',
                  overflow: 'visible',
                }}
              >
                {/* Step Number */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -20,
                    left: '50%',
                    transform: 'translateX(-50%)',
                    width: 44,
                    height: 44,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #7C3AED 0%, #14B8A6 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'white',
                    boxShadow: '0 8px 24px rgba(124, 58, 237, 0.4)',
                  }}
                >
                  {item.step}
                </Box>

                <Box sx={{ pt: 3 }}>
                  <Box
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 3,
                      background: 'rgba(124, 58, 237, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2.5,
                    }}
                  >
                    <item.icon sx={{ fontSize: 32, color: '#7C3AED' }} />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {item.description}
                  </Typography>
                </Box>
              </GlassCard>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
