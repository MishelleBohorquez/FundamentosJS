console.log("Dónde será que apareceré?");

const btnCalcular = document.getElementById("btnCalcular");
btnCalcular.addEventListener("click", function () {
    // 1. Leer el nombre
    const nombre = document.getElementById("nombreUsuario").value.trim();
    // 2. Validar que el nombre no esté vacío
    if (nombre === "") {
        document.getElementById("mensajePrincipal").textContent = "Por favor ingresa tu nombre";
        document.getElementById("subMensaje").textContent = "";
        document.getElementById("puntaje").textContent = "";
        document.getElementById("resultado").style.display = "block";
        return; // Salir de la función si no hay nombre
    }
    // 3. Calcular el puntaje sumando los valores de los checkboxes marcados
    let puntaje = 0;
    const tecnologias = ["html", "js", "java", "git", "sql"];
    tecnologias.forEach(function (id) {
        const checkbox = document.getElementById(id);
        if (checkbox.checked) {
            puntaje += parseInt(checkbox.value);
        }
    });
    // 4. Determinar el perfil según el puntaje
    let perfil = "";
    let emoji = "";
    if (puntaje === 0) {
        perfil = "¡Todo gran dev empezó desde cero!";
        emoji = "🌱";
    } else if (puntaje <= 30) {
        perfil = "Dev en construcción — vas muy bien";
        emoji = "🔨";
    } else if (puntaje <= 60) {
        perfil = "Dev con criterio — el stack te empieza a conocer";
        emoji = "⚡";
    } else {
        perfil = "Full Stack en formación — el mercado te está buscando";
        emoji = "🚀";
    }
    // 5. Mostrar el resultado
    document.getElementById("mensajePrincipal").textContent = emoji + " " + nombre + ", tu perfil es:";
    document.getElementById("subMensaje").textContent = perfil;
    document.getElementById("puntaje").textContent = puntaje + " / 100 pts";
    document.getElementById("resultado").style.display = "block";
});