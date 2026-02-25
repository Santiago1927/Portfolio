"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar, ExternalLink } from "lucide-react";

/**
 * Componente Experience profesional (Experiencia Laboral)
 * Muestra el historial profesional en formato de línea de tiempo vertical
 * Características mejoradas:
 * - Timeline con gradiente
 * - Tarjetas con glassmorphism
 * - Animaciones suaves
 * - Diseño responsivo
 */
export default function Experience() {
  const t = useTranslations("experience");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const jobs = [
    {
      company: t("job1.company"),
      url: "http://www.lacteosdonjuan.com/",
      position: t("job1.position"),
      period: t("job1.period"),
      description: t("job1.description"),
      metrics: [
        { value: t("job1.metric1Value"), label: t("job1.metric1Label") },
        { value: t("job1.metric2Value"), label: t("job1.metric2Label") },
      ],
    },
    {
      company: t("job2.company"),
      url: "",
      position: t("job2.position"),
      period: t("job2.period"),
      description: t("job2.description"),
      metrics: [
        { value: t("job2.metric1Value"), label: t("job2.metric1Label") },
        { value: t("job2.metric2Value"), label: t("job2.metric2Label") },
      ],
    },
    {
      company: t("job3.company"),
      url: "https://www.realhaus.com.co/",
      position: t("job3.position"),
      period: t("job3.period"),
      description: t("job3.description"),
      metrics: [
        { value: t("job3.metric1Value"), label: t("job3.metric1Label") },
        { value: t("job3.metric2Value"), label: t("job3.metric2Label") },
      ],
    },
  ];

  return (
    <section id="experience" ref={ref} className="py-24 px-4">
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
              className="w-24 h-1 bg-gradient-to-r from-accent-500 to-purple-500 mx-auto rounded-full"
            ></motion.div>
          </div>

          {/* Lista de experiencias laborales */}
          <div className="space-y-8 max-w-4xl mx-auto">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
                }
                transition={{ duration: 0.6, delay: 0.2 + index * 0.15 }}
                className="relative pl-8 md:pl-12 border-l-2 border-gradient-to-b from-accent-500 to-purple-500"
                style={{
                  borderImage: "linear-gradient(to bottom, #3b82f6, #8b5cf6) 1",
                }}
              >
                {/* Punto indicador en la línea de tiempo */}
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-gradient-to-r from-accent-500 to-purple-500 shadow-lg shadow-accent-500/50 animate-pulse"></div>

                {/* Tarjeta con información del trabajo */}
                <div className="group bg-white dark:bg-gray-800 p-6 md:p-8 rounded-2xl border border-gray-200/50 dark:border-gray-700/50 hover:border-accent-500/50 dark:hover:border-accent-400/50 hover:shadow-xl hover:shadow-accent-500/10 transition-all duration-300 hover:-translate-y-1">
                  {/* Header */}
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                    <div className="flex-1">
                      {/* Cargo */}
                      <h3 className="text-xl md:text-2xl font-display font-bold text-primary-light dark:text-primary-dark mb-2 group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors">
                        {job.position}
                      </h3>

                      {/* Empresa */}
                      <div className="flex items-center space-x-2 text-accent-600 dark:text-accent-400 font-medium">
                        <Briefcase className="w-5 h-5" />
                        <span>{job.company}</span>
                        {job.url && (
                          <a
                            href={job.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center hover:text-accent-400 dark:hover:text-accent-300 transition-colors"
                            title={job.url}
                          >
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Período */}
                    <div className="flex items-center space-x-2 text-secondary-light dark:text-secondary-dark bg-surface-light dark:bg-surface-dark px-4 py-2 rounded-lg">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm font-medium">{job.period}</span>
                    </div>
                  </div>

                  {/* Descripción */}
                  <p className="text-secondary-light dark:text-secondary-dark leading-relaxed mb-6 text-justify">
                    {job.description}
                  </p>

                  {/* Métricas de impacto */}
                  {job.metrics && job.metrics.length > 0 && (
                    <div className="grid grid-cols-2 gap-4 pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
                      {job.metrics.map((metric, metricIndex) => (
                        <div key={metricIndex} className="text-center">
                          <div className="text-2xl font-bold text-accent-500 dark:text-accent-400">
                            {metric.value}
                          </div>
                          <div className="text-sm text-secondary-light dark:text-secondary-dark mt-1">
                            {metric.label}
                          </div>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
