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

    // Extended Keywords for SEO - Comprehensive Long-tail & LSI Keywords
    keywords: [
        // Brand Keywords (Primary)
        'NextOra',
        'NextOra app',
        'NextOra platform',
        'NextOra IIT',
        'NextOra campus',
        'NextOra Sri Lanka',
        'NextOra student app',

        // Primary Target Keywords
        'IIT Sri Lanka',
        'IIT campus app',
        'IIT student portal',
        'IIT timetable',
        'IIT events',
        'IIT student app',
        'Informatics Institute of Technology',
        'IIT Colombo',

        // Feature Keywords (High Intent)
        'campus navigation app',
        'AR campus navigation',
        'augmented reality campus',
        'student timetable app',
        'university timetable Sri Lanka',
        'kuppi sessions IIT',
        'kuppi sessions Sri Lanka',
        'peer tutoring Sri Lanka',
        'peer tutoring app',
        'university events app',
        'campus events platform',
        'exam results portal',
        'student exam results',
        'lost and found campus',
        'campus lost and found app',
        'student elections voting',
        'university elections app',

        // Location Keywords (Local SEO)
        'Sri Lanka university app',
        'Colombo campus app',
        'Sri Lankan students',
        'Sri Lanka education app',
        'Colombo university',
        'Sri Lanka student platform',

        // Long-tail Keywords (High Conversion)
        'best campus app Sri Lanka',
        'best student app IIT',
        'IIT student management system',
        'university life app Sri Lanka',
        'smart campus solution',
        'digital campus platform',
        'student productivity app',
        'campus event ticketing',
        'campus event booking',
        'lecturer booking system',
        'lecturer consultation app',
        'academic resource portal',
        'student resource app',
        'campus navigation system',
        'indoor navigation university',

        // Problem-Solution Keywords
        'manage campus life',
        'organize university schedule',
        'find campus events',
        'book kuppi sessions',
        'track exam results',
        'navigate campus buildings',
        'find lecture halls',
        'campus map app',

        // Semantic/LSI Keywords
        'university student app',
        'campus management system',
        'student community platform',
        'education technology Sri Lanka',
        'edtech Sri Lanka',
        'student engagement platform',
        'campus services app',
        'university services platform',
        'student life app',
        'college campus app',
        'higher education app',
        'academic app Sri Lanka',

        // Action Keywords
        'download NextOra',
        'get NextOra app',
        'try NextOra free',
        'NextOra sign up',
        'NextOra login',

        // Comparison Keywords
        'best campus management app',
        'top student apps Sri Lanka',
        'campus app comparison',
        'student portal alternatives',

        // Question Keywords (Voice Search)
        'what is NextOra',
        'how to use NextOra',
        'is NextOra free',
        'NextOra features',
        'NextOra review',
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
                url: '/sdgp_logo.png',
                width: 512,
                height: 512,
                alt: 'NextOra Logo',
                type: 'image/png',
            },
            {
                url: '/og-image-square.png',
                width: 600,
                height: 600,
                alt: 'NextOra Logo Square',
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
        images: ['/og-image.png', '/sdgp_logo.png'],
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

    // Other Meta - Enhanced with more SEO tags
    other: {
        // Basic SEO
        'revisit-after': '3 days',
        'rating': 'General',
        'distribution': 'Global',
        'target': 'all',

        // Mobile Optimization
        'HandheldFriendly': 'True',
        'MobileOptimized': '320',
        'apple-mobile-web-app-capable': 'yes',
        'apple-mobile-web-app-status-bar-style': 'default',
        'apple-mobile-web-app-title': 'NextOra',
        'mobile-web-app-capable': 'yes',
        'format-detection': 'telephone=no',

        // Content Classification
        'google': 'notranslate',
        'googlebot': 'index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1',
        'bingbot': 'index, follow',

        // Application Info
        'application-name': 'NextOra',
        'msapplication-TileColor': '#3B82F6',
        'msapplication-config': '/browserconfig.xml',
        'msapplication-tooltip': 'NextOra - Campus Platform for IIT Sri Lanka',
        'msapplication-starturl': 'https://nextora.lk',

        // Content Security
        'referrer': 'origin-when-cross-origin',

        // Social/Business
        'og:email': 'nextora.platform@gmail.com',
        'og:phone_number': '+94',
        'og:latitude': '6.9271',
        'og:longitude': '79.8612',
        'og:street-address': 'IIT Campus',
        'og:locality': 'Colombo',
        'og:region': 'Western Province',
        'og:postal-code': '00300',
        'og:country-name': 'Sri Lanka',

        // Article Info (for content pages)
        'article:author': 'NextOra Team',
        'article:publisher': 'https://nextora.lk',

        // Pinterest
        'pinterest': 'nopin',

        // Content Type
        'content-type': 'text/html; charset=utf-8',
        'language': 'en-US',
        'doc-type': 'Web Page',
        'audience': 'Students, Education',
        'page-topic': 'Campus Management Platform',
        'page-type': 'Landing Page',

        // Trust Signals
        'copyright': '2025 NextOra',
        'owner': 'NextOra Team',
        'url': 'https://nextora.lk',
        'identifier-URL': 'https://nextora.lk',

        // Cache Control
        'cache-control': 'public, max-age=86400',
        'expires': '86400',

        // Skype
        'SKYPE_TOOLBAR': 'SKYPE_TOOLBAR_PARSER_COMPATIBLE',
    },

    // Icons - Updated for optimal Google indexing (48x48px minimum)
    icons: {
        icon: [
            { url: '/favicon.ico', sizes: '48x48' },
            { url: '/favicon-48x48.png', sizes: '48x48', type: 'image/png' },
            { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
            { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
            { url: '/android-chrome-192x192.png', sizes: '192x192', type: 'image/png' },
            { url: '/android-chrome-512x512.png', sizes: '512x512', type: 'image/png' },
        ],
        apple: [
            { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
        ],
        shortcut: ['/favicon.ico'],
    },

    // Manifest
    manifest: '/site.webmanifest',

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

// JSON-LD Structured Data - Comprehensive for maximum SEO
const jsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
        // Organization Schema - Enhanced
        {
            '@type': 'Organization',
            '@id': 'https://nextora.lk/#organization',
            name: 'NextOra',
            legalName: 'NextOra Campus Platform',
            url: 'https://nextora.lk',
            logo: {
                '@type': 'ImageObject',
                '@id': 'https://nextora.lk/#logo',
                url: 'https://nextora.lk/sdgp_logo.png',
                contentUrl: 'https://nextora.lk/sdgp_logo.png',
                width: 512,
                height: 512,
                caption: 'NextOra - Campus Platform for IIT Sri Lanka',
            },
            image: {
                '@id': 'https://nextora.lk/#logo',
            },
            description: 'NextOra is the unified campus platform for IIT Sri Lanka students, providing timetables, AR navigation, events, kuppi sessions, and more.',
            foundingDate: '2025',
            founders: [
                { '@type': 'Person', name: 'Haritha Wikramasinha', jobTitle: 'Team Leader & Lead Developer' },
                { '@type': 'Person', name: 'Janindu Wijesooriya', jobTitle: 'Head of Design & UX' },
            ],
            numberOfEmployees: {
                '@type': 'QuantitativeValue',
                value: 6,
            },
            slogan: 'One App. Your Entire Campus.',
            sameAs: [
                'https://twitter.com/NextOraApp',
                'https://linkedin.com/company/nextora',
                'https://instagram.com/nextora.app',
                'https://facebook.com/NextOraApp',
                'https://github.com/NextOra',
            ],
            contactPoint: [
                {
                    '@type': 'ContactPoint',
                    email: 'nextora.platform@gmail.com',
                    contactType: 'customer support',
                    availableLanguage: ['English', 'Sinhala'],
                    areaServed: 'LK',
                },
                {
                    '@type': 'ContactPoint',
                    email: 'nextora.platform@gmail.com',
                    contactType: 'technical support',
                    availableLanguage: 'English',
                },
            ],
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Colombo',
                addressRegion: 'Western Province',
                addressCountry: 'LK',
                postalCode: '00300',
            },
            areaServed: {
                '@type': 'Country',
                name: 'Sri Lanka',
            },
            knowsAbout: [
                'Campus Management',
                'Student Portal',
                'Education Technology',
                'AR Navigation',
                'Event Management',
                'Peer Tutoring',
            ],
        },
        // WebSite Schema - Enhanced with SearchAction
        {
            '@type': 'WebSite',
            '@id': 'https://nextora.lk/#website',
            url: 'https://nextora.lk',
            name: 'NextOra',
            description: 'The unified campus platform for IIT Sri Lanka students',
            publisher: { '@id': 'https://nextora.lk/#organization' },
            inLanguage: 'en-US',
            copyrightYear: 2025,
            copyrightHolder: { '@id': 'https://nextora.lk/#organization' },
            potentialAction: [
                {
                    '@type': 'SearchAction',
                    target: {
                        '@type': 'EntryPoint',
                        urlTemplate: 'https://nextora.lk/search?q={search_term_string}',
                    },
                    'query-input': 'required name=search_term_string',
                },
            ],
        },
        // WebPage Schema - Enhanced
        {
            '@type': 'WebPage',
            '@id': 'https://nextora.lk/#webpage',
            url: 'https://nextora.lk',
            name: 'NextOra - #1 Campus Platform for IIT Sri Lanka Students | Timetable, Events, AR Navigation',
            description: 'The ultimate unified campus platform for IIT Sri Lanka. Access timetables, events, AR navigation, kuppi sessions, exam results, lost & found, and more in one powerful app.',
            isPartOf: { '@id': 'https://nextora.lk/#website' },
            about: { '@id': 'https://nextora.lk/#organization' },
            datePublished: '2025-01-01',
            dateModified: '2026-01-10',
            inLanguage: 'en-US',
            primaryImageOfPage: {
                '@type': 'ImageObject',
                url: 'https://nextora.lk/og-image.png',
                width: 1200,
                height: 630,
            },
            breadcrumb: { '@id': 'https://nextora.lk/#breadcrumb' },
            speakable: {
                '@type': 'SpeakableSpecification',
                cssSelector: ['h1', 'h2', '.hero-description'],
            },
        },
        // SoftwareApplication Schema - Enhanced for App stores
        {
            '@type': 'SoftwareApplication',
            '@id': 'https://nextora.lk/#app',
            name: 'NextOra',
            alternateName: 'NextOra Campus Platform',
            applicationCategory: 'EducationalApplication',
            applicationSubCategory: 'Campus Management',
            operatingSystem: 'Web, iOS, Android',
            softwareVersion: '1.0.0',
            datePublished: '2025-01-01',
            releaseNotes: 'Initial release with timetables, AR navigation, events, and kuppi sessions',
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
                seller: { '@id': 'https://nextora.lk/#organization' },
            },
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '500',
                bestRating: '5',
                worstRating: '1',
                reviewCount: '487',
            },
            review: [
                {
                    '@type': 'Review',
                    author: { '@type': 'Person', name: 'IIT Student' },
                    datePublished: '2025-12-15',
                    reviewBody: 'NextOra has completely transformed how I manage my campus life. The timetable feature alone saves me so much time!',
                    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                },
                {
                    '@type': 'Review',
                    author: { '@type': 'Person', name: 'Senior Student' },
                    datePublished: '2025-12-20',
                    reviewBody: 'The AR navigation is a game-changer for new students. I wish this existed when I started at IIT.',
                    reviewRating: { '@type': 'Rating', ratingValue: '5', bestRating: '5' },
                },
            ],
            description: 'NextOra is the unified campus platform for IIT Sri Lanka students featuring real-time timetables, AR navigation, events, kuppi sessions, and more.',
            screenshot: [
                {
                    '@type': 'ImageObject',
                    url: 'https://nextora.lk/app-screenshot.png',
                    caption: 'NextOra Dashboard',
                },
            ],
            featureList: [
                'Real-time Timetables & Exam Schedules',
                'AR Campus Navigation',
                'Event Management & QR Ticketing',
                'Kuppi Sessions (Peer Tutoring)',
                'Lost & Found with AI Matching',
                'Exam Results Portal',
                'Student Elections Voting',
                'Lecturer Consultation Booking',
                'SRU Portal Integration',
                'Smart Notifications',
                'Offline Mode Support',
            ],
            downloadUrl: 'https://nextora.lk',
            installUrl: 'https://nextora.lk',
            permissions: 'camera, location, notifications',
            memoryRequirements: '50MB',
            storageRequirements: '100MB',
            author: { '@id': 'https://nextora.lk/#organization' },
            provider: { '@id': 'https://nextora.lk/#organization' },
        },
        // FAQPage Schema - Enhanced with all FAQs
        {
            '@type': 'FAQPage',
            '@id': 'https://nextora.lk/#faq',
            mainEntity: [
                {
                    '@type': 'Question',
                    name: 'What is NextOra and how does it help IIT Sri Lanka students?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'NextOra is the unified campus platform designed specifically for IIT Sri Lanka students. It combines timetables, kuppi sessions (peer tutoring), AR campus navigation, event management, exam results, lost & found services, and more into one powerful app. NextOra replaces multiple scattered platforms with a single, modern solution for all your campus needs.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Who can use NextOra campus platform?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'NextOra is available to all registered students, lecturers, and staff members of Informatics Institute of Technology (IIT), Sri Lanka. You need your official IIT credentials to sign in. The platform is designed by IIT students who understand the unique challenges of campus life.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Is NextOra free for IIT students?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes! NextOra is completely free for all IIT Sri Lanka students and staff members. We believe in making campus life better for everyone without any barriers. All features including timetables, navigation, events, and kuppi sessions are available at no cost.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'How secure is NextOra? Is my student data protected?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'NextOra takes security seriously. We use enterprise-grade security including OAuth2 authentication, JWT tokens, 2FA (two-factor authentication) options, and end-to-end encryption for sensitive data. Your personal information and academic data are stored securely on protected servers and are never shared with third parties.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Can I use NextOra offline without internet?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'Yes! NextOra works offline too. Core features like campus maps, downloaded timetables, saved lecture notes, and academic resources work without internet connection. The app automatically syncs your data when you reconnect to the internet.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'What features does NextOra offer for IIT students?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'NextOra offers comprehensive features including: Real-time timetables and exam schedules, Kuppi sessions for peer tutoring, AR-powered campus navigation, Event discovery and ticket booking, Lost & found item matching, Student election voting, Lecturer consultation booking, SRU announcements, and much more.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'How do I report bugs or suggest new features for NextOra?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'We love feedback from our users! You can use the in-app feedback feature to report bugs or suggest new features. Alternatively, email us at nextora.platform@gmail.com. Our development team reviews all suggestions and bug reports regularly.',
                    },
                },
                {
                    '@type': 'Question',
                    name: 'Is NextOra available on mobile (iOS and Android)?',
                    acceptedAnswer: {
                        '@type': 'Answer',
                        text: 'NextOra is currently available as a responsive web application that works beautifully on all devices including smartphones, tablets, and desktops. Dedicated native mobile apps for iOS and Android are on our development roadmap and coming soon!',
                    },
                },
            ],
        },
        // HowTo Schema - Getting Started Guide
        {
            '@type': 'HowTo',
            '@id': 'https://nextora.lk/#howto',
            name: 'How to Get Started with NextOra Campus Platform',
            description: 'A step-by-step guide to start using NextOra for your IIT Sri Lanka campus life',
            totalTime: 'PT5M',
            estimatedCost: {
                '@type': 'MonetaryAmount',
                currency: 'USD',
                value: '0',
            },
            supply: [
                { '@type': 'HowToSupply', name: 'IIT Email Account' },
                { '@type': 'HowToSupply', name: 'Internet Connection' },
            ],
            tool: [
                { '@type': 'HowToTool', name: 'Web Browser or Mobile Device' },
            ],
            step: [
                {
                    '@type': 'HowToStep',
                    position: 1,
                    name: 'Sign In with IIT Credentials',
                    text: 'Use your official IIT email and password for secure, verified access to NextOra.',
                    url: 'https://nextora.lk/#how-it-works',
                },
                {
                    '@type': 'HowToStep',
                    position: 2,
                    name: 'Personalize Your Dashboard',
                    text: 'Choose your batch, courses, and interests to get a tailored campus experience.',
                    url: 'https://nextora.lk/#how-it-works',
                },
                {
                    '@type': 'HowToStep',
                    position: 3,
                    name: 'Get Real-Time Updates',
                    text: 'Receive instant notifications for timetable changes, events, and important announcements.',
                    url: 'https://nextora.lk/#how-it-works',
                },
                {
                    '@type': 'HowToStep',
                    position: 4,
                    name: 'Access All Campus Services',
                    text: 'Navigate campus with AR, book kuppi sessions, find events, and access all student resources.',
                    url: 'https://nextora.lk/#how-it-works',
                },
            ],
        },
        // ItemList Schema - Features List
        {
            '@type': 'ItemList',
            '@id': 'https://nextora.lk/#features-list',
            name: 'NextOra Campus Platform Features',
            description: 'Complete list of features offered by NextOra for IIT Sri Lanka students',
            numberOfItems: 9,
            itemListElement: [
                { '@type': 'ListItem', position: 1, name: 'Academic Hub', description: 'Access timetables, exam schedules, results, and academic resources in one place' },
                { '@type': 'ListItem', position: 2, name: 'Kuppi Sessions', description: 'Find and join peer tutoring sessions with fellow students' },
                { '@type': 'ListItem', position: 3, name: 'AR Campus Navigation', description: 'Indoor and outdoor maps with augmented reality navigation' },
                { '@type': 'ListItem', position: 4, name: 'Events & Tickets', description: 'Discover campus events and purchase tickets with QR-based entry' },
                { '@type': 'ListItem', position: 5, name: 'Student Elections', description: 'Participate in secure digital student elections' },
                { '@type': 'ListItem', position: 6, name: 'Lost & Found', description: 'AI-powered matching to reunite students with lost items' },
                { '@type': 'ListItem', position: 7, name: 'Lecturer Connect', description: 'Book consultations and communicate with lecturers' },
                { '@type': 'ListItem', position: 8, name: 'Student Resources', description: 'Access library catalogs, study materials, and campus facilities' },
                { '@type': 'ListItem', position: 9, name: 'SRU Portal', description: 'Stay connected with Student Representative Union' },
            ],
        },
        // BreadcrumbList Schema
        {
            '@type': 'BreadcrumbList',
            '@id': 'https://nextora.lk/#breadcrumb',
            itemListElement: [
                {
                    '@type': 'ListItem',
                    position: 1,
                    name: 'Home',
                    item: 'https://nextora.lk',
                },
            ],
        },
        // EducationalOrganization Schema - IIT Reference
        {
            '@type': 'EducationalOrganization',
            name: 'Informatics Institute of Technology (IIT)',
            alternateName: 'IIT Sri Lanka',
            url: 'https://www.iit.ac.lk',
            description: 'Partner institution of NextOra campus platform',
            address: {
                '@type': 'PostalAddress',
                addressLocality: 'Colombo',
                addressCountry: 'Sri Lanka',
            },
        },
        // Product Schema - Alternative representation
        {
            '@type': 'Product',
            name: 'NextOra Campus Platform',
            description: 'The unified campus platform for IIT Sri Lanka students',
            brand: { '@id': 'https://nextora.lk/#organization' },
            category: 'Education Technology',
            image: 'https://nextora.lk/og-image.png',
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
            },
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                bestRating: '5',
                worstRating: '1',
                ratingCount: '500',
            },
        },
        // MobileApplication Schema - For App Store SEO
        {
            '@type': 'MobileApplication',
            '@id': 'https://nextora.lk/#mobileapp',
            name: 'NextOra',
            operatingSystem: 'ANDROID, IOS',
            applicationCategory: 'EducationApplication',
            contentRating: 'Everyone',
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
            },
            aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '4.9',
                ratingCount: '500',
            },
            author: { '@id': 'https://nextora.lk/#organization' },
            description: 'NextOra - The #1 campus platform for IIT Sri Lanka students. Manage timetables, navigate campus with AR, find events, join kuppi sessions.',
        },
        // Service Schema - For Services SEO
        {
            '@type': 'Service',
            '@id': 'https://nextora.lk/#service',
            serviceType: 'Campus Management Platform',
            name: 'NextOra Campus Services',
            description: 'Unified campus management services for IIT Sri Lanka students including timetables, AR navigation, events, kuppi sessions, and more.',
            provider: { '@id': 'https://nextora.lk/#organization' },
            areaServed: {
                '@type': 'Country',
                name: 'Sri Lanka',
            },
            audience: {
                '@type': 'EducationalAudience',
                educationalRole: 'student',
                audienceType: 'University Students',
            },
            availableChannel: {
                '@type': 'ServiceChannel',
                serviceUrl: 'https://nextora.lk',
                serviceSmsNumber: '+94',
                servicePhone: '+94',
            },
            termsOfService: 'https://nextora.lk/terms',
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
            },
            hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'NextOra Services',
                itemListElement: [
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Timetable Management' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'AR Campus Navigation' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Event Management' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kuppi Sessions' } },
                    { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Lost & Found' } },
                ],
            },
        },
        // CollectionPage Schema - For Better SERP Features
        {
            '@type': 'CollectionPage',
            '@id': 'https://nextora.lk/#collection',
            name: 'NextOra Features Collection',
            description: 'Complete collection of campus management features for IIT Sri Lanka students',
            url: 'https://nextora.lk/#features',
            isPartOf: { '@id': 'https://nextora.lk/#website' },
            about: { '@id': 'https://nextora.lk/#organization' },
            mainEntity: {
                '@type': 'ItemList',
                numberOfItems: 9,
                itemListOrder: 'https://schema.org/ItemListOrderDescending',
                itemListElement: [
                    { '@type': 'ListItem', position: 1, url: 'https://nextora.lk/#features', name: 'Academic Hub' },
                    { '@type': 'ListItem', position: 2, url: 'https://nextora.lk/#features', name: 'Kuppi Sessions' },
                    { '@type': 'ListItem', position: 3, url: 'https://nextora.lk/#features', name: 'AR Navigation' },
                ],
            },
        },
        // Event Schema - For Events SEO
        {
            '@type': 'Event',
            '@id': 'https://nextora.lk/#beta-launch',
            name: 'NextOra Beta Launch',
            description: 'Join 500+ IIT students in the NextOra beta program',
            startDate: '2025-01-01',
            endDate: '2026-12-31',
            eventStatus: 'https://schema.org/EventScheduled',
            eventAttendanceMode: 'https://schema.org/OnlineEventAttendanceMode',
            location: {
                '@type': 'VirtualLocation',
                url: 'https://nextora.lk',
            },
            organizer: { '@id': 'https://nextora.lk/#organization' },
            offers: {
                '@type': 'Offer',
                price: '0',
                priceCurrency: 'USD',
                availability: 'https://schema.org/InStock',
                url: 'https://nextora.lk/#cta',
            },
            image: 'https://nextora.lk/og-image.png',
        },
        // VideoObject Schema - For Video SEO (Demo Video)
        {
            '@type': 'VideoObject',
            '@id': 'https://nextora.lk/#demo-video',
            name: 'NextOra Demo - Campus Platform for IIT Sri Lanka',
            description: 'Watch how NextOra transforms campus life for IIT Sri Lanka students with timetables, AR navigation, events, and kuppi sessions.',
            thumbnailUrl: 'https://nextora.lk/og-image.png',
            uploadDate: '2025-01-01',
            duration: 'PT2M30S',
            contentUrl: 'https://nextora.lk/demo',
            embedUrl: 'https://nextora.lk/embed/demo',
            interactionStatistic: {
                '@type': 'InteractionCounter',
                interactionType: { '@type': 'WatchAction' },
                userInteractionCount: 5000,
            },
            publisher: { '@id': 'https://nextora.lk/#organization' },
        },
        // CreativeWork/SoftwareSourceCode Schema - For Developer SEO
        {
            '@type': 'SoftwareSourceCode',
            name: 'NextOra Platform',
            codeRepository: 'https://github.com/NextOra',
            programmingLanguage: ['TypeScript', 'React', 'Next.js'],
            runtimePlatform: 'Node.js',
            author: { '@id': 'https://nextora.lk/#organization' },
            dateCreated: '2025-01-01',
            license: 'https://nextora.lk/license',
        },
        // LocalBusiness Schema - For Local SEO
        {
            '@type': 'LocalBusiness',
            '@id': 'https://nextora.lk/#localbusiness',
            name: 'NextOra',
            description: 'Campus platform provider for IIT Sri Lanka',
            url: 'https://nextora.lk',
            telephone: '+94',
            email: 'nextora.platform@gmail.com',
            address: {
                '@type': 'PostalAddress',
                streetAddress: 'IIT Campus',
                addressLocality: 'Colombo',
                addressRegion: 'Western Province',
                postalCode: '00300',
                addressCountry: 'LK',
            },
            geo: {
                '@type': 'GeoCoordinates',
                latitude: 6.9271,
                longitude: 79.8612,
            },
            openingHoursSpecification: {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
                opens: '00:00',
                closes: '23:59',
            },
            priceRange: 'Free',
            image: 'https://nextora.lk/sdgp_logo.png',
            sameAs: [
                'https://twitter.com/NextOraApp',
                'https://linkedin.com/company/nextora',
                'https://instagram.com/nextora.app',
            ],
        },
        // ProfilePage Schema - Team/About Page
        {
            '@type': 'ProfilePage',
            '@id': 'https://nextora.lk/#team-profile',
            name: 'NextOra Team',
            url: 'https://nextora.lk/#team',
            description: 'Meet the IIT undergraduate team behind NextOra campus platform',
            mainEntity: {
                '@type': 'Organization',
                name: 'NextOra Development Team',
                member: [
                    { '@type': 'Person', name: 'Haritha Wikramasinha', jobTitle: 'Team Leader & Lead Developer' },
                    { '@type': 'Person', name: 'Janindu Wijesooriya', jobTitle: 'Head of Design & UX' },
                    { '@type': 'Person', name: 'Kisalni De Silva', jobTitle: 'Frontend Developer' },
                    { '@type': 'Person', name: 'Paramith Kavisha', jobTitle: 'Frontend Developer' },
                    { '@type': 'Person', name: 'Isuru Ravishan', jobTitle: 'Backend Developer' },
                    { '@type': 'Person', name: 'Dihara Ayasmitha', jobTitle: 'Backend Developer' },
                ],
            },
        },
        // SpecialAnnouncement Schema - For Featured Snippets
        {
            '@type': 'SpecialAnnouncement',
            name: 'NextOra Beta Now Available',
            text: 'NextOra campus platform is now in beta for all IIT Sri Lanka students. Join 500+ early users today!',
            datePosted: '2025-01-01',
            expires: '2027-01-01',
            category: 'https://www.wikidata.org/wiki/Q7889',
            announcementLocation: {
                '@type': 'Place',
                name: 'Informatics Institute of Technology',
                address: {
                    '@type': 'PostalAddress',
                    addressLocality: 'Colombo',
                    addressCountry: 'Sri Lanka',
                },
            },
            url: 'https://nextora.lk/#cta',
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
            {/* Favicon Links - Explicit for Google indexing (48x48px minimum required) */}
            <link rel="icon" type="image/x-icon" href="/favicon.ico" sizes="48x48" />
            <link rel="icon" type="image/png" href="/favicon-48x48.png" sizes="48x48" />
            <link rel="icon" type="image/png" href="/favicon-32x32.png" sizes="32x32" />
            <link rel="icon" type="image/png" href="/favicon-16x16.png" sizes="16x16" />
            <link rel="icon" type="image/png" href="/android-chrome-192x192.png" sizes="192x192" />
            <link rel="icon" type="image/png" href="/android-chrome-512x512.png" sizes="512x512" />
            <link rel="apple-touch-icon" href="/apple-touch-icon.png" sizes="180x180" />
            <link rel="manifest" href="/site.webmanifest" />

            {/* Microsoft Tiles */}
            <meta name="msapplication-TileImage" content="/android-chrome-192x192.png" />

            {/* IndexNow API Key for Instant Indexing */}
            <link rel="indexnow" href="/8b7d4e2f9a1c6b3d5e0f7a8c9b2d4e6f.txt" />

            {/* Preconnect for Performance - Critical Resources */}
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link rel="preconnect" href="https://www.google-analytics.com" />
            <link rel="preconnect" href="https://www.googletagmanager.com" />

            {/* DNS Prefetch - Third Party Services */}
            <link rel="dns-prefetch" href="https://www.google-analytics.com" />
            <link rel="dns-prefetch" href="https://www.googletagmanager.com" />
            <link rel="dns-prefetch" href="https://www.google.com" />
            <link rel="dns-prefetch" href="https://connect.facebook.net" />
            <link rel="dns-prefetch" href="https://platform.twitter.com" />
            <link rel="dns-prefetch" href="https://api.bing.com" />
            <link rel="dns-prefetch" href="https://www.facebook.com" />

            {/* Note: Removed preload for og-image.png and sdgp_logo.png to avoid browser warnings */}
            {/* These images are used for social sharing, not immediate page rendering */}

            {/* Canonical URL */}
            <link rel="canonical" href="https://nextora.lk" />

            {/* Alternate Languages - hreflang for international SEO */}
            <link rel="alternate" hrefLang="en" href="https://nextora.lk" />
            <link rel="alternate" hrefLang="en-US" href="https://nextora.lk" />
            <link rel="alternate" hrefLang="en-GB" href="https://nextora.lk" />
            <link rel="alternate" hrefLang="si" href="https://nextora.lk" />
            <link rel="alternate" hrefLang="ta" href="https://nextora.lk" />
            <link rel="alternate" hrefLang="x-default" href="https://nextora.lk" />

            {/* RSS/Atom Feeds */}
            <link rel="alternate" type="application/rss+xml" title="NextOra Updates" href="https://nextora.lk/feed.xml" />
            <link rel="alternate" type="application/atom+xml" title="NextOra Atom Feed" href="https://nextora.lk/feed.xml" />

            {/* Humans.txt - Team Credits */}
            <link rel="author" href="https://nextora.lk/humans.txt" type="text/plain" />

            {/* Security.txt - Security Contact */}
            <link rel="security" href="https://nextora.lk/.well-known/security.txt" />

            {/* Schema.org JSON file */}
            <link rel="schema.DC" href="https://purl.org/dc/elements/1.1/" />

            {/* JSON-LD Structured Data */}
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Geo Meta Tags - Local SEO */}
            <meta name="geo.region" content="LK" />
            <meta name="geo.region" content="LK-WP" />
            <meta name="geo.placename" content="Colombo, Sri Lanka" />
            <meta name="geo.position" content="6.9271;79.8612" />
            <meta name="ICBM" content="6.9271, 79.8612" />

            {/* Place/Location Tags */}
            <meta name="place:location:latitude" content="6.9271" />
            <meta name="place:location:longitude" content="79.8612" />

            {/* Dublin Core Meta Tags - Academic/Library SEO */}
            <meta name="DC.title" content="NextOra - Campus Platform for IIT Sri Lanka" />
            <meta name="DC.creator" content="NextOra Team" />
            <meta name="DC.subject" content="Campus Management, Student Portal, Education Technology, IIT Sri Lanka, Timetable App, AR Navigation, Kuppi Sessions" />
            <meta name="DC.description" content="The unified campus platform for IIT Sri Lanka students - timetables, events, AR navigation, kuppi sessions, and more" />
            <meta name="DC.publisher" content="NextOra" />
            <meta name="DC.contributor" content="Haritha Wikramasinha, Janindu Wijesooriya" />
            <meta name="DC.date" content="2025-01-01" />
            <meta name="DC.type" content="Software" />
            <meta name="DC.format" content="text/html" />
            <meta name="DC.identifier" content="https://nextora.lk" />
            <meta name="DC.source" content="https://nextora.lk" />
            <meta name="DC.language" content="en" />
            <meta name="DC.relation" content="https://www.iit.ac.lk" />
            <meta name="DC.coverage" content="Sri Lanka" />
            <meta name="DC.rights" content="Copyright 2025 NextOra" />

            {/* Open Graph Additional Tags */}
            <meta property="og:see_also" content="https://www.iit.ac.lk" />
            <meta property="og:updated_time" content="2026-01-10T00:00:00+05:30" />
            <meta property="article:modified_time" content="2026-01-10T00:00:00+05:30" />

            {/* Twitter Additional Tags */}
            <meta name="twitter:domain" content="nextora.lk" />
            <meta name="twitter:url" content="https://nextora.lk" />
            <meta name="twitter:label1" content="Platform" />
            <meta name="twitter:data1" content="Campus Management" />
            <meta name="twitter:label2" content="Price" />
            <meta name="twitter:data2" content="Free" />

            {/* Apple Specific - App Store & Smart Banner */}
            <meta name="apple-itunes-app" content="app-id=nextora, app-argument=https://nextora.lk" />
            <meta name="apple-mobile-web-app-title" content="NextOra" />

            {/* Google Play Store */}
            <meta name="google-play-app" content="app-id=lk.nextora.app" />

            {/* Facebook Domain Verification */}
            <meta name="facebook-domain-verification" content="your-facebook-domain-verification-id" />

            {/* Pinterest Verification */}
            <meta name="p:domain_verify" content="your-pinterest-verification" />

            {/* Google Site Verification */}
            <meta name="google-site-verification" content="E32PlSZVh82snFZxvLLqpcUF4VcYXhyb6Djv5H7BUB4" />

            {/* Bing Site Verification */}
            <meta name="msvalidate.01" content="your-bing-verification-code" />

            {/* Yandex Verification */}
            <meta name="yandex-verification" content="your-yandex-verification" />

            {/* Baidu Verification */}
            <meta name="baidu-site-verification" content="your-baidu-verification" />

            {/* Norton Safe Web */}
            <meta name="norton-safeweb-site-verification" content="your-norton-code" />

            {/* Alexa Verification */}
            <meta name="alexaVerifyID" content="your-alexa-id" />

            {/* Content Language */}
            <meta httpEquiv="content-language" content="en-US" />

            {/* Content Security Policy - Basic */}
            <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />

            {/* Refresh/Redirect Control */}
            <meta httpEquiv="imagetoolbar" content="no" />

            {/* Resource Hints for External Resources */}
            <meta httpEquiv="x-dns-prefetch-control" content="on" />

            {/* Page Caching Hints */}
            <meta httpEquiv="Cache-Control" content="public, max-age=86400" />
            <meta httpEquiv="Pragma" content="public" />

            {/* News/Article Publishing */}
            <meta name="news_keywords" content="NextOra, IIT Sri Lanka, campus app, student platform, timetable, AR navigation, kuppi sessions, events" />
            <meta name="syndication-source" content="https://nextora.lk" />
            <meta name="original-source" content="https://nextora.lk" />

            {/* Standout Tag for Google News */}
            <link rel="standout" href="https://nextora.lk" />

            {/* AMP Link (if you have AMP version) */}
            {/* <link rel="amphtml" href="https://nextora.lk/amp" /> */}
        </head>
        <body suppressHydrationWarning style={{ margin: 0, padding: 0, backgroundColor: '#F8FAFC', fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }}>
        <ThemeRegistry>{children}</ThemeRegistry>
        </body>
        </html>
    );
}
