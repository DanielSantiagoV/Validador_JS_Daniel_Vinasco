// Validador de expresiones equilibradas en consola

// Función principal que verifica si la expresión está equilibrada
function estaEquilibrada(expresion) {
  const pila = [];
  const pares = {
    ')': '(',
    ']': '[',
    '}': '{'
  };

  for (let caracter of expresion) {
    if (caracter === '(' || caracter === '[' || caracter === '{') {
      pila.push(caracter); // Apilamos los delimitadores de apertura
    } else if (caracter === ')' || caracter === ']' || caracter === '}') {
      if (pila.length === 0) return false; // No hay apertura para cerrar
      const ultimo = pila.pop(); // Sacamos el último abierto
      if (ultimo !== pares[caracter]) return false; // No hacen pareja
    }
  }

  return pila.length === 0; // Si queda algo en la pila, está desequilibrado
}

console.log("Usa la función estaEquilibrada(expresion) para verificar tu expresión.");
console.log("Ejemplo: estaEquilibrada('({[]})')");

// estaEquilibrada('({[]})') // true
// estaEquilibrada('([)]') // false
// estaEquilibrada('hola') // true
