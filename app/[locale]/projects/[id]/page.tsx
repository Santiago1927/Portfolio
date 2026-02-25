import { Metadata } from "next";
import { setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import ProjectDetail from "@/components/ProjectDetail";

type Props = {
  params: { locale: string; id: string };
};

// Generar metadata dinámica para SEO
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const projectTitles: Record<string, string> = {
    realhaus: "Real Estate Management System - David Santiago Andrade",
    lacteosdonjuan: "E-commerce Lacteos Don Juan - David Santiago Andrade",
    reportes: "Automated Reporting System - David Santiago Andrade",
  };

  return {
    title: projectTitles[params.id] || "Project - David Santiago Andrade",
    description:
      "Detailed view of project implementation, challenges, and results.",
  };
}

// Generar rutas estáticas para cada proyecto
export function generateStaticParams() {
  return [{ id: "realhaus" }, { id: "lacteosdonjuan" }, { id: "reportes" }];
}

export default function ProjectPage({ params: { locale, id } }: Props) {
  setRequestLocale(locale);

  // Validar que el proyecto existe
  const validProjects = ["realhaus", "lacteosdonjuan", "reportes"];
  if (!validProjects.includes(id)) {
    notFound();
  }

  return <ProjectDetail projectId={id} />;
}
