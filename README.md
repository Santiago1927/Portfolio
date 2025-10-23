# 🚀 Portafolio David Santiago Andrade Santacruz

Portafolio profesional moderno construido con Next.js 14, React, TypeScript y Tailwind CSS.

## ✨ Características

- ⚡ **Next.js 14** con App Router
- 🎨 **Tailwind CSS** para estilos modernos y responsivos
- 🌓 **Modo oscuro/claro** con persistencia (next-themes)
- 🌐 **Multilenguaje** (Español/Inglés) con next-intl
- ✨ **Animaciones suaves** con Framer Motion
- 📱 **Diseño totalmente responsive**
- 🎯 **SEO optimizado**
- 💼 **Secciones profesionales**: Hero, Acerca de, Experiencia, Proyectos, Contacto

## 🛠️ Tecnologías

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- Framer Motion
- next-intl
- next-themes
- Lucide React (iconos)

## 📦 Instalación

1. **Clonar el repositorio**

```bash
git clone https://github.com/Santiago1927/Portfolio.git
cd Portfolio
```

2. **Instalar dependencias**

```bash
npm install
```

3. **Ejecutar en desarrollo**

```bash
npm run dev
```

4. **Abrir en el navegador**

```
http://localhost:3000
```

## 🚀 Compilación para producción

```bash
npm run build
npm start
```

## 📁 Estructura del proyecto

```
Portfolio/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx       # Layout con providers
│   │   └── page.tsx          # Página principal
│   └── globals.css           # Estilos globales
├── components/
│   ├── providers/
│   │   └── ThemeProvider.tsx # Provider de temas
│   ├── Navbar.tsx            # Navegación
│   ├── Hero.tsx              # Sección hero
│   ├── About.tsx             # Acerca de
│   ├── Experience.tsx        # Experiencia laboral
│   ├── Projects.tsx          # Proyectos
│   ├── Contact.tsx           # Contacto
│   └── Footer.tsx            # Footer
├── messages/
│   ├── es.json               # Traducciones en español
│   └── en.json               # Traducciones en inglés
├── i18n.ts                   # Configuración i18n
├── middleware.ts             # Middleware de Next.js
└── tailwind.config.ts        # Configuración de Tailwind

```

## 🎨 Personalización

### Colores

Edita `tailwind.config.ts` para cambiar los colores del tema:

```typescript
colors: {
  primary: {
    light: '#0f172a',
    dark: '#e2e8f0',
  },
  accent: {
    light: '#3b82f6',
    dark: '#60a5fa',
  },
  // ...
}
```

### Contenido

Edita los archivos en `/messages` para cambiar el contenido en español e inglés.

### Imágenes

Reemplaza el placeholder en `Hero.tsx` con tu foto de perfil.

## 🌐 Deployment

### Vercel (Recomendado)

1. Sube tu código a GitHub
2. Importa el proyecto en [Vercel](https://vercel.com)
3. Vercel detectará automáticamente Next.js y lo desplegará

### Otras plataformas

El proyecto es compatible con:

- Netlify
- Railway
- AWS Amplify
- Render

## 📧 Contacto

- **Email**: davidandradesantacruz9.3@gmail.com
- **Teléfono**: (+57) 3215028605
- **GitHub**: [Santiago1927](https://github.com/Santiago1927)
- **LinkedIn**: [David Santiago Andrade Santacruz](https://www.linkedin.com/in/david-santiago-andrade-santacruz-60aa60208/)
- **Ubicación**: Pasto, Nariño, Colombia

## 📄 Licencia

© 2025 David Santiago Andrade Santacruz. Todos los derechos reservados.

---

Construido con ❤️ usando Next.js, React y Tailwind CSS
