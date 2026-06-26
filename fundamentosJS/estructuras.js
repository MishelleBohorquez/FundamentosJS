//& Arrays 
let carrit = ["Pizza", "Gaseosa", "Postre", "Helado"];
console.log(carrit);

let carrito2 = [3, "Gaseosa", "Postre"];
console.log(carrito2);
console.log(carrit[0]); 
console.log(carrit[5]);

let usuario = ["Pedrito", "Ana"];
let carrito = ["Pizza", "Gaseosa"];
carrito.push("Postre");      // agrega al final
console.log(carrito);        // [ 'Pizza', 'Gaseosa', 'Postre' ]
carrito.pop();               // elimina el último
console.log(carrito);        // [ 'Pizza', 'Gaseosa' ]
carrito[0] = "Hamburguesa";  // cambia el de la posición 0
console.log(carrito);        // [ 'Hamburguesa', 'Gaseosa' ]
console.log(carrito.length);

// Objetos
let cliente = {
  nombre: "Andrés",
  edad: 30
};
console.log(cliente);
console.log(cliente.nombre);   
console.log(cliente.edad);   

cliente.ciudad = "Cali";     // agrega una nueva clave
console.log(cliente);        // { nombre: 'Andrés', edad: 30, ciudad: 'Cali' }
cliente.edad = 31;           // cambia un valor existente
console.log(cliente);        // { nombre: 'Andrés', edad: 31, ciudad: 'Cali' }
delete cliente.edad;         // elimina una clave
console.log(cliente);        // { nombre: 'Andrés', ciudad: 'Cali' }

// Juntos

let pedido = {
    cliente: "Dayan",
    items: ["Pizza", "Gaseosa"]
};
console.log(pedido.items[0]);

let user = {
    nombre: "Dayan",
    telefono: [2222555, 54545]
};
console.log(user.telefono[0]);