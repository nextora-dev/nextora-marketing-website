'use client';

import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { benefits } from '@/data/content';
import { colors } from '@/theme/colors';

const MotionBox = motion.create(Box);

export default function Benefits() {
  const themeColors = [colors.primary.main, colors.indigo.main, colors.sky.main, colors.cyan.main];

  return (
    <SectionWrapper id="benefits" background="default">
      {/* SEO: Why Choose NextOra - Benefits for IIT Sri Lanka Students */}
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
          WHY IIT STUDENTS CHOOSE NEXTORA
        </Typography>
        <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
          Built for{' '}
          <GradientText variant="h2" component="span">
            IIT Students
          </GradientText>
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 650, mx: 'auto', fontSize: '1.1rem' }}
        >
          More than just an app — NextOra is a complete campus ecosystem with smart notifications, verified users, enterprise security, and an all-in-one dashboard for IIT Sri Lanka students.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {benefits.map((benefit, index) => {
          const color = themeColors[index % themeColors.length];
          return (
            <Grid size={{ xs: 12, sm: 6, md: index < 2 ? 6 : 6 }} key={benefit.title}>
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
                      borderColor: alpha(color || colors.primary.main, 0.25),
                      '& .benefit-icon': {
                        transform: 'scale(1.1)',
                        background: alpha(color || colors.primary.main, 0.2),
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
                      background: alpha(color || colors.primary.main, 0.1),
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
                    <Typography variant="h6" component="h3" sx={{ mb: 1, fontWeight: 600 }}>
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
