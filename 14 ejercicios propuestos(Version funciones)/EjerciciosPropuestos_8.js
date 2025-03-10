function obtenerDuracion() {
    var duracion;
    var costo = 0;
    do {
        duracion = prompt("Ingrese la duración de la mensualidad (15 días, 30 días o 3 meses):");
        if (duracion === "15 días") {
            costo = 18000;
        } else if (duracion === "30 días") {
            costo = 35000;
        } else if (duracion === "3 meses") {
            costo = 86000;
        } else {
            alert("Duración no válida. Por favor ingrese 15 días, 30 días o 3 meses.");
        }
    } while (costo === 0);
    return [duracion, costo];
}

function mostrarCosto(duracion, costo) {
    alert("El costo de la mensualidad por " + duracion + " es: $" + costo + ".");
}

function ejecutar() {
    var resultado = obtenerDuracion();
    mostrarCosto(resultado[0], resultado[1]);
}

ejecutar();
