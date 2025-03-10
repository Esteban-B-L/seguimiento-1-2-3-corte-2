let costo;
let duracion;

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
        costo = 0;
    }
} while (costo === 0);

alert(`El costo de la mensualidad por ${duracion} es: $${costo}.`);
