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
  title: "Mohd Sabahat — Full-Stack Developer & AI/ML Engineer",
  description:
    "Full-Stack Developer and AI/ML Engineer with 3+ years building production systems across Java, Spring Boot, Python, and JavaScript. Delhi, India.",
  keywords: [
    "Mohd Sabahat",
    "Full-Stack Developer",
    "AI ML Engineer",
    "Spring Boot",
    "React",
    "Next.js",
    "Java",
    "Python",
    "Portfolio",
  ],
  authors: [{ name: "Mohd Sabahat" }],
  creator: "Mohd Sabahat",
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Mohd Sabahat — Full-Stack Developer & AI/ML Engineer",
    description:
      "Full-Stack Developer and AI/ML Engineer building production systems that matter.",
    siteName: "Mohd Sabahat",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mohd Sabahat — Full-Stack Developer & AI/ML Engineer",
    description:
      "Full-Stack Developer and AI/ML Engineer building production systems that matter.",
  },
  robots: { index: true, follow: true },
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
