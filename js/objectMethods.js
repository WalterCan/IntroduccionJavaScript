// Objetos
// "use strict"; //Ejecutar Java Script de modo Stricto
// Al usar el modo Stricto cuando hay una linea mal no se sigue ejecutando el Codigo

const producto = {
  nombreProducto: "Monitor 30 Pulgadas ",
  precio: 788,
  disponible: true,
};
// Prevenir agregar, modificar y borrar elementos de un objeto "object.freeze"
// Object.freeze(producto); //Con esto congelamos el objeto y no va a permitir: modificar,borrar o agregar propiedades.

// Object.seal : No permite Borrar tampoco Agregar, Solo modificar
Object.seal(producto);

producto.imagen = "imagen.jpg"; //Agregamos propiedades al objeto.

producto.precio = 700;

console.log(Object.isFrozen(producto)); //Funcion para saber si un producto esta Bloqueado para modificación. En el caso de estarlo, va a imprimir : TRUE

console.log(producto);
