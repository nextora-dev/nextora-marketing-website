import type { Metadata, Viewport } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import ThemeRegistry from '@/theme/ThemeRegistry';

// Optimize font loading - only load necessary weights
const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-plus-jakarta-sans',
    weight: ['400', '500', '600', '700', '800'],
    preload: true,
    fallback: ['system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
});

// Comprehensive SEO Metadata
export const metadata: Metadata = {
    // Base URL for metadata
    metadataBase: new URL('https://nextora.lk'),

    // Primary Meta Tags
    title: {
        default: 'NextOra - #1 Campus Platform for IIT Sri Lanka Students | Timetable, Events, Navigation',
        template: '%s | NextOra - Campus Platform'
    },
    description: 'NextOra is the ultimate unified campus platform for IIT Sri Lanka students. Access timetables, kuppi sessions, AR campus navigation, events, exam results, lost & found, and more in one powerful app. Built by students, for students.',

    // Extended Keywords for SEO
    keywords: [
        // Brand Keywords
        'NextOra',
        'NextOra app',
        'NextOra platform',
        'NextOra IIT',

        // Primary Keywords
        'IIT Sri Lanka',
        'IIT campus app',
        'IIT student portal',
        'IIT timetable',
        'IIT events',

        // Feature Keywords
        'campus navigation app',
        'AR campus navigation',
        'student timetable app',
        'kuppi sessions IIT',
        'peer tutoring Sri Lanka',
        'university events app',
        'exam results portal',
        'lost and found campus',
        'student elections voting',

        // Location Keywords
        'Sri Lanka university app',
        'Colombo campus app',
        'Sri Lankan students',

        // Long-tail Keywords
        'best campus app Sri Lanka',
        'IIT student management system',
        'university life app',
        'smart campus solution',
        'digital campus platform',
        'student productivity app',
        'campus event ticketing',
        'lecturer booking system',
        'academic resource portal',

        // Related Terms
        'Informatics Institute of Technology',
        'university student app',
        'campus management system',
        'student community platform',
    ],

    // Authors and Creator
    authors: [
        { name: 'NextOra Team', url: 'https://nextora.lk' },
        { name: 'IIT Sri Lanka Students' }
    ],
    creator: 'NextOra Development Team',
    publisher: 'NextOra',

    // Robots and Indexing
    robots: {
        index: true,
        follow: true,
        nocache: false,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },

    // Open Graph (Facebook, LinkedIn)
    openGraph: {
        type: 'website',
        locale: 'en_US',
        alternateLocale: ['en_GB', 'si_LK'],
        url: 'https://nextora.lk',
        siteName: 'NextOra',
        title: 'NextOra - The Ultimate Campus Platform for IIT Sri Lanka',
        description: 'One app for your entire campus life. Timetables, kuppi sessions, AR navigation, events, results, lost & found - everything IIT students need in one place.',
        images: [
            {
                url: '/og-image.png',
                width: 1200,
                height: 630,
                alt: 'NextOra - Unified Campus Platform for IIT Sri Lanka',
                type: 'image/png',
            },
            {
                url: '/og-image-square.png',
                width: 600,
                height: 600,
                alt: 'NextOra Logo',
                type: 'image/png',
            }
        ],
    },

    // Twitter Card
    twitter: {
        card: 'summary_large_image',
        site: '@NextOraApp',
        creator: '@NextOraApp',
        title: 'NextOra - #1 Campus Platform for IIT Sri Lanka',
        description: 'The unified campus platform for IIT students. Timetable, events, navigation, kuppi sessions & more!',
        images: ['/twitter-image.png'],
    },

    // App Links
    appLinks: {
        web: {
            url: 'https://nextora.lk',
            should_fallback: true,
        },
    },

    // Verification (Add your actual verification codes)
    verification: {
        google: 'google56cebcfafbf66aed',
        yandex: 'your-yandex-verification-code',
        other: {
            'msvalidate.01': 'your-bing-verification-code',
        },
    },

    // Alternate Languages
    alternates: {
        canonical: 'https://nextora.lk',
        languages: {
            'en-US': 'https://nextora.lk',
            'en-GB': 'https://nextora.lk',
        },
    },

    // Category
    category: 'Education Technology',

    // Classification
    classification: 'Campus Management, Student Portal, Education App',

    // Other Meta
    other: {
        'revisit-after': '7 days',
        'rating': 'General',
        'distribution': 'Global',
        'target': 'all',
        'HandheldFriendly': 'True',
        'MobileOptimized': '320',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'default',
        'apple-mobile-web-app-title': 'NextOra',
        'format-detection': 'telephone=no',
        'google': 'notranslate',
    },

    // Icons
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: 'any' },
            { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        other: [
            { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#3B82F6' },
        ],
    },

    // Manifest
    manifest: '/manifest.json',

    // Abstract
    abstract: 'NextOra is a comprehensive campus management platform designed for IIT Sri Lanka students, offering timetables, event management, AR navigation, kuppi sessions, and more.',
};

// Viewport Configuration
export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
    userScalable: true,
    themeColor: [
        { media: '(prefers-color-scheme: light)', color: '#FFFFFF' },
    ],
    colorScheme: 'light',
};

