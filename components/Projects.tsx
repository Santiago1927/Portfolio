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
      demo: "#",
    },
    {
      name: t("project2.name"),
      description: t("project2.description"),
      tech: ["WordPress", "WooCommerce", "PHP", "MySQL", "Hostinger"],
      demo: "#",
    },
    {
      name: t("project3.name"),
      description: t("project3.description"),
      tech: ["Next.js", "React", "MongoDB", "Node.js", "PDF Generation"],
      github: "https://github.com/Santiago1927",
      demo: "#",
    },
  ];

  return (
    <section id="projects" ref={ref} className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-light dark:text-primary-dark mb-12">
            {t("title")}
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                className="group relative bg-surface-light dark:bg-surface-dark rounded-lg p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-transparent hover:border-accent-light dark:hover:border-accent-dark"
              >
                <div className="space-y-4">
                  <div className="flex items-start justify-between">
                    <h3 className="text-xl font-bold text-primary-light dark:text-primary-dark group-hover:text-accent-light dark:group-hover:text-accent-dark transition-colors">
                      {project.name}
                    </h3>
                    <div className="flex space-x-2">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-secondary-light dark:text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
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
                          className="text-secondary-light dark:text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
                          aria-label={t("viewDemo")}
                        >
                          <ExternalLink className="w-5 h-5" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-secondary-light dark:text-secondary-dark text-sm leading-relaxed">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-background-light dark:bg-background-dark text-accent-light dark:text-accent-dark rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-blue-600 dark:from-accent-dark dark:to-blue-400 rounded-lg opacity-0 group-hover:opacity-10 transition-opacity duration-300 pointer-events-none"></div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
