// Arrays
// Variable =[] -> Ésta sintaxis hace referencia a un Array
// Sirve para agrupar elementos relacionados o del mismo tipo
// Se pueden tener todos tipo de elementos, pero se recomienda que dichos elementos esten relacionados
//Se recorren los arreglos mediante su indice. Siempre comienza con "0"

const numeros = [1, 2, 3, 4, 5];

console.table(numeros);

const meses = ["Enero", "Febrero", "Marzo", "Abril"];

console.table(meses);

// Acceder a los valores del un Array.

console.log(meses[3]);

// Conocer la extensión de un Array

console.log(meses.length);

// Si quiero acceder a todos los elemento de un array usamos un Iterador :
// Se va a ejecutar mientras haya elementos en el arreglo

meses.forEach(function (mes) {
  console.log(mes);
});

numeros.forEach(function (numero) {
  console.log(numero);
});
