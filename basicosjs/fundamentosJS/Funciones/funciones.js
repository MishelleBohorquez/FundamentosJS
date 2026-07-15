// Bloque de código destinado a resolver algo

// Función básica
function saludar (){
    console.log("Hola a todos y todas");
}
saludar();

// Funciones con parámetros
function saludarConParametro(nombre){ // nombre = parámetro
    console.log("Hola," ,  nombre + "!");
}
saludarConParametro("Dayan"); // Dayan = Argumento (El valor de la variable)
saludarConParametro("Mishelle");

// Funciones integregadas

console.log("camiseta".toUpperCase()); // MAYÚSCULA
console.log("camiseta".length); // cuenta
console.log(Math.round(36000.75)); // Redondea el número