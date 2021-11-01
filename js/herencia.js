// HERENCIA

class Producto {
  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;
  }
  formatearProducto() {
    return `El producto ${this.nombre}, Tiene un precio de USD ${this.precio}`;
  }
}

const producto1 = new Producto("Monitor curvo de 50 Pulgadas", 780); //Instanciamos el producto

console.log(producto1);
console.log(producto1.formatearProducto());

// Creamos una segunda clase para Heredad atributos
// Usamos la palabra "Extende y el nombre de la clase de la cual queremos Heredar atributos"
//Usamos la palabra reservada "Super"
// Evitamos duplicar Código

class Libro extends Producto {
  //Usamos la palabra EXTENDS y luego el nombre de la clase de la cual Hereda sus atributos
  constructor(nombre, precio, isbn) {
    super(nombre, precio); //Con la funcion "Super" le pasamos los valores que va a Heredar de la clase Padre!
    this.isbn = isbn;
  }
  formatearProducto() {
    return `${super.formatearProducto()} y su Isbn es: ${this.isbn}`; //Usamos la palabra "Super " seguido del nombre de la función que va a heredar
  }
}
const libros = new Libro("Tablet de 10 Pulgadas", 88, "123123123");
console.log(libros);
console.log(libros.formatearProducto());
