"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Link from "next/link";

interface BlogPostProps {
  slug: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  const t = useTranslations("blog");
  const locale = useLocale();

  // Datos del post (en producción, esto vendría de un CMS o archivos MD)
  const posts: Record<string, any> = {
    "react-best-practices-2024": {
      title: t("post1.title"),
      date: "2024-01-15",
      readTime: "5 min",
      content: t("post1.content"),
      tags: ["React", "JavaScript", "Best Practices"],
    },
    "nextjs-performance-optimization": {
      title: t("post2.title"),
      date: "2024-01-08",
      readTime: "8 min",
      content: t("post2.content"),
      tags: ["Next.js", "Performance", "Optimization"],
    },
    "typescript-tips-tricks": {
      title: t("post3.title"),
      date: "2024-01-01",
      readTime: "6 min",
      content: t("post3.content"),
      tags: ["TypeScript", "Tips", "Development"],
    },
  };

  const post = posts[slug];

  if (!post) return null;

  return (
    <main className="min-h-screen bg-gradient-to-br from-background-light to-surface-light dark:from-background-dark dark:to-surface-dark">
      <article className="max-w-4xl mx-auto px-4 py-24">
        {/* Botón de regreso */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-8"
        >
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center space-x-2 text-accent-500 dark:text-accent-400 hover:underline"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>{t("backToBlog")}</span>
          </Link>
        </motion.div>

        {/* Header del artículo */}
        <motion.header
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-light dark:text-primary-dark mb-6">
            {post.title}
          </h1>

          {/* Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-secondary-light dark:text-secondary-dark mb-6">
            <div className="flex items-center space-x-2">
              <Calendar className="w-5 h-5" />
              <time>
                {new Date(post.date).toLocaleDateString(locale, {
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                })}
              </time>
            </div>
            <div className="flex items-center space-x-2">
              <Clock className="w-5 h-5" />
              <span>{post.readTime}</span>
            </div>
          </div>

          {/* Tags */}
          <div className="flex flex-wrap gap-2">
            {post.tags.map((tag: string, i: number) => (
              <span
                key={i}
                className="px-4 py-2 text-sm font-medium bg-accent-500/10 dark:bg-accent-400/10 text-accent-600 dark:text-accent-400 rounded-full border border-accent-500/20"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.header>

        {/* Contenido del artículo */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="prose prose-lg dark:prose-invert max-w-none"
        >
          <div className="bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 shadow-xl">
            <div className="text-secondary-light dark:text-secondary-dark leading-relaxed whitespace-pre-line">
              {post.content}
            </div>
          </div>
        </motion.div>

        {/* Footer del artículo */}
        <motion.footer
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-200/50 dark:border-gray-700/50"
        >
          <p className="text-secondary-light dark:text-secondary-dark text-center">
            {t("shareArticle")}
          </p>
        </motion.footer>
      </article>
    </main>
  );
}
