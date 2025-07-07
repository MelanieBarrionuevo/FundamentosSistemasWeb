function calcularBtn(){
    // Obtener el valor del input id="arrayInput"
    const input = document.getElementById('arrayInput').value;
    
    // Convertir el texto en un arreglo de números
    // -split(",") separa por comas el string
    // -trim() elimina los espacios
    // parse convertir a numero
    // -map() aplica una función a cada elemento del arreglo
    const numero = input.split(",").map(x => parseFloat(x.trim()));

    //presentar el resultado en el div id="resultado"
    const resultado = document.getElementById('resultado');

    //logica
    //verificar si son exactamente 10 numeros
    //verificar si algun elemento no es un numero
    if (numero.length !== 10 || numero.some(isNaN)) {
        resultado.textContent = "Por favor, ingresa exactamente 10 números válidos separados por comas.";
        //cambiar el div alerta
        resultado.className = "alert alert-danger";
    }
    else {
        // Calcular la suma de los números
        //const suma = numero.reduce((a, b) => a + b, 0);

        //calculo utilizando un for
        let suma = 0;
        for (let i = 0; i < numero.length; i++) {
             suma += numero[i];
        }

        
        // Mostrar el resultado
        resultado.textContent = `La suma de los números es: ${suma}`;
        resultado.className = "alert alert-success";
    }
}

function calcularVector() {
    const inputA = document.getElementById('arrayInput').value;
    const inputB = document.getElementById('arrayInputB').value;
    const resultado = document.getElementById('resultado');

    const vectorA = inputA.split(',').map(x => parseFloat(x.trim()));
    const vectorB = inputB.split(',').map(x => parseFloat(x.trim()));

    // Validaciones
    if (vectorA.length !== vectorB.length || vectorA.some(isNaN) || vectorB.some(isNaN)) {
        resultado.textContent = "Ambos vectores deben tener la misma cantidad de números válidos.";
        resultado.className = "alert alert-danger";
        return;
    }

    const N = vectorA.length;
    const vectorC = [];

    // Ciclo for para sumar elementos
    for (let i = 0; i < N; i++) {
        vectorC.push(vectorA[i] + vectorB[i]);
    }

    // Puedes probar también con while o do...while así:
    /*
    let i = 0;
    while (i < N) {
        vectorC.push(vectorA[i] + vectorB[i]);
        i++;
    }
    */

    /*
    let i = 0;
    do {
        vectorC.push(vectorA[i] + vectorB[i]);
        i++;
    } while (i < N);
    */

    resultado.textContent = `Vector resultante (A + B): [${vectorC.join(', ')}]`;
    resultado.className = "alert alert-success";
}

function capturarAlumnos() {
    const cantidad = parseInt(document.getElementById('cantidad').value);
    const contenedor = document.getElementById('formulario');
    const botonOrdenar = document.getElementById('btnOrdenar');
    const resultado = document.getElementById('resultado');

    contenedor.innerHTML = "";
    resultado.textContent = "";
    botonOrdenar.classList.add('d-none');

    if (isNaN(cantidad) || cantidad <= 0) {
        resultado.textContent = "Por favor, ingresa una cantidad válida.";
        resultado.className = "alert alert-danger";
        return;
    }

    for (let i = 0; i < cantidad; i++) {
        contenedor.innerHTML += `
            <div class="mb-2">
                <label>Alumno ${i + 1}:</label>
                <input type="text" class="form-control mb-1 nombre" placeholder="Nombre">
                <input type="number" class="form-control promedio" placeholder="Promedio">
            </div>
        `;
    }

    botonOrdenar.classList.remove('d-none');
}

