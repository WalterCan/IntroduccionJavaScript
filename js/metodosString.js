// Algunos de los metodos para Strings

const twiter = "Hola como estas este es una practica de JavaScript";

const producto = "Monitor HD";

// Cuantos caracteres tienen estas cadenas de Texto con .length
console.log(twiter.length);
console.log(producto.length);

// Dice en que posicion se encuentra lo que estamos buscando, para encontrar un elemento en un string
console.log(twiter.indexOf("JavaScript"));
console.log(producto.indexOf("Tablet")); //Cuando el resultado es menor a "0", es por que no se encuentra el elemento.

// Incluse.Retorna true o False

console.log(twiter.includes("JavaScript"));
console.log(producto.includes("Tablet"));
