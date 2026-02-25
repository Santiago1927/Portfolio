"use client";

import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowLeft, Calendar, Clock, Share2 } from "lucide-react";

const postMeta: Record<
  string,
  { date: string; readTime: string; key: "post1" | "post2" | "post3" }
> = {
  "react-best-practices-2024": {
    date: "2024-06-15",
    readTime: "5 min",
    key: "post1",
  },
  "nextjs-performance-optimization": {
    date: "2024-07-20",
    readTime: "7 min",
    key: "post2",
  },
  "typescript-tips-tricks": {
    date: "2024-08-10",
    readTime: "6 min",
    key: "post3",
  },
};

interface BlogPostProps {
  slug: string;
}

export default function BlogPost({ slug }: BlogPostProps) {
  const t = useTranslations("blog");
  const locale = useLocale();

  const meta = postMeta[slug];
  if (!meta) return null;

  const content = t(`${meta.key}.content`);

  return (
    <main className="min-h-screen bg-white dark:bg-gray-950 py-24 px-4">
      <div className="max-w-3xl mx-auto">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-8"
        >
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
          >
            <ArrowLeft size={16} />
            {t("backToBlog")}
          </Link>
        </motion.div>

        {/* Article */}
        <motion.article
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          {/* Meta */}
          <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400 mb-6">
            <span className="flex items-center gap-1">
              <Calendar size={14} />
              {meta.date}
            </span>
            <span className="flex items-center gap-1">
              <Clock size={14} />
              {meta.readTime}
            </span>
          </div>

          {/* Title */}
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6 leading-tight">
            {t(`${meta.key}.title`)}
          </h1>

          {/* Excerpt */}
          <p className="text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed border-l-4 border-blue-500 pl-5">
            {t(`${meta.key}.excerpt`)}
          </p>

          {/* Content */}
          <div className="prose prose-gray dark:prose-invert max-w-none">
            {content.split("\n\n").map((paragraph, i) => (
              <p
                key={i}
                className="text-gray-700 dark:text-gray-300 leading-relaxed mb-6"
              >
                {paragraph}
              </p>
            ))}
          </div>
        </motion.article>

        {/* Share */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-800"
        >
          <div className="flex items-center gap-3 text-gray-500 dark:text-gray-400">
            <Share2 size={18} />
            <span className="text-sm">{t("shareArticle")}</span>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
