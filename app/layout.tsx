/**
 * Layout raíz de la aplicación
 * Este layout es el contenedor principal que envuelve toda la aplicación.
 * Simplemente retorna los hijos sin agregar estructura adicional,
 * ya que la estructura real se maneja en el layout de locale.
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
