'use client';

import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material';
import { PlayArrow, Rocket } from '@mui/icons-material';
import { motion } from 'framer-motion';
import GradientText from '../ui/GradientText';
import AnimatedCounter from '../ui/AnimatedCounter';
import { stats } from '@/data/content';

const MotionBox = motion(Box);

// Pre-generate random values for background elements
const backgroundElements = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    duration: (i * 0.15 + 2) % 3 + 2, // Deterministic values between 2-5
    delay: (i * 0.1) % 2, // Deterministic values between 0-2
    width: ((i * 17) % 300) + 100, // Deterministic values between 100-400
    height: ((i * 23) % 300) + 100,
    left: ((i * 5) % 100),
    top: ((i * 7) % 100),
    colorIndex: i % 3,
}));

export default function Hero() {
    const scrollToSection = (id: string) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const colors = [
        'rgba(124, 58, 237, 0.1)',
        'rgba(20, 184, 166, 0.1)',
        'rgba(249, 115, 22, 0.1)',
    ];

    return (
        <Box
            component="section"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                position: 'relative',
                overflow: 'hidden',
                pt: { xs: 12, md: 8 },
                pb: 8,
                background: `
          radial-gradient(ellipse at 20% 0%, rgba(124, 58, 237, 0.2) 0%, transparent 50%),
          radial-gradient(ellipse at 80% 0%, rgba(20, 184, 166, 0.15) 0%, transparent 50%),
          radial-gradient(ellipse at 50% 100%, rgba(30, 58, 138, 0.2) 0%, transparent 50%),
          #0A0E1A
        `,
            }}
        >
            {/* Animated Background Elements */}
            <Box
                sx={{
                    position: 'absolute',
                    inset: 0,
                    overflow: 'hidden',
                    pointerEvents: 'none',
                }}
            >
                {backgroundElements.map((el) => (
                    <MotionBox
                        key={el.id}
                        initial={{ opacity: 0 }}
                        animate={{
                            opacity: [0.1, 0.3, 0.1],
                            scale: [1, 1.2, 1],
                        }}
                        transition={{
                            duration: el.duration,
                            repeat: Infinity,
                            delay: el.delay,
                        }}
                        sx={{
                            position: 'absolute',
                            width: el.width,
                            height: el.height,
                            borderRadius: '50%',
                            background: `radial-gradient(circle, ${colors[el.colorIndex]} 0%, transparent 70%)`,
                            left: `${el.left}%`,
                            top: `${el.top}%`,
                            transform: 'translate(-50%, -50%)',
                        }}
                    />
                ))}
            </Box>
            {/* Rest of the component remains unchanged */}


            <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <Box
                sx={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: 1,
                  px: 2,
                  py: 0.75,
                  borderRadius: 5,
                  background: 'rgba(124, 58, 237, 0.15)',
                  border: '1px solid rgba(124, 58, 237, 0.3)',
                  mb: 3,
                }}
              >
                <Box
                  sx={{
                    width: 8,
                    height: 8,
                    borderRadius: '50%',
                    background: '#14B8A6',
                    animation: 'pulse 2s infinite',
                    '@keyframes pulse': {
                      '0%, 100%': { opacity: 1 },
                      '50%': { opacity: 0.5 },
                    },
                  }}
                />
                <Typography variant="caption" sx={{ color: 'text.secondary', fontWeight: 500 }}>
                  Now in Beta • Join 500+ Early Users
                </Typography>
              </Box>

              <Typography
                variant="h1"
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

              <Typography
                variant="h6"
                sx={{
                  color: 'text.secondary',
                  fontWeight: 400,
                  mb: 4,
                  maxWidth: 500,
                  lineHeight: 1.7,
                }}
              >
                The unified platform for timetable, kuppi sessions, campus navigation, events,
                results, lost & found, and everything else you need at IIT.
              </Typography>

              <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} sx={{ mb: 6 }}>
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  startIcon={<Rocket />}
                  onClick={() => scrollToSection('#cta')}
                  sx={{ px: 4, py: 1.75 }}
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
                    borderColor: 'rgba(148, 163, 184, 0.3)',
                    color: 'text.primary',
                    '&:hover': {
                      borderColor: 'rgba(148, 163, 184, 0.5)',
                      background: 'rgba(148, 163, 184, 0.05)',
                    },
                  }}
                >
                  Watch Demo
                </Button>
              </Stack>
            </MotionBox>

            {/* Stats Row */}
            <MotionBox
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Stack
                direction="row"
                spacing={{ xs: 4, md: 6 }}
                divider={
                  <Box
                    sx={{
                      width: 1,
                      height: 40,
                      background: 'rgba(148, 163, 184, 0.2)',
                    }}
                  />
                }
              >
                {stats.map((stat, index) => (
                  <Box key={index}>
                    <AnimatedCounter
                      value={stat.value}
                      suffix={stat.suffix}
                      variant="h4"
                      sx={{
                        fontWeight: 700,
                        background: 'linear-gradient(135deg, #7C3AED 0%, #14B8A6 100%)',
                        backgroundClip: 'text',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                      }}
                    />
                    <Typography variant="body2" color="text.secondary">
                      {stat.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </MotionBox>
          </Grid>

          {/* Phone Mockup with Floating Cards */}
          <Grid size={{ xs: 12, md: 6 }}>
            <MotionBox
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              sx={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: { xs: 400, md: 550 },
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
                            background: '#0F172A',
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
                                    background: 'rgba(124, 58, 237, 0.25)',
                                    borderRadius: 1,
                                    p: 1.5,
                                    mb: 1.5,
                                    backdropFilter: 'blur(4px)',
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    sx={{ color: '#A78BFA', fontWeight: 600 }}
                                >
                                    Today&apos;s Schedule
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: 'white', fontSize: '0.75rem', mt: 0.5 }}
                                >
                                    Software Engineering • 9:00 AM
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    background: 'rgba(45, 212, 191, 0.25)',
                                    borderRadius: 1,
                                    p: 1.5,
                                    mb: 1.5,
                                    backdropFilter: 'blur(4px)',
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    sx={{ color: '#2DD4BF', fontWeight: 600 }}
                                >
                                    Upcoming Event
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: 'white', fontSize: '0.75rem', mt: 0.5 }}
                                >
                                    Tech Meetup • Tomorrow
                                </Typography>
                            </Box>

                            <Box
                                sx={{
                                    background: 'rgba(249, 115, 22, 0.25)',
                                    borderRadius: 1,
                                    p: 1.5,
                                    backdropFilter: 'blur(4px)',
                                }}
                            >
                                <Typography
                                    variant="caption"
                                    sx={{ color: '#F97316', fontWeight: 600 }}
                                >
                                    Kuppi Session
                                </Typography>
                                <Typography
                                    variant="body2"
                                    sx={{ color: 'white', fontSize: '0.75rem', mt: 0.5 }}
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
                  background: 'radial-gradient(circle, rgba(124, 58, 237, 0.15) 0%, transparent 60%)',
                  pointerEvents: 'none',
                }}
              />
            </MotionBox>
          </Grid>
        </Grid>
      </Container>

      {/* Scroll Indicator */}
      <MotionBox
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity, delay: 1 }}
        sx={{
          position: 'absolute',
          bottom: 40,
          left: '50%',
          transform: 'translateX(-50%)',
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          alignItems: 'center',
          gap: 1,
        }}
      >
        <Typography variant="caption" color="text.secondary">
          Scroll to explore
        </Typography>
        <Box
          sx={{
            width: 24,
            height: 40,
            border: '2px solid rgba(148, 163, 184, 0.3)',
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
              background: 'rgba(148, 163, 184, 0.5)',
              borderRadius: 2,
            }}
          />
        </Box>
      </MotionBox>
    </Box>
  );
}
