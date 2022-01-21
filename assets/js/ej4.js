const num1 = +prompt("Ingrese número 1:");
const num2 = +prompt("Ingrese número 2:");
const num3 = +prompt("Ingrese número 3:");
const num4 = +prompt("Ingrese número 4:");
const num5 = +prompt("Ingrese número 5:");

const sum = num1 + num2 + num3 + num4 + num5;
const avg = Math.floor((sum / 5), 2);

console.log(`
La suma de todos los números es: ${sum}
El promedio de todos los números es ${avg.toFixed(2)}`);