'use client';

import { useState, useEffect } from 'react';
import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  Toolbar,
  useScrollTrigger,
} from '@mui/material';
import { Menu as MenuIcon, Close as CloseIcon } from '@mui/icons-material';
import Image from 'next/image';
import { alpha } from '@mui/material/styles';
import { colors } from '@/theme/colors';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  // Ensure component is mounted before using scroll trigger to prevent hydration mismatch
  useEffect(() => {
    requestAnimationFrame(() => setMounted(true));
  }, []);

  const scrollTrigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  // Use false on server-side, actual value on client after mounting
  const trigger = mounted ? scrollTrigger : false;

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileOpen(false);
  };


  return (
    <>
      <AppBar
        position="fixed"
        elevation={0}
        sx={{
          background: trigger
            ? 'rgba(255, 255, 255, 0.92)'
            : 'transparent',
          backdropFilter: trigger ? 'blur(20px) saturate(180%)' : 'none',
          WebkitBackdropFilter: trigger ? 'blur(20px) saturate(180%)' : 'none',
          borderBottom: trigger
            ? '1px solid rgba(0, 0, 0, 0.05)'
            : 'none',
          boxShadow: trigger
            ? '0 1px 3px 0 rgba(0, 0, 0, 0.04), 0 1px 2px -1px rgba(0, 0, 0, 0.04)'
            : 'none',
          transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1.5 }} disableGutters>
            <Box
              component="a"
              href="#"
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 1,
                textDecoration: 'none',
              }}
            >
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
                        alt="NextOra Logo"
                        width={0}
                        height={0}
                        sizes="(max-width: 600px) 100px, (max-width: 900px) 120px, 150px"
                        style={{
                            width: '100%',
                            height: 'auto',
                            objectFit: 'contain',
                        }}
                        priority
                    />
                </Box>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 1 }}>
              {navItems.map((item) => (
                <Box
                  key={item.label}
                  component="button"
                  onClick={() => scrollToSection(item.href)}
                  sx={{
                    color: colors.text.secondary,
                    background: 'transparent',
                    border: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    padding: '8px 16px',
                    borderRadius: 2,
                    transition: 'all 0.2s ease',
                    '&:hover': {
                      color: colors.text.primary,
                      background: alpha(colors.primary.main, 0.08),
                    },
                    '&:focus-visible': {
                      outline: `3px solid ${colors.primary.light}`,
                      outlineOffset: 2,
                    },
                  }}
                >
                  {item.label}
                </Box>
              ))}
              <Button
                variant="contained"
                color="primary"
                size="small"
                sx={{ ml: 2 }}
                onClick={() => scrollToSection('#cta')}
              >
                Get Early Access
              </Button>
            </Box>

            <IconButton
              aria-label="open navigation menu"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{
                display: { md: 'none' },
                color: colors.text.primary,
                '&:hover': {
                  background: alpha(colors.primary.main, 0.08),
                },
              }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      {mobileOpen && (
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            slotProps={{
              paper: {
                sx: {
                  width: '100%',
                  maxWidth: 400,
                  background: 'rgba(255, 255, 255, 0.98)',
                  backdropFilter: 'blur(20px) saturate(180%)',
                },
              },
            }}
          >
            <Box sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
                <IconButton
                  onClick={handleDrawerToggle}
                  aria-label="close navigation menu"
                  sx={{
                    color: colors.text.primary,
                    '&:hover': {
                      background: alpha(colors.primary.main, 0.08),
                    },
                  }}
                >
                  <CloseIcon />
                </IconButton>
              </Box>
              <List>
                {navItems.map((item) => (
                  <ListItem key={item.label} disablePadding>
                      <ListItemButton
                        onClick={() => scrollToSection(item.href)}
                        sx={{
                          py: 2,
                          borderRadius: 2,
                          '&:hover': {
                            background: alpha(colors.primary.main, 0.08),
                          },
                        }}
                      >
                        <ListItemText
                          primary={item.label}
                          slotProps={{
                            primary: {
                              sx: {
                                fontSize: '1.25rem',
                                fontWeight: 500,
                              },
                            },
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                ))}
              </List>
              <Box>
                <Button
                  fullWidth
                  variant="contained"
                  color="primary"
                  size="large"
                  sx={{ mt: 4 }}
                  onClick={() => scrollToSection('#cta')}
                >
                  Get Early Access
                </Button>
              </Box>
            </Box>
          </Drawer>
        )}
    </>
  );
}
