const formularioPerfil = document.getElementById("formPerfil");
const mensajePerfil = document.getElementById("mensajePerfil");
const usuarioActivoPerfil = JSON.parse(localStorage.getItem("usuarioActivo") || "null");

if (!usuarioActivoPerfil) {
    window.location.href = "login.html";
} else {
    const usuarioPerfil = document.getElementById("usuarioPerfil");
    const emailPerfil = document.getElementById("emailPerfil");
    const contrasenaPerfil = document.getElementById("contrasenaPerfil");

    usuarioPerfil.value = usuarioActivoPerfil.usuario || "";
    emailPerfil.value = usuarioActivoPerfil.email || "";
    contrasenaPerfil.value = usuarioActivoPerfil.contrasena || usuarioActivoPerfil.password || "";

    formularioPerfil.addEventListener("submit", (evento) => {
        evento.preventDefault();
        mensajePerfil.textContent = "";

        const usuario = usuarioPerfil.value.trim();
        const email = emailPerfil.value.trim().toLowerCase();
        const contrasena = contrasenaPerfil.value;

        if (!usuario || !email || !contrasena.trim()) {
            mensajePerfil.textContent = "Completá todos los campos.";
            return;
        }

        if (!emailPerfil.validity.valid) {
            mensajePerfil.textContent = "Ingresá un email válido.";
            return;
        }

        const usuariosGuardados = JSON.parse(localStorage.getItem("usuarios") || "[]");
        const usuarioDuplicado = usuariosGuardados.some(
            (cuenta) =>
                cuenta.usuario.toLowerCase() === usuario.toLowerCase() &&
                cuenta.usuario.toLowerCase() !== usuarioActivoPerfil.usuario.toLowerCase()
        );
        const emailDuplicado = usuariosGuardados.some(
            (cuenta) =>
                cuenta.email &&
                cuenta.email.toLowerCase() === email &&
                cuenta.usuario.toLowerCase() !== usuarioActivoPerfil.usuario.toLowerCase()
        );

        if (usuarioDuplicado) {
            mensajePerfil.textContent = "Ese nombre de usuario ya está en uso.";
            return;
        }

        if (emailDuplicado) {
            mensajePerfil.textContent = "Ese email ya está registrado.";
            return;
        }

        const cuentaActualizada = {
            ...usuarioActivoPerfil,
            usuario,
            email,
            contrasena
        };
        const indiceCuenta = usuariosGuardados.findIndex(
            (cuenta) => cuenta.usuario.toLowerCase() === usuarioActivoPerfil.usuario.toLowerCase()
        );

        if (indiceCuenta === -1) {
            mensajePerfil.textContent = "No se encontró la cuenta para guardar los cambios.";
            return;
        }

        usuariosGuardados[indiceCuenta] = cuentaActualizada;
        localStorage.setItem("usuarios", JSON.stringify(usuariosGuardados));
        localStorage.setItem("usuarioActivo", JSON.stringify(cuentaActualizada));
        mensajePerfil.textContent = "Los cambios se guardaron correctamente.";
    });

    document.getElementById("cerrarSesion").addEventListener("click", () => {
        localStorage.removeItem("usuarioActivo");
        window.location.href = "index.html";
    });
}
