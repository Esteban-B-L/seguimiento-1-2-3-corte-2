function obtenerOperador() {
    let operador;
    do {
        operador = prompt("Ingrese el operador (claro, Tigo, movistar):").toLowerCase();
    } while (operador !== "claro" && operador !== "tigo" && operador !== "movistar");
    return operador;
}

function obtenerMinutos() {
    let minutos;
    do {
        minutos = Number(prompt("Ingrese la cantidad de minutos internacionales consumidos:"));
    } while (isNaN(minutos) || minutos < 0);
    return minutos;
}

function calcularCostos(operador, minutos) {
    let cargoFijo, valorMinutoInternacional, valorPaqueteDatos;
    if (operador === "tigo") {
        cargoFijo = 45000;
        valorMinutoInternacional = 200;
        valorPaqueteDatos = 12000;
    } else if (operador === "claro") {
        cargoFijo = 30000;
        valorMinutoInternacional = 100;
        valorPaqueteDatos = 18000;
    } else {
        cargoFijo = 40000;
        valorMinutoInternacional = 250;
        valorPaqueteDatos = 8000;
    }
    let costoLlamadas = minutos * valorMinutoInternacional;
    return cargoFijo + costoLlamadas + valorPaqueteDatos;
}

function mostrarResultados(costo) {
    alert(`Costo total: $${costo}`);
}

let operador = obtenerOperador();
let minutosInternacionales = obtenerMinutos();
let costoTotal = calcularCostos(operador, minutosInternacionales);
mostrarResultados(costoTotal);
