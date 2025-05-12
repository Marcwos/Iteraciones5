function calcular(operacion) {
    const num1 = parseFloat(document.getElementById("numero1").value);
    const num2 = parseFloat(document.getElementById("numero2").value);

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
