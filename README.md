# NextOra Marketing Website

Official marketing and landing page for the NextOra unified campus platform.

**Live Site:** [https://nextora.lk](https://nextora.lk)

---

## Overview

This repository contains the source code for the NextOra marketing website. The site serves as the primary digital presence for NextOra, showcasing platform features, team information, and providing early access registration for IIT Sri Lanka students.

NextOra is a unified campus platform designed to centralize academic, administrative, and campus-related services for Informatics Institute of Technology (IIT) Sri Lanka students.

---

## Technology Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 16 (App Router) |
| Language | TypeScript 5.0 |
| UI Library | Material UI v6 |
| Styling | Emotion CSS-in-JS |
| Animation | Framer Motion |
| Typography | Plus Jakarta Sans |
| Deployment | Docker / Vercel |

---

## Features

- Server-Side Rendering (SSR) for optimal performance
- Mobile-first responsive design
- Enterprise-level SEO with 20+ JSON-LD schemas
- Progressive Web App (PWA) ready
- Accessibility compliant (WCAG 2.1)
- Glass morphism UI design

---

## Project Structure

```
nextora-marketing-website/
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with SEO metadata
│   ├── page.tsx           # Homepage
│   └── globals.css        # Global styles
├── components/
│   ├── sections/          # Page sections (Hero, Features, FAQ, etc.)
│   └── ui/                # Reusable UI components
├── data/
│   └── content.ts         # Static content data
├── theme/
│   ├── colors.ts          # Color palette
│   ├── theme.ts           # MUI theme configuration
│   └── ThemeRegistry.tsx  # Theme provider
├── public/                # Static assets and SEO files
├── docker-compose.yml     # Docker configuration
├── Dockerfile             # Container build
└── next.config.ts         # Next.js configuration
```

---

## Getting Started

### Prerequisites

- Node.js 18.0 or higher
- npm or yarn

### Installation

```bash
# Clone the repository
git clone https://github.com/your-org/nextora-marketing-website.git

# Navigate to project directory
cd nextora-marketing-website

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Create production build |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

---

## Deployment

### Docker

```bash
docker-compose up -d --build
```

### Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-org/nextora-marketing-website)

### PM2

```bash
pm2 start ecosystem.config.js
```

---

## SEO Features

- JSON-LD structured data (Organization, FAQPage, SoftwareApplication, etc.)
- Open Graph and Twitter Card meta tags
- XML sitemap with image support
- robots.txt with comprehensive crawler rules
- Dublin Core metadata
- IndexNow for instant indexing
- RSS feed

---

## Platform Features Showcased

| Category | Features |
|----------|----------|
| Academic | Timetables, Results, Academic Calendar, Kuppi Sessions |
| Navigation | AR-powered maps, Building finder, Indoor navigation |
| Events | Event discovery, Digital ticketing, Student elections |
| Administrative | Lecturer booking, SRU portal, Lost and found |
| Resources | Boarding houses, Internships, Academic guidance |

---

## Development Team

### SE-03 Group - Informatics Institute of Technology

| Name | Role |
|------|------|
| Haritha Wikramasinha | Team Lead, Lead Developer |
| Janindu Wijesooriya | Design Lead, UX |
| Kisalni De Silva | Frontend Developer |
| Paramith Kavisha | Frontend Developer |
| Isuru Ravishan | Backend Developer |
| Dihara Ayasmitha | Backend Developer |

---

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -m 'Add feature'`)
4. Push to branch (`git push origin feature/your-feature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License. See [LICENSE](LICENSE) for details.

---

## Contact

- **Email:** nextora.platform@gmail.com
- **Website:** [https://nextora.lk](https://nextora.lk)

---

**NextOra** - One App. Your Entire Campus.

Developed by IIT Undergraduates | Sri Lanka
