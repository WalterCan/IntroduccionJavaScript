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
