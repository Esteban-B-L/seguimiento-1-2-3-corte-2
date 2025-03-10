function obtenerNumeroCopias() {
    return Number(prompt("Ingrese el número de copias que desea imprimir:"));
}

function calcularPrecioPorCopia(numCopias) {
    if (numCopias >= 0 && numCopias <= 499) {
        return 120;
    } else if (numCopias >= 500 && numCopias <= 749) {
        return 100;
    } else if (numCopias >= 750 && numCopias <= 999) {
        return 80;
    } else if (numCopias >= 1000) {
        return 50;
    } else {
        return 0;
    }
}

function mostrarCosto(precioPorCopia, numCopias) {
    var precioTotal = numCopias * precioPorCopia;
    alert("El precio por copia es: $" + precioPorCopia);
    alert("El precio total por " + numCopias + " copias es: $" + precioTotal);
}

function ejecutar() {
    var precioPorCopia = 0;
    while (precioPorCopia === 0) {
        var numCopias = obtenerNumeroCopias();
        precioPorCopia = calcularPrecioPorCopia(numCopias);
        if (precioPorCopia === 0) {
            alert("Cantidad no válida. Por favor ingrese un número válido de copias.");
        } else {
            mostrarCosto(precioPorCopia, numCopias);
        }
    }
}

ejecutar();
