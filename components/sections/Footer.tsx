'use client';

import { Box, Container, Grid, Typography, Stack, IconButton, Divider } from '@mui/material';
import { Twitter, LinkedIn, Instagram, GitHub, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';
import GradientText from '../ui/GradientText';
import { footerLinks } from '@/data/content';

const MotionBox = motion(Box);

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: LinkedIn, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: GitHub, href: '#', label: 'GitHub' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: 'linear-gradient(180deg, #0A0E1A 0%, #050710 100%)',
        pt: 10,
        pb: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >
      {/* Decorative gradient */}
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          height: 1,
          background: 'linear-gradient(90deg, transparent 0%, #7C3AED 50%, transparent 100%)',
        }}
      />

      <Container maxWidth="lg">
        <Grid container spacing={6}>
          {/* Brand Column */}
          <Grid size={{ xs: 12, md: 4 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                <Box
                  sx={{
                    width: 44,
                    height: 44,
                    borderRadius: 2,
                    background: 'linear-gradient(135deg, #7C3AED 0%, #14B8A6 100%)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontWeight: 800,
                    fontSize: '1.25rem',
                    color: 'white',
                  }}
                >
                  IC
                </Box>
                <GradientText variant="h5" sx={{ fontWeight: 700 }}>
                  IIT Connect
                </GradientText>
              </Box>
              <Typography variant="body2" sx={{ color: 'text.secondary', lineHeight: 1.8, mb: 3 }}>
                The unified campus platform for IIT Sri Lanka. Simplifying student life,
                one feature at a time.
              </Typography>

              {/* Social Links */}
              <Stack direction="row" spacing={1}>
                {socialLinks.map((social) => (
                  <IconButton
                    key={social.label}
                    href={social.href}
                    aria-label={social.label}
                    sx={{
                      color: 'text.secondary',
                      border: '1px solid rgba(148, 163, 184, 0.2)',
                      '&:hover': {
                        background: 'rgba(124, 58, 237, 0.1)',
                        borderColor: 'rgba(124, 58, 237, 0.3)',
                        color: '#7C3AED',
                      },
                    }}
                  >
                    <social.icon fontSize="small" />
                  </IconButton>
                ))}
              </Stack>
            </MotionBox>
          </Grid>

          {/* Links Columns */}
          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
                Product
              </Typography>
              <Stack spacing={2}>
                {footerLinks.product.map((link) => (
                  <Typography
                    key={link.label}
                    component="a"
                    href={link.href}
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        color: '#7C3AED',
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Stack>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
                Company
              </Typography>
              <Stack spacing={2}>
                {footerLinks.company.map((link) => (
                  <Typography
                    key={link.label}
                    component="a"
                    href={link.href}
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        color: '#7C3AED',
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Stack>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
                Resources
              </Typography>
              <Stack spacing={2}>
                {footerLinks.resources.map((link) => (
                  <Typography
                    key={link.label}
                    component="a"
                    href={link.href}
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        color: '#7C3AED',
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Stack>
            </MotionBox>
          </Grid>

          <Grid size={{ xs: 6, sm: 3, md: 2 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Typography variant="subtitle2" sx={{ fontWeight: 600, mb: 3, color: 'text.primary' }}>
                Legal
              </Typography>
              <Stack spacing={2}>
                {footerLinks.legal.map((link) => (
                  <Typography
                    key={link.label}
                    component="a"
                    href={link.href}
                    variant="body2"
                    sx={{
                      color: 'text.secondary',
                      textDecoration: 'none',
                      transition: 'color 0.2s ease',
                      '&:hover': {
                        color: '#7C3AED',
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Stack>
            </MotionBox>
          </Grid>
        </Grid>

        <Divider sx={{ my: 6, borderColor: 'rgba(148, 163, 184, 0.1)' }} />

        {/* Bottom Section */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} IIT Connect. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Email sx={{ fontSize: 18, color: 'text.secondary' }} />
            <Typography
              component="a"
              href="mailto:hello@iitconnect.lk"
              variant="body2"
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': {
                  color: '#7C3AED',
                },
              }}
            >
              hello@iitconnect.lk
            </Typography>
          </Stack>
        </Stack>

        {/* Made with love */}
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Typography variant="caption" sx={{ color: 'text.secondary' }}>
            Made with 💜 by IIT Students
          </Typography>
        </Box>
      </Container>

      {/* Background decorations */}
      <Box
        sx={{
          position: 'absolute',
          bottom: '20%',
          left: '-10%',
          width: 400,
          height: 400,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(124, 58, 237, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
      <Box
        sx={{
          position: 'absolute',
          bottom: '10%',
          right: '-5%',
          width: 300,
          height: 300,
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(20, 184, 166, 0.05) 0%, transparent 70%)',
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
}
