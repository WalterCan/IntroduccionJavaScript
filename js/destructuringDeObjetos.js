const producto = {
  nombreProducto: "Monitor 50 pulgadas",
  precio: 600,
  disponible: true,
};

// console.log(producto);
// Extraemos Valores del objeto, creando una variable y asignandole el valor a la misma

// Forma anterior

const precioProducto = producto.precio;
const nombredelProducto = producto.nombreProducto;

// console.log(precioProducto);
// console.log(nombredelProducto);

// Nueva forma de Extraer valores del objeto
// Destructuring (sacar de una estructura)
//  siempre que usamos destructuring : {propiedades} = objeto
// Extrae el valor y crea la variable todo en un mismo paso
// Para que Destructuring Funcionen deben el nombre de la variable debe ser igual a la propiedad del Objeto

const { precio, nombreProducto } = producto; //agregamos todo en una misma líne.
// const { nombreProducto } = producto;

console.log(precio);
console.log(nombreProducto);
