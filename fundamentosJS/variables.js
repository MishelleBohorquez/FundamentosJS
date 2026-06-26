// VAR = Imprime lo de adentro
var saldo = 100;
if (saldo > 50) {
  var saldo = 999;
}
console.log(saldo);

// LET = Imprime lo de afuera (no lo privado)
let saldo1 = 100;
saldo1 = 500;

if (saldo1 > 50) {
  let saldo1 = 999;
  console.log(saldo1);
}
console.log(saldo1);

// CONST = algo que no cambia en el tiempo
const IVA = 0.19;
console.log(IVA);

/* //Esto genera error
IVA = 0.16;
console.log(IVA);
*/