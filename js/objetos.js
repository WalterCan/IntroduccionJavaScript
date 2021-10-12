// Objetos
// Creamos un objeto -> const/let Nombre ={} (entre llaves)
//Para agregar propiedades a un objeto los separamos con comas ","
// Para seleccionar un elemento del objeto usamos ->   nombre"."nombre

const producto = {
  nombreProducto: "Monitor 20 pulgadas",
  precio: 400,
  disponible: true,
};

console.log(producto);
console.log(producto.nombreProducto);
console.log(producto.precio);
console.log(producto.disponible);

// Otra forma de mostrar un objeto o sus elementos

console.log(producto["precio"]);
