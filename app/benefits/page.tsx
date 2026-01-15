import type { Metadata } from 'next';
import { Box } from '@mui/material';
import Benefits from '@/components/sections/Benefits';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import FinalCTA from '@/components/sections/FinalCTA';
import { colors } from '@/theme/colors';

export const metadata: Metadata = {
  title: 'Benefits - Why Choose NextOra',
  description: 'Discover the benefits of using NextOra - save time, stay organized, never miss events, and connect with your campus community. The ultimate IIT Sri Lanka student platform.',
  keywords: [
    'NextOra benefits',
    'campus app advantages',
    'student productivity',
    'why use NextOra',
    'campus platform benefits',
    'IIT Sri Lanka benefits',
    'student life improvement',
  ],
  alternates: {
    canonical: 'https://nextora.lk/benefits',
  },
  openGraph: {
    title: 'Benefits - NextOra Campus Platform',
    description: 'Discover why thousands of IIT students choose NextOra.',
    url: 'https://nextora.lk/benefits',
    type: 'website',
  },
};

export default function BenefitsPage() {
  return (
    <Box
      component="main"
      role="main"
      aria-label="NextOra Benefits Page"
      sx={{
        minHeight: '100vh',
        background: colors.background,
        overflowX: 'hidden',
      }}
    >
      <Navbar />
      <Box sx={{ pt: { xs: 10, md: 12 } }}>
        <Benefits />
      </Box>
      <FinalCTA />
      <Footer />
    </Box>
  );
}

