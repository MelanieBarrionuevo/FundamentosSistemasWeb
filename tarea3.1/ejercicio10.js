/** Un comerciante compra un artículo a un costo dado. Determine el precio al cual debe venderlo si desea ganar el 15%. */

const prompt = require('prompt-sync')();

// Solicitar el costo del artículo
const costo = parseFloat(prompt("Ingrese el costo del artículo: "));

// Validar la entrada del usuario
if (isNaN(costo) || costo <= 0) {
    console.log("Por favor, ingrese un costo válido.");
} else {
    // Calcular el precio de venta
    const precioVenta = costo * 1.15;

    // Mostrar el precio de venta
    console.log(`El precio de venta del artículo para obtener una ganancia del 15% es: $/. ${precioVenta.toFixed(2)}`);
}