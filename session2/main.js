// ==============================================
// 📌 Sesión 2 – Estructuras de Control y Operadores
// ==============================================

// Para ver los resultados, abre el archivo index.html en tu navegador y mira la consola.

console.log("Sesión 2 - Estructuras de Control y Operadores")

// --- Operadores Aritméticos ---
console.log("\n--- Operadores Aritméticos ---")

let a = 10
let b = 5

console.log("Suma:", a + b)           // 15
console.log("Resta: ", a - b)
console.log("Multiplicar: ", a * b)
console.log("Dividir: ", a / b)
console.log("Residuo: ", a % 3)
console.log('Exponenciación:', a ** b); // 100000

// --- Operadores de Comparación ---
console.log("\n--- Operadores de comparación ---")

// Declaramos variables
let number1 = 10
let number2 = "10"
let number3 = 5

// Operaciones de comparación
console.log('10 == "10": ', number1 == number2)
console.log('10 === "10": ', number1 === number2)
console.log('10 != "5": ', number1 != number3)
console.log('10 !== "10": ', number1 !== number2)
console.log('10 !== "10": ', number1 != number2)
console.log('10 > "10": ', number1 > number2)
console.log('10 > 5: ', number1 > number3)
console.log('10 <= 5: ', number1 <= number3)

// --- Operadores Lógicos ---
console.log('\n--- Operadores Lógicos ---')

let esMayor = true
let tienePermiso = false
console.log('AND (&&): Vas a salir si: ', esMayor && tienePermiso)
console.log('OR (||): Siempre que sea verdadero sera TRUE', esMayor || tienePermiso)
console.log('NOT (!): Es mayor ahora es:', !esMayor)

// --- Estructuras Condicionales ---
console.log('\n--- Estructuras Condicionales ---');

let edad = 10;

// if/else
if (edad >= 18) {
    // condicion verdadera
    console.log("Eres mayor de edad");
} else {
    // condicion falsa
    console.log("Eres menor de edad");
}

// if/else if/else
if (edad < 12) {
    //condicion verdadera
    console.log('Eres un niño.');
} else if (edad < 18) {
    //condicion verdadera
    console.log('Eres un adolescente.');
} else {
    //condicion false
    console.log('Eres un adulto.');
}

// switch
let dia = "Jueves"
switch (dia) {
  case "Lunes":
    console.log('Hoy es Lunes');
    break;
  case "Martes":
    console.log('Hoy es Martes');
    break;
  case "Miércoles":
    console.log('Hoy es Miércoles');
    break;
  case "Jueves":
    console.log('Hoy es Jueves');
    break;
  case "Viernes":
    console.log('Hoy es Viernes');
    break;
  default:
    console.log('Hoy es un día del fin de semana');
}
console.log('Hoy es:', dia) // Miércoles

// --- Bucles ---
console.log('\n--- Bucles ---');

// for
console.log('Bucle for:');
let initialValue = 7
let finalValue = 10
for (let i = initialValue; i < finalValue; i++) {
  console.log('Iteración ' + i);
}

// while
console.log('Bucle while:');
let i = 3;
while (i <= 5) {
 console.log(i);
 i++;
}

const usuarios = ["Jorge", "Jose", "Juan"]
let contador = 0;
while (contador < usuarios.length) {
  console.log('Usuarios ' + contador);
  contador++;
}

// --- Operador Ternario ---
console.log('\n--- Operador Ternario ---');
let temperatura = 12;
let clima = (temperatura > 25) ? 'Hace calor' : 'No hace calor';
console.log(clima); 

// ==============================================
// 📌 Sesión 2 – Práctica
// ==============================================
