// Funciones con Parametros y Argumentos
// Los parametros se van a colocar en los parentesis donde estes definiendo la función
// Podemos Reutilizarla

function sumas(numero1 = 0, numero2 = 0) {
  //Definimos los parametros, Van dentro del cuerpo de la Función
  //   PArametros por Default numero1 =0 , numero2 =0 -> se van a ejecutar o ser llamados cuando no estén presentes los argumentos.
  console.log(numero1 + numero2);
}

sumas(33, 79); //Definimos los Argumentos o valores Reales
sumas(22, 1);
sumas(3, 44);
sumas(89, 1);
sumas(-3);

const sumas2 = function (n1, n2) {
  console.log(n1 + n2);
};

sumas2(4, 3);
