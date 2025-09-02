// ==========================================
// EJEMPLOS PRÁCTICOS: APLICACIONES REALES
// ==========================================

// Funciones matemáticas básicas (referenciadas en ejemplos.js)
function sumar(a, b) {
    return a + b;
}

const restar = function(a, b) {
    return a - b;
};

const multiplicar = (a, b) => {
    return a * b;
};

const dividir = (a, b) => a / b;

// ==========================================
// 1. CALCULADORA BÁSICA
// ==========================================

// Calculadora principal

function calcularDatos() {
    const numero1 = parseFloat(document.getElementById("num1").value)
    const numero2 = parseFloat(document.getElementById("num2").value)
    const operacion = document.getElementById("operacion").value
    const resultado = document.getElementById("resultadoCalculadora")

    if (isNaN(numero1) || isNaN(numero2)) {
        resultado.textContent = "Error: Ingresa números validos"
        return
    }

    let resultadoOperacion

    switch (operacion) {
        case '+':
            resultadoOperacion = sumar(numero1, numero2)
            break;
        case '-':
            resultadoOperacion = restar(numero1, numero2)
            break;
        case '*':
            resultadoOperacion = multiplicar(numero1, numero2)
            break;
        case '/':
            resultadoOperacion = dividir(numero1, numero2)
            break;
    
        default:
            resultadoOperacion = "Operacion no valida"
    }
    
    console.log(`${numero1} ${operacion} ${numero2} = ${resultadoOperacion}`)
    resultado.textContent = `${numero1} ${operacion} ${numero2} = ${resultadoOperacion}`

}

function probar() {
    alert("Hola")
}