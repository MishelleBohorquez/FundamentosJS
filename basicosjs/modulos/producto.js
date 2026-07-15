class Producto {

  constructor(nombre, precio) {
    this.nombre = nombre;
    this.precio = precio;

  }

  calcularTotal() {
    return this.precio * 1.19;
  }

}

module.exports = Producto