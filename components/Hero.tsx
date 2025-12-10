"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Phone, Download } from "lucide-react";

/**
 * Componente Hero profesional (Sección principal de presentación)
 * Primera sección visible del portfolio con diseño impactante
 * Características mejoradas:
 * - Fondo con gradiente animado
 * - Tipografía jerárquica con Space Grotesk
 * - Avatar mejorado con efectos de glow
 * - Botones CTA con gradientes
 * - Animaciones suaves y escalonadas
 */
export default function Hero() {
  const t = useTranslations("hero");
  const tContact = useTranslations("contact");

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center pt-20 px-4 overflow-hidden"
    >
      {/* Fondo con gradiente animado */}
      <div className="absolute inset-0 bg-gradient-to-br from-background-light via-accent-50/30 to-purple-50/30 dark:from-background-dark dark:via-accent-950/20 dark:to-purple-950/20"></div>

      {/* Elementos decorativos de fondo */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-accent-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }}></div>

      <div className="relative max-w-7xl mx-auto w-full z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Contenido de texto */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {/* Saludo inicial */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="inline-block"
            >
              <span className="px-4 py-2 rounded-full bg-accent-500/10 dark:bg-accent-400/10 text-accent-600 dark:text-accent-400 font-medium text-sm border border-accent-500/20 dark:border-accent-400/20">
                {t("greeting")} 👋
              </span>
            </motion.div>

            {/* Nombre completo */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-light dark:text-primary-dark leading-tight"
            >
              {t("name")}
            </motion.h1>

            {/* Título profesional con gradiente */}
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl lg:text-4xl font-display font-semibold bg-gradient-to-r from-accent-500 via-purple-500 to-pink-500 bg-clip-text text-transparent"
            >
              {t("title")}
            </motion.h2>

            {/* Subtítulo */}
            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl sm:text-2xl text-accent-600 dark:text-accent-400 font-medium"
            >
              {t("subtitle")}
            </motion.h3>

            {/* Descripción */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-secondary-light dark:text-secondary-dark leading-relaxed max-w-2xl"
            >
              {t("description")}
            </motion.p>

            {/* Ubicación */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-2 text-secondary-light dark:text-secondary-dark"
            >
              <MapPin className="w-5 h-5 text-accent-500" />
              <span>{tContact("location")}</span>
            </motion.div>

            {/* Botones de acción */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex flex-wrap items-center gap-4 pt-4"
            >
              {/* Botón de teléfono principal */}
              <a
                href="tel:+573215028605"
                className="group relative px-6 py-3 rounded-xl bg-gradient-to-r from-accent-500 to-purple-500 text-white font-medium shadow-lg shadow-accent-500/30 hover:shadow-xl hover:shadow-accent-500/40 transition-all duration-300 hover:scale-105 overflow-hidden"
              >
                <span className="relative z-10 flex items-center space-x-2">
                  <Phone className="w-5 h-5" />
                  <span>(+57) 3215028605</span>
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>

              {/* Botón de CV */}
              <a
                href="#contact"
                className="px-6 py-3 rounded-xl bg-surface-light dark:bg-surface-dark border-2 border-accent-500/20 dark:border-accent-400/20 text-primary-light dark:text-primary-dark font-medium hover:border-accent-500 dark:hover:border-accent-400 hover:bg-accent-500/5 dark:hover:bg-accent-400/5 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <Download className="w-5 h-5" />
                <span>{t("cv")}</span>
              </a>
            </motion.div>

            {/* Enlaces sociales */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex items-center space-x-4 pt-2"
            >
              <a
                href="https://github.com/Santiago1927"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200/50 dark:border-gray-700/50 hover:border-accent-500 dark:hover:border-accent-400 hover:bg-accent-500/5 dark:hover:bg-accent-400/5 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6 text-primary-light dark:text-primary-dark" />
              </a>

              <a
                href="https://www.linkedin.com/in/santiagoa1927/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200/50 dark:border-gray-700/50 hover:border-accent-500 dark:hover:border-accent-400 hover:bg-accent-500/5 dark:hover:bg-accent-400/5 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6 text-primary-light dark:text-primary-dark" />
              </a>

              <a
                href="mailto:davidandradesantacruz9.3@gmail.com"
                className="p-3 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200/50 dark:border-gray-700/50 hover:border-accent-500 dark:hover:border-accent-400 hover:bg-accent-500/5 dark:hover:bg-accent-400/5 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
                aria-label="Email"
              >
                <Mail className="w-6 h-6 text-primary-light dark:text-primary-dark" />
              </a>
            </motion.div>
          </motion.div>

          {/* Avatar mejorado */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="flex justify-center"
          >
            <div className="relative">
              {/* Anillos decorativos animados */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-500 via-purple-500 to-pink-500 blur-2xl opacity-30 animate-pulse"></div>
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent-500 via-purple-500 to-pink-500 opacity-20 animate-glow"></div>

              {/* Avatar principal */}
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white dark:border-gray-800 shadow-2xl shadow-accent-500/20">
                <div className="absolute inset-0 bg-gradient-to-br from-accent-500 via-purple-500 to-pink-500 animate-gradient"></div>
                <div className="relative w-full h-full flex items-center justify-center">
                  <span className="text-8xl sm:text-9xl font-display font-bold text-white drop-shadow-lg">
                    DS
                  </span>
                </div>
              </div>

              {/* Decoración flotante */}
              <div className="absolute -bottom-4 -right-4 px-6 py-3 rounded-full bg-white dark:bg-gray-800 shadow-lg border-2 border-accent-500/20 animate-bounce-subtle">
                <span className="text-2xl">💻</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
