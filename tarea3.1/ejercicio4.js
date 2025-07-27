/*La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los ingredientes para cada tipo de pizza aparecen a continuación.
Ingredientes vegetarianos: Pimiento y tofu.
Ingredientes no vegetarianos: Peperoni, Jamón y Salmón.
Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en función de su respuesta le muestre un menú con los ingredientes disponibles para que elija. Solo se puede eligir un ingrediente además de la mozzarella y el tomate que están en todas la pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana o no y todos los ingredientes que lleva. */

const prompt = require('prompt-sync')();

// Preguntar al usuario si quiere una pizza vegetariana o no
const esVegetariana = prompt("¿Quiere una pizza vegetariana? (s/n): ").toLowerCase();

// Ingredientes disponibles
const ingredientesVegetarianos = ["Pimiento", "Tofu"];
const ingredientesNoVegetarianos = ["Peperoni", "Jamón", "Salmón"];

let ingredientesSeleccionados = ["Mozzarella", "Tomate"];

if (esVegetariana === "s") {
    console.log("Ingredientes vegetarianos disponibles:");
    for (let i = 0; i < ingredientesVegetarianos.length; i++) {
        console.log(`${i + 1}. ${ingredientesVegetarianos[i]}`);
    }
    const eleccion = parseInt(prompt("Elija un ingrediente (1 o 2): "));
    if (eleccion === 1 || eleccion === 2) {
        ingredientesSeleccionados = [ingredientesSeleccionados[0], ingredientesSeleccionados[1], ingredientesVegetarianos[eleccion - 1]];
        console.log(`Ha elegido una pizza vegetariana con: ${ingredientesSeleccionados.join(", ")}`);
    } else {
        console.log("Opción no válida.");
    }
} else if (esVegetariana === "n") {
    console.log("Ingredientes no vegetarianos disponibles:");
    let i = 0;
    while (i < ingredientesNoVegetarianos.length) {
        console.log(`${i + 1}. ${ingredientesNoVegetarianos[i]}`);
        i++;
    }
    const eleccion = parseInt(prompt("Elija un ingrediente (1, 2 o 3): "));
    if (eleccion >= 1 && eleccion <= 3) {
        ingredientesSeleccionados = [ingredientesSeleccionados[0], ingredientesSeleccionados[1], ingredientesNoVegetarianos[eleccion - 1]];
        console.log(`Ha elegido una pizza no vegetariana con: ${ingredientesSeleccionados.join(", ")}`);
    } else {
        console.log("Opción no válida.");
    }
} else {
    console.log("Respuesta no válida. Por favor, responda 's' o 'n'.");
}