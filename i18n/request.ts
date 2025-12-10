import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

/**
 * Configuración principal de internacionalización
 * Define los idiomas soportados y exporta tipos para TypeScript
 */

// Array constante con los idiomas soportados
export const locales = ["es", "en"] as const;

// Tipo TypeScript derivado del array de locales para mayor seguridad de tipos
export type Locale = (typeof locales)[number];

/**
 * Configuración de request para next-intl
 * Se ejecuta en cada solicitud para validar el idioma y cargar las traducciones
 *
 * @param requestLocale - El idioma solicitado por el usuario
 * @returns Configuración con el idioma validado y los mensajes de traducción
 */
export default getRequestConfig(async ({ requestLocale }) => {
  // Espera la resolución del idioma solicitado
  let locale = await requestLocale;

  // Valida que el idioma solicitado sea uno de los soportados
  // Si no es válido, redirige a la página 404
  if (!locale || !locales.includes(locale as Locale)) {
    notFound();
  }

  return {
    locale,
    // Carga dinámicamente el archivo JSON de traducciones correspondiente al idioma
    messages: (await import(`../messages/${locale}.json`)).default,
  };
});
