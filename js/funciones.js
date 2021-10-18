// Funciones
//Las funciones son una serie de procedimientos o instrucciones que realizan una acción.
// Te permiten mantener un codigo ordenado y ser reutilizables.

// Declaración de Funcion

function sumar() {
  console.log(10 + 15); //Cuerpo de una función
}

// Hay que llamar a la función
sumar();

// Expresión de la Función

const sumar2 = function () {
  console.log(33 + 10);
};

sumar2();

// IIFE
// Son funciones que no necesitan llamarse por que se llaman a ellas mismas .
// La sintaxis es diferente:
// Éste tipo de funcionen sirven para proteger las variables que no se mezclen con otros archivos.
// Previenen que no se puedan acceder desde otros archivos.
(function () {
  console.log("Esta es la Función IIFE");
})();
