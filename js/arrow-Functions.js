// Arrow Function o Funciones Flecha
// Otra forma de declarar funciones, son más corta
//Solo funcionan es "EXPRESION DE LA FUNCION"
// Si solo tengo un paremetro, puedo borrar parentesis ()
// Si solo hay una línea en la funcion podemos borrar las llaves {}
// El "Return" es explicito
// Sintaxis de un Arrow Functions :

//              const/let variable = ()=> {}
//
//

const multiplicar = (n1, n2) => console.log(n1 * n2);
multiplicar(9, 10);

// Convirtiendo funciones a Arrow Functions

// const sumas2 = function (n1, n2) {
//   console.log(n1 + n2);
// };

// sumas2(4, 3);

const sumar2 = (n1, n2) => console.log(n1 + n2);
sumar2(2, 7);

const aprendiendo = (tecnologia) => console.log(`Aprendiendo : ${tecnologia}`);
aprendiendo("JavaScript");

//Donde brillar los Arrow Function es en los Array Metodos

//

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
meses.forEach((mes) => {
  //   console.log(mes);
  if (mes == "Marzo") {
    console.log("El elemento si se encuentra en el Array");
  }
});
//
// resultado = carrito.some(function (producto) {
//   return producto.nombre === "Placa de Video";
// });

resultado = carrito.some((producto) => producto.nombre === "Placa de Video");

//

// resultado = carrito.reduce(function (total, producto) {
//   return total + producto.precio;
// }, 0);
resultado = carrito.reduce((total, producto) => total + producto.precio, 0);
//
console.log(resultado);
//
// resultado = carrito.filter(function (producto) {
//   return producto.precio < 400; // < , > , ===, !==
// });

resultado = carrito.filter((producto) => producto.precio < 400);
console.log(resultado);
