"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Calendar, Clock } from "lucide-react";

const posts = [
  {
    slug: "react-best-practices-2024",
    date: "2024-06-15",
    readTime: "5 min",
    key: "post1" as const,
  },
  {
    slug: "nextjs-performance-optimization",
    date: "2024-07-20",
    readTime: "7 min",
    key: "post2" as const,
  },
  {
    slug: "typescript-tips-tricks",
    date: "2024-08-10",
    readTime: "6 min",
    key: "post3" as const,
  },
];

export default function BlogList() {
  const t = useTranslations("blog");
  const locale = useLocale();

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 py-24 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            {t("title")}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            {t("subtitle")}
          </p>
        </motion.div>

        {/* Posts */}
        <div className="space-y-8">
          {posts.map((post, index) => (
            <motion.article
              key={post.slug}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-gray-50 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl p-8 hover:border-blue-500 dark:hover:border-blue-500 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {post.date}
                </span>
                <span className="flex items-center gap-1">
                  <Clock size={14} />
                  {post.readTime}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-200">
                {t(`${post.key}.title`)}
              </h2>

              <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
                {t(`${post.key}.excerpt`)}
              </p>

              <Link
                href={`/${locale}/blog/${post.slug}`}
                className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all duration-200"
              >
                {t("readMore")}
                <ArrowRight size={16} />
              </Link>
            </motion.article>
          ))}
        </div>

        {/* Back to home */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="mt-12 text-center"
        >
          <Link
            href={`/${locale}`}
            className="text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            ← {t("backToHome")}
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
