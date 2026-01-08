'use client';

import { Box } from '@mui/material';
import Navbar from '@/components/sections/Navbar';
import Hero from '@/components/sections/Hero';
import Problem from '@/components/sections/Problem';
import Solution from '@/components/sections/Solution';
import Features from '@/components/sections/Features';
import HowItWorks from '@/components/sections/HowItWorks';
import Benefits from '@/components/sections/Benefits';
import Testimonials from '@/components/sections/Testimonials';
import Roadmap from '@/components/sections/Roadmap';
import Integration from '@/components/sections/Integration';
import Pricing from '@/components/sections/Pricing';
import Security from '@/components/sections/Security';
import Team from '@/components/sections/Team';
import FAQ from '@/components/sections/FAQ';
import FinalCTA from '@/components/sections/FinalCTA';
import Footer from '@/components/sections/Footer';

export default function Home() {
    return (
        <Box
            component="main"
            sx={{
                minHeight: '100vh',
                background: '#0A0E1A',
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
            <Integration />
            <Testimonials />
            <Pricing />
            <Security />
            <Roadmap />
            <Team />
            <FAQ />
            <FinalCTA />
            <Footer />
        </Box>
    );
}
