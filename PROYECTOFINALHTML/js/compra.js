const nombreJuego = new URLSearchParams(window.location.search).get("nombre");
const mensajeCompra = document.getElementById("mensajeCompra");
const enlaceSteam = document.getElementById("enlaceSteam");
const urlSteam = new URL("https://store.steampowered.com/search/");

if (nombreJuego) {
    mensajeCompra.textContent = "Si le interesa comprar " + nombreJuego + ", entre aquí:";
    urlSteam.searchParams.set("term", nombreJuego);
} else {
    mensajeCompra.textContent = "Buscá el juego que te interesa en Steam:";
}

enlaceSteam.href = urlSteam.toString();
