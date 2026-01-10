import type { Metadata } from 'next';
import HomeContent from './HomeContent';

// Page-specific SEO metadata - Optimized for search rankings
export const metadata: Metadata = {
    // Primary Title (50-60 characters) - Main keyword first
    title: 'NextOra - #1 Campus Platform for IIT Sri Lanka Students',

    // Meta Description (150-160 characters) - Compelling with keywords
    description: 'The ultimate unified platform for IIT Sri Lanka students. Access timetables, kuppi sessions, AR campus navigation, events, and connect with your campus community.',

    // Targeted Keywords
    keywords: [
        // Brand
        'NextOra',
        'NextOra app',
        'NextOra IIT',

        // Primary
        'IIT Sri Lanka',
        'IIT campus platform',
        'IIT student portal',
        'Informatics Institute of Technology',

        // Features
        'campus platform',
        'student timetables',
        'kuppi sessions',
        'AR campus navigation',
        'campus events',
        'student elections',
        'lost and found',
        'lecturer booking',

        // Location
        'Sri Lanka university app',
        'Colombo campus app',

        // Long-tail
        'best campus app Sri Lanka',
        'IIT student management system',
        'university life app',
    ],

    // Canonical URL
    alternates: {
        canonical: 'https://nextora.lk',
    },

    // Open Graph (Facebook, LinkedIn)
    openGraph: {
        title: 'NextOra - #1 Campus Platform for IIT Sri Lanka Students',
        description: 'The ultimate unified platform for IIT Sri Lanka students. Access timetables, kuppi sessions, AR campus navigation, events, and connect with your campus community.',
        url: 'https://nextora.lk',
        siteName: 'NextOra',
        images: [
            {
                url: 'https://nextora.lk/og-image.png',
                width: 1200,
                height: 630,
                alt: 'NextOra - Unified Campus Platform for IIT Sri Lanka Students',
            },
        ],
        locale: 'en_US',
        type: 'website',
    },

    // Twitter Cards
    twitter: {
        card: 'summary_large_image',
        title: 'NextOra - #1 Campus Platform for IIT Sri Lanka',
        description: 'The ultimate unified platform for IIT Sri Lanka students. Timetables, kuppi sessions, AR navigation, events & more!',
        images: ['https://nextora.lk/twitter-image.png'],
        creator: '@NextOraApp',
        site: '@NextOraApp',
    },

    // Robots
    robots: {
        index: true,
        follow: true,
        googleBot: {
            index: true,
            follow: true,
            'max-video-preview': -1,
            'max-image-preview': 'large',
            'max-snippet': -1,
        },
    },
};

// JSON-LD for the homepage
const homePageJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'WebPage',
    '@id': 'https://nextora.lk/#webpage',
    url: 'https://nextora.lk',
    name: 'NextOra - #1 Campus Platform for IIT Sri Lanka Students',
    description: 'The ultimate unified campus platform for IIT Sri Lanka students with timetables, AR navigation, events, kuppi sessions, and more.',
    isPartOf: {
        '@id': 'https://nextora.lk/#website',
    },
    about: {
        '@id': 'https://nextora.lk/#organization',
    },
    primaryImageOfPage: {
        '@type': 'ImageObject',
        url: 'https://nextora.lk/og-image.png',
    },
    datePublished: '2025-01-01',
    dateModified: '2026-01-10',
    inLanguage: 'en-US',
    potentialAction: [
        {
            '@type': 'ReadAction',
            target: ['https://nextora.lk'],
        },
    ],
    speakable: {
        '@type': 'SpeakableSpecification',
        cssSelector: ['h1', '.hero-description', 'h2'],
    },
    mainEntity: {
        '@type': 'SoftwareApplication',
        name: 'NextOra',
        applicationCategory: 'EducationalApplication',
        operatingSystem: 'Web, iOS, Android',
        offers: {
            '@type': 'Offer',
            price: '0',
            priceCurrency: 'LKR',
        },
    },
};

export default function Home() {
    return (
        <>
            {/* Page-specific JSON-LD */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify(homePageJsonLd),
                }}
            />
            <HomeContent />
        </>
    );
}

