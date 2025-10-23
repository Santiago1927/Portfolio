"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";
import { useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import { Moon, Sun, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mounted, setMounted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { theme, setTheme } = useTheme();
  const t = useTranslations("nav");
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
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

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  if (!mounted) {
    return (
      <nav className="fixed top-0 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-accent-light dark:text-accent-dark">
              DS
            </div>
          </div>
        </div>
      </nav>
    );
  }

  return (
    <nav className="fixed top-0 w-full bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-sm z-50 border-b border-gray-200 dark:border-gray-800 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="text-2xl font-bold text-accent-light dark:text-accent-dark cursor-pointer hover:scale-110 transition-transform">
            DS
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="text-primary-light dark:text-primary-dark hover:text-accent-light dark:hover:text-accent-dark transition-colors duration-200 font-medium"
              >
                {item.name}
              </button>
            ))}

            {/* Language Switch */}
            <button
              onClick={switchLocale}
              className="flex items-center space-x-2 px-3 py-1.5 rounded-lg bg-surface-light dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
            >
              <span className="text-sm font-medium">
                {currentLocale === "es" ? "🇪🇸" : "🇬🇧"}
              </span>
            </button>

            {/* Theme Toggle */}
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-surface-light dark:bg-surface-dark hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-2">
            <button
              onClick={switchLocale}
              className="p-2 rounded-lg bg-surface-light dark:bg-surface-dark"
            >
              <span className="text-sm">
                {currentLocale === "es" ? "🇪🇸" : "🇬🇧"}
              </span>
            </button>
            <button
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
              className="p-2 rounded-lg bg-surface-light dark:bg-surface-dark"
            >
              {theme === "dark" ? (
                <Sun className="w-5 h-5 text-yellow-500" />
              ) : (
                <Moon className="w-5 h-5 text-blue-600" />
              )}
            </button>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 rounded-lg bg-surface-light dark:bg-surface-dark"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in">
            {navItems.map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                className="block w-full text-left px-4 py-2 rounded-lg text-primary-light dark:text-primary-dark hover:bg-surface-light dark:hover:bg-surface-dark transition-colors"
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
