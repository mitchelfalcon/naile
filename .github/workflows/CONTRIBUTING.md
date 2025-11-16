# 🤝 Guía de Contribución

¡Gracias por tu interés en contribuir a este proyecto educativo! Toda ayuda es bienvenida.

## 🎯 Formas de Contribuir

- 🐛 Reportar bugs
- 💡 Sugerir nuevas características
- 📝 Mejorar la documentación
- ✨ Agregar nuevos ejercicios
- 🎨 Mejorar el diseño UI/UX
- 🌍 Traducir a otros idiomas
- 🧪 Agregar tests

## 📋 Proceso de Contribución

### 1. Fork y Clone

```bash
# Fork el repositorio en GitHub, luego:
git clone https://github.com/TU-USUARIO/tutorial-cpp-estructuras.git
cd tutorial-cpp-estructuras
```

### 2. Crea una Rama

```bash
git checkout -b feature/mi-nueva-caracteristica
# o
git checkout -b fix/correccion-de-bug
```

**Convención de nombres de ramas**:
- `feature/` - Para nuevas características
- `fix/` - Para correcciones de bugs
- `docs/` - Para cambios en documentación
- `refactor/` - Para refactorización de código
- `test/` - Para agregar o modificar tests

### 3. Instala las Dependencias

```bash
npm install
```

### 4. Realiza tus Cambios

- Escribe código limpio y bien comentado
- Sigue las convenciones de código del proyecto
- Prueba tus cambios localmente

```bash
npm run dev
```

### 5. Commit tus Cambios

Usa mensajes de commit descriptivos:

```bash
git add .
git commit -m "feat: Agrega ejercicio de arrays"
```

**Convención de mensajes de commit**:
- `feat:` - Nueva característica
- `fix:` - Corrección de bug
- `docs:` - Cambios en documentación
- `style:` - Cambios de formato (no afectan el código)
- `refactor:` - Refactorización de código
- `test:` - Agregar o modificar tests
- `chore:` - Tareas de mantenimiento

### 6. Push y Pull Request

```bash
git push origin feature/mi-nueva-caracteristica
```

Luego ve a GitHub y crea un Pull Request:

1. Ve al repositorio original
2. Click en "Pull Requests" → "New Pull Request"
3. Selecciona tu rama
4. Completa la descripción del PR
5. Haz click en "Create Pull Request"

## 📝 Guías de Estilo

### JavaScript/TypeScript

- Usa TypeScript cuando sea posible
- Usa nombres descriptivos para variables y funciones
- Prefiere `const` sobre `let`, evita `var`
- Usa arrow functions: `const func = () => {}`
- Agrega tipos TypeScript explícitos

```typescript
// ✅ Bueno
const calculateTotal = (items: number[]): number => {
  return items.reduce((sum, item) => sum + item, 0);
};

// ❌ Evitar
var total = function(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}
```

### React

- Usa componentes funcionales con hooks
- Un componente por archivo
- Usa nombres PascalCase para componentes
- Extrae lógica compleja en hooks personalizados

```typescript
// ✅ Bueno
export function MyComponent() {
  const [count, setCount] = useState(0);
  
  return <div>{count}</div>;
}

// ❌ Evitar
export default function mycomponent() {
  var count = 0;
  return <div>{count}</div>;
}
```

### CSS/Tailwind

- Usa Tailwind classes cuando sea posible
- Mantén las clases ordenadas: layout → spacing → styling
- Evita CSS inline a menos que sea dinámico

```tsx
// ✅ Bueno
<div className="flex items-center gap-4 p-4 bg-white rounded-lg shadow">

// ❌ Evitar
<div className="shadow rounded-lg bg-white flex gap-4 items-center p-4">
```

## 🎨 Agregar un Nuevo Ejercicio

Para agregar un nuevo ejercicio, sigue esta estructura:

### 1. Crea el Componente

`/components/ExerciseN.tsx`:

```typescript
import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { ArrowLeft } from 'lucide-react';

interface ExerciseNProps {
  onBack: () => void;
}

export function ExerciseN({ onBack }: ExerciseNProps) {
  const [input, setInput] = useState('');
  const [result, setResult] = useState<string | null>(null);

  const handleRun = () => {
    // Lógica del ejercicio
  };

  const cppCode = `// Código C++ aquí`;

  return (
    <div className="container mx-auto px-4 py-8">
      <Button variant="ghost" onClick={onBack} className="mb-6 gap-2">
        <ArrowLeft className="size-4" />
        Volver
      </Button>
      {/* Contenido del ejercicio */}
    </div>
  );
}
```

### 2. Actualiza Home.tsx

Agrega el ejercicio al array de exercises:

```typescript
{
  id: 'exerciseN' as Page,
  title: 'Ejercicio N: Título',
  description: 'Descripción del ejercicio',
  type: 'Estructura ...',
  difficulty: 'Básico/Intermedio/Avanzado',
  color: 'bg-...-100 text-...-800'
}
```

### 3. Actualiza App.tsx

Agrega el import y el case en el switch:

```typescript
import { ExerciseN } from './components/ExerciseN';

// ...

case 'exerciseN':
  return <ExerciseN onBack={() => setCurrentPage('home')} />;
```

### 4. Documenta el Código C++

Agrega el código al archivo `CODIGO_CPP.md` con:
- Descripción clara
- Código completo y comentado
- Ejemplos de ejecución
- Conceptos clave

## 🐛 Reportar Bugs

Al reportar un bug, incluye:

1. **Descripción clara** del problema
2. **Pasos para reproducir** el bug
3. **Comportamiento esperado** vs comportamiento actual
4. **Screenshots** si es posible
5. **Información del sistema**:
   - Navegador y versión
   - Sistema operativo
   - Versión de Node.js (si aplica)

Usa la plantilla de Issue de GitHub.

## 💡 Sugerir Características

Al sugerir una nueva característica:

1. **Describe el problema** que resuelve
2. **Explica la solución** propuesta
3. **Considera alternativas** si las hay
4. **Incluye mockups** si es UI/UX

## ✅ Checklist antes de Enviar PR

- [ ] El código funciona correctamente
- [ ] He probado los cambios localmente
- [ ] El código sigue las guías de estilo
- [ ] He actualizado la documentación si es necesario
- [ ] Los mensajes de commit son descriptivos
- [ ] No hay conflictos con la rama main
- [ ] He agregado comentarios al código complejo

## 🧪 Testing

Actualmente el proyecto no tiene tests automatizados, pero antes de enviar un PR:

1. Prueba manualmente todas las funcionalidades afectadas
2. Verifica que la app funcione en diferentes navegadores
3. Prueba en mobile (responsive)
4. Verifica que no hay errores en la consola

## 📚 Recursos

- [React Documentation](https://react.dev/)
- [TypeScript Documentation](https://www.typescriptlang.org/docs/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [shadcn/ui Documentation](https://ui.shadcn.com/)

## ❓ Preguntas

Si tienes preguntas:

1. Revisa la documentación existente
2. Busca en los Issues cerrados
3. Abre un nuevo Issue con tu pregunta

## 📜 Código de Conducta

- Sé respetuoso con todos los contribuyentes
- Acepta críticas constructivas
- Enfócate en lo mejor para el proyecto
- Mantén un ambiente inclusivo y acogedor

## 🎓 Contribuyentes

¡Gracias a todos los que han contribuido a este proyecto!

<!-- Aquí se puede agregar un ALL-CONTRIBUTORS badge más adelante -->

---

¿Listo para contribuir? ¡Adelante! 🚀

Si tienes dudas, no dudes en abrir un Issue.
