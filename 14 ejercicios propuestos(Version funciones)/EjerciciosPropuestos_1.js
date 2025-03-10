function obtenerNombre() {
    return prompt("Por favor, ingrese su nombre:");
}

function obtenerHoras() {
    let Horas;
    do {
        Horas = parseInt(prompt("Por favor, ingrese el número de horas trabajadas:"), 10);
        if (isNaN(Horas) || Horas <= 0) {
            alert("Por favor, ingrese un número válido de horas trabajadas.");
        }
    } while (isNaN(Horas) || Horas <= 0);
    return Horas;
}

function calcularSalario(Horas) {
    if (Horas <= 10) {
        return Horas * 30000;
    } else {
        return Horas * 33000;
    }
}

function mostrarResultado(Name, Horas, Salario) {
    alert(`Señor/a ${Name}, el número de horas trabajadas es ${Horas} y su salario equivale a $${Salario}.`);
}

function deseaContinuar() {
    let respuesta = prompt("¿Desea calcular el salario de otra persona? (sí / no):").toLowerCase();
    return respuesta === "sí";
}

let continuar = true;

while (continuar) {
    let Name = obtenerNombre();
    let Horas = obtenerHoras();
    let Salario = calcularSalario(Horas);

    mostrarResultado(Name, Horas, Salario);

    continuar = deseaContinuar();
}
