function contarFocos() {
    const numeroInput = document.getElementById('numero').value.trim();
    const n = parseInt(numeroInput, 10);
    const coloresInput = document.getElementById('colores').value.trim();
    const resultadoDiv = document.getElementById('resultadoFocos');

    if (!numeroInput || isNaN(n) || n <= 0) {
        resultadoDiv.textContent = "Ingrese un número válido de focos (mayor que 0).";
        return;
    }

    if (!coloresInput) {
        resultadoDiv.textContent = "Ingrese los colores de los focos.";
        return;
    }

    const colores = coloresInput.split(',').map(c => c.trim().toUpperCase());
    if (colores.length !== n) {
        resultadoDiv.textContent = `Debe ingresar exactamente ${n} colores.`;
        return;
    }

    // Validar que solo sean V, R o B
    for (let color of colores) {
        if (!["V", "R", "B"].includes(color)) {
            resultadoDiv.textContent = "Solo se permiten los colores V, R o B.";
            return;
        }
    }

    let verdes = 0, blancos = 0, rojos = 0;
    for (let i = 0; i < colores.length; i++) {
        if (colores[i] === "V") verdes++;
        else if (colores[i] === "B") blancos++;
        else if (colores[i] === "R") rojos++;
    }

    resultadoDiv.innerHTML = `
        Verdes: ${verdes} <br>
        Blancos: ${blancos} <br>
        Rojos: ${rojos}
    `;
}