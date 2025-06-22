# 📝 Validador de Expresiones Equilibradas

<p align="center"> 
  <img src="https://media.tenor.com/4IJowORGMmcAAAAi/what-inside-out-2.giff" width="300"/> 
</p>

---

## 🎯 Descripción del Proyecto

Este proyecto implementa un **Validador de Expresiones Equilibradas** que verifica si los delimitadores (paréntesis `()`, llaves `{}`, y corchetes `[]`) en una expresión están correctamente balanceados. El validador funciona tanto en **interfaz web** como en **consola**, proporcionando una experiencia completa para el usuario.

## ✨ Características Principales

- 🔍 **Validación Inteligente**: Verifica delimitadores anidados en el orden correcto
- 🌐 **Interfaz Web Moderna**: Diseño responsivo y atractivo con CSS moderno
- 💻 **Funcionalidad de Consola**: Uso directo desde la consola del navegador
- 📱 **Diseño Responsivo**: Funciona perfectamente en dispositivos móviles y desktop
- 🎨 **Tema Adaptativo**: Soporte para modo claro y oscuro
- 🧪 **Pruebas Automáticas**: Suite de pruebas integrada
- 📊 **Análisis Detallado**: Información completa sobre la validación

## 🚀 Funcionalidades

### 1. Identificación de Delimitadores
- ✅ Paréntesis: `( )`
- ✅ Corchetes: `[ ]`
- ✅ Llaves: `{ }`
- ✅ Ignora caracteres no delimitadores (letras, números, operadores)

### 2. Reglas de Validación
- ✅ Cada apertura debe tener su cierre correspondiente
- ✅ Los delimitadores anidados deben cerrarse en orden inverso
- ✅ Expresiones sin delimitadores se consideran equilibradas
- ✅ Manejo de casos especiales y errores

### 3. Interfaz de Usuario
- ✅ **Input Inteligente**: Campo de texto con ejemplos y validación en tiempo real
- ✅ **Ejemplos Interactivos**: Clickeables para probar diferentes casos
- ✅ **Resultados Visuales**: Feedback claro con iconos y colores
- ✅ **Información Educativa**: Explicación de reglas y delimitadores válidos

## 🛠️ Tecnologías Utilizadas

- **HTML5**: Estructura semántica y accesible
- **CSS3**: Diseño moderno con Flexbox, Grid y animaciones
- **JavaScript ES6+**: Lógica de validación y funcionalidad interactiva
- **Font Awesome**: Iconografía profesional
- **Google Fonts**: Tipografía optimizada (Inter)

## 📁 Estructura del Proyecto

```
Validador_JS_Daniel_Vinasco/
│
├── 📄 index.html          # Página principal con interfaz web
├── 📁 css/
│   └── 📄 styles.css      # Estilos modernos y responsivos
├── 📁 js/
│   └── 📄 validador.js    # Lógica de validación y funcionalidad
├── 📄 README.md           # Documentación del proyecto
└── 📄 LICENSE             # Licencia MIT
```

## 🎮 Cómo Usar

### Interfaz Web
1. Abre `index.html` en tu navegador
2. Ingresa una expresión en el campo de texto
3. Haz clic en "Validar" o presiona Enter
4. Ve el resultado con información detallada
5. Prueba los ejemplos clickeables

### Consola del Navegador
```javascript
// Función principal
estaEquilibrada('({[]})')     // true
estaEquilibrada('([)]')       // false
estaEquilibrada('hola mundo') // true

// Análisis detallado
analizarExpresion('({[]})')   // Información completa
```

## 🧪 Casos de Prueba

| Expresión | Resultado | Descripción |
|-----------|-----------|-------------|
| `({[]})` | ✅ Equilibrado | Delimitadores anidados correctamente |
| `([)]` | ❌ No equilibrado | Delimitadores mal anidados |
| `hola mundo` | ✅ Equilibrado | Sin delimitadores |
| `(((` | ❌ No equilibrado | Solo aperturas |
| `(a + b) * [c - d]` | ✅ Equilibrado | Expresión matemática |
| `{[()]}` | ✅ Equilibrado | Delimitadores mixtos |

## 🔧 Funciones Disponibles

### `estaEquilibrada(expresion)`
Función principal que valida si una expresión está equilibrada.

**Parámetros:**
- `expresion` (string): La expresión a validar

**Retorna:**
- `boolean`: `true` si está equilibrada, `false` en caso contrario

### `analizarExpresion(expresion)`
Proporciona análisis detallado de la expresión.

**Retorna:**
- `object`: Información completa sobre delimitadores y errores

### `generarMensaje(analisis)`
Genera mensajes descriptivos del resultado.

**Retorna:**
- `object`: Mensaje estructurado con tipo, título y detalles

## 🎨 Características de Diseño

- **Gradientes Modernos**: Fondos con gradientes atractivos
- **Sombras y Efectos**: Profundidad visual con box-shadows
- **Animaciones Suaves**: Transiciones y hover effects
- **Tipografía Clara**: Fuente Inter para mejor legibilidad
- **Colores Semánticos**: Verde para éxito, rojo para errores
- **Responsive Design**: Adaptable a todos los tamaños de pantalla

## 📱 Compatibilidad

- ✅ Chrome 60+
- ✅ Firefox 55+
- ✅ Safari 12+
- ✅ Edge 79+
- ✅ Dispositivos móviles
- ✅ Modo oscuro/claro

## 👨‍💻 Autor del Proyecto

| Nombre        | Info                                |
|---------------|-------------------------------------|
| 🧑 Daniel Santiago | Estudiante de Campuslands |
| 🎓 Formación      | Desarrollo Web Full Stack |
| 💻 Enfoque        | JavaScript, HTML, CSS, UI/UX |
| 📍 Ubicación      | Piedecuesta, Santander - Colombia |

## 🎯 Entregable Final

**Repositorio:** [GitHub – Validador de expresiones](https://github.com/DanielSantiagoV/Validador_JS_Daniel_Vinasco.git)

**Características Implementadas:**
- ✅ Validación completa de delimitadores
- ✅ Interfaz web moderna y responsiva
- ✅ Funcionalidad de consola
- ✅ Pruebas automáticas
- ✅ Documentación completa
- ✅ Licencia MIT

## 📞 Contacto y Redes

### 📱 Contacto Directo
- 📧 Email: [vinascodaniel9@gmail.com](mailto:vinascodaniel9@gmail.com)
- 📱 Teléfono: 315 6990555

### 🌐 Redes Sociales
- 🐙 [GitHub](https://github.com/DanielSantiagoV)
- 🎵 [Spotify - Mi Playlist de Programación](https://open.spotify.com/playlist/6a3d9qWLg1cOyMRWoqwr16)

### 🎵 Ambiente de Trabajo
- 🎧 [Mi Playlist de Programación](https://open.spotify.com/playlist/6a3d9qWLg1cOyMRWoqwr16)

---

<p align="center">
  Desarrollado con ❤️ por Daniel Santiago Vinasco<br>
  🔥 <b><a href="https://github.com/DanielSantiagoV">Visita mi GitHub</a></b> 🚀
</p>

---

## 📄 Licencia

Este proyecto está bajo la Licencia MIT. Ver el archivo [LICENSE](LICENSE) para más detalles.
