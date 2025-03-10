let numeroModelo;
const modelosDefectuosos = [119, 179, 189, 190, 191, 192, 193, 194, 195, 221, 780];

while (true) {
    numeroModelo = Number(prompt("Ingrese el número de modelo de su carro:"));

    if (isNaN(numeroModelo) || numeroModelo <= 0) {
        alert("Por favor, ingrese un número válido.");
    } else {
        if (modelosDefectuosos.includes(numeroModelo)) {
            alert("El automóvil está defectuoso, llevar a garantía.");
        } else {
            alert("Su automóvil no está defectuoso.");
        }
        break;
    }
}
