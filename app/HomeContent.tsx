'use client';

import { Box } from '@mui/material';
import dynamic from 'next/dynamic';
import { colors } from '@/theme/colors';

// Critical above-the-fold components - load immediately
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';

// Below-the-fold components - lazy load for better performance
const Problem = dynamic(() => import('@/components/sections/Problem'), {
    loading: () => null,
});
const Solution = dynamic(() => import('@/components/sections/Solution'), {
    loading: () => null,
});
const Features = dynamic(() => import('@/components/sections/Features'), {
    loading: () => null,
});
const HowItWorks = dynamic(() => import('@/components/sections/HowItWorks'), {
    loading: () => null,
});
const Benefits = dynamic(() => import('@/components/sections/Benefits'), {
    loading: () => null,
});
const Roadmap = dynamic(() => import('@/components/sections/Roadmap'), {
    loading: () => null,
});
const Team = dynamic(() => import('@/components/sections/Team'), {
    loading: () => null,
});
const FAQ = dynamic(() => import('@/components/sections/FAQ'), {
    loading: () => null,
});
const FinalCTA = dynamic(() => import('@/components/sections/FinalCTA'), {
    loading: () => null,
});
const Footer = dynamic(() => import('@/components/sections/Footer'), {
    loading: () => null,
});

export default function HomeContent() {
    return (
        <Box
            component="main"
            role="main"
            aria-label="NextOra Campus Platform Homepage"
            suppressHydrationWarning
            sx={{
                minHeight: '100vh',
                background: colors.background,
                overflowX: 'hidden',
            }}
        >
            <Navbar />
            <Hero />
            <Problem />
            <Solution />
            <Features />
            <HowItWorks />
            <Benefits />
            <Roadmap />
            <Team />
            <FAQ />
            <FinalCTA />
            <Footer />
        </Box>
    );
}

