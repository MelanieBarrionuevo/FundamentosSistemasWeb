/*Diseñe un algoritmo que determine quienes son contemporáneos entre Juan, Mario y Pedro. */
const prompt = require('prompt-sync')();

// Solicitar años de nacimiento
const anioJuan = parseInt(prompt("Ingrese el año de nacimiento de Juan: "));
const anioMario = parseInt(prompt("Ingrese el año de nacimiento de Mario: "));
const anioPedro = parseInt(prompt("Ingrese el año de nacimiento de Pedro: "));

// Validar entradas
if (
    isNaN(anioJuan) || isNaN(anioMario) || isNaN(anioPedro) ||
    anioJuan <= 0 || anioMario <= 0 || anioPedro <= 0
) {
    console.log("Por favor, ingrese años de nacimiento válidos.");
} else {
    if (
        (anioJuan - anioMario <= 10 && anioJuan - anioMario >= -10) &&
        (anioJuan - anioPedro <= 10 && anioJuan - anioPedro >= -10) &&
        (anioMario - anioPedro <= 10 && anioMario - anioPedro >= -10)
    ) {
        console.log("Juan, Mario y Pedro son contemporáneos.");
    } else if (anioJuan - anioMario <= 10 && anioJuan - anioMario >= -10) {
        console.log("Juan y Mario son contemporáneos.");
    } else if (anioJuan - anioPedro <= 10 && anioJuan - anioPedro >= -10) {
        console.log("Juan y Pedro son contemporáneos.");
    } else if (anioMario - anioPedro <= 10 && anioMario - anioPedro >= -10) {
        console.log("Mario y Pedro son contemporáneos.");
    } else {
        console.log("Ninguno de ellos es contemporáneo.");
    }
}
