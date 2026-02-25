"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote, Star } from "lucide-react";

/**
 * Componente Testimonials (Testimonios de Clientes)
 * Muestra testimonios de clientes y supervisores para generar confianza
 * Características:
 * - Tarjetas con glassmorphism
 * - Sistema de calificación con estrellas
 * - Animaciones suaves
 * - Diseño responsive
 */
export default function Testimonials() {
  const t = useTranslations("testimonials");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const testimonials = [
    {
      name: t("testimonial1.name"),
      position: t("testimonial1.position"),
      company: t("testimonial1.company"),
      text: t("testimonial1.text"),
      rating: 5,
      avatar: "LDJ",
    },
    {
      name: t("testimonial2.name"),
      position: t("testimonial2.position"),
      company: t("testimonial2.company"),
      text: t("testimonial2.text"),
      rating: 5,
      avatar: "RH",
    },
    {
      name: t("testimonial3.name"),
      position: t("testimonial3.position"),
      company: t("testimonial3.company"),
      text: t("testimonial3.text"),
      rating: 5,
      avatar: "TC",
    },
  ];

  return (
    <section
      id="testimonials"
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
              animate={
                isInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }
              }
              transition={{ delay: 0.2 }}
              className="w-24 h-1 bg-gradient-to-r from-accent-500 to-purple-500 mx-auto rounded-full mb-6"
            ></motion.div>
            <motion.p
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : { opacity: 0 }}
              transition={{ delay: 0.3 }}
              className="text-lg text-secondary-light dark:text-secondary-dark max-w-2xl mx-auto"
            >
              {t("subtitle")}
            </motion.p>
          </div>

          {/* Grid de testimonios */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
                className="group relative bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-accent-500/50 dark:hover:border-accent-400/50 hover:shadow-2xl hover:shadow-accent-500/10 transition-all duration-300 hover:-translate-y-2"
              >
                {/* Icono de cita */}
                <div className="absolute -top-4 left-8">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-500 to-purple-500 flex items-center justify-center shadow-lg">
                    <Quote className="w-6 h-6 text-white" />
                  </div>
                </div>

                <div className="pt-6 space-y-4">
                  {/* Calificación con estrellas */}
                  <div className="flex space-x-1">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  {/* Texto del testimonio */}
                  <p className="text-secondary-light dark:text-secondary-dark leading-relaxed italic text-justify">
                    &ldquo;{testimonial.text}&rdquo;
                  </p>

                  {/* Información del cliente */}
                  <div className="flex items-center space-x-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                    {/* Avatar */}
                    <div className="w-12 h-12 rounded-full bg-gradient-to-r from-accent-500 to-purple-500 flex items-center justify-center text-white font-bold">
                      {testimonial.avatar}
                    </div>

                    {/* Nombre y cargo */}
                    <div>
                      <h4 className="font-semibold text-primary-light dark:text-primary-dark">
                        {testimonial.name}
                      </h4>
                      <p className="text-sm text-secondary-light dark:text-secondary-dark">
                        {testimonial.position}
                      </p>
                      <p className="text-xs text-accent-500 dark:text-accent-400 font-medium">
                        {testimonial.company}
                      </p>
                    </div>
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
