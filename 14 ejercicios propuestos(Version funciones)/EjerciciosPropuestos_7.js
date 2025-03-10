function obtenerEntradas(datos) {
    var entradas = [];
    var i = 0;
    while (i < datos.length) {
        entradas[i] = prompt("Ingrese su " + datos[i] + ":");
        i++;
    }
    return entradas;
}

function calcularAyuda(genero, edad) {
    var ayuda = 0;
    if (genero === "femenino") {
        if (edad > 50) {
            ayuda = 120000;
        } else if (edad >= 30 && edad <= 50) {
            ayuda = 100000;
        }
    } else if (genero === "masculino") {
        ayuda = 40000;
    }
    return ayuda;
}

function ejecutar() {
    var datos = ["género (femenino o masculino)", "edad"];
    var entradas = obtenerEntradas(datos);

    var genero = entradas[0];
    var edad = parseFloat(entradas[1]);

    var ayuda = calcularAyuda(genero, edad);

    alert("El valor de ayuda mensual es: $" + ayuda + ".");
}

ejecutar();
