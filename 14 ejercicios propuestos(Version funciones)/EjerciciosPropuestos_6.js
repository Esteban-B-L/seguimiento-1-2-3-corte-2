function obtenerNumeros() {
    var numeros = [];
    var i = 0;
    while (i < 3) {
        numeros[i] = parseFloat(prompt("Ingrese el número " + (i + 1) + " (primer, segundo o tercer número que desea comparar):"));
        i++;
    }
    return numeros;
}

function encontrarMayor(numeros) {
    var mayor = numeros[0];
    var i = 1;
    while (i < numeros.length) {
        if (numeros[i] > mayor) {
            mayor = numeros[i];
        }
        i++;
    }
    return mayor;
}

function ejecutar() {
    var numeros = obtenerNumeros();
    var mayor = encontrarMayor(numeros);
    alert("El número mayor entre " + numeros[0] + ", " + numeros[1] + " y " + numeros[2] + " es " + mayor + ".");
}

ejecutar();
