import {
  School,
  MenuBook,
  Map,
  ConfirmationNumber,
  HowToVote,
  Inventory2,
  Person,
  Home,
  Campaign,
  Notifications,
  VerifiedUser,
  Security,
  Dashboard,
  SmartToy,
  Payment,
  Psychology,
  Analytics,
  Login,
} from '@mui/icons-material';
import { SvgIconComponent } from '@mui/icons-material';
import { colors, gradients } from '@/theme/colors';

export interface Feature {
  icon: SvgIconComponent;
  title: string;
  description: string;
  color: string;
  gradient: string;
}

export interface Problem {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export interface Step {
  step: number;
  title: string;
  description: string;
  icon: SvgIconComponent;
}

export interface Benefit {
  icon: SvgIconComponent;
  title: string;
  description: string;
}

export interface RoadmapItem {
  title: string;
  description: string;
  icon: SvgIconComponent;
  status: 'completed' | 'in-progress' | 'upcoming';
}

export interface FAQ {
  question: string;
  answer: string;
}

export interface TeamMember {
  name: string;
  role: string;
  avatar: string;
  bio: string;
}

export const problems: Problem[] = [
  {
    icon: School,
    title: 'Missing Timetable Updates',
    description: 'Last-minute changes leave you stranded at wrong lecture halls.',
  },
  {
    icon: Campaign,
    title: 'Scattered WhatsApp Groups',
    description: '50+ groups with important info buried under memes and spam.',
  },
  {
    icon: Map,
    title: 'Lost in Campus',
    description: 'New buildings, hidden rooms, and no proper navigation system.',
  },
  {
    icon: ConfirmationNumber,
    title: 'Event Ticket Chaos',
    description: 'Missing out on events because tickets sold out before you knew.',
  },
  {
    icon: Inventory2,
    title: 'Lost & Found Nightmare',
    description: 'No centralized system to report or find lost items on campus.',
  },
  {
    icon: Notifications,
    title: 'No Centralized Notifications',
    description: 'Important announcements lost across multiple platforms.',
  },
];

export const features: Feature[] = [
  {
    icon: School,
    title: 'Academic Hub',
    description: 'Access timetables, exam schedules, results, and academic resources in one place. Never miss a lecture or deadline again.',
    color: colors.primary.main,
    gradient: gradients.bluePrimary,
  },
  {
    icon: MenuBook,
    title: 'Kuppi Sessions',
    description: 'Find and join peer tutoring sessions. Share knowledge, help others, and excel together as a community.',
    color: colors.indigo.main,
    gradient: gradients.indigoAccent,
  },
  {
    icon: Map,
    title: 'Campus Navigation',
    description: 'Indoor and outdoor maps with AR navigation. Find lecture halls, labs, cafeterias, and more with ease.',
    color: colors.sky.main,
    gradient: gradients.skyBlue,
  },
  {
    icon: ConfirmationNumber,
    title: 'Events & Tickets',
    description: 'Discover campus events, purchase tickets, and manage your event calendar. QR-based entry for seamless access.',
    color: colors.cyan.main,
    gradient: gradients.cyanAccent,
  },
  {
    icon: HowToVote,
    title: 'Student Elections',
    description: 'Participate in transparent, secure digital elections. View candidates, manifestos, and cast your vote securely.',
    color: colors.indigo.accent,
    gradient: gradients.blueIndigo,
  },
  {
    icon: Inventory2,
    title: 'Lost & Found',
    description: 'Report lost items or found belongings. AI-powered matching to reunite students with their possessions.',
    color: colors.indigo.main,
    gradient: gradients.indigoAccent,
  },
  {
    icon: Person,
    title: 'Lecturer Connect',
    description: 'Book consultations, view availability, and communicate directly with lecturers through a unified platform.',
    color: colors.sky.main,
    gradient: gradients.skyBlue,
  },
  {
    icon: Home,
    title: 'Student Resources',
    description: 'Access library catalogs, study materials, and campus facilities information anytime, anywhere.',
    color: colors.success.main,
    gradient: gradients.success,
  },
  {
    icon: Campaign,
    title: 'SRU Portal',
    description: 'Stay connected with Student Representative Union. View announcements, initiatives, and participate in discussions.',
    color: colors.primary.main,
    gradient: gradients.bluePrimary,
  },
];

export const howItWorks: Step[] = [
  {
    step: 1,
    title: 'Sign In with IIT Credentials',
    description: 'Use your official IIT email and password for secure, verified access.',
    icon: Login,
  },
  {
    step: 2,
    title: 'Personalize Your Dashboard',
    description: 'Choose your batch, courses, and interests to get a tailored experience.',
    icon: Dashboard,
  },
  {
    step: 3,
    title: 'Get Real-Time Updates',
    description: 'Receive instant notifications for timetable changes, events, and announcements.',
    icon: Notifications,
  },
  {
    step: 4,
    title: 'Access Services Instantly',
    description: 'Navigate campus, book sessions, find resources—all from one unified platform.',
    icon: School,
  },
];

export const benefits: Benefit[] = [
  {
    icon: Notifications,
    title: 'Smart Notifications',
    description: 'AI-powered alerts that know what matters to you. No spam, just relevant updates.',
  },
  {
    icon: VerifiedUser,
    title: 'Verified Users',
    description: 'Only IIT students and staff. A trusted community with real identities.',
  },

  {
    icon: Security,
    title: 'Secure Platform',
    description: 'Enterprise-grade security with OAuth2, JWT, and end-to-end encryption.',
  },
  {
    icon: Dashboard,
    title: 'All-in-One',
    description: 'Everything you need in one glance. No more app-hopping or tab-switching.',
  },
];

export const roadmap: RoadmapItem[] = [
  {
    title: 'AI Campus Assistant',
    description: 'ChatGPT-powered assistant to answer all your campus queries instantly.',
    icon: SmartToy,
    status: 'in-progress',
  },
  {
    title: 'In-App Secure Payments',
    description: 'Pay for events, canteen, and services directly through the app.',
    icon: Payment,
    status: 'upcoming',
  },
  {
    title: 'Smart Recommendations',
    description: 'Personalized suggestions for events, kuppi sessions, and resources.',
    icon: Psychology,
    status: 'upcoming',
  },
  {
    title: 'Analytics Dashboard',
    description: 'Track your academic progress, attendance, and engagement metrics.',
    icon: Analytics,
    status: 'upcoming',
  },
];

export const faqs: FAQ[] = [
  {
    question: 'Who can use NextOra?',
    answer: 'NextOra is available to all registered students, lecturers, and staff members of Informatics Institute of Technology (IIT), Sri Lanka. You need your official IIT credentials to sign in.',
  },
  {
    question: 'Is NextOra free to use?',
    answer: 'Yes! NextOra is completely free for all IIT students and staff. We believe in making campus life better for everyone without any barriers.',
  },
  {
    question: 'How secure is my data?',
    answer: 'We take security seriously. NextOra uses OAuth2 authentication, JWT tokens, 2FA options, and end-to-end encryption for sensitive data. Your information is stored securely and never shared with third parties.',
  },
  {
    question: 'Can I use it offline?',
    answer: 'Yes! Core features like campus maps, downloaded timetables, and saved resources work offline. The app syncs automatically when you\'re back online.',
  },
  {
    question: 'How do I report a bug or suggest a feature?',
    answer: 'We love feedback! Use the in-app feedback feature or email us at support@nextora.lk. Our team reviews all suggestions and bug reports regularly.',
  },
  {
    question: 'Is there a desktop version?',
    answer: 'NextOra is mobile-first with a responsive web application that works on all devices. A dedicated mobile app for iOS and Android is on our roadmap.',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Haritha Wikramasinha',
    role: 'Team Leader & Lead Developer',
    avatar: '/haritha.png',
    bio: 'IIT undergraduate (w2149656) passionate about improving student experience through technology. Leading the NextOra project.',
  },
  {
    name: 'Janindu Wijesooriya',
    role: 'Head of Design & UX',
    avatar: '/janidu.jpg',
    bio: 'IIT undergraduate (w2149641) with expertise in user experience design and creating intuitive interfaces.',
  },
  {
    name: 'Kisalni De Silva',
    role: 'Frontend Developer',
    avatar: '/kisalni.jpeg',
    bio: 'IIT undergraduate (w2149637) focused on building responsive and accessible user interfaces.',
  },
  {
    name: 'Paramith Kavisha',
    role: 'Frontend Developer',
    avatar: '/paramith.jpeg',
    bio: 'IIT undergraduate (w2149623) dedicated to crafting seamless user experiences and modern UI components.',
  },
  {
    name: 'Isuru Ravishan',
    role: 'Backend Developer',
    avatar: '/Isuru.jpg',
    bio: 'IIT undergraduate (w2151090) specializing in server-side architecture and API development.',
  },
  {
    name: 'Dihara Ayasmitha',
    role: 'Backend Developer',
    avatar: '/dihara.png',
    bio: 'IIT undergraduate (w2149624) focused on database management and backend system integration.',
  },
];

export const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'FAQ', href: '#faq' },
  ],
  company: [
    { label: 'About Us', href: '#team' },
    { label: 'Our Team', href: '#team' },
    { label: 'Contact', href: 'mailto:nextora.platform@gmail.com' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'Support', href: 'mailto:nextora.platform@gmail.com' },
    { label: 'Community', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
  ],
};
