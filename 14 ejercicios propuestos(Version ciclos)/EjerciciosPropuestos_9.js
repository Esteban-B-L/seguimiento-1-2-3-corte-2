let angulo1, angulo2, angulo3, sumaAngulos;

do {
    angulo1 = Number(prompt("Ingrese el primer ángulo del triángulo:"));
    angulo2 = Number(prompt("Ingrese el segundo ángulo del triángulo:"));
    angulo3 = Number(prompt("Ingrese el tercer ángulo del triángulo:"));

    sumaAngulos = angulo1 + angulo2 + angulo3;

    if (sumaAngulos !== 180) {
        alert("El triángulo no es válido. La suma de los ángulos debe ser 180.");
    }
} while (sumaAngulos !== 180);

alert("El triángulo es válido.");
