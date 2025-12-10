"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone, Send } from "lucide-react";

/**
 * Componente Contact profesional (Contacto)
 * Sección final del portfolio que proporciona información de contacto
 * Características mejoradas:
 * - Tarjetas con glassmorphism
 * - Iconos con gradientes
 * - Botón CTA mejorado
 * - Animaciones suaves
 */
export default function Contact() {
  const t = useTranslations("contact");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 px-4"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          {/* Título de la sección */}
          <div className="mb-12">
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
              className="w-24 h-1 bg-gradient-to-r from-accent-500 to-purple-500 mx-auto rounded-full mb-6"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-secondary-light dark:text-secondary-dark"
            >
              {t("description")}
            </motion.p>
          </div>

          {/* Grid de tarjetas de contacto */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {/* Tarjeta de Email */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="group p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-accent-500/50 dark:hover:border-accent-400/50 hover:shadow-xl hover:shadow-accent-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-accent-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-semibold text-primary-light dark:text-primary-dark mb-2">
                Email
              </h3>
              <a
                href="mailto:davidandradesantacruz9.3@gmail.com"
                className="text-secondary-light dark:text-secondary-dark hover:text-accent-500 dark:hover:text-accent-400 transition-colors text-sm break-all"
              >
                davidandradesantacruz9.3@gmail.com
              </a>
            </motion.div>

            {/* Tarjeta de Teléfono */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="group p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-accent-500/50 dark:hover:border-accent-400/50 hover:shadow-xl hover:shadow-accent-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-accent-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-semibold text-primary-light dark:text-primary-dark mb-2">
                Teléfono
              </h3>
              <a
                href="tel:+573215028605"
                className="text-secondary-light dark:text-secondary-dark hover:text-accent-500 dark:hover:text-accent-400 transition-colors"
              >
                (+57) 3215028605
              </a>
            </motion.div>

            {/* Tarjeta de Ubicación */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="group p-6 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-accent-500/50 dark:hover:border-accent-400/50 hover:shadow-xl hover:shadow-accent-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              <div className="w-12 h-12 mx-auto mb-4 rounded-xl bg-gradient-to-r from-accent-500 to-purple-500 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h3 className="font-display font-semibold text-primary-light dark:text-primary-dark mb-2">
                Ubicación
              </h3>
              <p className="text-secondary-light dark:text-secondary-dark">
                {t("location")}
              </p>
            </motion.div>
          </div>

          {/* Botón CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <a
              href="mailto:davidandradesantacruz9.3@gmail.com"
              className="group inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-accent-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-accent-500/30 transition-all duration-300 hover:scale-105 overflow-hidden relative"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <Send className="w-5 h-5" />
                <span>{t("email")}</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
