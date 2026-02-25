import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Script from "next/script";

/**
 * Page metadata for SEO and Open Graph
 * Defines the title, description, keywords and social media metadata
 * This data is important for search engine positioning
 */
export const metadata: Metadata = {
  title: "David Santiago Andrade - Full Stack Developer",
  description:
    "Professional portfolio of David Santiago Andrade Santacruz, Systems Engineer and Full Stack Developer specialized in React, Next.js, TypeScript, Firebase and MongoDB.",
  keywords: [
    "Full Stack Developer",
    "React",
    "Next.js",
    "TypeScript",
    "Firebase",
    "MongoDB",
    "Web Developer",
  ],
  authors: [{ name: "David Santiago Andrade Santacruz" }],
  creator: "David Santiago Andrade Santacruz",
  openGraph: {
    title: "David Santiago Andrade - Full Stack Developer",
    description:
      "Professional portfolio showcasing modern web applications built with React, Next.js, and TypeScript. Specialized in full-stack development with proven results.",
    type: "website",
    locale: "es_CO",
    alternateLocale: ["en_US"],
    siteName: "David Santiago Andrade Portfolio",
    url: "https://davidandrade.dev",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "David Santiago Andrade - Full Stack Developer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "David Santiago Andrade - Full Stack Developer",
    description:
      "Professional portfolio showcasing modern web applications built with React, Next.js, and TypeScript.",
    images: ["/og-image.jpg"],
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
  alternates: {
    canonical: "https://davidandrade.dev",
    languages: {
      es: "https://davidandrade.dev/es",
      en: "https://davidandrade.dev/en",
    },
  },
};

// Type for Home component props
type Props = {
  params: { locale: string };
};

/**
 * Main portfolio page
 * Renders all portfolio sections in order:
 * - Navbar: Fixed navigation bar with language and theme switcher
 * - Hero: Main presentation section with personal information
 * - About: "About me" section with description and technical skills
 * - Experience: Work experience history
 * - Projects: Featured projects with links
 * - Contact: Contact information
 * - Footer: Footer with social media links
 */
export default function Home({ params: { locale } }: Props) {
  // Enable static rendering for the current locale
  setRequestLocale(locale);

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "David Santiago Andrade Santacruz",
    alternateName: "David Santiago Andrade",
    jobTitle: "Full Stack Developer",
    description:
      "Systems Engineer and Full Stack Developer specialized in React, Next.js, TypeScript, Firebase and MongoDB with over 3 years of experience.",
    url: "https://davidandrade.dev",
    image: "https://davidandrade.dev/profile.jpg",
    email: "davidandradesantacruz9.3@gmail.com",
    telephone: "+573215028605",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Pasto",
      addressRegion: "Nariño",
      addressCountry: "CO",
    },
    sameAs: [
      "https://github.com/Santiago1927",
      "https://www.linkedin.com/in/santiagoa1927/",
    ],
    knowsAbout: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Node.js",
      "Firebase",
      "MongoDB",
      "MySQL",
      "Tailwind CSS",
      "Full Stack Development",
      "Web Development",
    ],
  };

  return (
    <>
      <Script
        id="structured-data"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="min-h-screen bg-gradient-to-br from-background-light to-surface-light dark:from-background-dark dark:to-surface-dark">
        <Navbar />
        <Hero />
        <About />
        <Experience />
        <Projects />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
