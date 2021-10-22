// ForEach y For Map
// Solamente se pueden ejecutar en Arrays
// Metodos Exclusivos de Arrays

const carrito = [
  { nombre: "Monitor de 27 Pulgadas", precio: 300 },
  { nombre: "Monitor de 15 Pulgadas", precio: 200 },
  { nombre: "Monitor de 32 Pulgadas", precio: 450 },
  { nombre: "Monitor de 56 Pulgadas", precio: 800 },
  { nombre: "Monitor de 65 Pulgadas", precio: 1500 },
];

// ForEach
//Puede ser utilizado unicamente en Arrays
// Se va a Ejecutar una vez por cada elemento que haya en el array

carrito.forEach((producto) => console.log(producto.nombre));

// map

// carrito.map((producto) => console.log(producto.nombre));
// const arreglo1 = carrito.map((producto) => producto.nombre); //Dando por explicito el "Return"
const arreglo1 = carrito.map(
  (producto) => `Producto: ${producto.nombre}, Precio: ${producto.precio}` //Tambien podemos utilizar un TemplateString y agregar los PRecios
);
console.log(arreglo1);

// Diferencia entre ForEach y Map.
// ForEach lo utilizamos cuando queremos mostrar e imprimir algo en consola con el el HTML -> iterar sonbre un listado.
// Map -> Crear un nuevo Array, Hay que asignarlo a una nueva variable ya que ésta se va a ir llenando
