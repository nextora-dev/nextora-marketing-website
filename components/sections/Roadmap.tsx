'use client';

import { Box, Grid, Typography, Chip } from '@mui/material';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { roadmap } from '@/data/content';
import { colors, gradients } from '@/theme/colors';

const MotionBox = motion.create(Box);

export default function Roadmap() {

  const statusConfig = {
    completed: {
      label: 'Completed',
      color: colors.success.main,
      bg: alpha(colors.success.main, 0.1),
      border: alpha(colors.success.main, 0.3),
    },
    'in-progress': {
      label: 'In Progress',
      color: colors.sky.main,
      bg: alpha(colors.sky.main, 0.1),
      border: alpha(colors.sky.main, 0.3),
    },
    upcoming: {
      label: 'Coming Soon',
      color: colors.primary.main,
      bg: alpha(colors.primary.main, 0.1),
      border: alpha(colors.primary.main, 0.3),
    },
  } as const;

  return (
    <SectionWrapper id="roadmap" background="gradient">
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="overline"
          sx={{
            color: colors.sky.main,
            fontWeight: 600,
            letterSpacing: 2,
            mb: 2,
            display: 'block',
          }}
        >
          ROADMAP
        </Typography>
        <Typography variant="h2" sx={{ mb: 2 }}>
          What&apos;s{' '}
          <GradientText
            variant="h2"
            component="span"
            gradient={gradients.skyBlue}
          >
            Coming Next
          </GradientText>
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 600, mx: 'auto' }}
        >
          We&apos;re constantly building new features to make your campus experience even better.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {roadmap.map((item, index) => {
          const status = statusConfig[item.status];
          return (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={item.title}>
              <MotionBox
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <GlassCard
                  glow={status.color}
                  sx={{
                    height: '100%',
                    borderColor: status.border,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: status.color,
                    },
                  }}
                >
                  <Chip
                    label={status.label}
                    size="small"
                    sx={{
                      mb: 2,
                      background: status.bg,
                      color: status.color,
                      fontWeight: 600,
                      fontSize: '0.7rem',
                      border: `1px solid ${status.border}`,
                    }}
                  />
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: 3,
                      background: status.bg,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 2.5,
                    }}
                  >
                    <item.icon sx={{ fontSize: 28, color: status.color }} />
                  </Box>
                  <Typography variant="h6" sx={{ mb: 1.5, fontWeight: 600 }}>
                    {item.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                    {item.description}
                  </Typography>
                </GlassCard>
              </MotionBox>
            </Grid>
          );
        })}
      </Grid>
    </SectionWrapper>
  );
}
