/**Un alumno desea saber cual será su calificación final en cierta materia. Dicha calificación se compone de lo siguiente:
60% corresponde al examen escrito.
20% corresponde a las lecciones
15% corresponde a las tareas.
5% corresponde a las prácticas en el laboratorio 
El dato del examen escrito es un valor entre 0 y 100 y los otros datos son valores entre 0 y 10. La calificación final debe ser un valor entre 0 y 20.*/


const prompt = require('prompt-sync')();

// Solicitar las calificaciones parciales
const examenEscrito = parseFloat(prompt("Ingrese la calificación del examen escrito (0-100): "));
const lecciones = parseFloat(prompt("Ingrese la calificación de las lecciones (0-10): "));
const tareas = parseFloat(prompt("Ingrese la calificación de las tareas (0-10): "));
const practicasLaboratorio = parseFloat(prompt("Ingrese la calificación de las prácticas en el laboratorio (0-10): "));

// Validar las entradas
if (
    isNaN(examenEscrito) || isNaN(lecciones) || isNaN(tareas) || isNaN(practicasLaboratorio) ||
    examenEscrito < 0 || examenEscrito > 100 ||
    lecciones < 0 || lecciones > 10 ||
    tareas < 0 || tareas > 10 ||
    practicasLaboratorio < 0 || practicasLaboratorio > 10
) {
    console.log("Por favor, ingrese calificaciones válidas. El examen escrito debe estar entre 0 y 100, y los demás valores entre 0 y 10.");
} else {
    // Convertir las calificaciones al rango de 0 a 20
    const examenEscritoConvertido = (examenEscrito / 100) * 20;
    const leccionesConvertido = lecciones * 2;
    const tareasConvertido = tareas * 2;
    const practicasLaboratorioConvertido = practicasLaboratorio * 2;

    // Calcular la calificación final
    const calificacionFinal =
        (examenEscritoConvertido * 0.60) +
        (leccionesConvertido * 0.20) +
        (tareasConvertido * 0.15) +
        (practicasLaboratorioConvertido * 0.05);

    // Mostrar la calificación final
    console.log(`La calificación final del alumno es: ${calificacionFinal.toFixed(2)}`);
}