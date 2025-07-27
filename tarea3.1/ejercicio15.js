/*En un circuito eléctrico hay tres interruptores, los cuales pueden estar en estado cerrado(1) o abierto(0).
Interruptores de focos
Para que un equipo funcione, se requiere que al menos dos estén cerrados. Si los datos son el estado de los interruptores, determine si el equipo funcionara */

const prompt = require('prompt-sync')();

// Solicitar el estado de los tres interruptores
const interruptor1 = parseInt(prompt("Ingrese el estado del interruptor 1 (1 para cerrado, 0 para abierto): "));
const interruptor2 = parseInt(prompt("Ingrese el estado del interruptor 2 (1 para cerrado, 0 para abierto): "));
const interruptor3 = parseInt(prompt("Ingrese el estado del interruptor 3 (1 para cerrado, 0 para abierto): "));

// Validar las entradas
if (
    (interruptor1 !== 0 && interruptor1 !== 1) ||
    (interruptor2 !== 0 && interruptor2 !== 1) ||
    (interruptor3 !== 0 && interruptor3 !== 1)
) {
    console.log("Por favor, ingrese estados válidos (1 para cerrado, 0 para abierto).");
} else {
    // Contar cuántos interruptores están cerrados usando un ciclo simple
    const estados = [interruptor1, interruptor2, interruptor3];
    let cerrados = 0;
    for (let i = 0; i < estados.length; i++) {
        if (estados[i] === 1) {
            cerrados++;
        }
    }

    // Determinar si el equipo funcionará
    if (cerrados >= 2) {
        console.log("El equipo funcionará.");
    } else {
        console.log("El equipo no funcionará.");
    }
}