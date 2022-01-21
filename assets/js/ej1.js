const num1 = +prompt("Ingrese número 1: ");
const num2 = +prompt("Ingrese número 2: ");

do {
    console.log(`Los resultados entre ambos números son:
    Suma: ${num1 + num2}.
    Resta: ${num1 - num2}.
    Multiplicación: ${num1 * num2}.
    División: ${num1 / num2}.
    Resto ${num1 % num2}`)
} while (num1 != 0 && num2 != 0);