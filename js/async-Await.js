// ASYNC / AWAIT
// Podemos escribir código y decirle a JS que siga mostrando el codigo a pesar de lo que tarde una busque u otro código,.

function descargaNuevosClientes() {
  return new Promise((resolve) => {
    console.log("Descargando Clientes, Espere...");
    // Simulamos que estamos descargando de una base de Datos, Vamos a hacer que el codigo se tarde un poco en cargar
    setTimeout(() => {
      resolve("Los Clientes Fueron Descargados...");
    }, 5000);
  });
}

// Para poder usar el Async - Await
// Tenemos que crear primero una Funcion
// Esa funcion debe ser Asincrona, agregando al inicio de la funcion -> "async"

async function app() {
  //Definimos que es una Funcion Asincrona
  // Vamos a intentar descargar los clientes, en caso de que no se pueda, vamos a ver en la consola el error -> con un Try-Catch
  try {
    const resultado = await descargaNuevosClientes();
    console.log(resultado);
  } catch (error) {
    console.log(error);
  }
}

app();

console.log("Este código no se bloquea");
