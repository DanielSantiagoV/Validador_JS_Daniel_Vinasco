// Validador de expresiones equilibradas en consola

// Función principal que verifica si la expresión está equilibrada
function estaEquilibrada(expresion) {
  const delimitadoresAbiertos = []; // Guardamos los delimitadores que se van abriendo
  const pares = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let caracter of expresion) {
    if (caracter === '(' || caracter === '[' || caracter === '{') {
      delimitadoresAbiertos.push(caracter); // Agregamos el delimitador de apertura
    } else if (caracter === ')' || caracter === ']' || caracter === '}') {
      if (delimitadoresAbiertos.length === 0) return false; // Cierre sin apertura previa
      const ultimoAbierto = delimitadoresAbiertos.pop(); // Tomamos el último abierto
      if (ultimoAbierto !== pares[caracter]) return false; // No corresponde el cierre
    }
  }

  return delimitadoresAbiertos.length === 0; // Si no quedó nada abierto, está equilibrado
}

// Mensaje guía en consola
console.log("Usa la función estaEquilibrada(expresion) para verificar tu expresión.");
console.log("Ejemplo: estaEquilibrada('({[]})')");

// Pruebas manuales 
// console.log(estaEquilibrada('({[]})')); // true
// console.log(estaEquilibrada('([)]'));   // false
// console.log(estaEquilibrada('hola'));   // true
