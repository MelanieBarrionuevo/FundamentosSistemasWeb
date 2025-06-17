function calcularPago(){
    const numero = parseInt(document.getElementById("numero").value);
    const tipo = document.getElementById("tipo").value;
    const pago = document.getElementById("pago").value;
    const resultado = document.getElementById("resultadoHamburguesa");

    //validaciones con vacio
    if (isNaN(numero)) {
        resultado.innerHTML = "Por favor, completa todos los campos correctamente.";
        return;
    }
    //validaciones con negativos
    if (numero < 0 ) {
        resultado.innerHTML = "Los valores no pueden ser negativos.";
        return;
    }
    //validaciones con cero
    if (numero === 0) {
        resultado.innerHTML = "Los valores no pueden ser cero.";
        return;
    }

    //calculo del pago
    let precio = 0;
    if (tipo === "S") {
        precio = 20;
        if (pago === "1"){
            precio *=1.05;
        }
    } else if (tipo === "D") {
        precio = 25;
        if (pago === "1"){
            precio *=1.05;
        }
    } else if (tipo === "T") {
        precio = 28;
        if (pago === "1"){
            precio *=1.05;
        }
    } else {
        resultado.innerHTML = "Tipo de hamburguesa no válido.";
        return;
    }

    let total = 0;
    total = precio * numero;

    resultado.innerHTML = `Tipo de hamburguesa: ${tipo}
    <br>Cantidad: ${numero}
    <br>Precio por hamburguesa: $${precio.toFixed(2)}
    <br>Total a pagar: $${total.toFixed(2)}`;
}