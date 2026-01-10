'use client';

import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { howItWorks } from '@/data/content';
import { colors, gradients } from '@/theme/colors';

const MotionBox = motion.create(Box);

export default function HowItWorks() {

  return (
    <SectionWrapper id="how-it-works" background="gradient">
      {/* SEO: How It Works - Easy Campus Management | NextOra */}
      {/* Description: Discover how NextOra simplifies campus life for IIT students. One platform for schedules, collaboration, navigation, and staying connected with campus activities. */}
      <Box component="header" sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="overline"
          component="span"
          sx={{
            color: colors.indigo.main,
            fontWeight: 600,
            letterSpacing: 2,
            mb: 2,
            display: 'block',
          }}
        >
          EASY CAMPUS MANAGEMENT
        </Typography>
        <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
          Get Started in{' '}
          <GradientText variant="h2" component="span">
            Minutes
          </GradientText>
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 650, mx: 'auto', fontSize: '1.1rem' }}
        >
          Discover how NextOra simplifies campus life for IIT students. One platform for schedules, collaboration, navigation, and staying connected with campus activities.
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
                    background: `linear-gradient(90deg, ${alpha(colors.primary.main, 0.3)} 0%, ${alpha(colors.indigo.main, 0.3)} 100%)`,
                    '&::after': {
                      content: '""',
                      position: 'absolute',
                      right: 0,
                      top: -3,
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: alpha(colors.indigo.main, 0.5),
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
                    background: gradients.blueIndigo,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 700,
                    fontSize: '1.1rem',
                    color: 'white',
                    boxShadow: `0 8px 24px ${alpha(colors.primary.main, 0.4)}`,
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
                      background: alpha(colors.primary.main, 0.1),
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mx: 'auto',
                      mb: 2.5,
                    }}
                  >
                    <item.icon sx={{ fontSize: 32, color: colors.primary.main }} />
                  </Box>
                  <Typography variant="h6" component="h3" sx={{ mb: 1.5, fontWeight: 600 }}>
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
