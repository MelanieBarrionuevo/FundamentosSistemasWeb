//Los alumnos de un curso se han dividido en dos grupos A y B de acuerdo al sexo y el nombre. El grupo A esta formado por las mujeres con un nombre anterior a la M y los hombres con un nombre posterior a la N y el grupo B por el resto. Escribir un programa que pregunte al usuario su nombre y sexo, y muestre por pantalla el grupo que le corresponde.

let prompt = require('prompt-sync')();
let nombre = prompt("Ingrese su nombre: ");
let sexo = prompt("Ingrese su sexo (M/F): ").toUpperCase();

if (sexo !== 'M' && sexo !== 'F') {
    console.log("Sexo no válido. Por favor ingrese 'M' o 'F'.");
    process.exit(1);
}

let grupo;

if (sexo === 'F' && nombre < 'M') {
    grupo = 'A';
} else if (sexo === 'M' && nombre > 'N') {
    grupo = 'A';
} else {
    grupo = 'B';
}

console.log(`El grupo que le corresponde es: ${grupo}`);