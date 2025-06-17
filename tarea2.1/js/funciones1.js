function calcularSalario(){
    let salario = 1500;
    let incremento = 0.10;
    let n = 6;

    document.getElementById("resultado").innerHTML = `Año 1: $${salario.toFixed(2)} <br>`;
    for(let i = 1; i < n; i++){
        salario += salario * incremento;
        document.getElementById("resultado").innerHTML += `Año ${i + 1}: $${salario.toFixed(2)} <br>`;
    }
}