// Diferencia entre Tipo de Funciones

// Declaración de la Función

suma();
function suma() {
  console.log(77 + 9);
}
// suma();

//Expresión de la Fcunción

suma2();
const suma2 = function () {
  //Lo detecta más como una variable
  //   No es una funcion como Tal, por eso marca Error
  console.log(33 + 5);
};
// suma2();

//La diferencia entre estas dos formas de crear funciones, es por ejemplo; mando a llamar la funcion y luegoi la mando a llamar.
// Una va a marcar el Error, debido a que la segunda va a tomarla como una variable y no como una Función
//Ésto se conoce como Hoytick, debido a que JS se ejecuta en dos vueltas, en la primera se registran todas las funciones y luego se registan lo que son los llamados.
// La primera etapa -> De Creación/Registro
// Segunda Etapa -> De Ejecución
