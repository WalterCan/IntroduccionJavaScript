// Estructuras de Control  o Codigo condicional
//   =   -> Igual
// ==  -> comparación
//  ===   -> Comparar (Es más estricto, se va a asegurar que sea igual el valor y el tipo de dato)

//  IF
// Condicionante
const puntaje = 1000;

if (puntaje === 1000) {
  // === ->  Compruera que sea exactamente igual
  //   !==  ->  Diferentes

  console.log("El puntaje es Igual");
} else {
  console.log("El puntaje no es el mismo");
}

const efectivo = 2000;
const carrito = 8000;
if (efectivo > carrito) {
  // <
  // >=
  // <=
  console.log("El Usuario puede Pagar");
} else {
  console.log("El Saldo es Insufisionete ");
}

// Else if ()

const sistema = "Editor";

if (sistema === "Administrador") {
  console.log("Eres Administrador Tienes Acceso a todos los Perfiles");
} else if (sistema === "Editor") {
  console.log("Eres Editor,Tienes Acceso Limitado");
} else {
  console.log("No tienes Acceso");
}
