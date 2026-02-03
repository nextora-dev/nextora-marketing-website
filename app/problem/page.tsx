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
    description: 'Discover the common challenges IIT Sri Lanka students face and how NextOra provides the solution.',
    url: 'https://nextora.lk/problem',
    siteName: 'NextOra',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Campus Problems NextOra Solves',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Campus Problems We Solve - NextOra',
    description: 'Discover the challenges IIT students face and how NextOra solves them.',
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

