const params = new URLSearchParams(window.location.search);
const id = Number(params.get("id"));
const imagenParam = params.get("imagen");
const nombreParam = params.get("nombre");
const juegoExistente = juegos.find((item) => item.id === id) ||
    juegos.find((item) => item.imagen === imagenParam || item.nombre === nombreParam);
const juego = juegoExistente
    ? {
        ...juegoExistente,
        nombre: nombreParam || juegoExistente.nombre,
        imagen: imagenParam || juegoExistente.imagen,
        categoria: params.get("categoria") || juegoExistente.categoria,
        descripcion: juegoExistente.descripcion ||
            descripcionesJuegos[nombreParam || juegoExistente.nombre]
    }
    : (params.has("nombre") && imagenParam
    ? {
        nombre: nombreParam,
        imagen: imagenParam,
        categoria: params.get("categoria") || "Videojuegos",
        descripcion: descripcionesJuegos[nombreParam] ||
            "Consultá la información disponible de este videojuego y compartí tu experiencia en las reseñas."
    }
    : null);

if (!juego) {
    document.querySelector(".detalle").textContent = "No se encontró ese juego.";
} else {
    document.getElementById("juegoNombre").textContent = juego.nombre;
    document.getElementById("juegoCategoria").textContent = juego.categoria || "";
    document.getElementById("juegoDescripcion").textContent =
        juego.descripcion || "Todavía no hay una descripción para este juego.";

    const imagen = document.getElementById("juegoImagen");
    imagen.src = juego.imagen;
    imagen.alt = "Imagen de " + juego.nombre;

    const claveResenas = "resenas-" + juego.imagen;
    const formularioResena = document.getElementById("formResena");
    const listaResenas = document.getElementById("listaResenas");
    const mensajeResena = document.getElementById("mensajeResena");
    const campoResena = document.getElementById("textoResena");
    const resenasPredeterminadas = [
        { autor: "Mateo", texto: "La historia me atrapó desde el principio y la disfruté hasta el final." },
        { autor: "Sofía", texto: "La ambientación está buenísima y hace que el juego se sienta muy especial." },
        { autor: "Nicolás", texto: "Es muy entretenido; me gustó mucho cómo se juega." },
        { autor: "Camila", texto: "Tiene momentos que sorprenden. Lo recomiendo." },
        { autor: "Valentina", texto: "Una experiencia genial, sin duda lo volvería a jugar." }
    ].map((resena, indice) => ({
        ...resena,
        id: "predeterminada-" + (indice + 1),
        fecha: new Date().toLocaleDateString("es-AR"),
        predeterminada: true
    }));

    function obtenerResenas() {
        const guardadas = JSON.parse(localStorage.getItem(claveResenas) || "[]");
        const resenasActualizadas = [
            ...resenasPredeterminadas,
            ...guardadas
                .filter((resena) => !String(resena.id || "").startsWith("predeterminada-"))
                .map((resena, indice) => ({
                    ...resena,
                    id: resena.id || "anterior-" + indice,
                    predeterminada: false
                }))
        ];

        localStorage.setItem(claveResenas, JSON.stringify(resenasActualizadas));
        return resenasActualizadas;
    }

    function mostrarResenas() {
        const resenas = obtenerResenas();
        const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo") || "null");
        const autorActual = usuarioActivo?.usuario || "Anónimo";
        listaResenas.replaceChildren();

        resenas.forEach((resena) => {
            const articulo = document.createElement("article");
            articulo.className = "resena";

            const autor = document.createElement("h3");
            autor.textContent = resena.autor;

            const fecha = document.createElement("small");
            fecha.textContent = resena.fecha;

            const texto = document.createElement("p");
            texto.textContent = resena.texto;

            articulo.append(autor, fecha, texto);

            if (!resena.predeterminada && resena.autor === autorActual) {
                const botonBorrar = document.createElement("button");
                botonBorrar.type = "button";
                botonBorrar.textContent = "Borrar";
                botonBorrar.setAttribute("aria-label", "Borrar mi reseña");
                botonBorrar.addEventListener("click", () => borrarResena(resena.id));
                articulo.appendChild(botonBorrar);
            }

            listaResenas.appendChild(articulo);
        });
    }

    function borrarResena(idResena) {
        const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo") || "null");
        const autorActual = usuarioActivo?.usuario || "Anónimo";
        const resenas = obtenerResenas();
        const resenaABorrar = resenas.find((resena) => resena.id === idResena);

        if (!resenaABorrar || resenaABorrar.predeterminada || resenaABorrar.autor !== autorActual) {
            return;
        }

        const resenasActualizadas = resenas.filter((resena) => resena.id !== idResena);
        localStorage.setItem(claveResenas, JSON.stringify(resenasActualizadas));
        mensajeResena.textContent = "Tu reseña se borró correctamente.";
        mostrarResenas();
    }

    formularioResena.addEventListener("submit", (evento) => {
        evento.preventDefault();
        const texto = campoResena.value.trim();

        if (!texto) {
            mensajeResena.textContent = "Escribí una reseña antes de publicarla.";
            return;
        }

        const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo") || "null");
        const resenas = obtenerResenas();
        resenas.unshift({
            id: "usuario-" + Date.now() + "-" + Math.random().toString(36).slice(2),
            autor: usuarioActivo?.usuario || "Anónimo",
            texto,
            fecha: new Date().toLocaleDateString("es-AR"),
            predeterminada: false
        });
        localStorage.setItem(claveResenas, JSON.stringify(resenas));
        campoResena.value = "";
        mensajeResena.textContent = "Tu reseña se guardó correctamente.";
        mostrarResenas();
    });

    mostrarResenas();
}