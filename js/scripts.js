function calcular(operacion) {
    const input1 = document.getElementById("numero1").value.trim();
    const input2 = document.getElementById("numero2").value.trim();

    if (input1 === "" || input2 === "") {
        alert("Por favor, ingrese ambos números antes de continuar.");
        return;
    }
    const num1 = parseFloat(input1);
    const num2 = parseFloat(input2);

    if (isNaN(num1) || isNaN(num2)) {
        alert("Los valores ingresados no son números válidos.");
        return;
    }
    let resultado;

    switch (operacion) {
        case "sumar":
            resultado = num1 + num2;
            break;
        case "restar":
            resultado = num1 - num2;
            break;
        case "multiplicar":
            resultado = num1 * num2;
            break;
        case "dividir":
            resultado = num2 !== 0 ? num1 / num2 : "No se puede dividir por 0";
            break;
        case "mod":
            resultado = num2 !== 0 ? num1 % num2 : "No se puede dividir por 0";
            break;    
        default:
            resultado = "Operación no válida";
    }

    document.getElementById("resultado").textContent = resultado;
}
