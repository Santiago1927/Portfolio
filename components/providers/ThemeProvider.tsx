"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

/**
 * Componente Provider de tema
 * Envuelve la aplicación con el contexto de tema de next-themes
 * Permite cambiar entre tema claro y oscuro en toda la aplicación
 *
 * @param children - Componentes hijos que tendrán acceso al contexto de tema
 * @param props - Propiedades adicionales para configurar el proveedor de tema
 * @returns Provider configurado con los temas
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
}
