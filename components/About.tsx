"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import {
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiNodedotjs,
  SiPython,
  SiDjango,
  SiDart,
  SiFirebase,
  SiMongodb,
  SiMysql,
  SiPostgresql,
  SiTailwindcss,
  SiGit,
  SiDocker,
  SiWoocommerce,
} from "react-icons/si";

/**
 * Componente About profesional (Acerca de mí)
 * Sección que presenta información personal y profesional del desarrollador
 * Características mejoradas:
 * - Iconos de tecnologías con colores oficiales
 * - Animaciones de hover en skill cards
 * - Mejor jerarquía visual
 * - Layout optimizado
 */
export default function About() {
  const t = useTranslations("about");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Stack tecnológico organizado por categorías
  const skillCategories = [
    {
      label: "Frontend",
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "React", icon: SiReact, color: "#61DAFB" },
        { name: "Next.js", icon: SiNextdotjs, color: "#ffffff" },
        { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
        { name: "JavaScript", icon: SiJavascript, color: "#F7DF1E" },
        { name: "Tailwind CSS", icon: SiTailwindcss, color: "#06B6D4" },
        { name: "Dart", icon: SiDart, color: "#0175C2" },
      ],
    },
    {
      label: "Backend",
      color: "from-green-500 to-emerald-500",
      skills: [
        { name: "Node.js", icon: SiNodedotjs, color: "#339933" },
        { name: "Python", icon: SiPython, color: "#3776AB" },
        { name: "Django", icon: SiDjango, color: "#44B78B" },
      ],
    },
    {
      label: "Base de datos",
      color: "from-orange-500 to-yellow-500",
      skills: [
        { name: "MongoDB", icon: SiMongodb, color: "#47A248" },
        { name: "MySQL", icon: SiMysql, color: "#4479A1" },
        { name: "PostgreSQL", icon: SiPostgresql, color: "#4169E1" },
        { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
      ],
    },
    {
      label: "Nube & DevOps",
      color: "from-purple-500 to-pink-500",
      skills: [
        { name: "Git", icon: SiGit, color: "#F05032" },
        { name: "Docker", icon: SiDocker, color: "#2496ED" },
        { name: "WooCommerce", icon: SiWoocommerce, color: "#96588A" },
      ],
    },
  ];

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 px-4 bg-surface-light/30 dark:bg-surface-dark/30"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          {/* Título de la sección */}
          <div className="text-center mb-12">
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
              animate={
                isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
              }
              transition={{ delay: 0.2 }}
              className="w-24 h-1 bg-gradient-to-r from-accent-500 to-purple-500 mx-auto rounded-full"
            ></motion.div>
          </div>

          {/* Grid con dos columnas */}
          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Columna izquierda: Descripción */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="space-y-6"
            >
              <p className="text-lg text-secondary-light dark:text-secondary-dark leading-relaxed text-justify">
                {t("description")}
              </p>
            </motion.div>

            {/* Columna derecha: Habilidades técnicas */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 30 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <h3 className="text-2xl font-display font-semibold text-primary-light dark:text-primary-dark mb-6">
                {t("skills")}
              </h3>

              {/* Categorías de habilidades */}
              <div className="space-y-6">
                {skillCategories.map((category, catIndex) => (
                  <motion.div
                    key={category.label}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.4, delay: 0.4 + catIndex * 0.1 }}
                  >
                    {/* Encabezado de categoría */}
                    <div className="flex items-center space-x-3 mb-3">
                      <div
                        className={`h-0.5 w-6 rounded-full bg-gradient-to-r ${category.color}`}
                      ></div>
                      <span
                        className={`text-sm font-semibold uppercase tracking-wider bg-gradient-to-r ${category.color} bg-clip-text text-transparent`}
                      >
                        {category.label}
                      </span>
                    </div>

                    {/* Grid de skills de la categoría */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                      {category.skills.map((skill, index) => {
                        const Icon = skill.icon;
                        return (
                          <motion.div
                            key={skill.name}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={
                              isInView
                                ? { opacity: 1, scale: 1 }
                                : { opacity: 0, scale: 0.8 }
                            }
                            transition={{
                              duration: 0.3,
                              delay: 0.5 + catIndex * 0.1 + index * 0.05,
                            }}
                            className="group relative px-4 py-3 bg-white dark:bg-gray-800 rounded-xl border border-gray-200/50 dark:border-gray-700/50 hover:border-accent-500/50 dark:hover:border-accent-400/50 transition-all duration-300 cursor-default hover:scale-105 hover:shadow-lg hover:shadow-accent-500/10"
                          >
                            <div className="flex items-center space-x-3">
                              <Icon
                                className="w-5 h-5 flex-shrink-0 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12"
                                style={{ color: skill.color }}
                              />
                              <span className="text-sm font-medium text-primary-light dark:text-primary-dark truncate">
                                {skill.name}
                              </span>
                            </div>
                            <div className="absolute inset-0 bg-gradient-to-r from-accent-500/5 to-purple-500/5 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
