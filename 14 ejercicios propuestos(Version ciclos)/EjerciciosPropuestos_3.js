do {
   
    let TipoLavadora = parseInt(prompt("Por favor, ingrese el tipo de lavadora que desea alquilar, 1 o 2:"), 10);

    let cantidad = parseInt(prompt("Por favor, ingrese el número de lavadoras que desea alquilar:"), 10);

    let horas = parseInt(prompt("Ingrese cuántas horas desea alquilar las lavadoras:"), 10);

    if (isNaN(TipoLavadora) || isNaN(cantidad) || isNaN(horas) || TipoLavadora <= 0 || cantidad <= 0 || horas <= 0) {
        alert("Por favor, ingrese valores válidos.");
    } else {
        let costo;

        if (TipoLavadora === 1) {
            costo = horas * 4000;
            if (cantidad > 3) {
                costo -= costo * 3 / 100;
            }
        } else if (TipoLavadora === 2) {
            costo = horas * 3000;
            if (cantidad > 3) {
                costo -= costo * 3 / 100;
            }
        } else {
            alert("Tipo de lavadora no válido.");
            continue;
        }

        alert(`Costo total por alquilar ${cantidad} lavadoras tipo ${TipoLavadora} por ${horas} horas: $${costo}.`);
    }

    var continuar = prompt("¿Desea realizar otra operación? (sí / no):").toLowerCase();
} while (continuar === "sí");
