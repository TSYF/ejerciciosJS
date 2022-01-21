let totalDays = +prompt("Ingrese dias a convertir:");

let totalYears = 0, totalWeeks = 0;

while (totalDays >= 365) {
    totalYears++;
    totalDays -= 365;
};

while (totalDays >= 7) {
    totalWeeks++;
    totalDays -= 7;
}


console.log(`
    ${totalYears} Años
    ${totalWeeks} Semanas
    ${totalDays} Dias`)