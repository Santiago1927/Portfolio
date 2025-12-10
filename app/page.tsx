import { redirect } from "next/navigation";

/**
 * Página raíz del portfolio
 * Redirige automáticamente a la versión en español (/es)
 * Esta es la página de entrada principal de la aplicación
 */
export default function RootPage() {
  // Redirección automática al idioma español como predeterminado
  redirect("/es");
}
