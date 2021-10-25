// POO -> Programación orientada a objetos
// En el caso de JS usa algo llamado Prototype
// Una clase va a ser el contenedor de todos los datos,formas,metodos y funciones que va a tener un objeto en él

// Object Literal
// El más utilizado pero más estatico
const producto = {
  nombre: "tablet",
  precio: 500,
};

// Object Constructor
// Más dinamico
// El nombre de la clase debe estar escrita en mayusculas
function Producto(nombre, precio, disponible) {
  this.nombre = nombre;
  this.precio = precio;
  this.disponible = disponible;
}

// lo utilizamos:
const producto2 = new Producto("Tablet", 400); //Creando una nueva Instancia.

const producto3 = new Producto("Monitor Curvo", 500, true);

const producto4 = new Producto("Notebook", 2500, false);

console.log(producto2);
console.log(producto3);
console.log(producto4);
