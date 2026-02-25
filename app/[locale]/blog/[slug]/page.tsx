import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import BlogPost from "@/components/BlogPost";

type Props = {
  params: { locale: string; slug: string };
};

// Generar metadata dinámica para SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  return {
    title: `${params.slug} - Blog - David Santiago Andrade`,
    description: "Article about web development and modern technologies.",
  };
}

// Generar rutas estáticas para cada artículo
export function generateStaticParams() {
  return [
    { slug: "react-best-practices-2024" },
    { slug: "nextjs-performance-optimization" },
    { slug: "typescript-tips-tricks" },
  ];
}

export default function BlogPostPage({ params: { locale, slug } }: Props) {
  setRequestLocale(locale);

  const validSlugs = [
    "react-best-practices-2024",
    "nextjs-performance-optimization",
    "typescript-tips-tricks",
  ];
  if (!validSlugs.includes(slug)) {
    notFound();
  }

  return <BlogPost slug={slug} />;
}
