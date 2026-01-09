'use client';

import { Box, Container, Grid, Typography, Stack, IconButton, Divider } from '@mui/material';
import { LinkedIn, Instagram, Email } from '@mui/icons-material';
import { motion } from 'framer-motion';
import { footerLinks } from '@/data/content';
import Image from "next/image";
import { alpha } from '@mui/material/styles';
import { colors } from '@/theme/colors';

const MotionBox = motion.create(Box);

const socialLinks = [
  { icon: LinkedIn, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
];

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        background: `linear-gradient(180deg, ${colors.grey[50]} 0%, ${colors.grey[100]} 100%)`,
        pt: 10,
        pb: 4,
        position: 'relative',
        overflow: 'hidden',
      }}
    >

      <Container maxWidth="lg">
        <Grid container spacing={4}>
          {/* Brand Column */}
          <Grid size={{ xs: 12, sm: 6, md: 4 }}>
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5, mb: 3 }}>
                  <Box
                      sx={{
                          width: { xs: 80, sm: 90, md: 100 },
                          height: { xs: 40, sm: 45, md: 50 },
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          overflow: 'hidden',
                      }}
                  >
                      <Image
                          src="/sdgp_logo.png"
                          alt="Icon"
                          width={0}
                          height={0}
                          sizes="(max-width: 600px) 100px, (max-width: 900px) 120px, 150px"
                          style={{
                              width: '100%',
                              height: 'auto',
                              objectFit: 'contain',
                          }}
                      />
                  </Box>
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
                      color: colors.text.secondary,
                      border: `1px solid ${colors.grey[300]}`,
                      transition: 'all 0.2s ease',
                      '&:hover': {
                        background: alpha(colors.primary.main, 0.08),
                        borderColor: alpha(colors.primary.main, 0.4),
                        color: colors.primary.main,
                        transform: 'translateY(-2px)',
                      },
                    }}
                  >
                    <social.icon fontSize="small" />
                  </IconButton>
                ))}
              </Stack>
            </MotionBox>
          </Grid>

          {/* Product Links */}
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
                        color: colors.primary.main,
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Stack>
            </MotionBox>
          </Grid>

          {/* Company Links */}
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
                        color: colors.primary.main,
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Stack>
            </MotionBox>
          </Grid>

          {/* Resources Links */}
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
                        color: colors.primary.main,
                      },
                    }}
                  >
                    {link.label}
                  </Typography>
                ))}
              </Stack>
            </MotionBox>
          </Grid>

          {/* Legal Links */}
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
                        color: colors.primary.main,
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

        <Divider sx={{ my: 6, borderColor: colors.grey[200] }} />

        {/* Bottom Section */}
        <Stack
          direction={{ xs: 'column', sm: 'row' }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            © {new Date().getFullYear()} NextOra. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={1} alignItems="center">
            <Email sx={{ fontSize: 18, color: 'text.secondary' }} />
            <Typography
              component="a"
              href="mailto:nextora.platform@gmail.com"
              variant="body2"
              sx={{
                color: 'text.secondary',
                textDecoration: 'none',
                '&:hover': {
                  color: colors.primary.main,
                },
              }}
            >
                nextora.platform@gmail.com
            </Typography>
          </Stack>
        </Stack>
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
          background: `radial-gradient(circle, ${alpha(colors.primary.main, 0.05)} 0%, transparent 70%)`,
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
          background: `radial-gradient(circle, ${alpha(colors.indigo.main, 0.05)} 0%, transparent 70%)`,
          pointerEvents: 'none',
        }}
      />
    </Box>
  );
}
