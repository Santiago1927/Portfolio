"use client";

import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail } from "lucide-react";

/**
 * Componente Footer profesional (Pie de página)
 * Última sección visible del portfolio
 * Características mejoradas:
 * - Diseño limpio y moderno
 * - Enlaces sociales con hover effects
 * - Gradiente en logo
 * - Información de copyright
 */
export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative py-12 px-4 bg-gradient-to-b from-background-light to-surface-light dark:from-background-dark dark:to-surface-dark border-t border-gray-200/50 dark:border-gray-800/50">
      {/* Decoración superior */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-accent-500 to-transparent"></div>

      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-8">
          {/* Logo con gradiente */}
          <div className="text-3xl font-display font-bold bg-gradient-to-r from-accent-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
            DS
          </div>

          {/* Enlaces sociales */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Santiago1927"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200/50 dark:border-gray-700/50 hover:border-accent-500 dark:hover:border-accent-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-secondary-light dark:text-secondary-dark group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors" />
            </a>

            <a
              href="https://www.linkedin.com/in/santiagoa1927/"
              target="_blank"
              rel="noopener noreferrer"
              className="group p-3 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200/50 dark:border-gray-700/50 hover:border-accent-500 dark:hover:border-accent-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-secondary-light dark:text-secondary-dark group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors" />
            </a>

            <a
              href="mailto:davidandradesantacruz9.3@gmail.com"
              className="group p-3 rounded-xl bg-surface-light dark:bg-surface-dark border border-gray-200/50 dark:border-gray-700/50 hover:border-accent-500 dark:hover:border-accent-400 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
              aria-label="Email"
            >
              <Mail className="w-5 h-5 text-secondary-light dark:text-secondary-dark group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors" />
            </a>
          </div>

          {/* Copyright y créditos */}
          <div className="text-center space-y-2">
            <p className="text-secondary-light dark:text-secondary-dark text-sm">
              © {currentYear} David Santiago Andrade Santacruz. {t("rights")}
            </p>

            <p className="text-secondary-light dark:text-secondary-dark text-xs">
              {t("builtWith")}
            </p>
          </div>

          {/* Decoración inferior */}
          <div className="w-full max-w-xs h-px bg-gradient-to-r from-transparent via-gray-300 dark:via-gray-700 to-transparent"></div>
        </div>
      </div>
    </footer>
  );
}
