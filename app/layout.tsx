import type { Metadata, Viewport } from "next";
import { Playfair_Display, Inter } from "next/font/google";
import { ThemeProvider } from "./components/ThemeProvider";
import { Navigation } from "./components/Navigation";
import "./globals.css";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
    metadataBase: new URL("https://sabahat-portfolio.web.app/"),
  title: "Mohd Sabahat — Full-Stack Developer & AI/ML Engineer",
  description:
    "Mohd Sabahat is a Full-Stack Developer and AI/ML Engineer with over 3 years of experience in building production-ready systems. Expertise in Java, Spring Boot, Python, JavaScript, React, and Next.js. Based in Delhi, India.",
  keywords: [
    "Mohd Sabahat",
    "Full-Stack Developer",
    "AI ML Engineer",
    "Software Engineer",
    "Java",
    "Spring Boot",
    "Python",
    "JavaScript",
    "React",
    "Next.js",
    "TypeScript",
    "Node.js",
    "RESTful APIs",
    "Microservices",
    "Docker",
    "Kubernetes",
    "AWS",
    "GCP",
    "TensorFlow",
    "PyTorch",
    "Scikit-learn",
    "Portfolio",
    "Developer Portfolio",
    "Delhi",
    "India",
  ],
  authors: [{ name: "Mohd Sabahat", url: "https://sabahat-portfolio.web.app/" }],
  creator: "Mohd Sabahat",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sabahat-portfolio.web.app/",
    title: "Mohd Sabahat — Full-Stack Developer & AI/ML Engineer",
    description:
      "Explore the portfolio of Mohd Sabahat, a Full-Stack Developer and AI/ML Engineer with a passion for building robust and scalable applications. Discover projects, skills, and experience in modern web technologies.",
    siteName: "Mohd Sabahat's Portfolio",
    images: [
      {
        url: "/images/sabahat.png",
        width: 1200,
        height: 630,
        alt: "Mohd Sabahat's Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohd Sabahat — Full-Stack Developer & AI/ML Engineer",
    description:
      "Full-Stack Developer and AI/ML Engineer building production systems that matter.",
    images: ["/images/sabahat.png"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f5f0e8" },
    { media: "(prefers-color-scheme: dark)", color: "#0c0a09" },
  ],
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline script to set theme before first paint — prevents flash */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(!t){t=window.matchMedia('(prefers-color-scheme:light)').matches?'light':'dark'}document.documentElement.setAttribute('data-theme',t)}catch(e){document.documentElement.setAttribute('data-theme','dark')}})()`,
          }}
        />
      </head>
      <body className="min-h-screen font-sans antialiased">
        <ThemeProvider>
          <Navigation />
          <main>{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
