/*
function calcularDescuento(precio) {
  const precioFinal = precio - (precio * 0.20);
  console.log("Precio final: " + precioFinal);
};

calcularDescuento(45000);
calcularDescuento(120000);
calcularDescuento(89900);

function crearFactura(){
  console.log("Haciendo la factura");
};

function datosCliente(){
  console.log("Datos cliente");
};
*/

// Parte 2 - RETURN | CONSOLE.LOG
function calcularPrecio(precio) {
  //console.log(precio - (precio * 0.20)); // console.log(): Imprime únicamente
  return precio - (precio * 0.20); // return: guarda información de la función
}
function armarEtiqueta(nombre, precio) {
  const valor = calcularPrecio(precio);
  return nombre + " cuesta $" + valor;
}
//armarEtiqueta("Camiseta", 45000);
console.log(armarEtiqueta("Camiseta", 45000));