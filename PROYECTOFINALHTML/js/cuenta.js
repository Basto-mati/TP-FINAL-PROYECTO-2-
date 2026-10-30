const navegacionCuenta = document.querySelector(".barra-navegadora");

if (navegacionCuenta) {
    let contenedorSesion = navegacionCuenta.querySelector(".contenedor-sesion");

    if (!contenedorSesion) {
        contenedorSesion = document.createElement("div");
        contenedorSesion.className = "contenedor-sesion";
        navegacionCuenta.appendChild(contenedorSesion);
    }

    contenedorSesion.replaceChildren();

    const usuarioActivo = JSON.parse(localStorage.getItem("usuarioActivo") || "null");

    if (usuarioActivo) {
        const enlacePerfil = document.createElement("a");
        enlacePerfil.className = "item-menu enlace-perfil";
        enlacePerfil.href = "ConfigPerfil.html";
        enlacePerfil.textContent = "Perfil";
        contenedorSesion.appendChild(enlacePerfil);
    } else {
        const enlaceLogin = document.createElement("a");
        enlaceLogin.className = "item-menu";
        enlaceLogin.href = "login.html";
        enlaceLogin.textContent = "Iniciar sesión";

        const enlaceRegistro = document.createElement("a");
        enlaceRegistro.className = "item-menu";
        enlaceRegistro.href = "registrarse.html";
        enlaceRegistro.textContent = "Registrarse";

        contenedorSesion.append(enlaceLogin, enlaceRegistro);
    }
}
