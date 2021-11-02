// Try Catch
//En JS cuando hay un error en alguna linea el codigo no se sigue ejecutando, lo que hace try catch es seguir ejecutando el codigo pero con un mensaje de error que va a decir donde se encuentra el error.

const producto1 = 100;
// const producto2 = 200;
const producto3 = 300;

// Va a generar un Error ya que producto2 no está definido, el codigo va a dejar de compilar en la linea nro 9 y la linea nro 11 no se ejecuta nunca.
console.log(producto1);
// console.log(producto2);
console.log(producto3);

// Esto se puede solucionan con un Try Catch -> intenta hacer lo siguiente y en caso de haber un erro que siga cual es
// Sintaxis
// try {

// } catch (error) {

// }

try {
  console.log(producto2);
} catch (error) {
  console.log(error);
}

// Va a ser a prueba de errores, pero no todo el codigo debe estar dentro de éste. Solo se usa en ocasiones especificas.
// Donde sea critico para que no deje de funcionar la aplicación