// JSON-LD Structured Data
const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        // Organization Schema
        {
            '@type': 'Organization',
            '@id': 'https://nextora.lk/#organization',
            name: 'NextOra',
            url: 'https://nextora.lk',
            logo: {
                '@type': 'ImageObject',
                url: 'https://nextora.lk/sdgp_logo.png',
                width: 512,
                height: 512,
            },
            description: 'NextOra is the unified campus platform for IIT Sri Lanka students.',
            foundingDate: '2025',
            founders: [
                { '@type': 'Person', name: 'Haritha Wikramasinha' },
                { '@type': 'Person', name: 'Janindu Wijesooriya' },
            ],
            sameAs: [
                'https://twitter.com/NextOraApp',
                'https://linkedin.com/company/nextora',
                'https://instagram.com/nextora.app',
            ],
            contactPoint: {
                '@type': 'ContactPoint',
                email: 'nextora.platform@gmail.com',
                contactType: 'customer support',
            },
        },
        // WebSite Schema
        {
            '@type': 'WebSite',
            '@id': 'https://nextora.lk/#website',
            url: 'https://nextora.lk',
            name: 'NextOra',
            description: 'The unified campus platform for IIT Sri Lanka students',
            publisher: { '@id': 'https://nextora.lk/#organization' },
            potentialAction: {
                '@type': 'SearchAction',
                target: {
                    '@type': 'EntryPoint',
                    urlTemplate: 'https://nextora.lk/search?q={search_term_string}',
                },
                'query-input': 'required name=search_term_string',
            },
        },
        // WebPage Schema
        {
            '@type': 'WebPage',
            '@id': 'https://nextora.lk/#webpage',
            url: 'https://nextora.lk',
            name: 'NextOra - #1 Campus Platform for IIT Sri Lanka Students',
            description: 'The ultimate unified campus platform for IIT Sri Lanka. Access timetables, events, AR navigation, kuppi sessions, and more.',
            isPartOf: { '@id': 'https://nextora.lk/#website' },
            about: { '@id': 'https://nextora.lk/#organization' },
            primaryImageOfPage: {
                '@type': 'ImageObject',
                url: 'https://nextora.lk/og-image.png',
            },
        },
        // SoftwareApplication Schema
        {
            '@type': 'SoftwareApplication',
            name: 'NextOra',
            applicationCategory: 'EducationalApplication',
            operatingSystem: 'Web, iOS, Android',
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
            },
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '500',
                bestRating: '5',
                worstRating: '1',
            },
            description: 'NextOra is the unified campus platform for IIT Sri Lanka students featuring timetables, AR navigation, events, and more.',
            screenshot: 'https://nextora.lk/app-screenshot.png',
            featureList: [
                'Real-time Timetables',
                'AR Campus Navigation',
                'Event Management & Ticketing',
                'Kuppi Sessions',
                'Lost & Found',
                'Exam Results',
                'Student Elections',
                'Lecturer Connect',
            ],
        },
        // FAQPage Schema
        {
            '@type': 'FAQPage',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'What is NextOra?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'NextOra is the unified campus platform for IIT Sri Lanka students, providing timetables, AR campus navigation, events, kuppi sessions, lost & found, and more in one app.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Is NextOra free to use?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes! NextOra is completely free for all IIT students and staff members.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Who can use NextOra?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'NextOra is available to all registered students, lecturers, and staff members of Informatics Institute of Technology (IIT), Sri Lanka.',
                    },
                },
            ],
        },
        // BreadcrumbList Schema
        {
            '@type': 'BreadcrumbList',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://nextora.lk',
                },
            ],
        },
    ],
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={plusJakartaSans.variable}>
        <head>
            {/* Preconnect for Performance */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />

            {/* DNS Prefetch */}
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />

            {/* Canonical URL */}
            <link rel="canonical" href="https://nextora.lk" />

            {/* Alternate Languages */}
            <link rel="alternate" hrefLang="en" href="https://nextora.lk" />
            <link rel="alternate" hrefLang="x-default" href="https://nextora.lk" />

            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Additional SEO Meta Tags */}
            <meta name="geo.region" content="LK" />
            <meta name="geo.placename" content="Colombo, Sri Lanka" />
            <meta name="ICBM" content="6.9271, 79.8612" />

            {/* Dublin Core Meta Tags */}
            <meta name="DC.title" content="NextOra - Campus Platform for IIT Sri Lanka" />
            <meta name="DC.creator" content="NextOra Team" />
            <meta name="DC.subject" content="Campus Management, Student Portal, Education Technology" />
            <meta name="DC.description" content="The unified campus platform for IIT Sri Lanka students" />
            <meta name="DC.publisher" content="NextOra" />
            <meta name="DC.type" content="Software" />
            <meta name="DC.format" content="text/html" />
            <meta name="DC.language" content="en" />
            <meta name="google-site-verification" content="E32PlSZVh82snFZxvLLqpcUF4VcYXhyb6Djv5H7BUB4" />
        </head>
        <body style={{ margin: 0, padding: 0, backgroundColor: '#F8FAFC', fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }}>
        <ThemeRegistry>{children}</ThemeRegistry>
        </body>
        </html>
    );
}
