"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Moon, Sun, Menu, X } from "lucide-react";

/**
 * Componente de barra de navegación profesional
 * Proporciona navegación entre secciones, cambio de idioma y cambio de tema
 * Características mejoradas:
 * - Glassmorphism con backdrop blur
 * - Animaciones suaves y micro-interacciones
 * - Diseño responsivo con menú hamburguesa
 * - Efecto de elevación al hacer scroll
 */
export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);

    // Detectar scroll para añadir efecto de elevación
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const currentLocale = pathname.split("/")[1] || "es";

  const switchLocale = () => {
    const newLocale = currentLocale === "es" ? "en" : "es";
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLocale}`);
    router.push(newPath);
  };

  const navItems = [
    { name: t("about"), href: "#about" },
    { name: t("experience"), href: "#experience" },
    { name: t("projects"), href: "#projects" },
    { name: t("contact"), href: "#contact" },
  ];

  const scrollToSection = (href: string, external: boolean = false) => {
    if (external) {
      router.push(href);
      setIsMenuOpen(false);
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md z-50 border-b border-gray-200/50 dark:border-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-display font-bold bg-gradient-to-r from-accent-500 to-purple-500 bg-clip-text text-transparent">
              DS
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background-light/90 dark:bg-background-dark/90 backdrop-blur-xl shadow-lg shadow-accent-500/5"
          : "bg-background-light/70 dark:bg-background-dark/70 backdrop-blur-md"
      } border-b border-gray-200/50 dark:border-gray-800/50`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo con gradiente */}
          <button
            onClick={() => scrollToSection("#hero")}
            className="text-2xl font-display font-bold bg-gradient-to-r from-accent-500 via-purple-500 to-pink-500 bg-clip-text text-transparent hover:scale-110 transition-transform duration-300"
          >
            DS
          </button>

          {/* Navegación de escritorio */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 text-sm font-medium text-primary-light dark:text-primary-dark hover:text-accent-500 dark:hover:text-accent-400 transition-all duration-200 group"
              >
                {item.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-500 to-purple-500 group-hover:w-full transition-all duration-300"></span>
              </button>
            ))}

            {/* Botón de idioma mejorado */}
            <button
              onClick={switchLocale}
              className="ml-2 flex items-center space-x-2 px-4 py-2 rounded-lg bg-surface-light dark:bg-surface-dark hover:bg-accent-500/10 dark:hover:bg-accent-400/10 border border-gray-200 dark:border-gray-700 hover:border-accent-500 dark:hover:border-accent-400 transition-all duration-200 hover:scale-105"
              aria-label={
                currentLocale === "es"
                  ? "Switch to English"
                  : "Cambiar a Español"
              }
            >
              <span className="text-lg">
                {currentLocale === "es" ? "🇪🇸" : "🇬🇧"}
              </span>
              <span className="text-sm font-medium text-primary-light dark:text-primary-dark">
                {currentLocale === "es" ? "ES" : "EN"}
              </span>
            </button>

            {/* Botón de tema mejorado */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="ml-1 p-2 rounded-lg bg-surface-light/50 dark:bg-surface-dark/50 hover:bg-accent-500/10 dark:hover:bg-accent-400/10 border border-gray-200/50 dark:border-gray-700/50 transition-all duration-200 hover:scale-105 hover:rotate-12"
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-accent-600" />
              )}
            </button>
          </div>

          {/* Controles móviles */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={switchLocale}
              className="p-2 rounded-lg bg-surface-light/50 dark:bg-surface-dark/50 border border-gray-200/50 dark:border-gray-700/50"
              aria-label="Cambiar idioma"
            >
              <span className="text-sm">
                {currentLocale === "es" ? "🇪🇸" : "🇬🇧"}
              </span>
            </button>

            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-surface-light/50 dark:bg-surface-dark/50 border border-gray-200/50 dark:border-gray-700/50"
              aria-label="Cambiar tema"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-accent-600" />
              )}
            </button>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-surface-light/50 dark:bg-surface-dark/50 border border-gray-200/50 dark:border-gray-700/50 transition-transform duration-200 hover:scale-105"
              aria-label="Menú"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6 text-primary-light dark:text-primary-dark" />
              ) : (
                <Menu className="w-6 h-6 text-primary-light dark:text-primary-dark" />
              )}
            </button>
          </div>
        </div>

        {/* Menú móvil mejorado */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-1 animate-fade-in-down">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-3 rounded-lg text-primary-light dark:text-primary-dark hover:bg-accent-500/10 dark:hover:bg-accent-400/10 hover:text-accent-500 dark:hover:text-accent-400 transition-all duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
}
