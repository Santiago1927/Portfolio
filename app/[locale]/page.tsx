import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "David Santiago Andrade - Full Stack Developer",
  description:
    "Portafolio profesional de David Santiago Andrade Santacruz, Ingeniero de Sistemas y Desarrollador Full Stack especializado en React, Next.js, TypeScript, Firebase y MongoDB.",
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
    description: "Portafolio profesional de David Santiago Andrade Santacruz",
    type: "website",
  },
};

type Props = {
  params: { locale: string };
};

export default function Home({ params: { locale } }: Props) {
  // Enable static rendering
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
