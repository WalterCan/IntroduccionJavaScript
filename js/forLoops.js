// For Loops
//Los For son la excelente forma de iterar sobre un array

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

// Evaluamos y mostramos los numeros pares

for (let j = 0; j <= 10; j++) {
  if (j % 2 === 0) {
    console.log(`Numero Par: ${j}`);
  } else {
    console.log(`Numero Impar: ${j}`);
  }
}

// Iterando sobre un Array
console.log("Iterando Sobre un Array.-");
const compra = [
  { nombre: "Monitor de 22 Pulgadas", Precio: 400 },
  { nombre: "Monitor de 19 Pulgadas", Precio: 300 },
  { nombre: "Monitor de 28 Pulgadas", Precio: 550 },
  { nombre: "Monitor de 32 Pulgadas", Precio: 700 },
  { nombre: "Monitor de 40 Pulgadas", Precio: 900 },
  { nombre: "Monitor de 52 Pulgadas", Precio: 1500 },
  { nombre: "Monitor de 65 Pulgadas", Precio: 4000 },
];
console.log("Mostrando el Arreglo Completo:");
for (let i = 0; i < compra.length; i++) {
  console.log(compra[i]); //Iteramos Sobre todos los elementos
}

console.log("Mostrando Solo Los Nombres del Array:");

for (let a = 0; a < compra.length; a++) {
  console.log(compra[a].nombre);
}
