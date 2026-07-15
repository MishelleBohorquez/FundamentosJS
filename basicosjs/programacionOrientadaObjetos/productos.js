// ═══════════════════════════════════════════════════

// OBJETO PRODUCTO — propiedades + métodos completos

// ═══════════════════════════════════════════════════

const producto = {

  // ── PROPIEDADES ────────────────────────────────

  nombre:     "Auriculares Bluetooth",

  precio:     180000,

  stock:      20,

  categoria:  "Electrónica",

  descuento:  0,

 

  // ── MÉTODOS ────────────────────────────────────

  estaDisponible() {

    return this.stock > 0;

  },

 

  aplicarDescuento(porcentaje) {

    this.descuento = porcentaje;

    const precioFinal = this.precio * (1 - porcentaje / 100);

    return `Precio con ${porcentaje}% desc: $${precioFinal.toLocaleString()}`;

  },

 

  vender(cantidad) {

    if (cantidad > this.stock)

      return `❌ Solo hay ${this.stock} unidades`;

    this.stock -= cantidad;

    return `✅ Vendido: ${cantidad} ud. Stock restante: ${this.stock}`;

  },

 

  ficha() {

    return `📦 ${this.nombre} [${this.categoria}] - $${this.precio.toLocaleString()} | Stock: ${this.stock}`;

  }

};

 

// ── USO DEL OBJETO ──────────────────────────────

console.log(producto.ficha());

console.log("¿Disponible?", producto.estaDisponible());

console.log(producto.aplicarDescuento(15));

console.log(producto.vender(5));

console.log(producto.vender(25));