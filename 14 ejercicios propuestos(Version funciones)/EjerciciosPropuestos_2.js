function obtenerNumero() {
    let numero = parseInt(prompt("Por favor ingrese un número:"), 10);
    if (isNaN(numero)) {
        alert("Por favor ingrese un valor numérico válido.");
        return null;
    }
    return numero;
}

function esPar(numero) {
    return numero % 2 === 0;
}

function mostrarResultado(numero) {
    if (esPar(numero)) {
        alert("Es un número par.");
    } else {
        alert("No es un número par.");
    }
}

function deseaContinuar() {
    return prompt("¿Desea verificar otro número? (sí / no):").toLowerCase() === "sí";
}

let continuar;

do {
    let numero = obtenerNumero();
    if (numero !== null) {
        mostrarResultado(numero);
    }
    continuar = deseaContinuar();
} while (continuar);
