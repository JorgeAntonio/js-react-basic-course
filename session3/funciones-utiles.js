export function validarDatos(datos) {
    return datos && datos.length > 0;
}

export function procesarArray(datos) {
    return datos.map(numero => numero * 2)
                .reduce((suma, numero) => suma + numero, 0);
}

export function mostrarResultado(resultado) {
    console.log("Resultado:", resultado);
}

export function guardarResultado(resultado) {
    localStorage.setItem('resultado', resultado);
}