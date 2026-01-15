import type { Metadata } from 'next';
import { Box } from '@mui/material';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import FinalCTA from '@/components/sections/FinalCTA';
import { colors } from '@/theme/colors';

export const metadata: Metadata = {
  title: 'Campus Problems We Solve',
  description: 'Discover the common challenges IIT Sri Lanka students face - scattered information, missing timetables, campus navigation issues - and how NextOra solves them all.',
  keywords: [
    'campus problems',
    'student challenges',
    'IIT Sri Lanka issues',
    'university problems',
    'campus life challenges',
    'student pain points',
    'NextOra solutions',
  ],
  alternates: {
    canonical: 'https://nextora.lk/problem',
  },
  openGraph: {
    title: 'Campus Problems We Solve - NextOra',
    description: 'Discover the challenges IIT students face and how NextOra solves them.',
    url: 'https://nextora.lk/problem',
    type: 'website',
  },
};

export default function ProblemPage() {
  return (
    <Box
      component="main"
      role="main"
      aria-label="NextOra Problem Page"
      sx={{
        minHeight: '100vh',
        background: colors.background,
        overflowX: 'hidden',
      }}
    >
      <Navbar />
      <Box sx={{ pt: { xs: 10, md: 12 } }}>
        <Problem />
        <Solution />
      </Box>
      <FinalCTA />
      <Footer />
    </Box>
  );
}

