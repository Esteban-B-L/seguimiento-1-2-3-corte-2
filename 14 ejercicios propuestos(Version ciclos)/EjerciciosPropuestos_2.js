let continuar;

do {
    
    let numero = parseInt(prompt("Por favor ingrese un número:"), 10);

    if (!isNaN(numero)) {
        if (numero % 2 === 0) {
            alert("Es un número par.");
        } else {
            alert("No es un número par.");
        }
    } else {
        alert("Por favor ingrese un valor numérico válido.");
    }

    continuar = prompt("¿Desea verificar otro número? (sí / no):").toLowerCase();
} while (continuar === "sí");
