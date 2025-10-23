# 🚀 Guía de Despliegue (Deployment)

## 🌟 Opción 1: Vercel (Recomendado - Más Fácil)

Vercel es la plataforma oficial de Next.js y ofrece deployment automático.

### Pasos:

1. **Crear cuenta en Vercel**

   - Ve a https://vercel.com
   - Regístrate con tu cuenta de GitHub

2. **Push tu código a GitHub**

   ```bash
   git add .
   git commit -m "feat: portafolio completo"
   git push origin main
   ```

3. **Importar proyecto en Vercel**

   - Click en "Add New Project"
   - Selecciona el repositorio "Portfolio"
   - Vercel detectará automáticamente Next.js
   - Click en "Deploy"

4. **¡Listo! Tu sitio estará en línea**
   - URL: `https://tu-proyecto.vercel.app`
   - Deployment automático en cada push

### Configuración adicional:

```bash
# Instalar Vercel CLI (opcional)
npm i -g vercel

# Deploy desde la terminal
vercel

# Deploy a producción
vercel --prod
```

### Dominio personalizado:

- Ve a Settings > Domains
- Agrega tu dominio (.com, .dev, etc.)
- Configura DNS según instrucciones

---

## 🚀 Opción 2: Netlify

### Pasos:

1. **Crear cuenta en Netlify**

   - Ve a https://netlify.com
   - Regístrate con GitHub

2. **Conectar repositorio**

   - Click en "Add new site"
   - "Import an existing project"
   - Selecciona tu repo

3. **Configuración de build**

   ```
   Build command: npm run build
   Publish directory: .next
   ```

4. **Deploy**
   - Click en "Deploy site"
   - Tu sitio estará en: `https://tu-sitio.netlify.app`

### Netlify CLI:

```bash
npm i -g netlify-cli
netlify login
netlify init
netlify deploy --prod
```

---

## ☁️ Opción 3: Railway

Railway ofrece hosting gratuito con base de datos si la necesitas.

### Pasos:

1. **Crear cuenta en Railway**

   - Ve a https://railway.app
   - Regístrate con GitHub

2. **Crear nuevo proyecto**

   - Click en "New Project"
   - "Deploy from GitHub repo"
   - Selecciona "Portfolio"

3. **Configuración automática**
   - Railway detecta Next.js automáticamente
   - Tu sitio estará disponible en pocos minutos

---

## 🐳 Opción 4: Docker (Para cualquier plataforma)

### Crear Dockerfile:

```dockerfile
# Archivo: Dockerfile
FROM node:18-alpine AS base

# Install dependencies only when needed
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

COPY package.json package-lock.json* ./
RUN npm ci

# Rebuild the source code only when needed
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

RUN npm run build

# Production image
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]
```

### Crear .dockerignore:

```
node_modules
.next
.git
*.md
.env*.local
```

### Comandos Docker:

```bash
# Build image
docker build -t portfolio .

# Run container
docker run -p 3000:3000 portfolio

# Ver en: http://localhost:3000
```

---

## 🌐 Opción 5: GitHub Pages (Solo para sitios estáticos)

**Nota**: Next.js con App Router no es ideal para GitHub Pages. Mejor usa Vercel.

Si insistes:

1. Configura `output: 'export'` en `next.config.mjs`
2. Usa `npm run build`
3. Deploy la carpeta `out`

---

## ⚙️ Variables de Entorno

Si usas servicios externos, configura variables de entorno:

### En Vercel:

1. Ve a Settings > Environment Variables
2. Agrega:
   ```
   NEXT_PUBLIC_GA_ID=tu-google-analytics-id
   ```

### En Netlify:

1. Site settings > Environment variables
2. Agrega tus variables

### Localmente:

Crea `.env.local`:

```env
NEXT_PUBLIC_GA_ID=tu-id
NEXT_PUBLIC_FORMSPREE_ID=tu-id
```

---

## 📊 Monitoreo y Analytics

### Google Analytics

