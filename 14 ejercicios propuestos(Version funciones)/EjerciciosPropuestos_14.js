function obtenerTamaño() {
    let tamaño;
    do {
        tamaño = prompt("Ingrese el tamaño del sándwich (pequeño o grande):").toLowerCase();
    } while (tamaño !== "pequeño" && tamaño !== "grande");
    return tamaño;
}

function obtenerAdicional(mensaje) {
    return prompt(mensaje).toLowerCase() === "si" ? true : false;
}

function calcularCosto(tamaño, tocineta, jalapeno, pavo, queso) {
    let costo = tamaño === "pequeño" ? 6000 : 12000;
    if (tocineta) costo += 3000;
    if (jalapeno) costo += 2000;
    if (pavo) costo += 3000;
    if (queso) costo += 2500;
    return costo;
}

function mostrarResultado(costo) {
    alert(`El valor a pagar por el sándwich es: $${costo}`);
}

let tamaño = obtenerTamaño();
let tocineta = obtenerAdicional("¿Desea agregar tocineta? (si/no):");
let jalapeno = obtenerAdicional("¿Desea agregar jalapeño? (si/no):");
let pavo = obtenerAdicional("¿Desea agregar pavo? (si/no):");
let queso = obtenerAdicional("¿Desea agregar queso? (si/no):");
let costo = calcularCosto(tamaño, tocineta, jalapeno, pavo, queso);
mostrarResultado(costo);
