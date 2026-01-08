'use client';

import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { integrations } from '@/data/content';

const MotionBox = motion(Box);

const colors = ['#7C3AED', '#14B8A6', '#F97316', '#1E3A8A', '#EC4899', '#10B981'];

export default function Integration() {
  return (
    <SectionWrapper id="integrations" background="mesh">
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="overline"
          sx={{
            color: '#1E3A8A',
            fontWeight: 600,
            letterSpacing: 2,
            mb: 2,
            display: 'block',
          }}
        >
          INTEGRATIONS
        </Typography>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Seamlessly{' '}
          <GradientText
            variant="h2"
            component="span"
            gradient="linear-gradient(135deg, #1E3A8A 0%, #7C3AED 100%)"
          >
            Connected
          </GradientText>
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 600, mx: 'auto' }}
        >
          IIT Connect integrates with the tools you already use, making everything work together.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {integrations.map((item, index) => {
          const color = colors[index % colors.length];
          return (
            <Grid size={{ xs: 12, sm: 6, md: 4 }} key={item.title}>
              <MotionBox
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.08 }}
              >
                <GlassCard
                  glow={color}
                  sx={{
                    height: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: 3,
                    transition: 'all 0.3s ease',
                    '&:hover': {
                      borderColor: `${color}50`,
                      '& .integration-icon': {
                        transform: 'scale(1.1)',
                        background: `${color}25`,
                      },
                    },
                  }}
                >
                  <Box
                    className="integration-icon"
                    sx={{
                      width: 64,
                      height: 64,
                      borderRadius: 3,
                      background: `${color}15`,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      transition: 'all 0.3s ease',
                    }}
                  >
                    <item.icon sx={{ fontSize: 32, color }} />
                  </Box>
                  <Box>
                    <Typography variant="h6" sx={{ mb: 0.5, fontWeight: 600 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                      {item.description}
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
