function obtenerEntrada(mensaje) {
    return parseInt(prompt(mensaje), 10);
}

function calcularCosto(tipo, cantidad, horas) {
    var costo = 0;
    if (tipo === 1) {
        costo = horas * 4000;
        if (cantidad > 3) {
            costo -= costo * 3 / 100;
        }
    } else if (tipo === 2) {
        costo = horas * 3000;
        if (cantidad > 3) {
            costo -= costo * 3 / 100;
        }
    }
    return costo;
}

function mostrarMensaje(mensaje) {
    alert(mensaje);
}

function ejecutar() {
    do {
        var tipoLavadora = obtenerEntrada("Por favor, ingrese el tipo de lavadora que desea alquilar, 1 o 2:");
        var cantidad = obtenerEntrada("Por favor, ingrese el número de lavadoras que desea alquilar:");
        var horas = obtenerEntrada("Ingrese cuántas horas desea alquilar las lavadoras:");

        if (isNaN(tipoLavadora) || isNaN(cantidad) || isNaN(horas) || tipoLavadora <= 0 || cantidad <= 0 || horas <= 0) {
            mostrarMensaje("Por favor, ingrese valores válidos.");
        } else if (tipoLavadora !== 1 && tipoLavadora !== 2) {
            mostrarMensaje("Tipo de lavadora no válido.");
        } else {
            var costo = calcularCosto(tipoLavadora, cantidad, horas);
            mostrarMensaje("Costo total por alquilar " + cantidad + " lavadoras tipo " + tipoLavadora + " por " + horas + " horas: $" + costo + ".");
        }

        var continuar = prompt("¿Desea realizar otra operación? (sí / no):").toLowerCase();
    } while (continuar === "sí");
}

ejecutar();
