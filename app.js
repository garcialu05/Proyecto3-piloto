// Elementos del HTML

const btn = document.getElementById("btnCambio");
const aviso = document.getElementById("aviso");


// Elementos del piloto 1

const carreras1 = document.getElementById("carreras1");
const victorias1 = document.getElementById("victorias1");
const podios1 = document.getElementById("podios1");


// Elementos del piloto 2

const carreras2 = document.getElementById("carreras2");
const victorias2 = document.getElementById("victorias2");
const podios2 = document.getElementById("podios2");


// Evento del botón

btn.addEventListener("click", () => {

    // Estadísticas del piloto 1

    carreras1.textContent = "10";
    victorias1.textContent = "3";
    podios1.textContent = "6";


    // Estadísticas del piloto 2

    carreras2.textContent = "11";
    victorias2.textContent = "2";
    podios2.textContent = "250";


    // Mensaje

    aviso.textContent = "Estadísticas actualizadas correctamente.";

});