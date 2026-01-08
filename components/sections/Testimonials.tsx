'use client';

import { Box, Grid, Typography, Avatar, Rating } from '@mui/material';
import { FormatQuote } from '@mui/icons-material';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { testimonials } from '@/data/content';

const MotionBox = motion(Box);

const avatarColors = [
  'linear-gradient(135deg, #7C3AED 0%, #EC4899 100%)',
  'linear-gradient(135deg, #14B8A6 0%, #7C3AED 100%)',
  'linear-gradient(135deg, #F97316 0%, #7C3AED 100%)',
  'linear-gradient(135deg, #1E3A8A 0%, #14B8A6 100%)',
];

export default function Testimonials() {
  return (
    <SectionWrapper id="testimonials" background="mesh">
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <Typography
          variant="overline"
          sx={{
            color: '#EC4899',
            fontWeight: 600,
            letterSpacing: 2,
            mb: 2,
            display: 'block',
          }}
        >
          TESTIMONIALS
        </Typography>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Loved by{' '}
          <GradientText
            variant="h2"
            component="span"
            gradient="linear-gradient(135deg, #EC4899 0%, #7C3AED 100%)"
          >
            Students
          </GradientText>
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 600, mx: 'auto' }}
        >
          Don&apos;t take our word for it. Here&apos;s what IIT students are saying.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {testimonials.map((testimonial, index) => (
          <Grid size={{ xs: 12, sm: 6, lg: 3 }} key={testimonial.name}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <GlassCard
                sx={{
                  height: '100%',
                  position: 'relative',
                  overflow: 'visible',
                }}
              >
                {/* Quote Icon */}
                <Box
                  sx={{
                    position: 'absolute',
                    top: -16,
                    right: 24,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    background: 'linear-gradient(135deg, #7C3AED 0%, #14B8A6 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 8px 24px rgba(124, 58, 237, 0.3)',
                  }}
                >
                  <FormatQuote sx={{ fontSize: 20, color: 'white' }} />
                </Box>

                <Rating
                  value={testimonial.rating}
                  readOnly
                  size="small"
                  sx={{
                    mb: 2,
                    '& .MuiRating-iconFilled': {
                      color: '#F97316',
                    },
                  }}
                />

                <Typography
                  variant="body1"
                  sx={{
                    color: 'text.primary',
                    lineHeight: 1.7,
                    mb: 3,
                    fontStyle: 'italic',
                  }}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'center', gap: 2 }}>
                  <Avatar
                    sx={{
                      width: 48,
                      height: 48,
                      background: avatarColors[index % avatarColors.length],
                      fontWeight: 600,
                      fontSize: '1rem',
                    }}
                  >
                    {testimonial.avatar}
                  </Avatar>
                  <Box>
                    <Typography variant="subtitle2" sx={{ fontWeight: 600 }}>
                      {testimonial.name}
                    </Typography>
                    <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                      {testimonial.batch}
                    </Typography>
                  </Box>
                </Box>
              </GlassCard>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
