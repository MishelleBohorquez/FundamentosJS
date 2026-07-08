/*
let cursos = ["JavaScript desde cero", "Java Backend", "React práctico"];
for (let i = 0; i < cursos.length; i++) {
  console.log(cursos[i]);
}
cursos.push("Node.js intermedio");
console.log(cursos);
let eliminado = cursos.pop();
console.log("Se quitó: " + eliminado);
console.log(cursos);
*/

// let curso = ["Java Backend", 150000, 40, "Carlos"];

let curso = {

  nombre: "Java Backend",
  precio: 150000,
  duracion: 40,
  instructor: "Carlos"

};

console.log(curso.nombre);
console.log(curso.precio);
console.log(curso.instructor);

curso.precio = 160000;
curso.modalidad = "virtual";
console.log(curso);

let cursos = [

  { nombre: "JavaScript desde cero", precio: 120000, instructor: "Ana" },
  { nombre: "Java Backend", precio: 150000, instructor: "Carlos" },
  { nombre: "React práctico", precio: 130000, instructor: "Lucía" }

];

console.log(cursos[0].nombre);
console.log(cursos[0]);
console.log(cursos[1].instructor);

for (let i = 0; i < cursos.length; i++) {
  console.log(cursos[i].nombre + " — " + cursos[i].instructor);
}

// function describirCurso(curso) {
//   console.log("El curso " + curso.nombre + " cuesta " + curso.precio);
// }

// describirCurso(cursos[0]);

function describirCurso(curso) {
  return "El curso " + curso.nombre + " cuesta " + curso.precio;
}

let frase = describirCurso(cursos[0]);
console.log(frase);


// Ambito
function precioConIva(curso) {
  let impuesto = curso.precio * 0.19;
  return curso.precio + impuesto;
}

console.log(precioConIva(cursos[0]));
// console.log(impuesto); // Esto da error porque esta adentro de una funcion, no se conoce afuera

let nombrePlataforma = "EduColombia";

function saludar() {
console.log("Bienvenido a " + nombrePlataforma);
}
saludar();