// This
// Hacemos referenica al mismo objeto.
// This no puede utilizarce con un ArrowFunctions -> al utilizar arrowfunction va a generar un error
// El arrowFunction no va a hacer referencia al objeto, sino a la ventana global por eso va a dar como resultado : Undefined
// Hace referencia a los mismos valores del objeto.
const objeto = {
  nombre: "Walter",
  apellido: "Cantero",
  Total: 400,
  pagado: true,
  informacion: function () {
    console.log(
      `Nombre del Cliente: ${this.nombre}, Total a pagar: $${this.Total}` //Hace referencia a los elementos del objeto
    );
  },
};

objeto.informacion();

const reservacion = {
  nombre: "Julieta",
  apellido: "Domina",
  total: 500,
  pagado: false,
  informacion: function () {
    console.log(`El cliente: ${this.nombre} Debe pagar $ ${this.total}`);
  },
};

reservacion.informacion();
