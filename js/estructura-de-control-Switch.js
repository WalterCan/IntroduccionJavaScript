// SWITCH
// Siempre poner el Break al terminar cada Case
// Evalua y en caso de ser igual ejecuta el codigo correspondiente.
// Para realizar multiples condiciones
const formaDePago = "Cheque";

switch (formaDePago) {
  case "tarjeta":
    console.log("Abona con Tarjeta");
    break;
  case "Cheque":
    console.log("Abona con Cheque");
    break;
  case "Efectivo":
    console.log("Abona en Efectivo");
  default:
    console.log("Todavia no Abono");
    break;
}
