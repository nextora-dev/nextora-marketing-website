'use client';

import { Box, Typography, Button, Container } from '@mui/material';
import Link from 'next/link';
import Navbar from '@/components/sections/Navbar';
import Footer from '@/components/sections/Footer';
import { colors } from '@/theme/colors';

// JSON-LD for 404 page
const notFoundJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    name: '404 - Page Not Found',
    description: 'The requested page was not found on NextOra.',
    url: 'https://nextora.lk/404',
    isPartOf: {
        '@id': 'https://nextora.lk/#website',
    },
    breadcrumb: {
        '@type': 'BreadcrumbList',
        itemListElement: [
            {
                '@type': 'ListItem',
                position: 1,
                name: 'Home',
                item: 'https://nextora.lk',
            },
            {
                '@type': 'ListItem',
                position: 2,
                name: '404 - Page Not Found',
            },
        ],
    },
};

export default function NotFound() {
    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(notFoundJsonLd),
                }}
            />
            <Box
                component="main"
                role="main"
                aria-label="404 Page Not Found"
                sx={{
                    minHeight: '100vh',
                    background: colors.background,
                    display: 'flex',
                    flexDirection: 'column',
                }}
            >
                <Navbar />
                <Container
                    maxWidth="md"
                    sx={{
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        textAlign: 'center',
                        py: { xs: 8, md: 12 },
                        mt: { xs: 8, md: 10 },
                    }}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            fontSize: { xs: '6rem', md: '10rem' },
                            fontWeight: 800,
                            background: 'linear-gradient(135deg, #3B82F6, #6366F1)',
                            WebkitBackgroundClip: 'text',
                            WebkitTextFillColor: 'transparent',
                            backgroundClip: 'text',
                            mb: 2,
                        }}
                    >
                        404
                    </Typography>
                    <Typography
                        variant="h4"
                        component="h2"
                        sx={{
                            fontWeight: 700,
                            color: colors.text.primary,
                            mb: 2,
                        }}
                    >
                        Page Not Found
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{
                            color: colors.text.secondary,
                            mb: 4,
                            maxWidth: '500px',
                        }}
                    >
                        Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
                        Let&apos;s get you back to exploring NextOra.
                    </Typography>
                    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', justifyContent: 'center' }}>
                        <Link href="/" passHref legacyBehavior>
                            <Button
                                variant="contained"
                                size="large"
                                sx={{
                                    background: 'linear-gradient(135deg, #3B82F6, #6366F1)',
                                    color: '#fff',
                                    fontWeight: 600,
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: '12px',
                                    textTransform: 'none',
                                    '&:hover': {
                                        background: 'linear-gradient(135deg, #2563EB, #4F46E5)',
                                    },
                                }}
                            >
                                Go to Homepage
                            </Button>
                        </Link>
                        <Link href="/features" passHref legacyBehavior>
                            <Button
                                variant="outlined"
                                size="large"
                                sx={{
                                    borderColor: '#3B82F6',
                                    color: '#3B82F6',
                                    fontWeight: 600,
                                    px: 4,
                                    py: 1.5,
                                    borderRadius: '12px',
                                    textTransform: 'none',
                                    '&:hover': {
                                        borderColor: '#2563EB',
                                        backgroundColor: 'rgba(59, 130, 246, 0.05)',
                                    },
                                }}
                            >
                                Explore Features
                            </Button>
                        </Link>
                    </Box>
                    <Box sx={{ mt: 6 }}>
                        <Typography variant="body2" sx={{ color: colors.text.secondary }}>
                            Looking for something specific? Check out these pages:
                        </Typography>
                        <Box
                            sx={{
                                display: 'flex',
                                gap: 3,
                                mt: 2,
                                flexWrap: 'wrap',
                                justifyContent: 'center',
                            }}
                        >
                            {[
                                { name: 'Features', href: '/features' },
                                { name: 'How It Works', href: '/how-it-works' },
                                { name: 'Benefits', href: '/benefits' },
                                { name: 'FAQ', href: '/faq' },
                                { name: 'Team', href: '/team' },
                            ].map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    style={{
                                        color: '#3B82F6',
                                        textDecoration: 'none',
                                        fontWeight: 500,
                                    }}
                                >
                                    {link.name}
                                </Link>
                            ))}
                        </Box>
                    </Box>
                </Container>
                <Footer />
            </Box>
        </>
    );
}
