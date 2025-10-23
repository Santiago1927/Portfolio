"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, MapPin, Phone } from "lucide-react";

export default function Contact() {
  const t = useTranslations("contact");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 px-4 bg-surface-light/50 dark:bg-surface-dark/50"
    >
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-light dark:text-primary-dark mb-4">
            {t("title")}
          </h2>
          <p className="text-lg text-secondary-light dark:text-secondary-dark mb-12">
            {t("description")}
          </p>

          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="p-6 bg-background-light dark:bg-background-dark rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Mail className="w-8 h-8 mx-auto mb-4 text-accent-light dark:text-accent-dark" />
              <h3 className="font-semibold text-primary-light dark:text-primary-dark mb-2">
                Email
              </h3>
              <a
                href="mailto:davidandradesantacruz9.3@gmail.com"
                className="text-secondary-light dark:text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors text-sm break-all"
              >
                davidandradesantacruz9.3@gmail.com
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="p-6 bg-background-light dark:bg-background-dark rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <Phone className="w-8 h-8 mx-auto mb-4 text-accent-light dark:text-accent-dark" />
              <h3 className="font-semibold text-primary-light dark:text-primary-dark mb-2">
                Teléfono
              </h3>
              <a
                href="tel:+573215028605"
                className="text-secondary-light dark:text-secondary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors"
              >
                (+57) 3215028605
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="p-6 bg-background-light dark:bg-background-dark rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <MapPin className="w-8 h-8 mx-auto mb-4 text-accent-light dark:text-accent-dark" />
              <h3 className="font-semibold text-primary-light dark:text-primary-dark mb-2">
                Ubicación
              </h3>
              <p className="text-secondary-light dark:text-secondary-dark">
                {t("location")}
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.5 }}
          >
            <a
              href="mailto:davidandradesantacruz9.3@gmail.com"
              className="inline-block px-8 py-4 bg-accent-light dark:bg-accent-dark text-white font-semibold rounded-lg hover:opacity-90 transition-all duration-300 hover:scale-105 shadow-lg"
            >
              {t("email")}
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
