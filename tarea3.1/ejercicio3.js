/*Escribir un programa para una empresa que tiene salas de juegos para todas las edades y quiere calcular de forma automática el precio que debe cobrar a sus clientes por entrar. El programa debe preguntar al usuario la edad del cliente y mostrar el precio de la entrada. Si el cliente es menor de 4 años puede entrar gratis, si tiene entre 4 y 18 años debe pagar 5€ y si es mayor de 18 años, 10€. */
const prompt = require('prompt-sync')();

// Solicitar la edad del cliente
const edad = parseInt(prompt("Por favor, ingrese su edad:"));

// Validar la entrada del usuario
if (isNaN(edad) || edad < 0) {
    console.log("Por favor, ingrese una edad válida.");
} else {
    // Calcular el precio de la entrada
    let precio;
    if (edad < 4) {
        precio = "gratis";
    } else if (edad >= 4 && edad <= 18) {
        precio = "5€";
    } else {
        precio = "10€";
    }

    // Mostrar el precio de la entrada
    console.log(`El precio de la entrada es: ${precio}`);
}
