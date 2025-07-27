/*En un almacén se rebaja 10% del precio al cliente si compra mas de 20 artículos y 5% si compra hasta 20 artículos pero más de 10. Dado el precio unitario de un artículo y la cantidad adquirida, muestre lo que debe pagar el cliente . */

const prompt = require('prompt-sync')();

// Solicitar el precio unitario y la cantidad de artículos
const precioUnitario = parseFloat(prompt("Ingrese el precio unitario del artículo: "));
const cantidad = parseInt(prompt("Ingrese la cantidad de artículos comprados: "));

// Validar las entradas
if (isNaN(precioUnitario) || isNaN(cantidad) || precioUnitario <= 0 || cantidad <= 0) {
    console.log("Por favor, ingrese valores válidos para el precio y la cantidad.");
} else {
    // Calcular el monto total sin descuento
    let montoTotal = precioUnitario * cantidad;

    // Aplicar el descuento según la cantidad
    if (cantidad > 20) {
        montoTotal *= 0.90; // Descuento del 10%
    } else if (cantidad > 10) {
        montoTotal *= 0.95; // Descuento del 5%
    }

    // Mostrar el monto total a pagar
    console.log(`El monto total a pagar es: $/. ${montoTotal.toFixed(2)}`);
}