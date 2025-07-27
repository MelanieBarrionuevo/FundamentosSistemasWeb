/*Una compañía dedicada al alquiler de automoviles cobra un monto fijo de $300000 para los primeros 300 km de recorrido. Para más de 300 km y hasta 1000 km, cobra un monto adicional de $ 15.000 por cada kilómetro en exceso sobre 300. Para más de 1000 km cobra un monto adicional de $ 10.000 por cada kilómetro en exceso sobre 1000. Los precios ya incluyen el 20% del impuesto general a las ventas, IVA. Diseñe un algoritmo que determine el monto a pagar por el alquiler de un vehículo y el monto incluído del impuesto. */

const prompt = require('prompt-sync')();

// Solicitar la cantidad de kilómetros recorridos
const kilometros = parseFloat(prompt("Ingrese la cantidad de kilómetros recorridos: "));

// Validar la entrada del usuario
if (isNaN(kilometros) || kilometros < 0) {
    console.log("Por favor, ingrese una cantidad válida de kilómetros.");
} else {
    let montoTotal = 300000; // Monto fijo para los primeros 300 km

    if (kilometros > 300 && kilometros <= 1000) {
        montoTotal += (kilometros - 300) * 15000;
    } else if (kilometros > 1000) {
        montoTotal += (1000 - 300) * 15000; // Costo adicional por los km entre 300 y 1000
        montoTotal += (kilometros - 1000) * 10000; // Costo adicional por los km por encima de 1000
    }

    // Calcular el monto del IVA incluido
    const montoIVA = montoTotal * 0.20;

    // Mostrar los resultados
    console.log(`Monto total a pagar: $/. ${montoTotal.toFixed(2)}`);
    console.log(`Monto incluido del IVA (20%): $/. ${montoIVA.toFixed(2)}`);
}