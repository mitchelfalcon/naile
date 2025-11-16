# ⚡ Quick Start Guide

Guía rápida para empezar a usar el proyecto en menos de 5 minutos.

## 🚀 Instalación Rápida

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/tutorial-cpp-estructuras.git
cd tutorial-cpp-estructuras

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev

# 4. Abrir en el navegador
# La aplicación estará en http://localhost:5173
```

## 📦 Comandos Disponibles

```bash
# Desarrollo
npm run dev          # Inicia servidor de desarrollo

# Producción
npm run build        # Construye la aplicación para producción
npm run preview      # Previsualiza el build de producción

# Limpieza
rm -rf node_modules  # Elimina dependencias
npm install          # Reinstala dependencias
```

## 🎯 Estructura del Proyecto

```
tutorial-cpp-estructuras/
├── components/          # Componentes React
│   ├── ui/             # Componentes shadcn/ui
│   ├── Home.tsx        # Página principal
│   ├── Exercise1.tsx   # Ejercicio 1
│   ├── Exercise2.tsx   # Ejercicio 2
│   ├── Exercise3.tsx   # Ejercicio 3
│   ├── Exercise4.tsx   # Ejercicio 4
│   └── Tutorial.tsx    # Tutorial completo
├── styles/             # Estilos CSS
├── App.tsx             # Componente raíz
├── README.md           # Documentación principal
├── CODIGO_CPP.md       # Código C++ completo
├── DEPLOYMENT.md       # Guía de deployment
└── CONTRIBUTING.md     # Guía de contribución
```

## 🎓 Uso de la Aplicación

### Para Estudiantes

1. **Página Principal**: Ve la lista de ejercicios disponibles
2. **Selecciona un Ejercicio**: Click en "Practicar"
3. **Usa el Simulador**: Ingresa valores y ve los resultados en tiempo real
4. **Revisa el Código**: Estudia el código C++ comentado
5. **Lee las Explicaciones**: Entiende los conceptos clave

### Para Profesores

1. **Comparte el Link**: Los estudiantes pueden acceder directamente
2. **Usa en Clase**: Proyecta la aplicación para demostrar conceptos
3. **Asigna Ejercicios**: Los estudiantes pueden practicar en casa
4. **Descarga el Código**: Todos los archivos .cpp están en `CODIGO_CPP.md`

## 🔧 Personalización Rápida

### Cambiar Colores

Edita `/styles/globals.css`:

```css
:root {
  --primary: 220 100% 50%;  /* Azul por defecto */
  --secondary: 280 100% 50%; /* Púrpura por defecto */
}
```

### Agregar un Ejercicio

1. Crea `/components/ExerciseN.tsx`
2. Actualiza `/components/Home.tsx` (array exercises)
3. Actualiza `/App.tsx` (import y case)
4. Documenta en `/CODIGO_CPP.md`

Ver [CONTRIBUTING.md](CONTRIBUTING.md) para más detalles.

### Cambiar el Título

Edita `/App.tsx`:

```tsx
<h1>Tu Título Personalizado</h1>
```

## 🌐 Deploy Rápido

### GitHub Pages (Gratis)

```bash
# 1. Actualiza vite.config.ts
# base: '/nombre-repositorio/'

# 2. Build
npm run build

# 3. Instala gh-pages
npm install --save-dev gh-pages

# 4. Agrega script a package.json
"deploy": "gh-pages -d dist"

# 5. Deploy
npm run deploy
```

Tu app estará en: `https://tu-usuario.github.io/nombre-repositorio/`

### Vercel (Más fácil)

```bash
npm i -g vercel
vercel
```

Ver [DEPLOYMENT.md](DEPLOYMENT.md) para más opciones.

## 📚 Recursos

- **README.md**: Documentación completa
- **CODIGO_CPP.md**: Todo el código C++
- **DEPLOYMENT.md**: Guías de deployment
- **CONTRIBUTING.md**: Cómo contribuir
- **Tutorial en App**: Click en "Tutorial" en la aplicación

## 🐛 Problemas Comunes

### Puerto 5173 ocupado
```bash
# Usa otro puerto
npm run dev -- --port 3000
```

### Error al instalar dependencias
```bash
# Limpia caché y reinstala
npm cache clean --force
rm -rf node_modules package-lock.json
npm install
```

### La aplicación no carga estilos
```bash
# Reconstruye
npm run build
npm run preview
```

## 💡 Tips Rápidos

- **Hot Reload**: Los cambios se reflejan automáticamente
- **Console Errors**: Abre DevTools (F12) para ver errores
- **Mobile Testing**: Abre en tu celular usando la IP local
- **Code Editor**: Usa VS Code con las extensiones:
  - ESLint
  - Prettier
  - Tailwind CSS IntelliSense
  - ES7+ React/Redux snippets

## 🎯 Próximos Pasos

1. ✅ Instalar y ejecutar la aplicación
2. ✅ Explorar todos los ejercicios
3. ✅ Leer el tutorial completo
4. ✅ Descargar y compilar el código C++
5. ✅ Hacer deploy en GitHub Pages o Vercel
6. ✅ Compartir con estudiantes

## 📞 Ayuda

- **Issues**: [GitHub Issues](https://github.com/tu-usuario/tutorial-cpp-estructuras/issues)
- **Documentación**: Ver [README.md](README.md)
- **Contribuir**: Ver [CONTRIBUTING.md](CONTRIBUTING.md)

---

¿Todo funcionando? ¡Perfecto! 🎉

Si encuentras algún problema, abre un Issue en GitHub.

**¡Happy Coding! 🚀**
