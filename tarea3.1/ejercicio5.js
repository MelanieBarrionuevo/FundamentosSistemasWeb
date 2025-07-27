/*En un estacionamiento cobran $/. 1.500 por hora o fracción. Diseñe un algoritmo que determine cuanto debe pagar un cliente por el estacionamiento de su vehículo, conociendo el tiempo de estacionamiento en horas y minutos */

const prompt = require('prompt-sync')();

// Solicitar el tiempo de estacionamiento en horas y minutos
const horas = parseInt(prompt("Ingrese las horas de estacionamiento: "));
const minutos = parseInt(prompt("Ingrese los minutos de estacionamiento: "));

// Validar la entrada del usuario
if (isNaN(horas) || isNaN(minutos) || horas < 0 || minutos < 0 || minutos >= 60) {
    console.log("Por favor, ingrese un tiempo válido.");
} else {
    // Calcular el costo total
    let totalHoras = horas;
    if (minutos > 0) {
        totalHoras += 1; // Se cobra una hora adicional por fracción
    }
    const costo = totalHoras * 1500;

    // Mostrar el costo total
    console.log(`El costo total por el estacionamiento es: $/. ${costo}`);
}