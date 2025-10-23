"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Calendar } from "lucide-react";

interface Job {
  company: string;
  position: string;
  period: string;
  description: string;
}

export default function Experience() {
  const t = useTranslations("experience");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const jobs: Job[] = [
    {
      company: t("job1.company"),
      position: t("job1.position"),
      period: t("job1.period"),
      description: t("job1.description"),
    },
    {
      company: t("job2.company"),
      position: t("job2.position"),
      period: t("job2.period"),
      description: t("job2.description"),
    },
    {
      company: t("job3.company"),
      position: t("job3.position"),
      period: t("job3.period"),
      description: t("job3.description"),
    },
  ];

  return (
    <section
      id="experience"
      ref={ref}
      className="py-20 px-4 bg-surface-light/50 dark:bg-surface-dark/50"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-light dark:text-primary-dark mb-12">
            {t("title")}
          </h2>

          <div className="space-y-8">
            {jobs.map((job, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={
                  isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                }
                transition={{ duration: 0.5, delay: 0.2 + index * 0.2 }}
                className="relative pl-8 border-l-2 border-accent-light dark:border-accent-dark"
              >
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-accent-light dark:bg-accent-dark"></div>

                <div className="bg-background-light dark:bg-background-dark p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-primary-light dark:text-primary-dark mb-1">
                        {job.position}
                      </h3>
                      <div className="flex items-center space-x-2 text-accent-light dark:text-accent-dark font-medium">
                        <Briefcase className="w-4 h-4" />
                        <span>{job.company}</span>
                      </div>
                    </div>
                    <div className="flex items-center space-x-2 text-secondary-light dark:text-secondary-dark mt-2 sm:mt-0">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{job.period}</span>
                    </div>
                  </div>

                  <p className="text-secondary-light dark:text-secondary-dark leading-relaxed">
                    {job.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
