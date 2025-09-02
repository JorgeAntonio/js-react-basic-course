import { validarDatos, guardarResultado, guardarResultado, mostrarResultado, procesarArray } from "./funciones-utiles"


// Variable global : NOMBRE
const NOMBRE = "Jorge"


// ==========================================
// 1. FUNCIÓN BÁSICA DE SALUDO
// ==========================================

function saludar() {
    return alert("¡Estas matriculado!")
}

// ==========================================
// 2. DECLARACIÓN VS EXPRESIÓN
// ==========================================

// ✅ DECLARACIÓN DE FUNCIÓN (Function Declaration)
// Se puede llamar ANTES de ser declarada gracias al hoisting

console.log("Sumar: ", sumar(5, 3))

function sumar(numero1, numero2) {
    return numero1 + numero2
}

// ❌ EXPRESIÓN DE FUNCIÓN (Function Expression)
// NO se puede llamar antes de ser declarada
// console.log(restar(10, 4)); // ❌ Esto daría error!

// console.log(multiplicar(2, 3))

const multiplicar = function (a, b) {
    return a * b
}

console.log("Multiplicar: ", multiplicar(2, 3))

// 🚀 FUNCIÓN FLECHA (Arrow Function) - ES6

// Función flecha completa
const restar = (a, b) => {
    return a - b
}

// Forma corta
const dividir = (a, b) => a / b

console.log("restar: ", restar(4, 2))
console.log("dividir: ", dividir(9, 3))

// ==========================================
// 3. PARÁMETROS Y VALORES DE RETORNO
// ==========================================

// Función con parámetros por defecto
function saludarConValores(nombre = "Jorge") {
    return alert(`Hola, mi nombre es ${nombre}`)
}

// Función con parámetros (ejemplo del HTML)
function presentarse(nombre = "Jorge", edad = 16) {
    return alert(`Hola, mi nombre es ${nombre}, mi edad ${edad}`)
}

// Función que retorna objeto persona
function crearPersona(nombre, edad) {
    return {
        nombre: nombre,
        edad: edad,
        presentarse: function () {
            return `Hola, soy ${this.nombre}`
        },
        hobbies: function () {
            return `Me gusta la programcion`
        }
    }
}

console.log("Crear persona", crearPersona("Luis", 12))

const persona = crearPersona("Maria", 30)

console.log("Nombre: ", persona.nombre)
console.log("Edad: ", persona.edad)
console.log("Presentacion: ", persona.presentarse())
console.log("Hobbies: ", persona.hobbies())

// ==========================================
// 4. SCOPE Y VARIABLES
// ==========================================

// Variable global
let variableGlobal = "Soy global";
// Accesible desde cualquier parte del código

// Ejemplo de variable local o scope local
function ejemploLocal() {
    if (true) {
        let variableBloque = "Soy una variable de bloque"
        const otraVariableBloque = "Tambien soy de bloque"
        var variableVar = "Soy un var (funcion scorpe // no usar xd)"
    }

    // console.log(variableBloque)
    // console.log(otraVariableBloque)
    console.log(variableVar)
}

const local = ejemploLocal()

// ==========================================
// 5. BUENAS PRÁCTICAS
// ==========================================


// ❌ MALO: Función que hace muchas cosas
function procesarDatosMal(datos) {
    // Validar datos
    if (!datos || datos.length === 0) {
        console.log("No hay datos");
        return;
    }

    // Procesar datos
    let resultado = 0;
    for (let i = 0; i < datos.length; i++) {
        resultado += datos[i] * 2;
    }

    // Mostrar resultado
    console.log("Resultado:", resultado);

    // Guardar en localStorage
    localStorage.setItem('resultado', resultado);

    return resultado;
}


// ✅ BUENO: Funciones pequeñas y específicas

function procesarDatosBien(datos) {
    // Validar datos
    if (!validarDatos(datos)) {
        console.log("No hay datos válidos");
        return;
    }
    // Procesar datos
    const resultado = procesarArray(datos);
    // Mostrar resultado
    mostrarResultado(resultado);
    // Guardar resultado
    guardarResultado(resultado);

    return resultado;
}

console.log(procesarDatosBien())


