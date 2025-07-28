const menu = document.getElementById('mobileMenu');
const btnMenuH = document.getElementById('btnMenuH');

// Toggle para abrir/cerrar desde el botón
btnMenuH.addEventListener('click', (e) => {
    e.stopPropagation();
    menu.classList.toggle('hidden');
});

// Cierra el menú al hacer clic en cualquier enlace dentro de él
document.querySelectorAll('#mobileMenu a').forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.add('hidden');
    });
});

// Cierra el menú si se hace clic fuera de él
document.addEventListener('click', (e) => {
    const isClickInside = menu.contains(e.target) || btnMenuH.contains(e.target);
    if (!isClickInside) {
        menu.classList.add('hidden');
    }
});
//----------------------------------------------------------------
//agregando clases dinamicamente a menú en header
const nav = document.getElementById('miNav');
const enlaces = nav.children;

for (let i = 0; i < enlaces.length; i++) {
    enlaces[i].classList.add(
        "text-white",
        "text-2xl",
        "lg:text-3xl",
        "xl:text-5xl",
        "hover:bg-gray-400",
        "active:scale-95",
        "transition-transform",
        "p-2",
        "rounded-2xl"
    );
};


//-------------------------
import { listaHabilidades } from "./habilidades.js";

function generarHabilidades() {
    const divH = document.getElementById("divHabilidades");
    divH.innerHTML = ""; // Limpia antes de renderizar

    listaHabilidades.forEach(hab => {
        const div = document.createElement("div");
        div.classList.add(
            "fill-black",
            "drop-shadow-lg",
            "drop-shadow-black/100",
            "bg-yellow-300",
            "rounded-2xl",
            "h-full",
            "w-full",
            "flex",
            "items-center",
            "justify-center",
            "p-2"
        );
        const img = document.createElement("img");
        img.src = hab.img;
        img.alt = hab.alt;
        img.classList.add("h-30", "w-auto");
        div.appendChild(img);
        divH.appendChild(div);
    });
}
window.addEventListener("DOMContentLoaded", generarHabilidades);