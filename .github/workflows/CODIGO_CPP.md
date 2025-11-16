# 💻 Código C++ - Todos los Ejercicios

Este archivo contiene el código fuente completo de todos los ejercicios para que puedas copiarlos, compilarlos y ejecutarlos en tu computadora.

## 📋 Índice
- [Ejercicio 1: Par o Impar](#ejercicio-1-par-o-impar)
- [Ejercicio 2: Calificaciones](#ejercicio-2-calificaciones)
- [Ejercicio 3: Par o Impar con Bucle](#ejercicio-3-par-o-impar-con-bucle)
- [Ejercicio 4: Total de Compra](#ejercicio-4-total-de-compra)
- [Cómo Compilar y Ejecutar](#cómo-compilar-y-ejecutar)

---

## Ejercicio 1: Par o Impar

**Descripción**: Determina si un número es par o impar usando estructuras selectivas (if-else).

**Archivo**: `ejercicio1.cpp`

```cpp
#include <iostream> // Librería para entrada y salida de datos

int main() {
    int numero; // Declaración de la variable para almacenar el número

    // Solicitar datos al usuario
    std::cout << "Ingrese el número a evaluar: ";
    std::cin >> numero;

    // Estructura selectiva (if-else)
    // Se usa el operador de relación '==' y el módulo '%'
    if (numero % 2 == 0) {
        // Salida si la condición es verdadera
        std::cout << "El número " << numero << " es par." << std::endl;
    } else {
        // Salida si la condición es falsa
        std::cout << "El número " << numero << " es impar." << std::endl;
    }

    return 0; // Indica que el programa terminó correctamente
}
```

**Ejemplos de ejecución**:
```
Ingrese el número a evaluar: 8
El número 8 es par.

Ingrese el número a evaluar: 3
El número 3 es impar.
```

---

## Ejercicio 2: Calificaciones

**Descripción**: Evalúa una calificación (0-10) y muestra un mensaje según el rango usando if-else if-else.

**Archivo**: `ejercicio2.cpp`

```cpp
#include <iostream> // Librería para entrada y salida de datos

int main() {
    int calificacion; // Declaración de la variable

    // Solicitar datos al usuario
    std::cout << "Ingrese su calificación: ";
    std::cin >> calificacion;

    // Cadena de estructuras selectivas (if-else if-else)
    // Se usan operadores de relación (>, <, ==)
    if (calificacion < 0 || calificacion > 10) {
        std::cout << "Error" << std::endl;
    } else if (calificacion == 10) {
        std::cout << "Excelente" << std::endl;
    } else if (calificacion == 9) {
        std::cout << "Muy bien" << std::endl;
    } else if (calificacion == 8) {
        std::cout << "Bien" << std::endl;
    } else if (calificacion == 7) {
        std::cout << "Regular" << std::endl;
    } else {
        // Esta condición 'else' captura todos los casos restantes,
        // que, gracias a la primera validación, solo pueden ser 0-6.
        // Esto cumple la condición "mayor o igual a cero y menor o igual a 6"
        std::cout << "No acreditado" << std::endl;
    }

    return 0;
}
```

**Ejemplos de ejecución**:
```
Ingrese su calificación: 20
Error

Ingrese su calificación: 9
Muy bien

Ingrese su calificación: 5
No acreditado
```

---

## Ejercicio 3: Par o Impar con Bucle

**Descripción**: Evalúa múltiples números usando un ciclo do-while que permite al usuario decidir si continuar.

**Archivo**: `ejercicio3.cpp`

```cpp
#include <iostream> // Librería para entrada y salida de datos

int main() {
    int numero; // Variable para el número
    char continuar; // Variable para controlar el ciclo

    // Estructura de repetición (do-while)
    do {
        // 1. Lógica del problema (idéntica al Ejercicio 1)
        std::cout << "Ingrese el número a evaluar: ";
        std::cin >> numero;

        // 2. Estructura selectiva (if-else)
        if (numero % 2 == 0) {
            // Salida correcta
            std::cout << "El número " << numero << " es par." << std::endl;
        } else {
            std::cout << "El número " << numero << " es impar." << std::endl;
        }

        // 3. Condición de continuación del ciclo
        std::cout << "¿Desea evaluar otro número? (s/n): ";
        std::cin >> continuar;

    } while (continuar == 's' || continuar == 'S'); 
    // El ciclo se repite si el usuario ingresa 's' o 'S'

    std::cout << "¡Gracias por usar el programa!" << std::endl;

    return 0;
}
```

**Ejemplo de ejecución**:
```
Ingrese el número a evaluar: 3
El número 3 es impar.
¿Desea evaluar otro número? (s/n): s
Ingrese el número a evaluar: 20
El número 20 es par.
¿Desea evaluar otro número? (s/n): s
Ingrese el número a evaluar: 7
El número 7 es impar.
¿Desea evaluar otro número? (s/n): n
¡Gracias por usar el programa!
```

---

## Ejercicio 4: Total de Compra

**Descripción**: Calcula el total de una compra iterando sobre n artículos usando un ciclo for y un acumulador.

**Archivo**: `ejercicio4.cpp`

```cpp
#include <iostream>  // Librería para entrada y salida
#include <iomanip>   // Librería para manipular la salida (para formato de moneda)

int main() {
    int n_articulos;
    int cantidad;
    float precio;
    float total = 0.0; // Variable acumuladora, inicializada en 0

    std::cout << "Ingrese la cantidad de articulos: ";
    std::cin >> n_articulos;

    // Estructura de repetición (ciclo for)
    // El ciclo se repite 'n_articulos' veces
    for (int i = 1; i <= n_articulos; ++i) {
        std::cout << "Articulo " << i << " cantidad: ";
        std::cin >> cantidad;
        
        std::cout << "Articulo " << i << " precio: ";
        std::cin >> precio;

        // Operación matemática de acumulación
        total = total + (cantidad * precio); 
        // Alternativa: total += (cantidad * precio);
    }

    // Configurar la salida para mostrar 2 decimales (formato de dinero)
    std::cout << std::fixed << std::setprecision(2);
    
    // Salida final
    std::cout << "Total a pagar $ " << total << std::endl;

    return 0;
}
```

**Ejemplo de ejecución**:
```
Ingrese la cantidad de articulos: 3
Articulo 1 cantidad: 5
Articulo 1 precio: 15
Articulo 2 cantidad: 10
Articulo 2 precio: 100
Articulo 3 cantidad: 3
Articulo 3 precio: 30
Total a pagar $ 1165.00
```

---

## 🛠️ Cómo Compilar y Ejecutar

### En Windows (usando MinGW o Visual Studio)

#### Opción 1: MinGW (g++)
```bash
# Compilar
g++ ejercicio1.cpp -o ejercicio1.exe

# Ejecutar
ejercicio1.exe
```

#### Opción 2: Visual Studio
1. Abre Visual Studio
2. Crea un nuevo proyecto → "Console App"
3. Copia el código en el archivo `.cpp`
4. Presiona F5 para compilar y ejecutar

#### Opción 3: Dev-C++
1. Abre Dev-C++
2. File → New → Source File
3. Copia el código
4. File → Save As → `ejercicio1.cpp`
5. Execute → Compile & Run (F11)

---

### En macOS (usando Xcode o Terminal)

#### Opción 1: Terminal
```bash
# Compilar
g++ ejercicio1.cpp -o ejercicio1

# Ejecutar
./ejercicio1
```

#### Opción 2: Xcode
1. Abre Xcode
2. Create a new Xcode project → macOS → Command Line Tool
3. Reemplaza el contenido de main.cpp
4. Product → Run (⌘R)

---

### En Linux (usando g++)

```bash
# Compilar
g++ ejercicio1.cpp -o ejercicio1

# Ejecutar
./ejercicio1
```

---

## 📦 Compilar Todos los Ejercicios a la Vez

### Script para Windows (compilar_todos.bat)
```batch
@echo off
echo Compilando todos los ejercicios...
g++ ejercicio1.cpp -o ejercicio1.exe
g++ ejercicio2.cpp -o ejercicio2.exe
g++ ejercicio3.cpp -o ejercicio3.exe
g++ ejercicio4.cpp -o ejercicio4.exe
echo ¡Compilación completa!
pause
```

### Script para Linux/macOS (compilar_todos.sh)
```bash
#!/bin/bash
echo "Compilando todos los ejercicios..."
g++ ejercicio1.cpp -o ejercicio1
g++ ejercicio2.cpp -o ejercicio2
g++ ejercicio3.cpp -o ejercicio3
g++ ejercicio4.cpp -o ejercicio4
echo "¡Compilación completa!"
```

Para usar el script en Linux/macOS:
```bash
chmod +x compilar_todos.sh
./compilar_todos.sh
```

---

## 🐛 Troubleshooting

### Error: "g++ no se reconoce como comando"
**Solución**: Necesitas instalar un compilador de C++:
- **Windows**: Instala MinGW o Visual Studio
- **macOS**: Instala Xcode Command Line Tools: `xcode-select --install`
- **Linux**: Instala g++: `sudo apt-get install g++`

### Error de compilación: "iostream no encontrado"
**Solución**: Asegúrate de que tu compilador esté correctamente instalado y configurado.

### El programa se cierra inmediatamente
**Solución**: Agrega `system("pause");` antes del `return 0;` (Windows) o ejecuta desde la terminal.

---

## 💡 Consejos

1. **Comentarios**: Mantén los comentarios del código, te ayudarán a entender qué hace cada parte
2. **Indentación**: Respeta la indentación para que el código sea más legible
3. **Pruebas**: Prueba cada programa con diferentes valores, incluyendo casos extremos
4. **Experimentación**: Modifica el código y observa qué sucede para aprender más

---

## 📚 Recursos Adicionales

- [Documentación oficial de C++](https://en.cppreference.com/)
- [Tutorial de C++](https://www.learncpp.com/)
- [Ejercicios de práctica](https://www.hackerrank.com/domains/cpp)

---

¿Tienes preguntas? Consulta el tutorial interactivo en la aplicación web o abre un Issue en GitHub.

**¡Happy Coding! 🚀**
