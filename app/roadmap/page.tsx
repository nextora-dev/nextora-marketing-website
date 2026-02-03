import type { Metadata } from 'next';
import { Box } from '@mui/material';
import Roadmap from '@/components/sections/Roadmap';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import FinalCTA from '@/components/sections/FinalCTA';
import { colors } from '@/theme/colors';

export const metadata: Metadata = {
  title: 'Roadmap - NextOra Development Timeline',
  description: 'See what\'s coming to NextOra - our development roadmap includes upcoming features, planned improvements, and the future of campus management for IIT Sri Lanka students.',
  keywords: [
    'NextOra roadmap',
    'upcoming features',
    'NextOra development',
    'future updates',
    'campus app roadmap',
    'NextOra timeline',
    'planned features',
  ],
  alternates: {
    canonical: 'https://nextora.lk/roadmap',
  },
  openGraph: {
    title: 'Roadmap - NextOra Campus Platform',
    description: 'See what\'s coming next to NextOra - upcoming features, planned improvements, and the future of campus management.',
    url: 'https://nextora.lk/roadmap',
    siteName: 'NextOra',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NextOra Roadmap - Development Timeline',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Roadmap - NextOra Campus Platform',
    description: 'See what\'s coming next to NextOra campus platform.',
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

export default function RoadmapPage() {
  return (
    <Box
      component="main"
      role="main"
      aria-label="NextOra Roadmap Page"
      sx={{
        minHeight: '100vh',
        background: colors.background,
        overflowX: 'hidden',
      }}
    >
      <Navbar />
      <Box sx={{ pt: { xs: 10, md: 12 } }}>
        <Roadmap />
      </Box>
      <FinalCTA />
      <Footer />
    </Box>
  );
}

