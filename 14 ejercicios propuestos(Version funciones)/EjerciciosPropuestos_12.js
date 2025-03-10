function obtenerModelo() {
    return Number(prompt("Ingrese el número de modelo de su carro:"));
}

function esModeloDefectuoso(modelo, modelosDefectuosos) {
    return modelosDefectuosos.includes(modelo);
}

function ejecutar() {
    const modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];
    var numeroModelo;

    while (true) {
        numeroModelo = obtenerModelo();
        
        if (isNaN(numeroModelo) || numeroModelo <= 0) {
            alert("Por favor, ingrese un número válido.");
        } else {
            if (esModeloDefectuoso(numeroModelo, modelosDefectuosos)) {
                alert("El automóvil está defectuoso, llevar a garantía.");
            } else {
                alert("Su automóvil no está defectuoso.");
            }
            break;
        }
    }
}

ejecutar();
