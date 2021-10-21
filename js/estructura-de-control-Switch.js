// SWITCH
// Siempre poner el Break al terminar cada Case

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
