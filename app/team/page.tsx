import type { Metadata } from 'next';
import { Box } from '@mui/material';
import Team from '@/components/sections/Team';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import FinalCTA from '@/components/sections/FinalCTA';
import { colors } from '@/theme/colors';

export const metadata: Metadata = {
  title: 'Team - Meet the NextOra Development Team',
  description: 'Meet the NextOra team - IIT Sri Lanka undergraduates from the SE-03 group building the ultimate campus platform. Learn about our mission and the people behind NextOra.',
  keywords: [
    'NextOra team',
    'IIT Sri Lanka developers',
    'SDGP project team',
    'NextOra developers',
    'SE-03 group',
    'campus platform creators',
    'student developers Sri Lanka',
  ],
  alternates: {
    canonical: 'https://nextora.lk/team',
  },
  openGraph: {
    title: 'Team - NextOra Campus Platform',
    description: 'Meet the IIT Sri Lanka students behind NextOra campus platform.',
    url: 'https://nextora.lk/team',
    type: 'website',
  },
};

export default function TeamPage() {
  return (
    <Box
      component="main"
      role="main"
      aria-label="NextOra Team Page"
      sx={{
        minHeight: '100vh',
        background: colors.background,
        overflowX: 'hidden',
      }}
    >
      <Navbar />
      <Box sx={{ pt: { xs: 10, md: 12 } }}>
        <Team />
      </Box>
      <FinalCTA />
      <Footer />
    </Box>
  );
}

