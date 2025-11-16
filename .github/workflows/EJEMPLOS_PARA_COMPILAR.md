# 💾 Archivos C++ para Compilar

Esta carpeta contiene todos los ejercicios en formato `.cpp` listos para compilar y ejecutar en tu computadora.

## 📁 Descarga los Archivos

Puedes copiar el código desde aquí o descargarlo directamente del repositorio.

## 📝 Archivos Disponibles

### ejercicio1.cpp
```cpp
#include <iostream>

int main() {
    int numero;
    
    std::cout << "Ingrese el número a evaluar: ";
    std::cin >> numero;
    
    if (numero % 2 == 0) {
        std::cout << "El número " << numero << " es par." << std::endl;
    } else {
        std::cout << "El número " << numero << " es impar." << std::endl;
    }
    
    return 0;
}
```

### ejercicio2.cpp
```cpp
#include <iostream>

int main() {
    int calificacion;
    
    std::cout << "Ingrese su calificación: ";
    std::cin >> calificacion;
    
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
        std::cout << "No acreditado" << std::endl;
    }
    
    return 0;
}
```

### ejercicio3.cpp
```cpp
#include <iostream>

int main() {
    int numero;
    char continuar;
    
    do {
        std::cout << "Ingrese el número a evaluar: ";
        std::cin >> numero;
        
        if (numero % 2 == 0) {
            std::cout << "El número " << numero << " es par." << std::endl;
        } else {
            std::cout << "El número " << numero << " es impar." << std::endl;
        }
        
        std::cout << "¿Desea evaluar otro número? (s/n): ";
        std::cin >> continuar;
        
    } while (continuar == 's' || continuar == 'S');
    
    std::cout << "¡Gracias por usar el programa!" << std::endl;
    
    return 0;
}
```

### ejercicio4.cpp
```cpp
#include <iostream>
#include <iomanip>

int main() {
    int n_articulos;
    int cantidad;
    float precio;
    float total = 0.0;
    
    std::cout << "Ingrese la cantidad de articulos: ";
    std::cin >> n_articulos;
    
    for (int i = 1; i <= n_articulos; ++i) {
        std::cout << "Articulo " << i << " cantidad: ";
        std::cin >> cantidad;
        
        std::cout << "Articulo " << i << " precio: ";
        std::cin >> precio;
        
        total = total + (cantidad * precio);
    }
    
    std::cout << std::fixed << std::setprecision(2);
    std::cout << "Total a pagar $ " << total << std::endl;
    
    return 0;
}
```

## 🔨 Compilación Rápida

### Windows (MinGW)
```bash
g++ ejercicio1.cpp -o ejercicio1.exe
ejercicio1.exe
```

### macOS/Linux
```bash
g++ ejercicio1.cpp -o ejercicio1
./ejercicio1
```

### Compilar todos a la vez

**Windows** (crear archivo `compilar.bat`):
```batch
@echo off
g++ ejercicio1.cpp -o ejercicio1.exe
g++ ejercicio2.cpp -o ejercicio2.exe
g++ ejercicio3.cpp -o ejercicio3.exe
g++ ejercicio4.cpp -o ejercicio4.exe
echo Compilación completada
pause
```

**macOS/Linux** (crear archivo `compilar.sh`):
```bash
#!/bin/bash
g++ ejercicio1.cpp -o ejercicio1
g++ ejercicio2.cpp -o ejercicio2
g++ ejercicio3.cpp -o ejercicio3
g++ ejercicio4.cpp -o ejercicio4
echo "Compilación completada"
```

Dar permisos de ejecución:
```bash
chmod +x compilar.sh
./compilar.sh
```

## 📚 Más Información

Para documentación completa de cada ejercicio, ver [CODIGO_CPP.md](CODIGO_CPP.md)

## 💡 Tips

- Usa un editor como VS Code con la extensión C/C++
- Prueba con diferentes valores de entrada
- Modifica el código para experimentar
- Si hay errores de compilación, verifica la sintaxis

## 🔍 Errores Comunes

### "g++ no reconocido"
Necesitas instalar un compilador:
- Windows: MinGW o Visual Studio
- macOS: Xcode Command Line Tools
- Linux: `sudo apt-get install g++`

### "iostream no encontrado"
El compilador no está correctamente instalado

### Programa se cierra inmediatamente
Ejecuta desde la terminal, no haciendo doble click

## ✅ Verificar Instalación del Compilador

```bash
g++ --version
```

Si ves la versión, está correctamente instalado.

---

¿Necesitas ayuda? Consulta [CODIGO_CPP.md](CODIGO_CPP.md) o abre un Issue en GitHub.
