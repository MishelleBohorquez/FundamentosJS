const estudiante = {

  nombre: "Carlos",

  nota:   3.5

};

 

// 📖 Leer

console.log("Nota inicial:", estudiante.nota);    // 3.5

 

// ✏️ Modificar propiedad existente

estudiante.nota = 4.2;

console.log("Nota actualizada:", estudiante.nota); // 4.2

 

// ➕ Agregar propiedad nueva

estudiante.aprobado = true;

console.log("¿Aprobado?", estudiante.aprobado);   // true

 

// 🗑️ Eliminar propiedad

delete estudiante.nota;

console.log("Nota después de eliminar:", estudiante.nota); // undefined


const auto = {

  marca:  "Renault",

  modelo: "Logan"

};

 

let campo = "modelo";

console.log(auto[campo]);    // "Logan"
console.log(auto["marca"]);  // "Renault"