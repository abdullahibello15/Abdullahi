// All site content lives here. Every fact comes from Abdullahi's CV.
// Optional fields (role, year, helps, link, tech) are hidden on the page when left out.

export const profile = {
  name: 'Abdullahi Bello',
  title: 'Software Developer | Web Applications',
  pitch: 'I build web applications from requirements to deployment.',
  location: 'Minna, Nigeria',
  email: 'abdullahibello.reachout@gmail.com',
  phone: '08134373809',
  phoneHref: 'tel:+2348134373809',
  linkedin: 'https://linkedin.com/in/abdullahi-bello-877b87365',
  linkedinLabel: 'linkedin.com/in/abdullahi-bello-877b87365',
}

export const about = [
  "I'm a software developer in Minna, Nigeria, and I like taking a web product from the first requirements document all the way to a live deployment.",
  "Over the past two years I've worked on a POS revenue platform, an NGO's records system, a payment aggregator, a company-management portal and a local marketplace. I'm comfortable on both sides of the stack: React, Next.js, React Native and TypeScript on the front, Django and PostgreSQL on the back. I'm now widening my backend toolkit across Node.js, Python, Java, Go, C# and PHP.",
  'I plan carefully, write things down, and keep every project moving.',
]

export const process = ['Requirements', 'Frontend', 'Backend', 'Deployment', 'Documentation']

export type SkillGroup = { name: string; items: string[]; note?: string }

