import type { Metadata } from 'next';
import { Plus_Jakarta_Sans } from 'next/font/google';
import ThemeRegistry from '@/theme/ThemeRegistry';

const plusJakartaSans = Plus_Jakarta_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-plus-jakarta-sans',
});

export const metadata: Metadata = {
    title: 'IIT Connect | Your Unified Campus Platform',
    description:
        'The unified platform for timetable, kuppi sessions, campus navigation, events, results, lost & found, and everything else you need at IIT Sri Lanka.',
    keywords: [
        'IIT',
        'IIT Sri Lanka',
        'campus app',
        'student app',
        'timetable',
        'kuppi',
        'campus navigation',
        'events',
        'university app',
    ],
    authors: [{ name: 'IIT Connect Team' }],
    openGraph: {
        title: 'IIT Connect | Your Unified Campus Platform',
        description:
            'One app for your entire campus life at IIT Sri Lanka. Timetable, events, navigation, and more.',
        type: 'website',
        locale: 'en_US',
        siteName: 'IIT Connect',
    },
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en" className={plusJakartaSans.variable}>
        <head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="theme-color" content="#0A0E1A" />
        </head>
        <body style={{ margin: 0, padding: 0, backgroundColor: '#0A0E1A', fontFamily: 'var(--font-plus-jakarta-sans), sans-serif' }}>
        <ThemeRegistry>{children}</ThemeRegistry>
        </body>
        </html>
    );
}
