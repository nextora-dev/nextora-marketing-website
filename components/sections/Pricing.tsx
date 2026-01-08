'use client';

import { Box, Grid, Typography, Button, Stack } from '@mui/material';
import { Check } from '@mui/icons-material';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { pricingPlans } from '@/data/content';

const MotionBox = motion(Box);

export default function Pricing() {
  return (
    <SectionWrapper id="pricing" background="gradient">
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
          PRICING
        </Typography>
        <Typography variant="h2" sx={{ mb: 2 }}>
          Simple,{' '}
          <GradientText variant="h2" component="span">
            Transparent
          </GradientText>{' '}
          Pricing
        </Typography>
        <Typography
          variant="h6"
          sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 600, mx: 'auto' }}
        >
          Free for students. Premium features for power users. Enterprise solutions for departments.
        </Typography>
      </Box>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {pricingPlans.map((plan, index) => (
          <Grid size={{ xs: 12, sm: 6, md: 4 }} key={plan.name}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              sx={{ height: '100%' }}
            >
              <GlassCard
                gradient={plan.highlighted}
                hover={false}
                sx={{
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                  borderColor: plan.highlighted ? 'rgba(124, 58, 237, 0.5)' : undefined,
                  transform: plan.highlighted ? 'scale(1.02)' : 'none',
                  boxShadow: plan.highlighted
                    ? '0 20px 60px rgba(124, 58, 237, 0.3)'
                    : 'none',
                }}
              >
                {plan.highlighted && (
                  <Box
                    sx={{
                      position: 'absolute',
                      top: 16,
                      right: -32,
                      background: 'linear-gradient(135deg, #7C3AED 0%, #14B8A6 100%)',
                      color: 'white',
                      px: 4,
                      py: 0.5,
                      fontSize: '0.75rem',
                      fontWeight: 600,
                      transform: 'rotate(45deg)',
                    }}
                  >
                    POPULAR
                  </Box>
                )}

                <Typography
                  variant="h5"
                  sx={{ fontWeight: 700, mb: 1 }}
                >
                  {plan.name}
                </Typography>
                <Typography
                  variant="body2"
                  sx={{ color: 'text.secondary', mb: 3 }}
                >
                  {plan.description}
                </Typography>

                <Box sx={{ display: 'flex', alignItems: 'baseline', mb: 4 }}>
                  <Typography
                    variant="h3"
                    sx={{
                      fontWeight: 800,
                      background: plan.highlighted
                        ? 'linear-gradient(135deg, #7C3AED 0%, #14B8A6 100%)'
                        : 'white',
                      backgroundClip: 'text',
                      WebkitBackgroundClip: 'text',
                      WebkitTextFillColor: plan.highlighted ? 'transparent' : undefined,
                    }}
                  >
                    {plan.price}
                  </Typography>
                  {plan.period && (
                    <Typography
                      variant="body2"
                      sx={{ color: 'text.secondary', ml: 1 }}
                    >
                      {plan.period}
                    </Typography>
                  )}
                </Box>

                <Stack spacing={2} sx={{ mb: 4, flex: 1 }}>
                  {plan.features.map((feature, featureIndex) => (
                    <Box
                      key={featureIndex}
                      sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}
                    >
                      <Box
                        sx={{
                          width: 20,
                          height: 20,
                          borderRadius: '50%',
                          background: plan.highlighted
                            ? 'linear-gradient(135deg, #7C3AED 0%, #14B8A6 100%)'
                            : 'rgba(20, 184, 166, 0.2)',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <Check
                          sx={{
                            fontSize: 12,
                            color: plan.highlighted ? 'white' : '#14B8A6',
                          }}
                        />
                      </Box>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {feature}
                      </Typography>
                    </Box>
                  ))}
                </Stack>

                <Button
                  fullWidth
                  variant={plan.highlighted ? 'contained' : 'outlined'}
                  color={plan.highlighted ? 'primary' : 'inherit'}
                  size="large"
                  sx={{
                    mt: 'auto',
                    borderColor: plan.highlighted ? undefined : 'rgba(148, 163, 184, 0.3)',
                  }}
                >
                  {plan.buttonText}
                </Button>
              </GlassCard>
            </MotionBox>
          </Grid>
        ))}
      </Grid>
    </SectionWrapper>
  );
}
