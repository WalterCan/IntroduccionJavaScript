// Más Metodos para Arrays
// Arrays Methods

const meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo"]; //Se lo conoce como un arreglo Unidimensional

// console.table(meses);

// Arrays de Objetos

const carrito = [
  { nombre: "Monitor de 20 pulgadas", precio: 400 },
  { nombre: "Tablet", precio: 250 },
  { nombre: "Notebook", precio: 2500 },
  { nombre: "Mouse", precio: 99 },
  { nombre: "PenDrive", precio: 12 },
  { nombre: "MousePad", precio: 50 },
  { nombre: "CPU", precio: 700 },
  { nombre: "Placa de Video", precio: 1300 },
];

// Foreach -> se va a ejecutar al menos una vez por cada ocasion o elemento que haya en el arreglo
// Va a ir iterando por cada uno de los elementos
// Si quiero ver si un elemento en especifico se encuentra dentro del arreglo, Usamos un "IF"
meses.forEach(function (mes) {
  //   console.log(mes);
  if (mes == "Marzo") {
    console.log("El elemento si se encuentra en el Array");
  }
});

// Includes -> es el equivalente al Codigo de Arriba
// Se simplifica saber si un elemento está o no en un Array
// No es la mejor opcion para arrays con Objetos

let resultado = meses.includes("Marzo");

// console.log(resultado); //Va a mostar True o False

// Some -> Ideal para Arrays de Objetos

resultado = carrito.some(function (producto) {
  return producto.nombre === "Placa de Video";
});
console.log(resultado);

// Calculamos el total a pagar
// Reduce -> va a tomar todos los numeros y entregar un resultado

resultado = carrito.reduce(function (total, producto) {
  return total + producto.precio;
}, 0);

// console.log(resultado);

// Filter -> Sirve para obtener (Todos menos un elemento o mayores o menores (sumando ))

resultado = carrito.filter(function (producto) {
  return producto.precio < 400; // < , > , ===, !==
});

console.log(resultado);
