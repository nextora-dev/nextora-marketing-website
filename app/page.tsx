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

            {/* Server-Rendered SEO Content - Visible to crawlers immediately */}
            {/* This content is hidden visually but readable by search engines */}
            <article
                itemScope
                itemType="https://schema.org/WebPage"
                style={{
                    position: 'absolute',
                    width: '1px',
                    height: '1px',
                    padding: 0,
                    margin: '-1px',
                    overflow: 'hidden',
                    clip: 'rect(0, 0, 0, 0)',
                    whiteSpace: 'nowrap',
                    border: 0,
                }}
            >
                <h1 itemProp="headline">NextOra - #1 Campus Platform for IIT Sri Lanka Students</h1>
                <p itemProp="description">
                    The ultimate unified platform for IIT Sri Lanka students. Access timetables,
                    kuppi sessions, AR campus navigation, events, and connect with your campus community.
                </p>

                <section>
                    <h2>Features - Complete Campus Management Tools for IIT Students</h2>
                    <p>
                        Explore NextOra comprehensive features: real-time timetables, kuppi session
                        coordination, AR navigation, event calendar, and seamless campus integration
                        for IIT Sri Lanka students.
                    </p>
                    <ul>
                        <li>Academic Hub - Real-time timetables, exam schedules, and results</li>
                        <li>Kuppi Sessions - Peer tutoring coordination and notes sharing</li>
                        <li>AR Campus Navigation - Augmented reality wayfinding for IIT buildings</li>
                        <li>Events and Tickets - Campus event discovery and QR ticketing</li>
                        <li>Student Elections - Secure digital voting system</li>
                        <li>Lost and Found - AI-powered item matching</li>
                        <li>Lecturer Connect - Book consultations with lecturers</li>
                        <li>SRU Portal - Student Representative Union communication</li>
                        <li>Boarding Houses - Verified accommodation listings</li>
                    </ul>
                </section>

                <section>
                    <h2>How It Works - Easy Campus Management</h2>
                    <p>
                        Discover how NextOra simplifies campus life for IIT students. One platform
                        for schedules, collaboration, navigation, and staying connected with campus activities.
                    </p>
                    <ol>
                        <li>Sign in with your IIT credentials for secure access</li>
                        <li>Personalize your dashboard with courses and interests</li>
                        <li>Get real-time updates for timetable changes and events</li>
                        <li>Access all campus services from one unified platform</li>
                    </ol>
                </section>

                <section>
                    <h2>About NextOra - Built by IIT Students for IIT Students</h2>
                    <p>
                        NextOra is developed by IIT Sri Lanka undergraduates from the SE-03 group
                        as part of the SDGP module. We understand the challenges of campus life
                        and built this platform to solve them.
                    </p>
                </section>

                <section>
                    <h2>Frequently Asked Questions about NextOra</h2>
                    <dl>
                        <dt>What is NextOra?</dt>
                        <dd>NextOra is the unified campus platform for IIT Sri Lanka students, combining timetables, events, AR navigation, kuppi sessions, and more.</dd>
                        <dt>Is NextOra free for IIT students?</dt>
                        <dd>Yes, NextOra is completely free for all IIT Sri Lanka students and staff.</dd>
                        <dt>How secure is NextOra?</dt>
                        <dd>NextOra uses enterprise-grade security including OAuth2, JWT tokens, and 2FA options.</dd>
                    </dl>
                </section>

                <footer>
                    <p>Contact: nextora.platform@gmail.com</p>
                    <p>Location: Informatics Institute of Technology, Colombo, Sri Lanka</p>
                    <p>© 2025 NextOra. All rights reserved.</p>
                </footer>
            </article>

            {/* Main visible content (client-rendered) */}
            <HomeContent />
        </>
    );
}

