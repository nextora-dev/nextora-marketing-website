'use client';

import { Box, Grid, Stack, Typography } from '@mui/material';
import { Check, Close, ArrowForward } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { colors, gradients } from '@/theme/colors';

const MotionBox = motion.create(Box);

const beforeItems = [
  '10+ different apps for campus needs',
  'Scattered WhatsApp groups',
  'Manual timetable checking',
  'Missing event announcements',
  'Getting lost in campus',
  'No centralized lost & found',
];

const afterItems = [
  'One unified platform',
  'Organized notifications',
  'Real-time schedule updates',
  'Never miss an event',
  'AR-powered navigation',
  'Smart item matching',
];

export default function Solution() {

  return (
    <SectionWrapper id="solution" background="mesh">
      {/* SEO: NextOra Solution - Unified Campus Platform for IIT Sri Lanka */}
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
          UNIFIED CAMPUS PLATFORM
        </Typography>
        <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
          Your Campus.{' '}
          <GradientText variant="h2" component="span">
            Simplified.
          </GradientText>
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 650, mx: 'auto', fontSize: '1.1rem' }}
        >
          One app to replace them all. NextOra brings timetables, kuppi sessions, AR navigation, events, and campus services into a single, beautiful platform for IIT Sri Lanka students.
        </Typography>
      </Box>

      <Grid container spacing={4} alignItems="stretch">
        {/* Before */}
        <Grid size={{ xs: 12, md: 5 }}>
          <MotionBox
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard
              hover={false}
              sx={{
                height: '100%',
                borderColor: alpha(colors.error.main, 0.2),
                background: alpha(colors.error.main, 0.05),
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.5,
                  borderRadius: 2,
                  background: alpha(colors.error.main, 0.1),
                  mb: 3,
                }}
              >
                <Typography variant="caption" sx={{ color: colors.error.main, fontWeight: 600 }}>
                  BEFORE
                </Typography>
              </Box>
              <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                The Old Way
              </Typography>
              <Stack spacing={2}>
                {beforeItems.map((item, index) => (
                  <MotionBox
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        background: alpha(colors.error.main, 0.1),
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Close sx={{ fontSize: 14, color: colors.error.main }} />
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item}
                    </Typography>
                  </MotionBox>
                ))}
              </Stack>
            </GlassCard>
          </MotionBox>
        </Grid>

        {/* Arrow */}
        <Grid size={{ xs: 12, md: 2 }} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <MotionBox
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: '50%',
                background: gradients.blueIndigo,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: `0 10px 40px ${alpha(colors.primary.main, 0.35)}`,
                transform: { xs: 'rotate(90deg)', md: 'rotate(0deg)' },
                my: { xs: 2, md: 0 },
              }}
            >
              <ArrowForward sx={{ fontSize: 28, color: 'white' }} />
            </Box>
          </MotionBox>
        </Grid>

        {/* After */}
        <Grid size={{ xs: 12, md: 5 }}>
          <MotionBox
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <GlassCard
              hover={false}
              gradient
              sx={{
                height: '100%',
                borderColor: alpha(colors.indigo.main, 0.2),
              }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.5,
                  borderRadius: 2,
                  background: alpha(colors.indigo.main, 0.15),
                  mb: 3,
                }}
              >
                <Typography variant="caption" sx={{ color: colors.indigo.main, fontWeight: 600 }}>
                  AFTER
                </Typography>
              </Box>
              <Typography variant="h5" component="h3" sx={{ mb: 3, fontWeight: 600 }}>
                With NextOra
              </Typography>
              <Stack spacing={2}>
                {afterItems.map((item, index) => (
                  <MotionBox
                    key={item}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    sx={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: 24,
                        height: 24,
                        borderRadius: '50%',
                        background: gradients.blueIndigo,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Check sx={{ fontSize: 14, color: 'white' }} />
                    </Box>
                    <Typography variant="body2" sx={{ color: 'text.primary' }}>
                      {item}
                    </Typography>
                  </MotionBox>
                ))}
              </Stack>
            </GlassCard>
          </MotionBox>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
