# 💻 Comandos Útiles para Desarrollo

## 📦 Gestión de Paquetes

```bash
# Instalar todas las dependencias
npm install

# Agregar una nueva dependencia
npm install nombre-paquete

# Agregar dependencia de desarrollo
npm install -D nombre-paquete

# Actualizar dependencias
npm update

# Auditar seguridad
npm audit
npm audit fix
```

## 🚀 Desarrollo

```bash
# Iniciar servidor de desarrollo
npm run dev

# Compilar para producción
npm run build

# Iniciar servidor de producción
npm start

# Linter
npm run lint

# Limpiar caché de Next.js
rd /s /q .next

# Reinstalar node_modules
rd /s /q node_modules
npm install
```

## 🎨 Tailwind CSS

```bash
# Generar archivo de configuración de Tailwind
npx tailwindcss init -p

# Ver todas las clases disponibles
npx tailwindcss --help
```

## 🔍 Depuración

```bash
# Verificar errores de TypeScript
npx tsc --noEmit

# Analizar bundle size
npm run build
# Luego instala y usa:
npm install -D @next/bundle-analyzer
```

## 🌐 Git

```bash
# Ver estado
git status

# Agregar archivos
git add .

# Commit
git commit -m "mensaje descriptivo"

# Push a GitHub
git push origin main

# Pull cambios
git pull origin main

# Crear nueva rama
git checkout -b nombre-rama

# Cambiar de rama
git checkout nombre-rama

# Ver historial
git log --oneline
```

## 📱 Testing Local en Diferentes Dispositivos

```bash
# Ver la IP local de tu computadora
ipconfig

# Luego en tu dispositivo móvil, navega a:
# http://[TU-IP-LOCAL]:3000
# Ejemplo: http://192.168.1.10:3000
```

## 🚀 Despliegue

### Vercel

```bash
# Instalar Vercel CLI
npm i -g vercel

# Deploy
vercel

# Deploy a producción
vercel --prod
```

### Netlify

```bash
# Instalar Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy

# Deploy a producción
netlify deploy --prod
```

## 📊 Análisis de Performance

```bash
# Lighthouse (en Chrome DevTools)
# F12 > Lighthouse > Analyze page load

# O instala lighthouse CLI
npm install -g lighthouse
lighthouse http://localhost:3000
```

## 🔧 Solución Rápida de Problemas

```bash
# Si el puerto 3000 está ocupado
netstat -ano | findstr :3000
# Luego mata el proceso:
taskkill /PID [NUMERO_PID] /F

# Limpiar todo y empezar de cero
rd /s /q .next
rd /s /q node_modules
del package-lock.json
npm install
npm run dev
```

## 📝 Scripts Personalizados Útiles

Agrega estos scripts a `package.json`:

```json
"scripts": {
  "dev": "next dev",
  "build": "next build",
  "start": "next start",
  "lint": "next lint",
  "clean": "rd /s /q .next",
  "fresh": "rd /s /q .next && rd /s /q node_modules && npm install",
  "type-check": "tsc --noEmit"
}
```

Uso:

```bash
npm run clean
npm run fresh
npm run type-check
```

## 🎯 Atajos de VS Code

- `Ctrl + P` - Buscar archivo
- `Ctrl + Shift + P` - Paleta de comandos
- `Ctrl + B` - Toggle sidebar
- `Ctrl + J` - Toggle terminal
- `Ctrl + /` - Comentar línea
- `Alt + Shift + F` - Formatear documento
- `F2` - Renombrar símbolo
- `Ctrl + D` - Seleccionar siguiente ocurrencia

## 📦 Paquetes Útiles Adicionales

```bash
# Icons adicionales
npm install @heroicons/react

# Animaciones
npm install react-spring

# Formularios
npm install react-hook-form
npm install zod

# Estado global
npm install zustand

# Dates
npm install date-fns
```

---

💡 **Tip**: Guarda estos comandos como snippet en VS Code para acceso rápido.
