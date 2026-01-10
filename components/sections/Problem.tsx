'use client';

import { Box, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { problems } from '@/data/content';
import { colors, gradients } from '@/theme/colors';

const MotionBox = motion.create(Box);

export default function Problem() {

  return (
    <SectionWrapper id="problem" background="gradient">
      {/* SEO: Campus Challenges - Why IIT Students Need NextOra */}
      <Box component="header" sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="overline"
          component="span"
          sx={{
            color: colors.sky.main,
            fontWeight: 600,
            letterSpacing: 2,
            mb: 2,
            display: 'block',
          }}
        >
          CAMPUS CHALLENGES IIT STUDENTS FACE
        </Typography>
        <Typography variant="h2" component="h2" sx={{ mb: 2 }}>
          Sound{' '}
          <GradientText variant="h2" component="span" gradient={gradients.skyBlue}>
            Familiar?
          </GradientText>
        </Typography>
        <Typography
          variant="body1"
          component="p"
          sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 650, mx: 'auto', fontSize: '1.1rem' }}
        >
          Scattered timetables, missed events, confusing campus navigation — every IIT Sri Lanka student knows these struggles. NextOra solves them all.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {problems.map((problem, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={problem.title}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard
                glow={colors.sky.main}
                sx={{
                  height: '100%',
                  transition: 'all 0.3s ease',
                  '&:hover': {
                    borderColor: alpha(colors.sky.main, 0.3),
                    '& .problem-icon': {
                      transform: 'scale(1.1) rotate(-5deg)',
                      background: alpha(colors.sky.main, 0.2),
                    },
                  },
                }}
              >
                <Box
                  className="problem-icon"
                  sx={{
                    width: 56,
                    height: 56,
                    borderRadius: 3,
                    background: alpha(colors.sky.main, 0.1),
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    mb: 2.5,
                    transition: 'all 0.3s ease',
                  }}
                >
                  <problem.icon sx={{ fontSize: 28, color: colors.sky.main }} />
                </Box>
                <Typography variant="h6" component="h3" sx={{ mb: 1.5, fontWeight: 600 }}>
                  {problem.title}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.7 }}>
                  {problem.description}
                </Typography>
              </GlassCard>
            </MotionBox>
          </Grid>
        ))}
      </Grid>

      {/* Decorative elements */}
      <Box
        sx={{
          position: 'absolute',
          top: '20%',
          right: '-10%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: `radial-gradient(circle, ${alpha(colors.sky.main, 0.08)} 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
    </SectionWrapper>
  );
}
