"use client";

import { useTranslations } from "next-intl";
import { Github, Linkedin, Mail, Instagram } from "lucide-react";

export default function Footer() {
  const t = useTranslations("footer");
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-4 bg-background-light dark:bg-background-dark border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col items-center space-y-6">
          {/* Social Links */}
          <div className="flex items-center space-x-6">
            <a
              href="https://github.com/Santiago1927"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-light dark:text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors hover:scale-110 transform duration-200"
              aria-label="GitHub"
            >
              <Github className="w-6 h-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/david-santiago-andrade-santacruz-60aa60208/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-secondary-light dark:text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors hover:scale-110 transform duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="mailto:davidandradesantacruz9.3@gmail.com"
              className="text-secondary-light dark:text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors hover:scale-110 transform duration-200"
              aria-label="Email"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>

          {/* Copyright */}
          <div className="text-center space-y-2">
            <p className="text-secondary-light dark:text-secondary-dark text-sm">
              © {currentYear} David Santiago Andrade Santacruz. {t("rights")}
            </p>
            <p className="text-secondary-light dark:text-secondary-dark text-xs">
              {t("builtWith")}
            </p>
          </div>

          {/* Signature */}
          <div className="text-accent-light dark:text-accent-dark font-bold text-lg">
            DS
          </div>
        </div>
      </div>
    </footer>
  );
}
