let tamaño;
do {
    tamaño = prompt("Ingrese el tamaño del sándwich (pequeño o grande):").toLowerCase();
    if (tamaño !== "pequeño" && tamaño !== "grande") {
        alert("Tamaño no válido. Por favor ingrese 'pequeño' o 'grande'.");
    }
} while (tamaño !== "pequeño" && tamaño !== "grande");

let tocineta = prompt("¿Desea agregar tocineta? (si/no):").toLowerCase();
let jalapeno = prompt("¿Desea agregar jalapeño? (si/no):").toLowerCase();
let pavo = prompt("¿Desea agregar pavo? (si/no):").toLowerCase();
let queso = prompt("¿Desea agregar queso? (si/no):").toLowerCase();

let costo = tamaño === "pequeño" ? 6000 : 12000;

if (tocineta === "si") {
    costo += 3000;
}
if (jalapeno === "si") {
    costo += 2000;
}
if (pavo === "si") {
    costo += 3000;
}
if (queso === "si") {
    costo += 2500;
}

alert(`El valor a pagar por el sándwich es: $${costo}`);
