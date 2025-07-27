/*Escribir un programa que pregunte al usuario su renta anual y muestre por pantalla el tipo impositivo que le corresponde. */

const prompt = require('prompt-sync')();

let renta = parseFloat(prompt('Ingrese su renta anual: '));

if (renta < 10000) {
    console.log('El tipo impositivo que le corresponde es del 5%.');
} else if (renta >= 10000 && renta < 20000) {
    console.log('El tipo impositivo que le corresponde es del 15%.');
} else if (renta >= 20000 && renta < 35000) {
    console.log('El tipo impositivo que le corresponde es del 20%.');
} else if (renta >= 35000 && renta < 60000) {
    console.log('El tipo impositivo que le corresponde es del 30%.');
} else {
    console.log('El tipo impositivo que le corresponde es del 45%.');
}

if (isNaN(renta) || renta < 0) {
    console.log("Por favor, ingrese un valor numérico válido para la renta.");
} 

