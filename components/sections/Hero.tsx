'use client';

import { useState, useEffect } from 'react';
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { PlayArrow, Rocket } from '@mui/icons-material';
import GradientText from '../ui/GradientText';
import { alpha } from '@mui/material/styles';
import { colors, gradients } from '@/theme/colors';


// Reduced number of background elements for better performance
const backgroundElements = Array.from({ length: 8 }, (_, i) => ({
    id: i,
    duration: (i * 0.15 + 3) % 4 + 3,
    delay: (i * 0.2) % 2,
    width: ((i * 17) % 200) + 150,
    height: ((i * 23) % 200) + 150,
    left: ((i * 12) % 100),
    top: ((i * 14) % 100),
    colorIndex: i % 3,
}));

export default function Hero() {
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        // Set mounted state immediately to prevent hydration mismatch
        requestAnimationFrame(() => setMounted(true));
    }, []);

    const scrollToSection = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const themeColors = [
        alpha(colors.indigo.main, 0.08),
        alpha(colors.primary.main, 0.06),
        alpha(colors.indigo.accent, 0.06),
    ];

    return (
        <Box
            component="section"
            suppressHydrationWarning
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                pt: { xs: 12, md: 8 },
                pb: 8,
                background: gradients.heroMesh,
            }}
        >
            {/* Animated Background Elements - deferred to prioritize LCP */}
            {mounted && (
                <Box
                    sx={{
                        position: 'absolute',
                        inset: 0,
                        overflow: 'hidden',
                        pointerEvents: 'none',
                    }}
                >
                    {backgroundElements.map((el) => (
                        <Box
                            key={el.id}
                            sx={{
                                position: 'absolute',
                                width: el.width,
                                height: el.height,
                                borderRadius: '50%',
                                background: `radial-gradient(circle, ${themeColors[el.colorIndex]} 0%, transparent 70%)`,
                                left: `${el.left}%`,
                                top: `${el.top}%`,
                                transform: 'translate(-50%, -50%)',
                                opacity: 0.5,
                                animation: `pulse-bg ${el.duration}s ease-in-out infinite`,
                                animationDelay: `${el.delay}s`,
                                '@keyframes pulse-bg': {
                                    '0%, 100%': { opacity: 0.3, transform: 'translate(-50%, -50%) scale(1)' },
                                    '50%': { opacity: 0.5, transform: 'translate(-50%, -50%) scale(1.1)' },
                                },
                            }}
                        />
                    ))}
                </Box>
            )}


            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            {/* Remove initial animation delay for LCP element */}
            <Box>
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.75,
                  borderRadius: 5,
                  background: alpha(colors.primary.main, 0.15),
                  border: `1px solid ${alpha(colors.primary.main, 0.3)}`,
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: colors.indigo.main,
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.5 },
                    },
                  }}
                />
                <Typography variant="caption" sx={{ color: colors.text.secondary, fontWeight: 500 }}>
                  Now in Beta • Join 500+ Early Users
                </Typography>
              </Box>

              {/* SEO-optimized H1 - Main keyword: NextOra Campus Platform - NO ANIMATION DELAY */}
              <Typography
                variant="h1"
                component="h1"
                sx={{
                  fontSize: { xs: '2.75rem', sm: '3.5rem', md: '4rem' },
                  mb: 3,
                  lineHeight: 1.1,
                }}
              >
                One App.{' '}
                <GradientText
                  variant="h1"
                  component="span"
                  sx={{ fontSize: 'inherit' }}
                >
                  Your Entire Campus.
                </GradientText>
              </Typography>

              {/* SEO-optimized subheading with keywords */}
              <Typography
                variant="body1"
                component="p"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 400,
                  mb: 4,
                  maxWidth: 500,
                  lineHeight: 1.7,
                  fontSize: '1.1rem',
                }}
              >
                  NextOra is the unified campus platform for IIT Sri Lanka students. Access timetables, kuppi sessions, AR navigation, events, and more — everything you need in one place.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 6 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<Rocket />}
                  onClick={() => scrollToSection('#cta')}
                  sx={{ px: 4, py: 1.75 }}
                  aria-label="Get early access to NextOra campus platform"
                >
                  Get Early Access
                </Button>
                <Button
                  variant="outlined"
                  size="large"
                  startIcon={<PlayArrow />}
                  sx={{
                    px: 4,
                    py: 1.75,
                    borderColor: alpha(colors.grey[400], 0.5),
                    color: colors.text.primary,
                    borderWidth: 2,
                    '&:hover': {
                      borderWidth: 2,
                      borderColor: colors.primary.main,
                      background: alpha(colors.primary.main, 0.04),
                    },
                  }}
                >
                  Watch Demo
                </Button>
              </Stack>
            </Box>
          </Grid>

          {/* Phone Mockup with Floating Cards */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: { xs: 400, md: 550 },
                animation: 'fadeInScale 0.8s ease-out forwards',
                '@keyframes fadeInScale': {
                  '0%': { opacity: 0, transform: 'scale(0.95)' },
                  '100%': { opacity: 1, transform: 'scale(1)' },
                },
              }}
            >
                {/* Realistic Phone Mockup */}
                <Box
                    sx={{
                        width: { xs: 230, md: 300 },
                        height: { xs: 470, md: 600 },
                        borderRadius: '32px',
                        background: '#000',
                        padding: '7px',
                        boxShadow:
                            '0 20px 40px rgba(0, 0, 0, 0.5), inset 0 0 20px rgba(255,255,255,0.05)',
                        position: 'relative',
                        border: 'none'
                    }}
                >
                    {/* Side Buttons - Left */}
                    <Box
                        sx={{
                            position: 'absolute',
                            left: -6,
                            top: 100,
                            width: 3,
                            height: 60,
                            background: '#000',
                            borderRadius: 2,
                        }}
                    />
                    <Box
                        sx={{
                            position: 'absolute',
                            left: -6,
                            top: 170,
                            width: 3,
                            height: 40,
                            background: '#000',
                            borderRadius: 2,
                        }}
                    />

                    {/* Screen */}
                    <Box
                        sx={{
                            width: '100%',
                            height: '100%',
                            borderRadius: '30px',
                            background: '#FFFFFF',
                            overflow: 'hidden',
                            display: 'flex',
                            flexDirection: 'column',
                            border: '1px solid rgba(255,255,255,0.05)',
                            position: 'relative',
                        }}
                    >
                        {/* iPhone Notch */}
                        <Box
                            sx={{
                                position: 'absolute',
                                top: 10,
                                left: '50%',
                                transform: 'translateX(-50%) translateY(-50%)',
                                width: 150,
                                height: 36,
                                background: '#000',
                                borderBottomLeftRadius: '22px',
                                borderBottomRightRadius: '22px',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                                zIndex: 20,
                                boxShadow: '0 0 10px rgba(0,0,0,0.6)',
                            }}
                        >
                            {/* Camera */}
                            <Box
                                sx={{
                                    width: 10,
                                    height: 10,
                                    background: '#1E1E1E',
                                    borderRadius: '50%',
                                    mx: 1.2,
                                    boxShadow: '0 0 4px rgba(0,0,0,0.5)',
                                }}
                            />

                            {/* Sensor */}
                            <Box
                                sx={{
                                    width: 22,
                                    height: 8,
                                    background: '#1A1A1A',
                                    borderRadius: '6px',
                                    mx: 1.2,
                                    boxShadow: 'inset 0 0 4px rgba(0,0,0,0.4)',
                                }}
                            />
                        </Box>


                        {/* App Content */}
                        <Box sx={{ p: 2, mt: 4, flex: 1 }}>
                            <Box
                                sx={{
                                    background: `linear-gradient(135deg, ${alpha(colors.primary.main, 0.15)} 0%, ${alpha(colors.indigo.main, 0.15)} 100%)`,
                                    borderRadius: 2,
                                    p: 1.5,
                                    mb: 1.5,
                                    border: `1px solid ${alpha(colors.primary.main, 0.2)}`,
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    sx={{ color: colors.primary.main, fontWeight: 600 }}
                                >
                                    Today&#39;s Schedule
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: colors.text.secondary, fontSize: '0.75rem', mt: 0.5 }}
                                >
                                    Software Engineering • 9:00 AM
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    background: `linear-gradient(135deg, ${alpha(colors.indigo.main, 0.15)} 0%, ${alpha(colors.indigo.light, 0.15)} 100%)`,
                                    borderRadius: 2,
                                    p: 1.5,
                                    mb: 1.5,
                                    border: `1px solid ${alpha(colors.indigo.main, 0.2)}`,
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    sx={{ color: colors.indigo.main, fontWeight: 600 }}
                                >
                                    Upcoming Event
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: colors.text.secondary, fontSize: '0.75rem', mt: 0.5 }}
                                >
                                    Tech Meetup • Tomorrow
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    background: `linear-gradient(135deg, ${alpha(colors.sky.main, 0.15)} 0%, ${alpha(colors.cyan.main, 0.15)} 100%)`,
                                    borderRadius: 2,
                                    p: 1.5,
                                    border: `1px solid ${alpha(colors.sky.main, 0.2)}`,
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    sx={{ color: colors.sky.main, fontWeight: 600 }}
                                >
                                    Kuppi Session
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: colors.text.secondary, fontSize: '0.75rem', mt: 0.5 }}
                                >
                                    Database Systems • 3 spots left
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Box>

              {/* Glow Effect */}
              <Box
                sx={{
                  position: 'absolute',
                  width: '120%',
                  height: '120%',
                  background: `radial-gradient(circle, ${alpha(colors.primary.main, 0.15)} 0%, transparent 60%)`,
                  pointerEvents: 'none',
                }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll Indicator - Use CSS animation for better performance */}
      <Box
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          animation: 'bounce 1.5s ease-in-out infinite',
          '@keyframes bounce': {
            '0%, 100%': { transform: 'translateX(-50%) translateY(0)' },
            '50%': { transform: 'translateX(-50%) translateY(10px)' },
          },
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography variant="caption" sx={{ color: colors.text.secondary }}>
          Scroll to explore
        </Typography>
        <Box
          sx={{
            width: 24,
            height: 40,
            border: `2px solid ${alpha(colors.grey[400], 0.4)}`,
            borderRadius: 12,
            display: 'flex',
            justifyContent: 'center',
            pt: 1,
          }}
        >
          <Box
            sx={{
              width: 4,
              height: 8,
              background: alpha(colors.grey[500], 0.6),
              borderRadius: 2,
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
