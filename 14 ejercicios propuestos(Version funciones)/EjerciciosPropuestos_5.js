function obtenerNota(materia) {
    return parseFloat(prompt("Ingrese su calificación en " + materia + " (0-10):"));
}

function calcularSuma(fisica, quimica, biologia, matematicas, informatica) {
    return fisica + quimica + biologia + matematicas + informatica;
}

function calcularPorcentaje(suma) {
    return (suma / 50) * 100;
}

function determinarCalificacion(porcentaje) {
    if (porcentaje >= 0 && porcentaje <= 59.9) {
        return "Mala";
    } else if (porcentaje >= 60 && porcentaje <= 80) {
        return "Buena";
    } else if (porcentaje > 80) {
        return "Excelente";
    } else {
        return "Inválida";
    }
}

function ejecutar() {
    var fisica = obtenerNota("Física");
    var quimica = obtenerNota("Química");
    var biologia = obtenerNota("Biología");
    var matematicas = obtenerNota("Matemáticas");
    var informatica = obtenerNota("Informática");

    var sumaCalificaciones = calcularSuma(fisica, quimica, biologia, matematicas, informatica);
    var porcentaje = calcularPorcentaje(sumaCalificaciones);
    var calificacion = determinarCalificacion(porcentaje);

    alert("Tu porcentaje es " + porcentaje + "% y tu calificación es " + calificacion + ".");
}

ejecutar();
