'use client';

import { Box, Grid, Typography } from '@mui/material';
import { Shield, Lock, Fingerprint, VpnKey, VerifiedUser, Policy } from '@mui/icons-material';
import { motion } from 'framer-motion';
import SectionWrapper from '../ui/SectionWrapper';
import GlassCard from '../ui/GlassCard';
import GradientText from '../ui/GradientText';

const MotionBox = motion(Box);

const securityItems = [
  {
    icon: VpnKey,
    title: 'OAuth 2.0',
    description: 'Industry-standard authentication protocol for secure access.',
    color: '#7C3AED',
  },
  {
    icon: Lock,
    title: 'JWT Tokens',
    description: 'Secure, stateless session management for API security.',
    color: '#14B8A6',
  },
  {
    icon: Fingerprint,
    title: '2FA Support',
    description: 'Optional two-factor authentication for extra security.',
    color: '#F97316',
  },
  {
    icon: Shield,
    title: 'End-to-End Encryption',
    description: 'All sensitive data is encrypted in transit and at rest.',
    color: '#1E3A8A',
  },
  {
    icon: VerifiedUser,
    title: 'Regular Audits',
    description: 'Continuous security assessments and vulnerability testing.',
    color: '#EC4899',
  },
  {
    icon: Policy,
    title: 'GDPR Compliant',
    description: 'Data privacy by design, following international standards.',
    color: '#10B981',
  },
];

export default function Security() {
  return (
    <SectionWrapper id="security" background="default">
      <Grid container spacing={6} alignItems="center">
        <Grid size={{ xs: 12, md: 5 }}>
          <MotionBox
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
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
              SECURITY
            </Typography>
            <Typography variant="h2" sx={{ mb: 3 }}>
              Your Data is{' '}
              <GradientText
                variant="h2"
                component="span"
                gradient="linear-gradient(135deg, #1E3A8A 0%, #14B8A6 100%)"
              >
                Protected
              </GradientText>
            </Typography>
            <Typography
              variant="h6"
              sx={{ color: 'text.secondary', fontWeight: 400, lineHeight: 1.7, mb: 4 }}
            >
              We take security seriously. IIT Connect is built with enterprise-grade security
              measures to keep your data safe and your privacy intact.
            </Typography>

            {/* Security Badge */}
            <Box
              sx={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: 2,
                px: 3,
                py: 2,
                borderRadius: 3,
                background: 'rgba(30, 58, 138, 0.1)',
                border: '1px solid rgba(30, 58, 138, 0.2)',
              }}
            >
              <Box
                sx={{
                  width: 48,
                  height: 48,
                  borderRadius: '50%',
                  background: 'linear-gradient(135deg, #1E3A8A 0%, #7C3AED 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <Shield sx={{ color: 'white', fontSize: 24 }} />
              </Box>
              <Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 600 }}>
                  SOC 2 Type II
                </Typography>
                <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                  Compliance Certified
                </Typography>
              </Box>
            </Box>
          </MotionBox>
        </Grid>

        <Grid size={{ xs: 12, md: 7 }}>
          <Grid container spacing={2}>
            {securityItems.map((item, index) => (
              <Grid size={{ xs: 12, sm: 6 }} key={item.title}>
                <MotionBox
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.08 }}
                >
                  <GlassCard
                    glow={item.color}
                    sx={{
                      height: '100%',
                      display: 'flex',
                      alignItems: 'flex-start',
                      gap: 2,
                      py: 3,
                      transition: 'all 0.3s ease',
                      '&:hover': {
                        borderColor: `${item.color}40`,
                        '& .security-icon': {
                          transform: 'scale(1.1)',
                        },
                      },
                    }}
                  >
                    <Box
                      className="security-icon"
                      sx={{
                        width: 44,
                        height: 44,
                        borderRadius: 2,
                        background: `${item.color}15`,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                        transition: 'all 0.3s ease',
                      }}
                    >
                      <item.icon sx={{ fontSize: 22, color: item.color }} />
                    </Box>
                    <Box>
                      <Typography variant="subtitle1" sx={{ fontWeight: 600, mb: 0.5 }}>
                        {item.title}
                      </Typography>
                      <Typography variant="body2" sx={{ color: 'text.secondary', fontSize: '0.8rem' }}>
                        {item.description}
                      </Typography>
                    </Box>
                  </GlassCard>
                </MotionBox>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </SectionWrapper>
  );
}
