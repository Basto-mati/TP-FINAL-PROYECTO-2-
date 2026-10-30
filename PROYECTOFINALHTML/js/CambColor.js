const temaGuardado = localStorage.getItem("temaPapuBestie");
const botonTema = document.createElement("button");
const primerTituloJuegos = [...document.querySelectorAll(".contenedor-cartelera .titulo-cartelera")]
    .find((titulo) => titulo.textContent.trim() === "Survival Horror games");
const tituloPrincipal = primerTituloJuegos ||
    document.querySelector("main h1") ||
    document.querySelector("h1");

document.body.classList.toggle("tema-claro", temaGuardado === "claro");

botonTema.type = "button";
botonTema.className = "boton-tema";
botonTema.setAttribute("aria-pressed", String(temaGuardado === "claro"));

function actualizarBotonTema() {
    const temaClaroActivo = document.body.classList.contains("tema-claro");
    botonTema.textContent = "Modo";
    botonTema.setAttribute("aria-pressed", String(temaClaroActivo));
    botonTema.setAttribute(
        "aria-label",
        temaClaroActivo ? "Cambiar a modo oscuro" : "Cambiar a modo claro"
    );
}

botonTema.addEventListener("click", () => {
    const temaClaroActivo = document.body.classList.toggle("tema-claro");
    localStorage.setItem("temaPapuBestie", temaClaroActivo ? "claro" : "oscuro");
    actualizarBotonTema();
});

if (tituloPrincipal) {
    const filaTitulo = document.createElement("div");
    filaTitulo.className = "fila-titulo-tema";
    tituloPrincipal.parentElement.insertBefore(filaTitulo, tituloPrincipal);
    filaTitulo.append(tituloPrincipal, botonTema);
} else {
    document.body.appendChild(botonTema);
}

actualizarBotonTema();