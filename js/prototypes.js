// Prototype
// Va a ser una funcion que está asociada a un determinado objeto.
// Funciones que solo pueden usarse en ese objeto.
// Nos va a permitir crear funciones que solo se utilizan en un objeto en especifico
//Object Literal
const producto = {
  nombre: "Monitor Curvo",
  precio: 700,
};

// Object Constructor
function Cliente(nombre, apellido) {
  this.nombre = nombre;
  this.apellido = apellido;
}
Cliente.prototype.formatearCliente = function () {
  return `El Cliente : ${this.nombre}, ${this.apellido}`;
};

function Producto(nombre, precio) {
  this.nombre = nombre;
  this.precio = precio;
}

// Funciones que solo se van a usar para el objeto Produto
Producto.prototype.formatearProducto = function () {
  //Ya no requiere que tome parametros, por que está atado al producto
  return `El producto : ${this.nombre}, tiene un precio de: $ ${this.precio}`;
};

//
const producto1 = new Producto("Tablet", 855);
const producto2 = new Producto("Celular", 400);

const cliente = new Cliente("Walter", "Cantero");

console.log(cliente);
console.log(producto2);
console.log(producto1.formatearProducto());
console.log(producto2.formatearProducto()); //Así utilizamos el prototype
console.log(cliente.formatearCliente());
