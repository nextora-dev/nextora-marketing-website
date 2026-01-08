'use client';

import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { benefits } from '@/data/content';

const MotionBox = motion(Box);

const colors = ['#7C3AED', '#14B8A6', '#F97316', '#1E3A8A', '#EC4899'];

export default function Benefits() {
  return (
    <SectionWrapper id="benefits" background="default">
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="overline"
          sx={{
            color: '#7C3AED',
            fontWeight: 600,
            letterSpacing: 2,
            mb: 2,
            display: 'block',
          }}
        >
          WHY CHOOSE US
        </Typography>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Built for{' '}
          <GradientText variant="h2" component="span">
            Students
          </GradientText>
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 600, mx: 'auto' }}
        >
          More than just an app — it&apos;s a complete ecosystem designed to make your campus life seamless.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {benefits.map((benefit, index) => {
          const color = colors[index % colors.length];
          return (
            <Grid size={{ xs: 12, sm: 6, md: index < 2 ? 6 : 4 }} key={benefit.title}>
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard
                  glow={color}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'flex-start',
                    gap: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: `${color}40`,
                      '& .benefit-icon': {
                        transform: 'scale(1.1)',
                        background: `${color}30`,
                      },
                    },
                  }}
                >
                  <Box
                    className="benefit-icon"
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 3,
                      background: `${color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <benefit.icon sx={{ fontSize: 28, color }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: 600 }}>
                      {benefit.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                      {benefit.description}
                    </Typography>
                  </Box>
                </GlassCard>
              </MotionBox>
            </Grid>
          );
        })}
      </Grid>
    </SectionWrapper>
  );
}
