import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { Inter, Space_Grotesk } from "next/font/google";
import { locales } from "@/i18n/request";
import "../globals.css";

// Configuración de las fuentes profesionales de Google Fonts
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-space-grotesk",
  display: "swap",
});

/**
 * Genera parámetros estáticos para todas las locales soportadas
 * Esto permite la generación estática de páginas para cada idioma durante el build
 * @returns Array de objetos con cada locale disponible
 */
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

/**
 * Layout principal para páginas localizadas
 * Maneja la internacionalización (i18n) y el tema (claro/oscuro) de la aplicación
 * Envuelve todo el contenido con los providers necesarios para:
 * - Cambio de idioma (next-intl)
 * - Cambio de tema claro/oscuro (next-themes)
 */
export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  // Habilita el renderizado estático para la locale actual
  setRequestLocale(locale);

  // Obtiene los mensajes de traducción para el idioma actual
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        {/* Provider de tema con tema oscuro por defecto y soporte para tema del sistema */}
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {/* Provider de internacionalización con los mensajes del idioma actual */}
          <NextIntlClientProvider messages={messages}>
            {children}
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
