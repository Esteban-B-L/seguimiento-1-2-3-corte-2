let operador;
let minutosInternacionales;

do {
    operador = prompt("Ingrese el operador (claro, Tigo, movistar):").toLowerCase();
    if (operador !== "claro" && operador !== "tigo" && operador !== "movistar") {
        alert("Operador no válido. Por favor ingrese claro, Tigo o movistar.");
    }
} while (operador !== "claro" && operador !== "tigo" && operador !== "movistar");

do {
    minutosInternacionales = prompt("Ingrese la cantidad de minutos internacionales consumidos:");
    minutosInternacionales = Number(minutosInternacionales);

    if (isNaN(minutosInternacionales) || minutosInternacionales < 0) {
        alert("Por favor ingrese un número válido para los minutos.");
    }
} while (isNaN(minutosInternacionales) || minutosInternacionales < 0);

let cargoFijo;
let valorMinutoInternacional;
let valorPaqueteDatos;

if (operador === "tigo") {
    cargoFijo = 45000;
    valorMinutoInternacional = 200;
    valorPaqueteDatos = 12000;
} else if (operador === "claro") {
    cargoFijo = 30000;
    valorMinutoInternacional = 100;
    valorPaqueteDatos = 18000;
} else if (operador === "movistar") {
    cargoFijo = 40000;
    valorMinutoInternacional = 250;
    valorPaqueteDatos = 8000;
}

let costoLlamadasInternacionales = minutosInternacionales * valorMinutoInternacional;
let costoTotal = cargoFijo + costoLlamadasInternacionales + valorPaqueteDatos;

alert(`Operador: ${operador}`);
alert(`Cargo fijo: $${cargoFijo}`);
alert(`Valor minuto internacional: $${valorMinutoInternacional}`);
alert(`Valor paquete de datos: $${valorPaqueteDatos}`);
alert(`Costo total: $${costoTotal}`);
