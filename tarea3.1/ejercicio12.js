/*En un almacén se descuenta 20% del precio al cliente si el valor a pagarse es mayor a $200. Dado un valor de precio, muestre lo que debe pagar el cliente. */

const prompt = require('prompt-sync')();

// Solicitar el precio del artículo
const precio = parseFloat(prompt("Ingrese el precio del artículo: "));

// Validar la entrada
if (isNaN(precio) || precio <= 0) {
    console.log("Por favor, ingrese un precio válido.");
} else {
    // Aplicar el descuento si el precio supera $200
    let montoTotal = precio;
    if (precio > 200) {
        montoTotal *= 0.80; // Descuento del 20%
    }

    // Mostrar el monto total a pagar
    console.log(`El monto total a pagar es: $/. ${montoTotal.toFixed(2)}`);
}