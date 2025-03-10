let numCopias;
let precioPorCopia;
let precioTotal;

while (true) {
    numCopias = Number(prompt("Ingrese el número de copias que desea imprimir:"));

    if (numCopias >= 0 && numCopias <= 499) {
        precioPorCopia = 120;
    } else if (numCopias >= 500 && numCopias <= 749) {
        precioPorCopia = 100;
    } else if (numCopias >= 750 && numCopias <= 999) {
        precioPorCopia = 80;
    } else if (numCopias >= 1000) {
        precioPorCopia = 50;
    } else {
        precioPorCopia = 0;
        alert("Cantidad no válida. Por favor ingrese un número válido de copias.");
    }

    if (precioPorCopia > 0) {
        precioTotal = numCopias * precioPorCopia;
        alert(`El precio por copia es: $${precioPorCopia}`);
        alert(`El precio total por ${numCopias} copias es: $${precioTotal}`);
        break;
    }
}