export const skills: SkillGroup[] = [
  {
    name: 'Frontend',
    items: ['React 18 (TSX)', 'Next.js', 'React Native', 'TypeScript', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Responsive UI design'],
  },
  {
    name: 'Backend',
    items: ['Django', 'PostgreSQL (Neon)', 'Redis', 'Render', 'GitHub', 'Cloud-based deployment'],
    note: 'Also working across: SQL; Node.js, Express, NestJS; Flask, FastAPI; Spring Boot; Gin (Go); ASP.NET Core; Laravel',
  },
  {
    name: 'CMS / Web',
    items: ['WordPress theme development', 'Elementor', 'Domain and hosting setup'],
  },
  {
    name: 'Product',
    items: ['PRDs', 'Solution architecture documents', 'Codebase and gap analysis', 'Project planning', 'Technical documentation'],
  },
]

export type Project = {
  name: string
  year?: string
  role?: string
  what: string
  helps?: string
  tech: string[]
  link?: string
  image?: string
}

export const projects: Project[] = [
  {
    name: 'Hire From Nigeria',
    what: 'The national portal run by NATEP under the Federal Ministry of Industry, Trade and Investment. Visitors search firms across the eight priority service export sectors, read what each one does, and ask NATEP to introduce them.',
    helps: 'Nigerian service-export firms and the buyers looking to hire them',
    tech: [],
    image: '/projects/hire-from-nigeria.jpg',
  },
  {
    name: 'Fusion',
    year: '2025',
    role: 'Frontend Developer',
    what: 'A platform that helps businesses earn extra revenue from the POS terminals they already have. I built the frontend and worked through the revenue configuration: how revenue figures are defined and calculated, where accuracy matters because the numbers represent real money.',
    helps: 'Businesses that already own POS terminals',
    tech: [],
  },
  {
    name: 'Mainstream',
    year: '2025',
    role: 'Frontend Developer',
    what: 'An NGO platform that keeps records of people living with eye conditions, so the organisation’s data sits in one system. I built the frontend.',
    helps: 'An NGO and the people living with eye conditions it supports',
    tech: [],
  },
  {
    name: 'Payment Aggregator',
    year: '2025',
    role: 'Full-Stack Developer',
    what: 'A platform that lets a company with several payment gateways run all its transactions through a single one, instead of managing each separately. I worked on both the frontend and the backend.',
    helps: 'Companies juggling several payment gateways',
    tech: [],
    image: '/projects/payorch.jpg',
  },
  {
    name: 'VeriPharm',
    what: 'Writes each drug record to a public ledger the moment it is made, so a pharmacist in one city and a patient in another read the same uneditable history. Anyone can check a pack with no account and no fee, and manufacturers can register their products.',
    helps: 'Pharmacists, patients and drug manufacturers',
    tech: [],
    image: '/projects/veripharm.jpg',
  },
  {
    name: 'InsightHire',
    what: 'An AI recruitment platform where candidates and employers create accounts, explore jobs and find the right fit.',
    helps: 'Job candidates and employers',
    tech: [],
    image: '/projects/insighthire.jpg',
  },
  {
    name: 'Argitech Academy',
    what: 'A training platform from Lagos that combines live instruction, hands-on projects, certificate verification and class access management in one place.',
    helps: 'Learners, and anyone who needs to verify an Argitech certificate',
    tech: [],
    image: '/projects/argitech-academy.jpg',
  },
  {
    name: 'PGS Portal',
    year: '2025',
    role: 'Full-Stack Developer',
    what: 'A portal for managing companies of any kind, whatever their industry. I worked on both the frontend and the backend.',
    helps: 'Companies in any industry',
    tech: [],
  },
  {
    name: 'ZAMANI NG Market Hub',
    year: '2024',
    role: 'Developer',
    what: 'A marketplace for local services, retail and logistics, designed from a detailed build specification covering categories, user roles, vendor verification tiers and the data model. I built the frontend prototype, starting with the pages where customers discover and browse vendors, and designed the landing page and brand look.',
    helps: 'Customers and vendors in Minna and Niger State',
    tech: ['React 18', 'TypeScript', 'Tailwind CSS'],
  },
  {
    name: 'Executive Portfolio Website',
    year: '2025',
    role: 'Web Developer',
    what: 'A single-page executive portfolio site in navy and gold, built from a written PRD, with sections for bio, awards, education, projects, testimonials, certificates and contact.',
    tech: ['React', 'Tailwind CSS', 'Framer Motion'],
  },
  {
    name: 'Custom WordPress Theme',
    year: '2025',
    role: 'Web Developer',
    what: 'A custom WordPress theme built from scratch, developed and tested in a local XAMPP setup on Windows.',
    tech: ['WordPress', 'XAMPP'],
  },
]

export type Job = { role: string; org: string; period: string; points: string[] }

export const experience: Job[] = [
  {
    role: 'Software Developer',
    org: 'Project-Based Work',
    period: '2025 – Present',
    points: [
      'Run several software projects side by side, taking each one from requirements through frontend, backend deployment and documentation.',
      'Write the product requirements and architecture documents myself, then audit the codebase against them to see what is missing and decide what to build next.',
      'Plan my time across projects so none of them stalls between design, build and deployment.',
    ],
  },
  {
    role: 'Frontend Developer',
    org: 'Fusion',
    period: '2025',
    points: [
      'Built the frontend for a platform that helps businesses earn extra revenue from the POS terminals they already have.',
      'Worked through the platform’s revenue configuration, setting up how revenue figures are defined and calculated.',
    ],
  },
  {
    role: 'Frontend Developer',
    org: 'Mainstream',
    period: '2025',
    points: ['Built the frontend for an NGO platform that keeps records of people living with eye conditions.'],
  },
  {
    role: 'Full-Stack Developer',
    org: 'Payment Aggregator',
    period: '2025',
    points: ['Worked on the frontend and backend of a platform that routes a company’s transactions from several payment gateways through a single one.'],
  },
  {
    role: 'Full-Stack Developer',
    org: 'PGS Portal',
    period: '2025',
    points: ['Worked on the frontend and backend of a portal for managing companies of any kind, whatever their industry.'],
  },
  {
    role: 'Developer',
    org: 'ZAMANI NG Market Hub',
    period: '2024',
    points: [
      'Designing a marketplace for local services, retail and logistics in Minna and Niger State from a detailed build specification.',
      'Built the React 18, TypeScript and Tailwind frontend prototype, and designed the landing page and brand look.',
    ],
  },
  {
    role: 'Tech Support',
    org: 'Binarify Community Outreach',
    period: '2025',
    points: [
      'Helped community members track down and fix hardware, software and connectivity problems.',
      'Walked people through setting up and using their devices, apps and online accounts, step by step.',
      'Kept a record of reported issues and their fixes so repeat problems were solved faster.',
    ],
  },
]

export const education = {
  degree: 'Industrial Technology',
  school: 'Federal University of Technology, Minna',
  status: 'In progress',
}

export const certifications = ['Tech Support Certificate, Binarify Community Outreach']

export const languages = [
  { name: 'English', level: 'Fluent' },
  { name: 'Hausa', level: 'Native' },
]
