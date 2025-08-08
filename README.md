
# 🎁 Proyecto: Amigo Secreto

![Badge en Desarollo](https://img.shields.io/badge/STATUS-EN%20TERMINADO-green)

Una aplicación web simple desarrollada con HTML, CSS y JavaScript que permite registrar una lista de amigos e iniciar un sorteo automático para asignar aleatoriamente a cada participante un "amigo secreto". El objetivo del proyecto es reforzar habilidades en lógica de programación, manejo de arrays y manipulación del DOM.

## 🚀 Comenzando

Estas instrucciones te permitirán obtener una copia del proyecto en funcionamiento en tu máquina local para fines de desarrollo, práctica o demostración.

Mira la sección **Despliegue** para conocer cómo publicarlo en línea.

## 📋 Pre-requisitos

Solo necesitas un navegador moderno y un editor de código (opcional).

```bash
# Ejemplo (opcional):
Visual Studio Code
Google Chrome / Firefox
```

## 🔧 Instalación

Sigue estos pasos para tener el proyecto corriendo localmente:

1. Clona este repositorio:

```bash
git clone https://github.com/tuusuario/amigo-secreto.git
```

2. Entra al directorio del proyecto:

```bash
cd amigo-secreto
```

3. Abre el archivo `index.html` en tu navegador:

```bash
# Puedes hacer doble clic en el archivo o usar la extensión Live Server en VSCode
```

✅ **Listo**, ya puedes empezar a usar la aplicación.

## ⚙️ Ejecutando las pruebas

Este proyecto no contiene pruebas automatizadas por ahora. Sin embargo, puedes probarlo manualmente siguiendo los pasos:

1. Ingresa nombres en el campo de texto y presiona "Añadir".
2. Visualiza cómo se agregan a la lista.
3. Presiona "Sortear amigo" para ver los resultados del sorteo.

### 🔩 Pruebas end-to-end

Estas pruebas consisten en simular el flujo completo del sistema desde el ingreso hasta el sorteo:

```js
// Agregar nombres válidos
agregarAmigo("Ana");
agregarAmigo("Luis");
agregarAmigo("Carlos");

// Ejecutar sorteo
sortearAmigo();
```

Se verifica que:
- Todos los nombres fueron agregados correctamente.
- Todos recibieron un amigo secreto distinto a sí mismos.

### ⌨️ Pruebas de estilo de codificación

Para asegurar consistencia visual y semántica en HTML y CSS:

```bash
# Puedes usar herramientas como:
HTMLHint
Stylelint
Prettier
```

## 📦 Despliegue

Puedes subir tu proyecto a GitHub Pages siguiendo estos pasos:

1. Sube todos tus archivos a un repositorio.
2. Ve a **Settings > Pages**.
3. Selecciona la rama `main` y la carpeta `/root`.
4. Espera unos segundos y visita la URL que se genera.

## 🛠️ Construido con

- [HTML5](https://developer.mozilla.org/es/docs/Web/HTML)
- [CSS3](https://developer.mozilla.org/es/docs/Web/CSS)
- [JavaScript Vanilla](https://developer.mozilla.org/es/docs/Web/JavaScript)


## ✒️ Autores

- **Piero Huayta** - *Desarrollador principal* - [@PieroHua](https://github.com/PieroHua)

## 🎁 Expresiones de Gratitud

- Comparte este proyecto con tus compañeros 🎓
- Úsalo como base para tus propios retos 💡
- Deja una estrella ⭐ en GitHub si te fue útil

---

⌨️ con ❤️ por [Piero Huayta](https://github.com/@PieroHua)
