// ===== Portfolio Content Data =====
// All text content lives here for easy updates

export interface FeaturedProject {
  name: string;
  description: string;
  tech: string[];
  liveUrl?: string;
  githubUrl?: string;
  corporate?: boolean;
}

export interface ExperienceEntry {
  title: string;
  company: string;
  period: string;
  bullets: string[];
}

export interface EducationEntry {
  degree: string;
  institution: string;
  period: string;
  detail: string;
}

// ===== Personal Info =====
export const personalInfo = {
  name: "Mohd Sabahat",
  role: "Full-Stack Developer · AI/ML Engineer",
  location: "Delhi, India",
  email: "mohdsabahat123@gmail.com",
  phone: "+91-8171556909",
  tagline: "building things that matter, writing words that stay",
  heroLead:
    "I build developer platforms, AI workflows, and product systems with patience instead of noise.",
  heroSublead:
    "My work usually lives where engineering discipline meets quiet feeling - production software by day, half-written shayari in the margins at night.",
  deskNote:
    "Calm on the surface. Romantic in the margins. Serious about work. Soft only after trust.",
  about:
    "Full-Stack Developer and AI/ML Engineer with 3+ years at Comviva (Mahindra Group) delivering production systems across Java, Spring Boot, Python, and JavaScript. Architected an org-wide developer platform serving 750+ engineers, deployed AI recommendation engines on customer infrastructure, and built ML classification models reaching 80% accuracy.",
  aboutPersonal:
    "I write code during the day and shayari at night. Somewhere between debugging distributed systems and drafting half-finished verses, I found that both require the same thing - patience, precision, and the willingness to sit with something incomplete until it becomes right.",
  socials: {
    github: "https://github.com/mohdsabahat",
    linkedin: "https://www.linkedin.com/in/mohd-sabahat",
  },
  // Replace with your hosted resume URL (Google Drive, Dropbox, etc.)
  // so you can update it without redeploying
  resumeUrl: process.env.NEXT_RESUME_URL,
};

export const heroMetrics = [
  { value: "3+", label: "years shipping production systems" },
  { value: "750+", label: "engineers supported through platform work" },
  { value: "80%", label: "accuracy reached in ML failure triage" },
];

export const deskSubjects = [
  "developer platforms",
  "AI workflows",
  "quiet systems",
  "late-night notes",
];

// ===== Experience =====
export const experience: ExperienceEntry[] = [
  {
    title: "Senior Product Development Engineer",
    company: "Comviva (Mahindra Group)",
    period: "Jul 2024 - Present",
    bullets: [
      "Architected and shipped GHCP Dashboard (Spring Boot 3.2.5, Thymeleaf, MariaDB, Flyway) - an org-wide platform tracking GitHub Copilot usage for 750+ developers.",
      "Deployed an AI-powered recommendation engine (Python) for internal unit, delivering real-time product suggestions on air-gapped customer infrastructure.",
      "Developed RETRACT - an ML classification system (scikit-learn) for automated test failure triage, reaching 80% accuracy.",
      "Authored enterprise evaluations of AI coding tools (Claude Code, Cursor, GitHub Copilot), directly influencing company-wide tooling strategy.",
      "Owned a ₹1.2 Cr (~$140K) annual GHCP licensing budget for 750+ seats with usage-based optimization.",
    ],
  },
  {
    title: "Product Development Engineer",
    company: "Comviva Technologies (Tech Mahindra)",
    period: "Aug 2023 - Jul 2024",
    bullets: [
      "Designed and developed RESTful APIs in Spring Boot with JWT authentication and API-key authorization for secure service communication.",
      "Built backend logic with MySQL and MongoDB; tuned queries for high-volume transactional workloads.",
      "Led 10+ AI literacy and GitHub Copilot workshops for 600+ developers, driving 20% productivity gain and 50% tool adoption growth.",
    ],
  },
  {
    title: "Product Development Engineer Intern",
    company: "Comviva (Mahindra Group)",
    period: "Feb 2023 - Aug 2023",
    bullets: [
      "Built scalable web applications and API endpoints using Java Servlets; coordinated cross-functional teams for integration and production issue resolution.",
    ],
  },
];

// ===== Education =====
export const education: EducationEntry[] = [
  {
    degree: "B.Tech. in Electrical Engineering",
    institution: "ZHCET, Aligarh Muslim University",
    period: "2019 - 2023",
    detail: "CGPA: 9.2 / 10",
  },
];

// ===== Certifications =====
export const certifications: string[] = [
  "Advanced JavaScript Programming - Udemy, 2023",
];

// ===== Featured Projects =====
export const featuredProjects: FeaturedProject[] = [
  {
    name: "Lafz - Urdu Shayari App",
    description:
      "Native Android app for reading curated Urdu poetry in English script with offline access, dark mode, smart search, and a community Discord. Designed an end-to-end content pipeline and an ergonomic reading UI optimized for one-handed use.",
    tech: ["Android", "Kotlin", "Material Design"],
    liveUrl: "https://lafz.myproj.xyz",
    githubUrl: "https://github.com/mohdsabahat/lafz",
  },
  {
    name: "Aniquotes - Anime Quotes Platform",
    description:
      "Full-stack web platform for community-driven anime quotes with image-card generation, authentication, role-based moderation, and shareable OG image generation served from edge functions.",
    tech: ["Next.js 15", "TypeScript", "Supabase", "Vercel"],
    liveUrl: "https://aniquotes.myproj.xyz",
    githubUrl: "https://github.com/mohdsabahat/aniquotes",
  },
  {
    name: "GHCP Dashboard",
    description:
      "Org-wide full-stack platform tracking GitHub Copilot license allocation and usage metrics for 750+ developers. Includes usage analytics, license optimization, and monthly budget tracking.",
    tech: ["Spring Boot 3", "Thymeleaf", "MariaDB", "Flyway"],
    corporate: true,
  },
  {
    name: "RETRACT",
    description:
      "ML classification system for automated test failure triage, reaching 80% accuracy and projecting a 6-hour weekly reduction in manual QA effort.",
    tech: ["Python", "scikit-learn", "ML Classification"],
    corporate: true,
  },
];

// ===== Skills =====
export const skills: Record<string, string[]> = {
  Languages: ["Java", "Python", "JavaScript", "TypeScript", "SQL"],
  Backend: [
    "Spring Boot 3",
    "REST APIs",
    "Microservices",
    "JWT",
    "Java Servlets",
    "Thymeleaf",
  ],
  Frontend: ["React", "Next.js 15", "HTML", "CSS", "Bootstrap"],
  "AI / ML": [
    "scikit-learn",
    "MCP Servers",
    "GitHub Copilot",
    "AI Tool Benchmarking",
  ],
  Databases: ["MySQL", "MariaDB", "MongoDB", "PostgreSQL (Supabase)"],
  "DevOps & Tools": [
    "Git",
    "GitLab",
    "GitHub Actions",
    "Flyway",
    "Ansible",
    "Vercel",
    "Postman",
    "Swagger",
  ],
};

// ===== GitHub =====
export const GITHUB_USERNAME = "mohdsabahat";

// ===== Navigation =====
export const navLinks = [
  { href: "#about", label: "About" },
  { href: "#experience", label: "Experience" },
  { href: "#work", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];
