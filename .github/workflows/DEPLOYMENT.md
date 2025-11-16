# 🚀 Guía de Deployment

Esta guía te ayudará a publicar tu aplicación en diferentes plataformas.

## GitHub Pages

### Opción 1: Usando GitHub Actions (Recomendado)

1. **Configura el repositorio**:
   - Ve a Settings → Pages
   - En "Source", selecciona "GitHub Actions"

2. **Crea el archivo de workflow**:

Crea `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]
  workflow_dispatch:

permissions:
  contents: read
  pages: write
  id-token: write

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      
      - name: Setup Node.js
        uses: actions/setup-node@v4
        with:
          node-version: '18'
          
      - name: Install dependencies
        run: npm install
        
      - name: Build
        run: npm run build
        
      - name: Setup Pages
        uses: actions/configure-pages@v4
        
      - name: Upload artifact
        uses: actions/upload-pages-artifact@v3
        with:
          path: './dist'
          
      - name: Deploy to GitHub Pages
        id: deployment
        uses: actions/deploy-pages@v4
```

3. **Actualiza vite.config.ts**:

```typescript
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/nombre-de-tu-repositorio/', // Importante!
})
```

4. **Push y Deploy**:
```bash
git add .
git commit -m "Setup GitHub Pages deployment"
git push origin main
```

Tu aplicación estará disponible en: `https://tu-usuario.github.io/nombre-repositorio/`

### Opción 2: Manual con gh-pages

1. **Instala gh-pages**:
```bash
npm install --save-dev gh-pages
```

2. **Agrega scripts a package.json**:
```json
{
  "scripts": {
    "predeploy": "npm run build",
    "deploy": "gh-pages -d dist"
  }
}
```

3. **Configura base en vite.config.ts** (igual que arriba)

4. **Deploy**:
```bash
npm run deploy
```

---

## Vercel

1. **Instala Vercel CLI**:
```bash
npm i -g vercel
```

2. **Login**:
```bash
vercel login
```

3. **Deploy**:
```bash
vercel
```

4. **Para producción**:
```bash
vercel --prod
```

**O usa la interfaz web**:
1. Ve a [vercel.com](https://vercel.com)
2. Conecta tu repositorio de GitHub
3. Vercel detectará automáticamente la configuración
4. Click en "Deploy"

---

## Netlify

### Opción 1: Drag & Drop

1. Build local:
```bash
npm run build
```

2. Ve a [netlify.com](https://netlify.com)
3. Arrastra la carpeta `dist` a Netlify

### Opción 2: Git Integration

1. Ve a [netlify.com](https://netlify.com)
2. "Add new site" → "Import an existing project"
3. Conecta tu repositorio de GitHub
4. Configuración:
   - Build command: `npm run build`
   - Publish directory: `dist`
5. Click "Deploy"

---

## Railway

1. Ve a [railway.app](https://railway.app)
2. "New Project" → "Deploy from GitHub repo"
3. Selecciona tu repositorio
4. Railway detectará automáticamente que es una app Vite
5. Deploy automático

---

## Render

1. Ve a [render.com](https://render.com)
2. "New" → "Static Site"
3. Conecta tu repositorio
4. Configuración:
   - Build Command: `npm install && npm run build`
   - Publish Directory: `dist`
5. "Create Static Site"

---

## Configuraciones Adicionales

### Para rutas con React Router

Si en el futuro agregas React Router, necesitarás configurar redirects:

**Netlify** - Crea `public/_redirects`:
```
/*    /index.html   200
```

**Vercel** - Crea `vercel.json`:
```json
{
  "rewrites": [{ "source": "/(.*)", "destination": "/index.html" }]
}
```

### Variables de Entorno

Si necesitas variables de entorno:

1. Crea `.env`:
```
VITE_API_URL=https://api.ejemplo.com
```

2. Úsalas en el código:
```typescript
const apiUrl = import.meta.env.VITE_API_URL;
```

3. Configúralas en tu plataforma de deployment

---

## Verificación Post-Deployment

✅ La aplicación carga correctamente
✅ Todos los ejercicios funcionan
✅ Los simuladores responden
✅ La navegación funciona
✅ Responsive en móvil
✅ No hay errores en la consola

---

## Troubleshooting

### Problema: 404 en rutas
**Solución**: Configura redirects (ver arriba)

### Problema: Estilos no se cargan
**Solución**: Verifica la configuración de `base` en `vite.config.ts`

### Problema: Imágenes no cargan
**Solución**: Usa rutas relativas o importa las imágenes

### Problema: Build falla
**Solución**: Verifica que `npm run build` funcione localmente

---

## Recomendaciones

- **GitHub Pages**: Gratis, ideal para proyectos educativos
- **Vercel**: Muy rápido, excelente para React
- **Netlify**: Fácil de usar, buenos features gratuitos
- **Railway/Render**: Buenos para aplicaciones full-stack

Para este proyecto educativo, **GitHub Pages** o **Vercel** son las mejores opciones.
