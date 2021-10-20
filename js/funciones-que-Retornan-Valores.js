// Funciones que Retornan Valores

function sumar(n1, n2) {
  return n1 + n2;
}
const resultado = sumar(33, 9); //Retornamos el Total a la variable "Resultado"
console.log(resultado); //Mostramos en pantalla

// Simulamos un Carrito de Compras

console.log("Carritos de Compras");

let total = 0; //Inicializamos la Varible en "0"

function carrito(precio) {
  return (total += precio);
}

function calcularImpuesto(total) {
  return 1.15 * total; //Calculamos un 15% de impuestos
}
// Sumamos Articulos al Carrito
total = carrito(150);
total = carrito(200);
total = carrito(655);

console.log(total);

const totalPagar = calcularImpuesto(total);

console.log(`Total a Pagar con Impuesto es de : $${totalPagar}`); //AGregamos Template String
