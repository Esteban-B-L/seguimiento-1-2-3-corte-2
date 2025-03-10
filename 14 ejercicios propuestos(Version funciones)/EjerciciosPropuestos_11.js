function mostrarMensaje(opcion) {
    if (opcion === "1") {
        alert("Póngase en contacto con el técnico apoyo");
    } else if (opcion === "2") {
        alert("Verificar contactos de la unidad");
    } else if (opcion === "3") {
        alert("Traiga la computadora para repararla en la central.");
    } else if (opcion === "4") {
        alert("Compruebe las conexiones de altavoces.");
    }
}

function obtenerOpcion() {
    return prompt("Seleccione una opción:\n1. La computadora emite pitido y el disco duro gira\n2. La computadora emite pitido pero el disco duro no gira\n3. La computadora no emite pitido y el disco duro no gira\n4. La computadora no emite pitido pero el disco duro gira");
}

function ejecutar() {
    while (true) {
        var opcion = obtenerOpcion();
        if (opcion === "1" || opcion === "2" || opcion === "3" || opcion === "4") {
            mostrarMensaje(opcion);
            break;
        } else {
            alert("Opción no válida. Por favor, seleccione una opción entre 1 y 4.");
        }
    }
}

ejecutar();