1. **Instalar paquete**:

   ```bash
   npm install @next/third-parties
   ```

2. **Agregar en layout.tsx**:

   ```tsx
   import { GoogleAnalytics } from "@next/third-parties/google";

   <GoogleAnalytics gaId="G-TU-ID" />;
   ```

### Vercel Analytics

1. **Instalar**:

   ```bash
   npm install @vercel/analytics
   ```

2. **Agregar en layout.tsx**:

   ```tsx
   import { Analytics } from "@vercel/analytics/react";

   <Analytics />;
   ```

---

## 🔒 Seguridad

### Headers de Seguridad

Agrega en `next.config.mjs`:

```javascript
const nextConfig = {
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
        ],
      },
    ];
  },
};
```

---

## 🎯 Optimización Pre-Deploy

### Checklist:

- [ ] Probar en producción local: `npm run build && npm start`
- [ ] Verificar todas las imágenes están optimizadas
- [ ] Revisar que no hay console.logs
- [ ] Probar en diferentes navegadores
- [ ] Probar en móvil
- [ ] Verificar lighthouse score (>90)
- [ ] Revisar SEO (meta tags, sitemap)
- [ ] Configurar robots.txt
- [ ] Agregar favicon
- [ ] Probar modo oscuro/claro
- [ ] Probar cambio de idioma

---

## 📱 Testing en Producción

Una vez deployado:

1. **Lighthouse Test**:

   - Abre Chrome DevTools (F12)
   - Tab "Lighthouse"
   - Run audit
   - Objetivo: >90 en todo

2. **Mobile Test**:

   - https://search.google.com/test/mobile-friendly
   - Ingresa tu URL

3. **Speed Test**:

   - https://pagespeed.web.dev/
   - Analiza tu sitio

4. **SEO Check**:
   - https://www.seobility.net/en/seocheck/
   - Verifica SEO

---

## 🔄 CI/CD Automático

### Con GitHub Actions:

Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: 18
      - run: npm ci
      - run: npm run build
```

---

## 🆘 Troubleshooting

### Error: Build failed

```bash
# Probar build localmente
npm run build

# Ver logs detallados
npm run build -- --debug
```

### Error: Environment variables

- Asegúrate de agregar TODAS las env vars en la plataforma
- Usa `NEXT_PUBLIC_` para variables del cliente

### Error: Images not loading

- Verifica que la ruta sea correcta
- Usa `/` al inicio de rutas absolutas
- Configura `domains` en `next.config.mjs`

---

## 📈 Post-Deploy

### 1. Compartir tu portafolio:

- ✅ Actualiza tu LinkedIn
- ✅ Agrega link en GitHub profile
- ✅ Comparte en Twitter/X
- ✅ Incluye en tu CV

### 2. Monitorear:

- Revisa analytics semanalmente
- Actualiza contenido mensualmente
- Agrega nuevos proyectos

### 3. Mantener:

- Actualiza dependencias: `npm update`
- Revisa seguridad: `npm audit`
- Backup regular del código

---

## 🎉 ¡Tu portafolio está en línea!

**URLs de ejemplo**:

- Vercel: `https://portfolio-david-santiago.vercel.app`
- Netlify: `https://david-santiago-portfolio.netlify.app`
- Railway: `https://portfolio-production-abc.up.railway.app`

**Dominio personalizado**:

- `https://davidsantiago.dev`
- `https://davidandrade.com`

---

## 📞 Soporte

Si tienes problemas con el deployment:

1. Revisa la documentación oficial:

   - [Vercel Docs](https://vercel.com/docs)
   - [Netlify Docs](https://docs.netlify.com/)
   - [Railway Docs](https://docs.railway.app/)

2. Busca el error en:

   - [Stack Overflow](https://stackoverflow.com)
   - [Next.js Discussions](https://github.com/vercel/next.js/discussions)

3. Logs de deployment:
   - Revisa los logs en la plataforma
   - Busca el error específico

---

**¡Éxito con tu deployment! 🚀**
