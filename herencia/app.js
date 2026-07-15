/*
function CuentaBancaria(titular, saldo) {
  this.titular = titular;
  this.saldo   = saldo;
}
let c1 = new CuentaBancaria("Mishelle", 100000);
*/


/*
// Clases
class CuentaBancaria {

  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo   = saldo;
  }

  consignar(monto) {
    this.saldo += monto;
    return "Consignaste $" + monto + ". Saldo: $" + this.saldo;
  }

}

let c1 = new CuentaBancaria("Mishelle", 100000);
console.log(c1.consignar(50000));
*/


class CuentaBancaria {

  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo   = saldo;
  }

  consignar(monto) {
    this.saldo += monto;
    return this.titular + " consignó $" + monto + ". Saldo: $" + this.saldo;
  }

  retirar(monto) {
    if (monto > this.saldo) {
      return "Fondos insuficientes";
    }
    this.saldo -= monto;
    return this.titular + " retiró $" + monto + ". Saldo: $" + this.saldo;
  }

}

let c1 = new CuentaBancaria("Ana", 100000);
let c2 = new CuentaBancaria("Carlos", 200000);

console.log(c1.retirar(30000));  // "Ana retiró $30000. Saldo: $70000"
console.log(c2.retirar(500000)); // "Fondos insuficientes"
console.log(c1.saldo);           // 70000 — c1 no cambió por lo de c2