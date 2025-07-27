/*Una frutería ofrece las manzanas con descuento según la siguiente tabla:
Dado el precio por kilo, y el peso, determinar cuánto pagará una persona que compre manzanas es esa frutería.*/
const prompt = require('prompt-sync')();

// Solicitar el precio por kilo y el peso comprado
const precioPorKilo = parseFloat(prompt("Ingrese el precio por kilo de manzanas: "));
const peso = parseFloat(prompt("Ingrese el peso de las manzanas compradas (en kilos): "));

// Validar las entradas
if (isNaN(precioPorKilo) || isNaN(peso) || precioPorKilo <= 0 || peso <= 0) {
    console.log("Por favor, ingrese valores válidos para el precio y el peso.");
} else {
    let descuento = 0;
    if (peso > 2.01 && peso <= 5) {
        descuento = 10;
    } else if (peso > 5.01 && peso <= 10) {
        descuento = 15;
    } else if (peso > 10.01) {
        descuento = 20;
    }

    // Calcular el monto total sin descuento
    let montoTotal = precioPorKilo * peso;

    // Aplicar el descuento
    montoTotal -= (montoTotal * descuento) / 100;

    // Mostrar el monto total a pagar
    console.log(`El monto total a pagar es: $/. ${montoTotal.toFixed(2)}`);
}