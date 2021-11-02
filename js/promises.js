// Promises
// Todas las Apis modernas usan Primeses
//El Promises es una promesa, refleja un valor que podria estar disponible ahora, en un futuro o nunca.
// Cuando se ejecuta un Promise se pasan dos valores automaticamente. "Resolve" , "Reject"

const usuarioAutenticado = new Promise((Resolve, Reject) => {
  //Creamos una nueva instancia del Promise y vamos a ejecutar una funcion
  const auth = false;
  if (auth) {
    Resolve("Usuario Autentificado"); //Resolve, El promise se cumple.
  } else {
    Reject("No se pudo Inicial Sesión "); //Reject, El promise no se cumple
  }
});

// console.log(usuarioAutenticado); Ver el estado del promise

// En los Promises existen tres valores:
// Pending: el promise no se ha cumplido pero tampooco se ha rechazado
// Fulfiled: Cuando el Promise se ha Cumplido.
//Reject: Cuando el Promise se ha rechazado o no se ha podido cumplir
// Son resultados muy comunes cuando hacemos consultas a Apis, Base de DAtos, etc.

// Vamos a acceder a los valores del Promise usando: .Then y .Catch

usuarioAutenticado
  .then((resultado) => console.log(resultado)) //Va a ejecutar esta funcion en caso de que sea "Resolve"
  .catch((error) => console.log(error)); //Se va a ejecutar en caso de que sea "Reject"
