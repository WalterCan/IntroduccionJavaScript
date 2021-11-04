// FETCH API
// Es el nuevo estandar, al igual que Ajax te perimite enviar informacion al servidor u obtener informacion de un servidor.
// Tambien permite actulizar el sitio web sin necesidad de recargar la pagina
// Podes obtener un archivo local o una respuesta de un servidor (Texto o JSON)
// JSON se está convirtiendo en el estandar.
// Al igual que todas las API´s modernas de JS utiliza Promises o tambien Async/Await
//JSON -> JavaScript Object Notation , es muy similar a un objeto en JS - Es un lenguaje de Transporte de Datos.
// Un JSON puede ser creado en cualquier lenguaje y se puede consumor en JS por medio de Fetch API y mostrarlo en tu sitio Web

async function obtenerEmpleados() {
  // Vamos a colocar la URL en una Variable
  const archivo = "empleados.json";
  //   fetch(archivo) //Toma como Valor un "URL"
  //     //   Al utilizar Promises, utilizamos ".then"
  //     .then((resultado) => resultado.json()) //Decimos que el resultado va a ser un JSON
  //     .then((datos) => {
  //       //   console.log(datos.empleados);
  //       const { empleados } = datos;
  //       console.log(empleados);
  //     });
  // Tambien puede ser utilizado con Async - Await -> utilizamos menos codigo
  const resultado = await fetch(archivo);
  //   Ahora le pasamos el tipo de archivo que vamos a utilizar,  doble "await" por que si depende de la línea de arriba
  const datos = await resultado.json();
  console.log(datos);
}

obtenerEmpleados();
