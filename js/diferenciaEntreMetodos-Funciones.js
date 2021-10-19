// Diferencia entre metodos y funciones

const numero1 = 20;
const numero2 = "20";

console.log(parseInt(numero2)); //Usamos una funcion para convertir un String en Numero -> parseInt() Es una función
console.log(numero1.toString()); //  .toString -> es un metodo ya que incluye el nombre de la variable u objeto con un "." seguido del metodo

console.log(typeof parseInt(numero2));
console.log(typeof numero1.toString());
