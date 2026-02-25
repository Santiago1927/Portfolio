"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function BlogList() {
  const t = useTranslations("blog");
  const locale = useLocale();

  const posts = [
    {
      slug: "react-best-practices-2024",
      title: t("post1.title"),
      excerpt: t("post1.excerpt"),
      date: "2024-01-15",
      readTime: "5 min",
      tags: ["React", "JavaScript", "Best Practices"],
    },
    {
      slug: "nextjs-performance-optimization",
      title: t("post2.title"),
      excerpt: t("post2.excerpt"),
      date: "2024-01-08",
      readTime: "8 min",
      tags: ["Next.js", "Performance", "Optimization"],
    },
    {
      slug: "typescript-tips-tricks",
      title: t("post3.title"),
      excerpt: t("post3.excerpt"),
      date: "2024-01-01",
      readTime: "6 min",
      tags: ["TypeScript", "Tips", "Development"],
    },
  ];

  return (
    <main className="min-h-screen bg-gradient-to-br from-background-light to-surface-light dark:from-background-dark dark:to-surface-dark">
      <div className="max-w-7xl mx-auto px-4 py-24">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-primary-light dark:text-primary-dark mb-4">
            {t("title")}
          </h1>
          <p className="text-xl text-secondary-light dark:text-secondary-dark max-w-2xl mx-auto">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Lista de posts */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <Link key={post.slug} href={`/${locale}/blog/${post.slug}`}>
              <motion.article
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="group h-full bg-white dark:bg-gray-800 rounded-2xl p-8 border border-gray-200/50 dark:border-gray-700/50 hover:border-accent-500/50 dark:hover:border-accent-400/50 hover:shadow-2xl hover:shadow-accent-500/10 transition-all duration-300 hover:-translate-y-2 cursor-pointer"
              >
                {/* Metadata */}
                <div className="flex items-center space-x-4 text-sm text-secondary-light dark:text-secondary-dark mb-4">
                  <div className="flex items-center space-x-1">
                    <Calendar className="w-4 h-4" />
                    <time>
                      {new Date(post.date).toLocaleDateString(locale)}
                    </time>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="w-4 h-4" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Título */}
                <h2 className="text-2xl font-display font-bold text-primary-light dark:text-primary-dark mb-3 group-hover:text-accent-500 dark:group-hover:text-accent-400 transition-colors">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="text-secondary-light dark:text-secondary-dark leading-relaxed mb-4">
                  {post.excerpt}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {post.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 text-xs font-medium bg-accent-500/10 dark:bg-accent-400/10 text-accent-600 dark:text-accent-400 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Botón leer más */}
                <div className="flex items-center text-accent-500 dark:text-accent-400 font-medium group-hover:underline">
                  <span>{t("readMore")}</span>
                  <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </motion.article>
            </Link>
          ))}
        </div>

        {/* Botón volver */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="text-center mt-12"
        >
          <Link
            href={`/${locale}`}
            className="inline-flex items-center space-x-2 text-accent-500 dark:text-accent-400 hover:underline"
          >
            <span>{t("backToHome")}</span>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
