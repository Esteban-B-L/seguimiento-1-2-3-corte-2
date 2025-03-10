let datos = ["género (femenino o masculino)", "edad"];
let entradas = [];
for (let i = 0; i < datos.length; i++) {
    entradas[i] = prompt(`Ingrese su ${datos[i]}:`);
}

let genero = entradas[0];
let edad = parseFloat(entradas[1]);

let ayuda;

if (genero === "femenino") {
    if (edad > 50) {
        ayuda = 120000;
    } else if (edad >= 30 && edad <= 50) {
        ayuda = 100000;
    } else {
        ayuda = 0;
    }
} else if (genero === "masculino") {
    ayuda = 40000;
} else {
    ayuda = 0;
}

alert(`El valor de ayuda mensual es: $${ayuda}.`);
