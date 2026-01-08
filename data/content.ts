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
  WifiOff,
  Security,
  Dashboard,
  SmartToy,
  Payment,
  Psychology,
  Analytics,
  IntegrationInstructions,
  CalendarMonth,
  Login,
  Cloud,
} from '@mui/icons-material';
import { SvgIconComponent } from '@mui/icons-material';

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

export interface Testimonial {
  name: string;
  batch: string;
  avatar: string;
  rating: number;
  quote: string;
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

export interface PricingPlan {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted: boolean;
  buttonText: string;
}

export const stats = [
  { value: 5000, suffix: '+', label: 'Students' },
  { value: 100, suffix: '+', label: 'Lecturers' },
  { value: 20, suffix: '+', label: 'Campus Services' },
];

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
    color: '#1E3A8A',
    gradient: 'linear-gradient(135deg, #1E3A8A 0%, #3B5CB8 100%)',
  },
  {
    icon: MenuBook,
    title: 'Kuppi Sessions',
    description: 'Find and join peer tutoring sessions. Share knowledge, help others, and excel together as a community.',
    color: '#7C3AED',
    gradient: 'linear-gradient(135deg, #7C3AED 0%, #9B6BF2 100%)',
  },
  {
    icon: Map,
    title: 'Campus Navigation',
    description: 'Indoor and outdoor maps with AR navigation. Find lecture halls, labs, cafeterias, and more with ease.',
    color: '#14B8A6',
    gradient: 'linear-gradient(135deg, #14B8A6 0%, #2DD4BF 100%)',
  },
  {
    icon: ConfirmationNumber,
    title: 'Events & Tickets',
    description: 'Discover campus events, purchase tickets, and manage your event calendar. QR-based entry for seamless access.',
    color: '#F97316',
    gradient: 'linear-gradient(135deg, #F97316 0%, #FB923C 100%)',
  },
  {
    icon: HowToVote,
    title: 'Student Elections',
    description: 'Participate in transparent, secure digital elections. View candidates, manifestos, and cast your vote securely.',
    color: '#EC4899',
    gradient: 'linear-gradient(135deg, #EC4899 0%, #F472B6 100%)',
  },
  {
    icon: Inventory2,
    title: 'Lost & Found',
    description: 'Report lost items or found belongings. AI-powered matching to reunite students with their possessions.',
    color: '#8B5CF6',
    gradient: 'linear-gradient(135deg, #8B5CF6 0%, #A78BFA 100%)',
  },
  {
    icon: Person,
    title: 'Lecturer Connect',
    description: 'Book consultations, view availability, and communicate directly with lecturers through a unified platform.',
    color: '#06B6D4',
    gradient: 'linear-gradient(135deg, #06B6D4 0%, #22D3EE 100%)',
  },
  {
    icon: Home,
    title: 'Student Resources',
    description: 'Access accommodation listings, transport info, part-time jobs, and essential student services.',
    color: '#10B981',
    gradient: 'linear-gradient(135deg, #10B981 0%, #34D399 100%)',
  },
  {
    icon: Campaign,
    title: 'SRU Portal',
    description: 'Stay connected with Student Representative Union. View announcements, initiatives, and participate in discussions.',
    color: '#EF4444',
    gradient: 'linear-gradient(135deg, #EF4444 0%, #F87171 100%)',
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
    icon: WifiOff,
    title: 'Works Offline',
    description: 'Campus maps and schedules available offline. Stay connected without internet.',
  },
  {
    icon: Security,
    title: 'Secure Platform',
    description: 'Enterprise-grade security with OAuth2, JWT, and end-to-end encryption.',
  },
  {
    icon: Dashboard,
    title: 'All-in-One Dashboard',
    description: 'Everything you need in one glance. No more app-hopping or tab-switching.',
  },
];

export const testimonials: Testimonial[] = [
  {
    name: 'Kavindi Perera',
    batch: 'BSc (Hons) SE - 2024',
    avatar: 'KP',
    rating: 5,
    quote: 'IIT Connect completely transformed how I manage my campus life. The timetable integration alone saves me hours every week!',
  },
  {
    name: 'Tharindu Silva',
    batch: 'BSc (Hons) CS - 2023',
    avatar: 'TS',
    rating: 5,
    quote: 'Finally, a unified platform! No more scrolling through 50 WhatsApp groups. Everything I need is right here.',
  },
  {
    name: 'Nethmi Fernando',
    batch: 'BSc (Hons) IT - 2025',
    avatar: 'NF',
    rating: 5,
    quote: 'The campus navigation feature is a lifesaver. Found my first lecture hall in minutes instead of wandering around lost!',
  },
  {
    name: 'Dinesh Rajapaksa',
    batch: 'BSc (Hons) SE - 2024',
    avatar: 'DR',
    rating: 5,
    quote: 'Kuppi sessions feature connected me with amazing peer tutors. My grades improved significantly!',
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
    title: 'In-App Payments',
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
    question: 'Who can use IIT Connect?',
    answer: 'IIT Connect is available to all registered students, lecturers, and staff members of Informatics Institute of Technology, Sri Lanka. You need your official IIT credentials to sign in.',
  },
  {
    question: 'Is IIT Connect free to use?',
    answer: 'Yes! IIT Connect is completely free for all IIT students and staff. We believe in making campus life better for everyone without any barriers.',
  },
  {
    question: 'How secure is my data?',
    answer: 'We take security seriously. IIT Connect uses OAuth2 authentication, JWT tokens, 2FA options, and end-to-end encryption for sensitive data. Your information is stored securely and never shared with third parties.',
  },
  {
    question: 'Can I use it offline?',
    answer: 'Yes! Core features like campus maps, downloaded timetables, and saved resources work offline. The app syncs automatically when you\'re back online.',
  },
  {
    question: 'How do I report a bug or suggest a feature?',
    answer: 'We love feedback! Use the in-app feedback feature or email us at support@iitconnect.lk. Our team reviews all suggestions and bug reports regularly.',
  },
  {
    question: 'Is there a desktop version?',
    answer: 'Currently, IIT Connect is mobile-first (iOS and Android). A web dashboard is on our roadmap for administrators and power users.',
  },
];

