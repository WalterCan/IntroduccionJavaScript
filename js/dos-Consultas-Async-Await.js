// Dos cunsultas Async - Await

function descargarNuevosClientes() {
  return new Promise((resolve) => {
    console.log("Descargando Clientes, Espere...");
    setTimeout(() => {
      resolve("Los clientes Fueron Descargados...");
    }, 8000);
  });
}

function descargarUltimosPedidos() {
  return new Promise((resolve) => {
    console.log("Descargando Ultimos Pedidos, Espere....");
    setTimeout(() => {
      resolve("Los Ultimos Pedidos Fueron Descargados...");
    }, 3000);
  });
}

async function app() {
  try {
    // Vamos a ejecutar los dos al mismo tiempo, generando un arreglo, si una no depende de la otra.
    // Así optimizamos un llamado Async - Await
    const resultado = await Promise.all([
      //Van a Ejecutarse ambas funciones al mismo tiempo
      descargarUltimosPedidos(),
      descargarNuevosClientes(),
    ]);
    console.log(resultado[0]);
    console.log(resultado[1]);
  } catch (error) {
    console.log(error);
  }
}

app();
