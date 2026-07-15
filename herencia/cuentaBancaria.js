// Clase padre
class CuentaBancaria {
  constructor(titular, saldo) {
    this.titular = titular;
    this.saldo = saldo;
  }

  consignar(monto) {
    this.saldo += monto;
    return `${this.titular} consignó $${monto}. Saldo: $${this.saldo}`;
  }

  retirar(monto) {
    if (monto > this.saldo) {
      return "Fondos insuficientes";
    }

    this.saldo -= monto;
    return `${this.titular} retiró $${monto}. Saldo: $${this.saldo}`;
  }
}

// Clase hija
class CuentaAhorros extends CuentaBancaria {
  constructor(titular, saldo, tasaInteres) {
    super(titular, saldo);
    this.tasaInteres = tasaInteres;
  }

  // Sobreescritura del método retirar
  retirar(monto) {
    if (monto > this.saldo) {
      return "Fondos insuficientes";
    }

    if (this.saldo - monto < 50000) {
      return "No puedes dejar la cuenta con menos de $50000";
    }

    // Llama al método de la clase padre
    return super.retirar(monto);
  }

  // Método propio de CuentaAhorros
  calcularRendimiento() {
    let rendimiento = this.saldo * (this.tasaInteres / 100);
    return `${this.titular} gana $${rendimiento} de interés.`;
  }
}

// =======================
// Pruebas Cuenta Bancaria
// =======================

let c1 = new CuentaBancaria("Ana", 100000);
let c2 = new CuentaBancaria("Carlos", 200000);

console.log(c1.retirar(30000));
// Ana retiró $30000. Saldo: $70000

console.log(c2.retirar(500000));
// Fondos insuficientes

console.log(c1.saldo);
// 70000

console.log("------------------------");

// =======================
// Pruebas Cuenta Ahorros
// =======================

let ahorro = new CuentaAhorros("Laura", 1000000, 5);

console.log(ahorro.consignar(200000));
// Laura consignó $200000. Saldo: $1200000

console.log(ahorro.retirar(100000));
// Laura retiró $100000. Saldo: $1100000

console.log(ahorro.calcularRendimiento());
// Laura gana $55000 de interés.

console.log("------------------------");

// Prueba de la regla de ahorro
let ahorro2 = new CuentaAhorros("Pedro", 100000, 5);

console.log(ahorro2.retirar(60000));
// No puedes dejar la cuenta con menos de $50000

console.log(ahorro2.retirar(40000));
// Pedro retiró $40000. Saldo: $60000

console.log("------------------------");

// Comparación con una cuenta normal
let cuentaNormal = new CuentaBancaria("María", 100000);

console.log(cuentaNormal.retirar(60000));
// María retiró $60000. Saldo: $40000