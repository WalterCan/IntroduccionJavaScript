// Modificar Objetos

const producto = {
  nombreProducto: "Monitor 20 pulgdas",
  precio: 500,
  disponible: false,
};

// Agregar Elementos

producto.imagen = "imagen.jpg";

// Borrar elementos usamos la palabra reservada "Delete"

delete producto.precio;

console.log(producto);
