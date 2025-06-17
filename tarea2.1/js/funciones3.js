function generarCampos() {
    const n = parseInt(document.getElementById('cantidadN').value);
    const camposDiv = document.getElementById('camposNumeros');
    const btnCalcular = document.getElementById('btnCalcular');
    camposDiv.innerHTML = '';
    if (isNaN(n) || n < 1) {
        btnCalcular.hidden = true;
        return;
    }
    for (let i = 0; i < n; i++) {
        camposDiv.innerHTML += `<input type="number" name="numero" required placeholder="Número ${i + 1}"><br>`;
    }
    btnCalcular.hidden = false;
}

function contarNumeros() {
    const numerosInput = document.getElementById('numeros').value.trim();
    const resultadoDiv = document.getElementById('resultadoNumeros');

    // Validar que solo se ingresen números, comas y el signo -
    if (!/^[\d,\s\-]+$/.test(numerosInput)) {
        resultadoDiv.textContent = "Solo se permiten números, comas y el signo menos (-).";
        return;
    }

    if (!numerosInput) {
        resultadoDiv.textContent = "Ingrese los números.";
        return;
    }

    const numeros = numerosInput.split(',').map(n => Number(n.trim()));
    let ceros = 0, menores = 0, mayores = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] === 0) ceros++;
        else if (numeros[i] < 0) menores++;
        else if (numeros[i] > 0) mayores++;
    }
    resultadoDiv.innerHTML = `
        Ceros: ${ceros} <br>
        Menores a cero: ${menores} <br>
        Mayores a cero: ${mayores}
    `;
}
