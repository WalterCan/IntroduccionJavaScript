// Metodos de Propiedad
// Crear nuestros propios metodos
// Usando Sintaxis de metodos pero siguen siendo funciones
// Llegan a ser muy comunes por que mantienen toda la informacion en un objeto (EStructurar un poroyecto)

const reproductor = {
  reproducir: function (id = 0) {
    console.log(`Reproduciendo la Cancion ID nro: ${id}`);
  },
  pausado: function () {
    console.log("Pausando.....");
  },
  crearPlayList: function (nombre) {
    console.log(`Creando la PlayList: ${nombre}`);
  },
  reproduciendoPlayList: function (nombre) {
    console.log(`Reproduciendo PlayList de: ${nombre}`);
  },
};

reproductor.borrarCancion = function (id = 0) {
  console.log(`Eliminando ID Nro: ${id}`);
};

reproductor.reproducir(13);
reproductor.pausado();
reproductor.borrarCancion(45);
reproductor.crearPlayList("Walter");
reproductor.reproduciendoPlayList("Walter");
