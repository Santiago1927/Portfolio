"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

interface Project {
  name: string;
  description: string;
  tech: string[];
  github?: string;
  demo?: string;
}

/**
 * Componente Projects profesional (Proyectos Destacados)
 * Muestra los proyectos más importantes del portfolio
 * Características mejoradas:
 * - Tarjetas con glassmorphism
 * - Efectos de hover sofisticados
 * - Tags de tecnologías mejorados
 * - Animaciones escalonadas
 */
export default function Projects() {
  const t = useTranslations("projects");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects: Project[] = [
    {
      name: t("project1.name"),
      description: t("project1.description"),
      tech: [
        "Next.js",
        "React",
        "TypeScript",
        "Firebase",
        "Tailwind CSS",
        "React Query",
      ],
      github: "https://github.com/Santiago1927",
      demo: "https://www.realhaus.com.co/",
    },
    {
      name: t("project2.name"),
      description: t("project2.description"),
      tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "Hostinger"],
      demo: "http://www.lacteosdonjuan.com/",
    },
    {
      name: t("project3.name"),
      description: t("project3.description"),
      tech: ["Next.js", "React", "MongoDB", "Node.js", "PDF Generation"],
      github: "https://github.com/Santiago1927",
      demo: "http://www.reportes-lacteos-don-juan.vercel.app/",
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-24 px-4 bg-surface-light/30 dark:bg-surface-dark/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Título de la sección */}
          <div className="text-center mb-16">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.1 }}
              className="text-4xl sm:text-5xl font-display font-bold text-primary-light dark:text-primary-dark mb-4"
            >
              {t("title")}
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, scaleX: 0 }}
              animate={isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
              transition={{ delay: 0.2 }}
              className="w-24 h-1 bg-gradient-to-r from-accent-500 to-purple-500 mx-auto rounded-full"
            ></motion.div>
          </div>

          {/* Grid de proyectos */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-accent-500/50 dark:hover:border-accent-400/50 hover:shadow-2xl hover:shadow-accent-500/10 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Gradiente de fondo sutil */}
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500/5 to-purple-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative space-y-4">
                  {/* Header */}
                  <div className="flex items-start justify-between gap-4">
                    {/* Nombre del proyecto */}
                    <h3 className="text-xl font-display font-bold text-primary-light dark:text-primary-dark group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors flex-1">
                      {project.name}
                    </h3>

                    {/* Enlaces */}
                    <div className="flex space-x-2 flex-shrink-0">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-surface-light dark:bg-surface-dark hover:bg-accent-500/10 dark:hover:bg-accent-400/10 text-secondary-light dark:text-secondary-dark hover:text-accent-500 dark:hover:text-accent-400 transition-all duration-200 hover:scale-110"
                          aria-label={t("viewCode")}
                        >
                          <Github className="w-5 h-5" />
                        </a>
                      )}

                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="p-2 rounded-lg bg-surface-light dark:bg-surface-dark hover:bg-accent-500/10 dark:hover:bg-accent-400/10 text-secondary-light dark:text-secondary-dark hover:text-accent-500 dark:hover:text-accent-400 transition-all duration-200 hover:scale-110"
                          aria-label={t("viewDemo")}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-secondary-light dark:text-secondary-dark text-sm leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags de tecnologías */}
                  <div className="flex flex-wrap gap-2 pt-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-gradient-to-r from-accent-500/10 to-purple-500/10 text-accent-600 dark:text-accent-400 rounded-full border border-accent-500/20 dark:border-accent-400/20"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
