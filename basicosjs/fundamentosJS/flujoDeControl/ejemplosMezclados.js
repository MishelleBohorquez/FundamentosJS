let carrito = [
  { nombre: "Arroz", precio: 8000 },
  { nombre: "Pollo", precio: 25000 },
  { nombre: "Gaseosa", precio: 6000 }
];

for (let i = 0; i < carrito.length; i++) {
  if (carrito[i].precio > 20000) {
    console.log(carrito[i].nombre + " es un producto caro 💰");
  } else {
    console.log(carrito[i].nombre + " tiene buen precio ✅");
  }
}