import createMiddleware from "next-intl/middleware";

/**
 * Middleware de internacionalización (i18n)
 * Maneja automáticamente el enrutamiento basado en el idioma del usuario
 * Características:
 * - Detecta el idioma preferido del usuario
 * - Redirige a la versión correcta del sitio según el idioma
 * - Mantiene el prefijo de idioma en todas las URLs
 * - Usa español (es) como idioma predeterminado
 */
export default createMiddleware({
  // Lista de todos los idiomas soportados por la aplicación
  locales: ["es", "en"],

  // Idioma utilizado cuando ninguno coincide o no se puede detectar
  defaultLocale: "es",

  // Asegura que siempre haya un prefijo de idioma en la URL (/es o /en)
  localePrefix: "always",
});

/**
 * Configuración del matcher del middleware
 * Define qué rutas deben ser procesadas por este middleware
 * - "/" : La ruta raíz
 * - "/(es|en)/:path*" : Todas las rutas que comiencen con /es o /en
 */
export const config = {
  // Coincide solo con rutas internacionalizadas
  matcher: ["/", "/(es|en)/:path*"],
};
