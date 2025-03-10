let continuar = true;

while (continuar) {

    let Name = prompt("Por favor, ingrese su nombre:");
    let Horas = parseInt(prompt("Por favor, ingrese el número de horas trabajadas:"), 10);

    if (isNaN(Horas) || Horas <= 0) {
        alert("Por favor, ingrese un número válido de horas trabajadas.");
    } else {
        
        let Salario;
        if (Horas <= 10) {
            Salario = Horas * 30000;
        } else {
            Salario = Horas * 33000;
        }

        alert(`Señor/a ${Name}, el número de horas trabajadas es ${Horas} y su salario equivale a $${Salario}.`);
    }

    let respuesta = prompt("¿Desea calcular el salario de otra persona? (sí / no):").toLowerCase();
    if (respuesta !== "sí") {
        continuar = false;
        alert("Gracias por usar el programa. ¡Hasta luego!");
    }
}