function ordenarAlumnos() {
    const nombresInputs = document.querySelectorAll('.nombre');
    const promediosInputs = document.querySelectorAll('.promedio');
    const resultado = document.getElementById('resultado');

    const nombres = [];
    const promedios = [];

    // Captura con while
    let i = 0;
    while (i < nombresInputs.length) {
        const nombre = nombresInputs[i].value.trim();
        const promedio = parseFloat(promediosInputs[i].value);

        if (!nombre || isNaN(promedio)) {
            resultado.textContent = "Por favor, completa todos los campos correctamente.";
            resultado.className = "alert alert-danger";
            return;
        }

        nombres.push(nombre);
        promedios.push(promedio);
        i++;
    }

    // Ordenamiento de mayor a menor por promedio (usamos do...while solo como ejemplo de estructura)
    let swapped;
    do {
        swapped = false;
        for (let j = 0; j < promedios.length - 1; j++) {
            if (promedios[j] < promedios[j + 1]) {
                // Intercambiar promedios
                let tempProm = promedios[j];
                promedios[j] = promedios[j + 1];
                promedios[j + 1] = tempProm;

                // Intercambiar nombres correspondientes
                let tempNom = nombres[j];
                nombres[j] = nombres[j + 1];
                nombres[j + 1] = tempNom;

                swapped = true;
            }
        }
    } while (swapped);

    // Mostrar resultados
    let salida = "<strong>Alumnos ordenados por promedio:</strong><br>";
    for (let k = 0; k < nombres.length; k++) {
        salida += `${k + 1}. ${nombres[k]} - ${promedios[k]}<br>`;
    }

    resultado.innerHTML = salida;
    resultado.className = "alert alert-success";
}

// Datos de productos 
const productos = [
    "Leche", "Cereal", "Gomitas", "Coca-Cola", "Doritos",
    "Harina de maíz", "Mantequilla", "Queso", "Ruffles", "Avena Polaca"
];
let A = []; 

// Genera la tabla de productos con inputs para existencias y pedidos
function generarTablaProductos() {
    const tbody = document.querySelector('#tablaProductos tbody');
    tbody.innerHTML = '';
    A = [];
    for (let i = 0; i < 10; i++) {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${productos[i]}</td>
            <td><input type="number" min="0" class="form-control existencia-input" value="" data-index="${i}" autocomplete="off" inputmode="numeric" pattern="\\d*" required></td>
            <td><input type="number" min="0" class="form-control pedido-input" value="" data-index="${i}" autocomplete="off" inputmode="numeric" pattern="\\d*" required></td>
            <td class="compra-td">0</td>
        `;
        tbody.appendChild(row);
    }
}

// Calcula las compras necesarias y valida los inputs
function calcularCompras() {
    const tbody = document.querySelector('#tablaProductos tbody');
    const existenciaInputs = document.querySelectorAll('.existencia-input');
    const pedidoInputs = document.querySelectorAll('.pedido-input');
    let error = false;
    const B = [];
    const C = [];
    A = [];
    existenciaInputs.forEach((input, i) => {
        const existenciaStr = input.value.trim();
        if (existenciaStr === '' || isNaN(existenciaStr) || !/^[0-9]+$/.test(existenciaStr)) {
            error = true;
            A[i] = null;
        } else {
            A[i] = parseInt(existenciaStr);
        }
    });
    pedidoInputs.forEach((input, i) => {
        const pedidoStr = input.value.trim();
        const compraTd = tbody.rows[i].querySelector('.compra-td');
        // Validación: no vacío, solo números, no letras, no negativos, y existencia válida
        if (
            pedidoStr === '' || isNaN(pedidoStr) || !/^[0-9]+$/.test(pedidoStr) ||
            A[i] === null
        ) {
            compraTd.textContent = 'Error';
            compraTd.classList.add('text-danger');
            error = true;
            B[i] = null;
            C[i] = null;
        } else {
            compraTd.classList.remove('text-danger');
            const pedido = parseInt(pedidoStr);
            B[i] = pedido;
            let compra = 0;
            if (pedido > A[i]) {
                compra = pedido - A[i];
            } else {
                compra = 0;
            }
            C[i] = compra;
            compraTd.textContent = compra;
        }
    });
    if (error) {
        alert('Por favor, ingresa solo números enteros positivos en existencias y pedidos.');
    }
}

// Llama a generarTablaProductos al cargar la página
document.addEventListener('DOMContentLoaded', generarTablaProductos);
