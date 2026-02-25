"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ExternalLink,
  Github,
  Calendar,
  Users,
  Target,
  TrendingUp,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";

interface ProjectDetailProps {
  projectId: string;
}

export default function ProjectDetail({ projectId }: ProjectDetailProps) {
  const t = useTranslations("projectDetails");
  const locale = useLocale();

  // Datos del proyecto
  const project = {
    realhaus: {
      title: t("realhaus.title"),
      tagline: t("realhaus.tagline"),
      description: t("realhaus.description"),
      problem: t("realhaus.problem"),
      solution: t("realhaus.solution"),
      results: [
        { metric: "50%", label: t("realhaus.result1") },
        { metric: "3x", label: t("realhaus.result2") },
        { metric: "99.9%", label: t("realhaus.result3") },
      ],
      technologies: [
        "Next.js",
        "React",
        "TypeScript",
        "Firebase",
        "Tailwind CSS",
        "React Query",
        "Leaflet",
      ],
      features: [
        t("realhaus.feature1"),
        t("realhaus.feature2"),
        t("realhaus.feature3"),
        t("realhaus.feature4"),
        t("realhaus.feature5"),
      ],
      links: {
        demo: "https://www.realhaus.com.co/",
        github: "https://github.com/Santiago1927",
      },
      images: [
        "/projects/realhaus-1.jpg",
        "/projects/realhaus-2.jpg",
        "/projects/realhaus-3.jpg",
      ],
      timeline: "8 meses",
      team: "2 desarrolladores",
      role: "Desarrollador Full Stack Lead",
    },
    lacteosdonjuan: {
      title: t("lacteosdonjuan.title"),
      tagline: t("lacteosdonjuan.tagline"),
      description: t("lacteosdonjuan.description"),
      problem: t("lacteosdonjuan.problem"),
      solution: t("lacteosdonjuan.solution"),
      results: [
        { metric: "200%", label: t("lacteosdonjuan.result1") },
        { metric: "60%", label: t("lacteosdonjuan.result2") },
        { metric: "#1", label: t("lacteosdonjuan.result3") },
      ],
      technologies: [
        "WordPress",
        "WooCommerce",
        "PHP",
        "MySQL",
        "Google Ads",
        "SEO",
      ],
      features: [
        t("lacteosdonjuan.feature1"),
        t("lacteosdonjuan.feature2"),
        t("lacteosdonjuan.feature3"),
        t("lacteosdonjuan.feature4"),
        t("lacteosdonjuan.feature5"),
      ],
      links: {
        demo: "http://www.lacteosdonjuan.com/",
      },
      images: [
        "/projects/lacteos-1.jpg",
        "/projects/lacteos-2.jpg",
        "/projects/lacteos-3.jpg",
      ],
      timeline: "9 meses",
      team: "1 desarrollador",
      role: "Desarrollador Full Stack",
    },
    reportes: {
      title: t("reportes.title"),
      tagline: t("reportes.tagline"),
      description: t("reportes.description"),
      problem: t("reportes.problem"),
      solution: t("reportes.solution"),
      results: [
        { metric: "85%", label: t("reportes.result1") },
        { metric: "10x", label: t("reportes.result2") },
        { metric: "0", label: t("reportes.result3") },
      ],
      technologies: [
        "Next.js",
        "React",
        "MongoDB",
        "Node.js",
        "Chart.js",
        "PDF Generation",
      ],
      features: [
        t("reportes.feature1"),
        t("reportes.feature2"),
        t("reportes.feature3"),
        t("reportes.feature4"),
        t("reportes.feature5"),
      ],
      links: {
        demo: "http://www.reportes-lacteos-don-juan.vercel.app/",
        github: "https://github.com/Santiago1927",
      },
      images: [
        "/projects/reportes-1.jpg",
        "/projects/reportes-2.jpg",
        "/projects/reportes-3.jpg",
      ],
      timeline: "11 meses",
      team: "1 desarrollador",
      role: "Desarrollador Full Stack",
    },
  };

  const data = project[projectId as keyof typeof project];

  if (!data) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-background-light to-surface-light dark:from-background-dark dark:to-surface-dark">
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Botón de regreso */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href={`/${locale}#projects`}
            className="inline-flex items-center space-x-2 text-accent-500 dark:text-accent-400 hover:underline"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t("backToProjects")}</span>
          </Link>
        </motion.div>

        {/* Header del proyecto */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-light dark:text-primary-dark mb-4">
            {data.title}
          </h1>
          <p className="text-xl sm:text-2xl text-accent-500 dark:text-accent-400 font-medium mb-6">
            {data.tagline}
          </p>
          <p className="text-lg text-secondary-light dark:text-secondary-dark leading-relaxed max-w-3xl">
            {data.description}
          </p>

          {/* Metadata del proyecto */}
          <div className="flex flex-wrap gap-6 mt-8">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5 text-accent-500" />
              <span className="text-secondary-light dark:text-secondary-dark">
                <strong>{t("timeline")}:</strong> {data.timeline}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="w-5 h-5 text-accent-500" />
              <span className="text-secondary-light dark:text-secondary-dark">
                <strong>{t("team")}:</strong> {data.team}
              </span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="w-5 h-5 text-accent-500" />
              <span className="text-secondary-light dark:text-secondary-dark">
                <strong>{t("role")}:</strong> {data.role}
              </span>
            </div>
          </div>

          {/* Enlaces */}
          <div className="flex flex-wrap gap-4 mt-6">
            {data.links.demo && (
              <a
                href={data.links.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-purple-500 text-white font-medium shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                <span>{t("viewDemo")}</span>
              </a>
            )}
            {"github" in data.links && data.links.github && (
              <a
                href={data.links.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center space-x-2 px-6 py-3 rounded-xl bg-surface-light dark:bg-surface-dark border-2 border-accent-500/20 text-primary-light dark:text-primary-dark font-medium hover:border-accent-500 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-5 h-5" />
                <span>{t("viewCode")}</span>
              </a>
            )}
          </div>
        </motion.div>

        {/* Galería de imágenes placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-16"
        >
          <div className="grid md:grid-cols-3 gap-4">
            {data.images.map((img, index) => (
              <div
                key={index}
                className="aspect-video bg-gradient-to-br from-accent-500/10 to-purple-500/10 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 flex items-center justify-center"
              >
                <span className="text-secondary-light dark:text-secondary-dark text-sm">
                  {t("screenshotPlaceholder")} {index + 1}
                </span>
              </div>
            ))}
          </div>
        </motion.div>

        {/* El Problema */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-primary-light dark:text-primary-dark mb-4">
            {t("problemTitle")}
          </h2>
          <p className="text-lg text-secondary-light dark:text-secondary-dark leading-relaxed">
            {data.problem}
          </p>
        </motion.section>

        {/* La Solución */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-primary-light dark:text-primary-dark mb-4">
            {t("solutionTitle")}
          </h2>
          <p className="text-lg text-secondary-light dark:text-secondary-dark leading-relaxed mb-6">
            {data.solution}
          </p>

          {/* Características principales */}
          <div className="grid md:grid-cols-2 gap-4">
            {data.features.map((feature, index) => (
              <div
                key={index}
                className="flex items-start space-x-3 p-4 bg-white dark:bg-gray-800 rounded-xl border border-gray-200/50 dark:border-gray-700/50"
              >
                <div className="w-2 h-2 rounded-full bg-accent-500 mt-2 flex-shrink-0" />
                <span className="text-secondary-light dark:text-secondary-dark">
                  {feature}
                </span>
              </div>
            ))}
          </div>
        </motion.section>

        {/* Tecnologías */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mb-16"
        >
          <h2 className="text-3xl font-display font-bold text-primary-light dark:text-primary-dark mb-6">
            {t("technologiesTitle")}
          </h2>
          <div className="flex flex-wrap gap-3">
            {data.technologies.map((tech, index) => (
              <span
                key={index}
                className="px-4 py-2 bg-accent-500/10 dark:bg-accent-400/10 text-accent-600 dark:text-accent-400 rounded-full font-medium text-sm border border-accent-500/20"
              >
                {tech}
              </span>
            ))}
          </div>
        </motion.section>

        {/* Resultados */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="flex items-center space-x-2 mb-6">
            <TrendingUp className="w-8 h-8 text-accent-500" />
            <h2 className="text-3xl font-display font-bold text-primary-light dark:text-primary-dark">
              {t("resultsTitle")}
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {data.results.map((result, index) => (
              <div
                key={index}
                className="p-8 bg-gradient-to-br from-accent-500/5 to-purple-500/5 rounded-2xl border border-accent-500/20 text-center"
              >
                <div className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-accent-500 to-purple-500 bg-clip-text text-transparent mb-2">
                  {result.metric}
                </div>
                <div className="text-secondary-light dark:text-secondary-dark">
                  {result.label}
                </div>
              </div>
            ))}
          </div>
        </motion.section>
      </div>
    </main>
  );
}
