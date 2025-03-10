function obtenerAngulo(mensaje) {
    return Number(prompt(mensaje));
}

function validarTriangulo(angulo1, angulo2, angulo3) {
    return angulo1 + angulo2 + angulo3 === 180;
}

function ejecutar() {
    var esValido;
    do {
        var angulo1 = obtenerAngulo("Ingrese el primer ángulo del triángulo:");
        var angulo2 = obtenerAngulo("Ingrese el segundo ángulo del triángulo:");
        var angulo3 = obtenerAngulo("Ingrese el tercer ángulo del triángulo:");
        
        esValido = validarTriangulo(angulo1, angulo2, angulo3);

        if (!esValido) {
            alert("El triángulo no es válido. La suma de los ángulos debe ser 180.");
        }
    } while (!esValido);

    alert("El triángulo es válido.");
}

ejecutar();
