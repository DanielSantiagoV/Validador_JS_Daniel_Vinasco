// Validador de expresiones equilibradas 
// Validador de Expresiones Equilibradas

function estaEquilibrada(expresion) {
    if (typeof expresion !== 'string') return false;
    const stack = [];
    const pares = { ')': '(', ']': '[', '}': '{' };
    for (let c of expresion) {
        if (c === '(' || c === '[' || c === '{') stack.push(c);
        else if (c === ')' || c === ']' || c === '}') {
            if (stack.length === 0 || stack.pop() !== pares[c]) return false;
        }
    }
    return stack.length === 0;
}

// Web UI logic
if (typeof window !== 'undefined' && document) {
    function analizarExpresion(expresion) {
        const res = {
            expresion,
            equilibrada: estaEquilibrada(expresion),
            delimitadores: {
                parentesis: { abiertos: 0, cerrados: 0 },
                corchetes: { abiertos: 0, cerrados: 0 },
                llaves: { abiertos: 0, cerrados: 0 }
            },
            errores: []
        };
        for (let c of expresion) {
            if (c === '(') res.delimitadores.parentesis.abiertos++;
            if (c === ')') res.delimitadores.parentesis.cerrados++;
            if (c === '[') res.delimitadores.corchetes.abiertos++;
            if (c === ']') res.delimitadores.corchetes.cerrados++;
            if (c === '{') res.delimitadores.llaves.abiertos++;
            if (c === '}') res.delimitadores.llaves.cerrados++;
        }
        if (res.delimitadores.parentesis.abiertos !== res.delimitadores.parentesis.cerrados)
            res.errores.push('Paréntesis desequilibrados');
        if (res.delimitadores.corchetes.abiertos !== res.delimitadores.corchetes.cerrados)
            res.errores.push('Corchetes desequilibrados');
        if (res.delimitadores.llaves.abiertos !== res.delimitadores.llaves.cerrados)
            res.errores.push('Llaves desequilibradas');
        return res;
    }

    function generarMensaje(analisis) {
        if (analisis.equilibrada) {
            return {
                tipo: 'exito',
                titulo: '✅ Expresión Equilibrada',
                mensaje: 'Todos los delimitadores están correctamente balanceados.',
                detalles: `Paréntesis: ${analisis.delimitadores.parentesis.abiertos}/${analisis.delimitadores.parentesis.cerrados}, ` +
                    `Corchetes: ${analisis.delimitadores.corchetes.abiertos}/${analisis.delimitadores.corchetes.cerrados}, ` +
                    `Llaves: ${analisis.delimitadores.llaves.abiertos}/${analisis.delimitadores.llaves.cerrados}`
            };
        } else {
            return {
                tipo: 'error',
                titulo: '❌ Expresión No Equilibrada',
                mensaje: 'Los delimitadores no están correctamente balanceados.',
                detalles: analisis.errores.join(', ')
            };
        }
    }

    function inicializarInterfaz() {
        const input = document.getElementById('expression-input');
        const validateBtn = document.getElementById('validate-btn');
        const resultSection = document.getElementById('result-section');
        const exampleItems = document.querySelectorAll('.example-item');

        function mostrarResultadoWeb(resultado) {
            const icono = resultado.tipo === 'exito' ? 'fas fa-check-circle' :
                resultado.tipo === 'error' ? 'fas fa-times-circle' : 'fas fa-info-circle';
            const clase = resultado.tipo === 'exito' ? 'balanced' :
                resultado.tipo === 'error' ? 'unbalanced' : 'info';
            resultSection.innerHTML = `
                <div class="result-content ${clase}">
                    <i class="${icono}"></i>
                    <div>
                        <div class="result-title">${resultado.titulo}</div>
                        <div class="result-message">${resultado.mensaje}</div>
                        ${resultado.detalles ? `<div class="result-details">${resultado.detalles}</div>` : ''}
                    </div>
                </div>
            `;
        }

        function validarExpresionWeb() {
            const expresion = input.value.trim();
            if (!expresion) {
                mostrarResultadoWeb({
                    tipo: 'info',
                    titulo: 'ℹ️ Sin expresión',
                    mensaje: 'Por favor, ingresa una expresión para validar.',
                    detalles: ''
                });
                return;
            }
            const analisis = analizarExpresion(expresion);
            const mensaje = generarMensaje(analisis);
            mostrarResultadoWeb(mensaje);
        }

        validateBtn.addEventListener('click', validarExpresionWeb);
        input.addEventListener('keypress', (e) => { if (e.key === 'Enter') validarExpresionWeb(); });
        exampleItems.forEach(item => {
            item.addEventListener('click', () => {
                input.value = item.getAttribute('data-example');
                validarExpresionWeb();
            });
        });
        input.focus();
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', inicializarInterfaz);
    } else {
        inicializarInterfaz();
    }
}

// Para consola
console.log('Usa la función estaEquilibrada(expresion) para validar tu expresión.');
console.log('Ejemplo: estaEquilibrada("({[]})") // true');
