import { notFound } from "next/navigation";
import { getRequestConfig } from "next-intl/server";

/**
 * Configuración de internacionalización (i18n)
 * Este archivo es una alternativa simplificada de configuración para next-intl
 * Define los idiomas soportados y carga los mensajes de traducción correspondientes
 */

// Lista de idiomas soportados (español e inglés)
const locales = ["es", "en"];

/**
 * Función de configuración que se ejecuta en cada request
 * Valida el idioma solicitado y carga los mensajes de traducción
 * Si el idioma no es válido, muestra una página 404
 */
export default getRequestConfig(async ({ locale }) => {
  // Valida que el parámetro de idioma sea válido
  if (!locales.includes(locale as any)) notFound();

  return {
    // Carga dinámicamente el archivo JSON con las traducciones del idioma solicitado
    messages: (await import(`./messages/${locale}.json`)).default,
  };
});
