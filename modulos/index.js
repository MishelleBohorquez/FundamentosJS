// index.js — TODO en un solo archivo
const Usuario = require("./usuario.js");
const Producto = require("./producto.js");
const { formatearPrecio, validarEmail } = require("./funciones.js");

let u1      = new Usuario("Ana", "ana@email.com");
let p1      = new Producto("Teclado", 250000);

console.log(u1.saludo());
console.log(formatearPrecio(p1.calcularTotal()));
console.log(u1.saludo());
console.log(formatearPrecio(p1.calcularTotal()));