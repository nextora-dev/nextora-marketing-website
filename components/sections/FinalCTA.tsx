'use client';

import { useState } from 'react';
import { Box, Grid, Typography, TextField, Button, InputAdornment } from '@mui/material';
import { Email } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { alpha } from '@mui/material/styles';
import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';
import { colors, gradients } from '@/theme/colors';

const MotionBox = motion.create(Box);

export default function FinalCTA() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
      setEmail('');
    }
  };

  return (
    <SectionWrapper id="cta" background="mesh" paddingY={16}>
      <Box sx={{ textAlign: 'center', mb: 8 }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <Typography
            variant="overline"
            sx={{
              color: colors.indigo.main,
              fontWeight: 600,
              letterSpacing: 2,
              mb: 2,
              display: 'block',
            }}
          >
            GET STARTED
          </Typography>
          <Typography variant="h2" sx={{ mb: 3 }}>
            Ready to Transform Your{' '}
            <GradientText variant="h2" component="span">
              Campus Experience?
            </GradientText>
          </Typography>
          <Typography
            variant="h6"
            sx={{ color: 'text.secondary', fontWeight: 400, maxWidth: 600, mx: 'auto' }}
          >
            Join thousands of IIT students who are already enjoying a smarter campus life.
            Be among the first to experience NextOra.
          </Typography>
        </MotionBox>
      </Box>

      <Grid container spacing={4} justifyContent="center" alignItems="stretch">
        {/* Email Signup */}
        <Grid size={{ xs: 12, md: 6 }}>
          <MotionBox
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            sx={{ height: '100%' }}
          >
            <GlassCard
              gradient
              hover={false}
              sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
            >
              <Typography variant="h5" sx={{ fontWeight: 700, mb: 2 }}>
                Get Early Access
              </Typography>
              <Typography variant="body1" sx={{ color: 'text.secondary', mb: 4 }}>
                Sign up with your IIT email to be notified when we launch and receive exclusive
                early access to new features.
              </Typography>

              {submitted ? (
                <Box
                  sx={{
                    flex: 1,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                    py: 4,
                  }}
                >
                  <Box
                    sx={{
                      width: 80,
                      height: 80,
                      borderRadius: '50%',
                      background: gradients.blueIndigo,
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      mb: 3,
                    }}
                  >
                    <Typography variant="h4">🎉</Typography>
                  </Box>
                  <Typography variant="h6" sx={{ fontWeight: 600, mb: 1 }}>
                    You&apos;re on the list!
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                    We&apos;ll notify you when we launch.
                  </Typography>
                </Box>
              ) : (
                <Box component="form" onSubmit={handleSubmit} sx={{ flex: 1 }}>
                  <TextField
                    fullWidth
                    placeholder="Enter your IIT email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    required
                    slotProps={{
                      input: {
                        startAdornment: (
                          <InputAdornment position="start">
                            <Email sx={{ color: colors.grey[400] }} />
                          </InputAdornment>
                        ),
                      },
                    }}
                    sx={{
                      mb: 2,
                      '& .MuiOutlinedInput-root': {
                        background: colors.white,
                        borderRadius: 3,
                        '& fieldset': {
                          borderColor: colors.grey[300],
                          borderWidth: 1.5,
                        },
                        '&:hover fieldset': {
                          borderColor: alpha(colors.primary.main, 0.5),
                        },
                        '&.Mui-focused fieldset': {
                          borderColor: colors.primary.main,
                          borderWidth: 2,
                        },
                      },
                    }}
                  />
                  <Button
                    fullWidth
                    type="submit"
                    variant="contained"
                    color="primary"
                    size="large"
                    sx={{ py: 1.5 }}
                  >
                    Join Waitlist
                  </Button>
                </Box>
              )}

              <Typography
                variant="caption"
                sx={{ color: 'text.secondary', display: 'block', mt: 3, textAlign: 'center' }}
              >
                No spam, ever. Unsubscribe anytime.
              </Typography>
            </GlassCard>
          </MotionBox>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
