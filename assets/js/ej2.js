let celsius = +prompt("ingrese grados celsius: ")

let kelvin = celsius * 273.15
let farenheit = (celsius * 9 / 5) + 32

alert(`
    Grados Kelvin: ${kelvin + "°"}.
    Grados Farenheit: ${farenheit + "°"}
    Grados Celsius: ${celsius + "°"}`)