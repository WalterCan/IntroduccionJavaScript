// While
// Primero Evalua la condicion y de ser Verdadera Ejecuta el codigo
// Se ejecuta mientras una condición sea evaluada como verdadera

let i = 0; //Indice

while (i <= 10) {
  //Condicion
  console.log(i);
  i++; //Incremento
}

let j = 0;
while (j <= 10) {
  if (j % 2 === 0) {
    console.log(`El numero ${j} Es Par`);
  }
  j++;
}

// Do While Loop
// Primero Ejecuta al menos una vez y luego Evalua

let a = 0;
do {
  console.log(`Numero: ${a}`);
  a++;
} while (a <= 10);