export const integrations = [
  {
    title: 'Single Sign-On (SSO)',
    description: 'Seamless authentication with IIT credentials',
    icon: Login,
  },
  {
    title: 'LMS Integration',
    description: 'Direct access to Moodle and course materials',
    icon: School,
  },
  {
    title: 'Google Calendar',
    description: 'Sync timetables and events automatically',
    icon: CalendarMonth,
  },
  {
    title: 'Maps API',
    description: 'Accurate indoor and outdoor navigation',
    icon: Map,
  },
  {
    title: 'Cloud Services',
    description: 'Scalable infrastructure for reliability',
    icon: Cloud,
  },
  {
    title: 'Third-Party APIs',
    description: 'Extensible for future integrations',
    icon: IntegrationInstructions,
  },
];

export const securityFeatures = [
  { title: 'OAuth 2.0', description: 'Industry-standard authentication protocol' },
  { title: 'JWT Tokens', description: 'Secure, stateless session management' },
  { title: '2FA Support', description: 'Optional two-factor authentication' },
  { title: 'End-to-End Encryption', description: 'Protected sensitive communications' },
  { title: 'Regular Audits', description: 'Continuous security assessments' },
  { title: 'GDPR Compliant', description: 'Data privacy by design' },
];

export const pricingPlans: PricingPlan[] = [
  {
    name: 'Student',
    price: 'Free',
    period: 'forever',
    description: 'Everything you need for campus life',
    features: [
      'Full feature access',
      'Real-time notifications',
      'Campus navigation',
      'Event tickets',
      'Kuppi sessions',
      'Community support',
    ],
    highlighted: false,
    buttonText: 'Get Started Free',
  },
  {
    name: 'Premium',
    price: 'LKR 499',
    period: '/month',
    description: 'Enhanced features for power users',
    features: [
      'Everything in Student',
      'Priority notifications',
      'Ad-free experience',
      'Advanced analytics',
      'Early access to features',
      'Priority support',
    ],
    highlighted: true,
    buttonText: 'Upgrade to Premium',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For departments and administrators',
    features: [
      'Admin dashboard',
      'Bulk announcements',
      'Analytics & reporting',
      'API access',
      'Custom integrations',
      'Dedicated support',
    ],
    highlighted: false,
    buttonText: 'Contact Sales',
  },
];

export const teamMembers: TeamMember[] = [
  {
    name: 'Haritha Wickramasinghe',
    role: 'Leader and Lead Developer',
    avatar: '/haritha.jpg',
    bio: 'IIT Alumni passionate about improving student experience through technology.',
  },
  {
    name: 'Janidu Wijesuriya',
    role: 'Head of Design',
    avatar: 'SJ',
    bio: 'Former UX Lead with 5+ years experience in education technology.',
  },
  {
    name: 'Kisalni De Silva',
    role: 'Frontend Developer',
    avatar: 'MP',
    bio: 'Full-stack developer and open-source enthusiast building the future.',
  },
  {
    name: 'Paramith',
    role: 'Frontend Developer',
    avatar: '/paramith.jpeg',
    bio: 'Award-winning designer focused on creating delightful user experiences.',
  },
  {
    name: 'Ishara 1Silva',
    role: 'Frontend Developer',
    avatar: 'IS',
    bio: 'Award-winning designer focused on creating delightful user experiences.',
  },

  {
    name: 'Ishara 2Silva',
    role: 'Frontend Developer',
    avatar: 'IS',
    bio: 'Award-winning designer focused on creating delightful user experiences.',
  },
];

export const footerLinks = {
  product: [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Roadmap', href: '#roadmap' },
    { label: 'FAQ', href: '#faq' },
  ],
  company: [
    { label: 'About Us', href: '#team' },
    { label: 'Careers', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Press', href: '#' },
  ],
  resources: [
    { label: 'Documentation', href: '#' },
    { label: 'API Reference', href: '#' },
    { label: 'Community', href: '#' },
    { label: 'Support', href: '#' },
  ],
  legal: [
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms of Service', href: '#' },
    { label: 'Cookie Policy', href: '#' },
  ],
};
