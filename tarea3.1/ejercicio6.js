/*Un supermercado ha puesto en oferta la venta al por mayor de cierto producto, ofreciendo un descuento del 15% por la compra de más de 3 docenas y 10% en caso contrario. Además por la compra de más de 3 docenas se obsequia una unidad del producto por cada docena en exceso sobre 3. Diseñe un algoritmo que determine el monto de la compra, el monto del descuento, el monto a pagar y el número de unidades de obsequio por la compra de cierta cantidad de docenas del producto.  */

const prompt = require('prompt-sync')();

// Solicitar el precio por docena y la cantidad de docenas compradas
const precioPorDocena = parseFloat(prompt("Ingrese el precio por docena del producto: "));
const cantidadDocenas = parseInt(prompt("Ingrese la cantidad de docenas compradas: "));

// Validar la entrada del usuario
if (isNaN(precioPorDocena) || isNaN(cantidadDocenas) || precioPorDocena <= 0 || cantidadDocenas <= 0) {
    console.log("Por favor, ingrese valores válidos.");
} else {
    // Calcular el monto de la compra
    const montoCompra = precioPorDocena * cantidadDocenas;

    // Calcular el descuento
    let descuento;
    if (cantidadDocenas > 3) {
        descuento = montoCompra * 0.15;
    } else {
        descuento = montoCompra * 0.10;
    }

    // Calcular el monto a pagar
    const montoAPagar = montoCompra - descuento;

    // Calcular las unidades de obsequio
    let unidadesObsequio = 0;
    if (cantidadDocenas > 3) {
        unidadesObsequio = (cantidadDocenas - 3) * 12; // 12 unidades por docena en exceso
    }

    // Mostrar los resultados
    console.log(`Monto de la compra: $/. ${montoCompra.toFixed(2)}`);
    console.log(`Monto del descuento: $/. ${descuento.toFixed(2)}`);
    console.log(`Monto a pagar: $/. ${montoAPagar.toFixed(2)}`);
    console.log(`Unidades de obsequio: ${unidadesObsequio}`);
}