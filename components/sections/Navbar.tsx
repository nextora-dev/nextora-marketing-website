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
import { motion, AnimatePresence } from 'framer-motion';
import GradientText from '../ui/GradientText';

const navItems = [
  { label: 'Features', href: '#features' },
  { label: 'How It Works', href: '#how-it-works' },
  { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 50,
  });

  useEffect(() => {
    setMounted(true);
  }, []);

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

  if (!mounted) return null;

  return (
    <>
      <AppBar
        component={motion.header}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
        position="fixed"
        elevation={0}
        sx={{
          background: trigger
            ? 'rgba(10, 14, 26, 0.85)'
            : 'transparent',
          backdropFilter: trigger ? 'blur(20px)' : 'none',
          WebkitBackdropFilter: trigger ? 'blur(20px)' : 'none',
          borderBottom: trigger
            ? '1px solid rgba(148, 163, 184, 0.1)'
            : 'none',
          transition: 'all 0.3s ease',
        }}
      >
        <Container maxWidth="lg">
          <Toolbar sx={{ justifyContent: 'space-between', py: 1 }} disableGutters>
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
                  width: 40,
                  height: 40,
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
              <GradientText variant="h6" sx={{ fontWeight: 700 }}>
                IIT Connect
              </GradientText>
            </Box>

            <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center', gap: 4 }}>
              {navItems.map((item) => (
                <Box
                  key={item.label}
                  component="a"
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href);
                  }}
                  sx={{
                    color: 'text.secondary',
                    textDecoration: 'none',
                    fontSize: '0.9rem',
                    fontWeight: 500,
                    cursor: 'pointer',
                    transition: 'color 0.2s ease',
                    '&:hover': {
                      color: 'text.primary',
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
              color="inherit"
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
              sx={{ display: { md: 'none' } }}
            >
              <MenuIcon />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>

      <AnimatePresence>
        {mobileOpen && (
          <Drawer
            variant="temporary"
            anchor="right"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{ keepMounted: true }}
            PaperProps={{
              sx: {
                width: '100%',
                maxWidth: 400,
                background: 'rgba(10, 14, 26, 0.98)',
                backdropFilter: 'blur(20px)',
              },
            }}
          >
            <Box sx={{ p: 3 }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', mb: 4 }}>
                <IconButton onClick={handleDrawerToggle} sx={{ color: 'white' }}>
                  <CloseIcon />
                </IconButton>
              </Box>
              <List>
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <ListItem disablePadding>
                      <ListItemButton
                        onClick={() => scrollToSection(item.href)}
                        sx={{
                          py: 2,
                          borderRadius: 2,
                          '&:hover': {
                            background: 'rgba(124, 58, 237, 0.1)',
                          },
                        }}
                      >
                        <ListItemText
                          primary={item.label}
                          primaryTypographyProps={{
                            fontSize: '1.25rem',
                            fontWeight: 500,
                          }}
                        />
                      </ListItemButton>
                    </ListItem>
                  </motion.div>
                ))}
              </List>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
              >
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
              </motion.div>
            </Box>
          </Drawer>
        )}
      </AnimatePresence>
    </>
  );
}
