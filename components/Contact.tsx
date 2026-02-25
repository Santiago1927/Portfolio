"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";

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

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");
  const [errors, setErrors] = useState<{
    name?: string;
    email?: string;
    message?: string;
  }>({});

  const validateForm = () => {
    const newErrors: { name?: string; email?: string; message?: string } = {};

    if (!formData.name.trim()) {
      newErrors.name = t("form.nameRequired");
    }

    if (!formData.email.trim()) {
      newErrors.email = t("form.emailRequired");
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = t("form.emailInvalid");
    }

    if (!formData.message.trim()) {
      newErrors.message = t("form.messageRequired");
    } else if (formData.message.trim().length < 10) {
      newErrors.message = t("form.messageTooShort");
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);
    setSubmitStatus("idle");

    // Simular envío del formulario (puedes integrar con un servicio real como Formspree, EmailJS, etc.)
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      setSubmitStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Limpiar errores cuando el usuario empieza a escribir
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  return (
    <section id="contact" ref={ref} className="py-24 px-4">
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

          {/* Formulario de contacto */}
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            onSubmit={handleSubmit}
            className="max-w-2xl mx-auto bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl"
          >
            {/* Mensaje de éxito */}
            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl flex items-start space-x-3"
              >
                <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-green-800 dark:text-green-300">
                    {t("form.successTitle")}
                  </p>
                  <p className="text-sm text-green-700 dark:text-green-400">
                    {t("form.successMessage")}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Mensaje de error */}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl flex items-start space-x-3"
              >
                <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400 flex-shrink-0 mt-0.5" />
                <div>
                  <p className="font-semibold text-red-800 dark:text-red-300">
                    {t("form.errorTitle")}
                  </p>
                  <p className="text-sm text-red-700 dark:text-red-400">
                    {t("form.errorMessage")}
                  </p>
                </div>
              </motion.div>
            )}

            {/* Campo Nombre */}
            <div className="mb-6">
              <label
                htmlFor="name"
                className="block text-sm font-semibold text-primary-light dark:text-primary-dark mb-2"
              >
                {t("form.name")} *
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-surface-light dark:bg-surface-dark border ${
                  errors.name
                    ? "border-red-500 dark:border-red-500"
                    : "border-gray-200/50 dark:border-gray-700/50"
                } text-primary-light dark:text-primary-dark focus:outline-none focus:ring-2 focus:ring-accent-500 dark:focus:ring-accent-400 transition-all`}
                placeholder={t("form.namePlaceholder")}
              />
              {errors.name && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.name}
                </p>
              )}
            </div>

            {/* Campo Email */}
            <div className="mb-6">
              <label
                htmlFor="email"
                className="block text-sm font-semibold text-primary-light dark:text-primary-dark mb-2"
              >
                {t("form.email")} *
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className={`w-full px-4 py-3 rounded-xl bg-surface-light dark:bg-surface-dark border ${
                  errors.email
                    ? "border-red-500 dark:border-red-500"
                    : "border-gray-200/50 dark:border-gray-700/50"
                } text-primary-light dark:text-primary-dark focus:outline-none focus:ring-2 focus:ring-accent-500 dark:focus:ring-accent-400 transition-all`}
                placeholder={t("form.emailPlaceholder")}
              />
              {errors.email && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.email}
                </p>
              )}
            </div>

            {/* Campo Mensaje */}
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-semibold text-primary-light dark:text-primary-dark mb-2"
              >
                {t("form.message")} *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                className={`w-full px-4 py-3 rounded-xl bg-surface-light dark:bg-surface-dark border ${
                  errors.message
                    ? "border-red-500 dark:border-red-500"
                    : "border-gray-200/50 dark:border-gray-700/50"
                } text-primary-light dark:text-primary-dark focus:outline-none focus:ring-2 focus:ring-accent-500 dark:focus:ring-accent-400 transition-all resize-none`}
                placeholder={t("form.messagePlaceholder")}
              />
              {errors.message && (
                <p className="mt-1 text-sm text-red-600 dark:text-red-400">
                  {errors.message}
                </p>
              )}
            </div>

            {/* Botón de envío */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full group relative px-8 py-4 bg-gradient-to-r from-accent-500 to-purple-500 text-white font-semibold rounded-xl hover:shadow-xl hover:shadow-accent-500/30 transition-all duration-300 hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center space-x-2">
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    <span>{t("form.sending")}</span>
                  </>
                ) : (
                  <>
                    <Send className="w-5 h-5" />
                    <span>{t("form.submit")}</span>
                  </>
                )}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </motion.form>
        </motion.div>
      </div>
    </section>
  );
}
