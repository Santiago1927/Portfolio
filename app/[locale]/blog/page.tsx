import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import BlogList from "@/components/BlogList";

type Props = {
  params: { locale: string };
};

export const metadata: Metadata = {
  title: "Blog - David Santiago Andrade",
  description:
    "Articles about web development, React, Next.js, and modern technologies.",
};

export default function BlogPage({ params: { locale } }: Props) {
  setRequestLocale(locale);

  return <BlogList />;
}
