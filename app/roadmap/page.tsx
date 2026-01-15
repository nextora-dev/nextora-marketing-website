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
    description: 'See what\'s coming next to NextOra campus platform.',
    url: 'https://nextora.lk/roadmap',
    type: 'website',
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

