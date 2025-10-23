"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, FileText } from "lucide-react";

export default function Hero() {
  const t = useTranslations("hero");
  const tContact = useTranslations("contact");

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-6"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-accent-light dark:text-accent-dark font-medium"
            >
              {t("greeting")}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-light dark:text-primary-dark"
            >
              {t("name")}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl sm:text-3xl font-semibold text-secondary-light dark:text-secondary-dark"
            >
              {t("title")}
            </motion.h2>

            <motion.h3
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-xl text-accent-light dark:text-accent-dark font-medium"
            >
              {t("subtitle")}
            </motion.h3>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-secondary-light dark:text-secondary-dark leading-relaxed max-w-2xl"
            >
              {t("description")}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex items-center space-x-2 text-secondary-light dark:text-secondary-dark"
            >
              <MapPin className="w-5 h-5" />
              <span>{tContact("location")}</span>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex items-center space-x-4 pt-4"
            >
              <a
                href="https://github.com/Santiago1927"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface-light dark:bg-surface-dark hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="GitHub"
              >
                <Github className="w-6 h-6" />
              </a>
              <a
                href="https://www.linkedin.com/in/david-santiago-andrade-santacruz-60aa60208/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-surface-light dark:bg-surface-dark hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a
                href="mailto:davidandradesantacruz9.3@gmail.com"
                className="p-3 rounded-lg bg-surface-light dark:bg-surface-dark hover:bg-accent-light dark:hover:bg-accent-dark hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Email"
              >
                <Mail className="w-6 h-6" />
              </a>
              <a
                href="tel:+573215028605"
                className="flex items-center space-x-2 px-4 py-3 rounded-lg bg-accent-light dark:bg-accent-dark text-white hover:opacity-90 transition-all duration-300 hover:scale-105 font-medium"
              >
                <span>(+57) 3215028605</span>
              </a>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-accent-light to-blue-600 dark:from-accent-dark dark:to-blue-400 rounded-full blur-2xl opacity-20 animate-pulse"></div>
              <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-accent-light dark:border-accent-dark shadow-2xl">
                <div className="w-full h-full bg-gradient-to-br from-accent-light to-blue-600 dark:from-accent-dark dark:to-blue-400 flex items-center justify-center text-white text-8xl font-bold">
                  DS
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
