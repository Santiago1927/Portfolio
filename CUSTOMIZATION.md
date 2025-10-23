# 🎨 Guía de Personalización del Portafolio

## 📝 Personalizar Contenido

### 1. Información Personal

Edita `messages/es.json` y `messages/en.json` para actualizar:

- Nombre y título
- Descripción profesional
- Experiencia laboral
- Proyectos destacados
- Información de contacto

### 2. Foto de Perfil

**Opción 1: Usar una imagen real**

1. Agrega tu foto en la carpeta `public/images/`
2. Edita `components/Hero.tsx` línea ~124:

```tsx
// Reemplaza esto:
<div className="w-full h-full bg-gradient-to-br from-accent-light to-blue-600 dark:from-accent-dark dark:to-blue-400 flex items-center justify-center text-white text-8xl font-bold">
  DS
</div>

// Por esto:
<Image
  src="/images/tu-foto.jpg"
  alt="David Santiago"
  fill
  className="object-cover"
  priority
/>
```

**Opción 2: Usar imagen de URL**

```tsx
<Image
  src="https://tu-url-de-imagen.com/foto.jpg"
  alt="David Santiago"
  fill
  className="object-cover"
  priority
/>
```

### 3. Colores del Tema

Edita `tailwind.config.ts`:

```typescript
colors: {
  primary: {
    light: '#0f172a',  // Color de texto principal (modo claro)
    dark: '#e2e8f0',   // Color de texto principal (modo oscuro)
  },
  accent: {
    light: '#3b82f6',  // Color de acento (modo claro)
    dark: '#60a5fa',   // Color de acento (modo oscuro)
  },
  // Personaliza más colores aquí
}
```

### 4. Enlaces de Proyectos

Edita `components/Projects.tsx` para agregar enlaces reales:

```typescript
const projects: Project[] = [
  {
    name: t("project1.name"),
    description: t("project1.description"),
    tech: JSON.parse(t("project1.tech")),
    github: "https://github.com/tu-usuario/tu-repo", // ← Cambia esto
    demo: "https://tu-proyecto.vercel.app", // ← Cambia esto
  },
  // ...
];
```

## 🚀 Mejoras Opcionales

### 1. Agregar CV Descargable

1. Agrega tu CV en `public/cv/CV-David-Santiago.pdf`
2. Edita `components/Hero.tsx`:

```tsx
<a
  href="/cv/CV-David-Santiago.pdf"
  download
  className="inline-flex items-center space-x-2 px-6 py-3 bg-accent-light dark:bg-accent-dark text-white rounded-lg hover:opacity-90 transition-all"
>
  <FileText className="w-5 h-5" />
  <span>{t("cv")}</span>
</a>
```

### 2. Agregar Google Analytics

1. Instala el paquete:

```bash
npm install @next/third-parties
```

2. Edita `app/[locale]/layout.tsx`:

```tsx
import { GoogleAnalytics } from "@next/third-parties/google";

// Agrega antes de </body>:
<GoogleAnalytics gaId="G-TU-ID-AQUI" />;
```

### 3. Agregar Formulario de Contacto

Puedes usar servicios como:

- **Formspree** (gratis): https://formspree.io
- **EmailJS**: https://www.emailjs.com
- **Web3Forms**: https://web3forms.com

### 4. Agregar Blog (Opcional)

Crea una nueva sección de blog usando:

- **Contentlayer** para MDX
- **Sanity CMS**
- **Notion API**

### 5. Agregar Certificaciones

Crea un nuevo componente `components/Certifications.tsx`:

```tsx
"use client";

import { useTranslations } from "next-intl";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export default function Certifications() {
  const certifications = [
    {
      name: "Cambridge Academic 2024",
      issuer: "Universidad Mariana",
      date: "Septiembre 2024",
    },
    // Agrega más certificaciones
  ];

  return (
    <section id="certifications" className="py-20 px-4">
      {/* Implementa el diseño aquí */}
    </section>
  );
}
```

## 🎯 Optimizaciones

### 1. Optimizar Imágenes

Si agregas muchas imágenes, usa el componente `Image` de Next.js:

```tsx
import Image from "next/image";

<Image
  src="/ruta/imagen.jpg"
  alt="Descripción"
  width={800}
  height={600}
  quality={90}
  priority={false}
/>;
```

### 2. Lazy Loading

Para componentes pesados:

```tsx
import dynamic from "next/dynamic";

const ProjectsHeavy = dynamic(() => import("@/components/ProjectsHeavy"), {
  loading: () => <p>Cargando proyectos...</p>,
});
```

### 3. Agregar Sitemap

Crea `app/sitemap.ts`:

```typescript
import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://tu-dominio.com",
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 1,
    },
  ];
}
```

### 4. Agregar Robots.txt

Crea `app/robots.ts`:

```typescript
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: "https://tu-dominio.com/sitemap.xml",
  };
}
```

## 🌐 Despliegue

### Vercel (Más Fácil)

1. Push tu código a GitHub
2. Ve a https://vercel.com
3. Importa tu repositorio
4. ¡Listo! Tu sitio estará en línea

### Variables de Entorno

Si agregas servicios externos, crea `.env.local`:

```env
NEXT_PUBLIC_GA_ID=tu-google-analytics-id
FORMSPREE_FORM_ID=tu-formspree-id
```

## 🐛 Solución de Problemas

### Errores de TypeScript

Si ves errores de tipos, ejecuta:

```bash
npm run build
```

### Problemas con animaciones

Si las animaciones no se ven suaves:

1. Verifica que Framer Motion esté instalado
2. Asegúrate de usar `'use client'` en componentes con animaciones

### Modo oscuro no persiste

Verifica que `ThemeProvider` esté en el layout raíz con `suppressHydrationWarning` en el tag `<html>`.

## 📚 Recursos Útiles

- [Next.js Docs](https://nextjs.org/docs)
- [Tailwind CSS](https://tailwindcss.com/docs)
- [Framer Motion](https://www.framer.com/motion/)
- [next-intl](https://next-intl-docs.vercel.app/)
- [Lucide Icons](https://lucide.dev/)

---

¿Necesitas ayuda? Revisa la documentación o abre un issue en GitHub.
