'use client';

import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { features } from '@/data/content';
import { colors } from '@/theme/colors';

const MotionBox = motion.create(Box);

export default function Features() {

  return (
    <SectionWrapper id="features" background="default" paddingY={16}>
      {/* Hidden SEO text for search engines */}
      <Box component="header" sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="overline"
          component="span"
          sx={{
            color: colors.primary.main,
            fontWeight: 600,
            letterSpacing: 2,
            mb: 2,
            display: 'block',
          }}
        >
          FEATURES
        </Typography>
        <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
          Everything You Need,{' '}
          <GradientText variant="h2" component="span">
            One Place.
          </GradientText>
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 600, mx: 'auto', fontSize: '1.1rem' }}
        >
          NextOra provides powerful campus features designed specifically for IIT Sri Lanka students — timetables, kuppi sessions, AR navigation, events, and more.
        </Typography>
      </Box>

      <Grid container spacing={3} component="section" aria-label="NextOra Features">
        {features.map((feature, index) => (
          <Grid size={{ xs: 12, sm: 6, lg: 4 }} key={feature.title}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <GlassCard
                glow={feature.color}
                sx={{
                  height: '100%',
                  cursor: 'pointer',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  '&:hover': {
                    borderColor: `${feature.color}40`,
                    transform: 'translateY(-8px)',
                    '& .feature-icon': {
                      transform: 'scale(1.1) rotate(-5deg)',
                      background: feature.gradient,
                      '& svg': {
                        color: 'white',
                      },
                    },
                    '& .feature-title': {
                      background: feature.gradient,
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: 'transparent',
                    },
                  },
                }}
              >
                <Box
                  className="feature-icon"
                  sx={{
                    width: 64,
                    height: 64,
                    borderRadius: 3,
                    background: `${feature.color}15`,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 3,
                    transition: 'all 0.4s ease',
                  }}
                >
                  <feature.icon sx={{ fontSize: 32, color: feature.color, transition: 'all 0.3s ease' }} />
                </Box>
                <Typography
                  variant="h6"
                  component="h3"
                  className="feature-title"
                  sx={{
                    mb: 1.5,
                    fontWeight: 600,
                    transition: 'all 0.3s ease',
                  }}
                >
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {feature.description}
                </Typography>
              </GlassCard>
            </MotionBox>
          </Grid>
        ))}
      </Grid>

      {/* Decorative background elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '10%',
          left: '-5%',
          width: 500,
          height: 500,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(colors.primary.main, 0.06)} 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(colors.indigo.main, 0.06)} 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
    </SectionWrapper>
  );
}
