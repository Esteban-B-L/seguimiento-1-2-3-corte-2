let fisica = parseFloat(prompt("Ingrese su calificación en Física (0-10):"));
let quimica = parseFloat(prompt("Ingrese su calificación en Química (0-10):"));
let biologia = parseFloat(prompt("Ingrese su calificación en Biología (0-10):"));
let matematicas = parseFloat(prompt("Ingrese su calificación en Matemáticas (0-10):"));
let informatica = parseFloat(prompt("Ingrese su calificación en Informática (0-10):"));

let sumaCalificaciones = 0;
let i = 0;

do {
    sumaCalificaciones = fisica + quimica + biologia + matematicas + informatica;
    i++;
} while (i < 1);

let porcentaje = (sumaCalificaciones / 50) * 100;

let calificacion;

if (porcentaje >= 0 && porcentaje <= 59.9) {
    calificacion = "Mala";
} else if (porcentaje >= 60 && porcentaje <= 80) {
    calificacion = "Buena";
} else if (porcentaje > 80) {
    calificacion = "Excelente";
} else {
    calificacion = "Inválida";
}

alert(`Tu porcentaje es ${porcentaje}% y tu calificación es ${calificacion}.`);
