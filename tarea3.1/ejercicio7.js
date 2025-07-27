// Programa para determinar si un número de tres cifras es igual al revés del número 

const prompt = require('prompt-sync')();

// Solicitar un número de tres cifras
const numero = prompt("Ingrese un número de tres cifras: ");

// Validar la entrada del usuario
if (numero.length !== 3 || isNaN(numero)) {
    console.log("Por favor, ingrese un número válido de tres cifras.");
} else {
    // Determinar si el número es igual al revés 
    const numeroReverso = numero[2] + numero[1] + numero[0];
    if (numero === numeroReverso) {
        console.log(`El número ${numero} es igual al revés (${numeroReverso}).`);
    } else {
        console.log(`El número ${numero} no es igual al revés (${numeroReverso}).`);
    }
}