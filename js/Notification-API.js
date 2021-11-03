// API Notification -> Api de notificaciones.
// Siempre que quiere elegir algo del HTML empezamos con la palabra : " document."
// El selector más comun es -> document.querySelector(); - Pasamos el ID como parametro
// Debemos asignarlo a una variable para hacer referencia a un selector
// Todos los Eventos en JS comienzan con una funcion que se llama  -> seleccionamos el elemento sobre el cual vamos a aplicar el evento.addEventListener ().
// Pasamos dos valores, primero el evento que vamos a escuchar y luego una funcion
// Todas las APIs usan Promises por que necesitan el permiso del usuario
// Le vamos a pedir permiso con -> .Then
// Resolve y Reject ya existen en Notification, No hace falta pasarlos como parametros.

const boton = document.querySelector("#boton"); //Forma en la que voy a seleccionar contenido HTML , lo asignamos a una variable
// Es más facil de mantener

boton.addEventListener("click", () => {
  //Funcion que nos permite agregar un Evento a ésta Varieble, pasamos dos valores, primero el evento y luego una funcion
  //   console.log("Diste click");
  // Vamos a registrar una notificacion utilizando un Promise
  Notification.requestPermission() //Pedimos permiso al Usuario
    .then((resultado) => console.log(`El Resultado es ${resultado}`));
});

if (Notification.permission == "granted") {
  new Notification("Esta es una Notificacion", {
    //Titutlo de la Notificación
    icon: "img/75117.png", //Agregamos una imagen/logo en la Notificación
    body: "Codigo con Walter, Aprendiendo JS", //Texto de la Notifiacion
  });
}

// El permiso debe estar como Granted para recibir notificaciones.
