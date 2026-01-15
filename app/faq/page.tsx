import type { Metadata } from 'next';
import { Box } from '@mui/material';
import FAQ from '@/components/sections/FAQ';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import FinalCTA from '@/components/sections/FinalCTA';
import { colors } from '@/theme/colors';

export const metadata: Metadata = {
  title: 'FAQ - Frequently Asked Questions',
  description: 'Everything you need to know about NextOra campus platform — features, security, pricing, and how it helps IIT Sri Lanka students manage campus life.',
  keywords: [
    'NextOra FAQ',
    'NextOra questions',
    'campus platform FAQ',
    'IIT Sri Lanka app help',
    'NextOra support',
    'NextOra pricing',
    'NextOra security',
    'student app questions',
  ],
  alternates: {
    canonical: 'https://nextora.lk/faq',
  },
  openGraph: {
    title: 'FAQ - NextOra Campus Platform',
    description: 'Find answers to frequently asked questions about NextOra.',
    url: 'https://nextora.lk/faq',
    type: 'website',
  },
};

export default function FAQPage() {
  return (
    <Box
      component="main"
      role="main"
      aria-label="NextOra FAQ Page"
      sx={{
        minHeight: '100vh',
        background: colors.background,
        overflowX: 'hidden',
      }}
    >
      <Navbar />
      <Box sx={{ pt: { xs: 10, md: 12 } }}>
        <FAQ />
      </Box>
      <FinalCTA />
      <Footer />
    </Box>
  );
}

