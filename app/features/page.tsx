import type { Metadata } from 'next';
import { Box } from '@mui/material';
import Features from '@/components/sections/Features';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import FinalCTA from '@/components/sections/FinalCTA';
import { colors } from '@/theme/colors';

export const metadata: Metadata = {
  title: 'Features - Complete Campus Management Tools',
  description: 'Explore NextOra\'s comprehensive features: real-time timetables, kuppi session coordination, AR navigation, event calendar, and seamless campus integration for IIT Sri Lanka students.',
  keywords: [
    'NextOra features',
    'campus management tools',
    'student timetable app',
    'AR campus navigation',
    'kuppi sessions',
    'event calendar',
    'IIT Sri Lanka app features',
    'campus platform features',
  ],
  alternates: {
    canonical: 'https://nextora.lk/features',
  },
  openGraph: {
    title: 'Features - NextOra Campus Platform',
    description: 'Explore NextOra\'s comprehensive features: real-time timetables, AR navigation, kuppi sessions, events, and more for IIT Sri Lanka students.',
    url: 'https://nextora.lk/features',
    siteName: 'NextOra',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NextOra Features - Campus Management Tools',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Features - NextOra Campus Platform',
    description: 'Explore NextOra\'s comprehensive features for IIT Sri Lanka students.',
    images: ['/og-image.png'],
    creator: '@NextOraApp',
    site: '@NextOraApp',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function FeaturesPage() {
  return (
    <Box
      component="main"
      role="main"
      aria-label="NextOra Features Page"
      sx={{
        minHeight: '100vh',
        background: colors.background,
        overflowX: 'hidden',
      }}
    >
      <Navbar />
      <Box sx={{ pt: { xs: 10, md: 12 } }}>
        <Features />
      </Box>
      <FinalCTA />
      <Footer />
    </Box>
  );
}
