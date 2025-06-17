function calcularAhorro() {
    let ahorroDia = 3; // 3 centavos de dólar el primer día
    let total = 0;
    let mensaje = "";
    for (let dia = 1; dia <= 365; dia++) {
        mensaje += `Día ${dia}: $${ahorroDia.toFixed(2)}<br>`;
        total += ahorroDia;
        ahorroDia *= 3;
    }
    mensaje += `<br><strong>Total ahorrado en el año: $${total.toFixed(2)}</strong>`;
    document.getElementById('infoAhorro').innerHTML = mensaje;
}