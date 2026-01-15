import type { Metadata } from 'next';
import { Box } from '@mui/material';
import HowItWorks from '@/components/sections/HowItWorks';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import FinalCTA from '@/components/sections/FinalCTA';
import { colors } from '@/theme/colors';

export const metadata: Metadata = {
  title: 'How It Works - Easy Campus Management',
  description: 'Discover how NextOra simplifies campus life for IIT students. One platform for schedules, collaboration, navigation, and staying connected with campus activities.',
  keywords: [
    'how NextOra works',
    'campus management steps',
    'get started NextOra',
    'student onboarding',
    'campus app tutorial',
    'NextOra setup guide',
    'easy campus management',
  ],
  alternates: {
    canonical: 'https://nextora.lk/how-it-works',
  },
  openGraph: {
    title: 'How It Works - NextOra Campus Platform',
    description: 'Learn how NextOra simplifies campus life for IIT students.',
    url: 'https://nextora.lk/how-it-works',
    type: 'website',
  },
};

export default function HowItWorksPage() {
  return (
    <Box
      component="main"
      role="main"
      aria-label="NextOra How It Works Page"
      sx={{
        minHeight: '100vh',
        background: colors.background,
        overflowX: 'hidden',
      }}
    >
      <Navbar />
      <Box sx={{ pt: { xs: 10, md: 12 } }}>
        <HowItWorks />
      </Box>
      <FinalCTA />
      <Footer />
    </Box>
  );
}

