import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

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
  openGraph: {
    title: "David Santiago Andrade - Full Stack Developer",
    description: "Professional portfolio of David Santiago Andrade Santacruz",
    type: "website",
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

  return (
    <main className="min-h-screen bg-gradient-to-br from-background-light to-surface-light dark:from-background-dark dark:to-surface-dark">
      <Navbar />
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
