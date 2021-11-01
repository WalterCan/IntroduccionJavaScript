// Clases en JavaScript
// Nueva forma de Crear clases, ya no se usa Prototype
// La Primer letra de una clase Va en Mayusculas

// Sintaxis

// class Producto {}

class Producto {
  constructo(nombre, precio) {
    //Palabra Reservada "Constructor"
    this.nombre = nombre;
    this.precio = precio;
  }
  formatearProducto() {
    return `El producto: ${this.nombre}, tiene un precio de $ ${this.precio}`;
  }
  preciosProducto() {
    return `El precio del producto es de: $ ${this.precio}`;
  }
}

// Instanciamos la clase

const producto1 = new Producto("Monitor Curvo", 500);

console.log(producto1);
