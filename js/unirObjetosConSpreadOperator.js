// Vamos a unir dos objetos sin modificar ninguno de los dos

const producto = {
  nombreProducto: "Monitor 20 Pulgadas",
  precio: 400,
  disponible: true,
};

const medidas = {
  peso: "1Kg",
  medida: "1m",
};

// La buena practica No modificar los Datos Originales.
// Spread Operator

const nuevoProducto = { ...producto, ...medidas }; //Con ésta sintaxis unimos ambos objetos a uno nuevo. por ejemplo : "nuevoProducto"

console.log(producto);
console.log(nuevoProducto);
