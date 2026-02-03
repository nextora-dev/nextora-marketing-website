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
    description: 'Find answers to frequently asked questions about NextOra — features, security, pricing, and how it helps IIT Sri Lanka students.',
    url: 'https://nextora.lk/faq',
    siteName: 'NextOra',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'NextOra FAQ - Frequently Asked Questions',
      },
    ],
    locale: 'en_US',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'FAQ - NextOra Campus Platform',
    description: 'Find answers to frequently asked questions about NextOra.',
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

