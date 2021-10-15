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

// Modificar elemento en un Arrays

// Agregar elementos a un Arrays
// metodo push -> agregar un elemento al final del array
// Se recomienda no modificar los elementos originales de un Array

// Estructura de datos -> Push, unshift

numeros.push(60); //Se agrega al final
numeros.unshift(-2); //Se agrega al principio del Arreglo.

console.table(numeros);

// Eliminar elementos de un Array

meses.pop(); //Elimina el ultimo elemento del Array
// meses.shift(); //Elimina el primer elemento de un Array
console.table(meses);

meses.splice(1, 1); //Primer valor la posicion.. segundo, cuantos elementos borrar luego de esa posición

console.table(meses);

// No se recomienda modificar los Arrays originales. PAra ello usamos :Rest OPerator o Sprad Operator

const nuevoArreglo = [...meses, "Diciembre"];
console.table(nuevoArreglo);
