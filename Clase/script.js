document.addEventListener("DOMContentLoaded", function() {
    const form = document.getElementById("formulario");
    const nombreInput = document.getElementById("nombre");
    const apellidoInput = document.getElementById("apellido");
    const emailInput = document.getElementById("email");
    const contraseñaInput = document.getElementById("password");
    const confirmarContraseñaInput = document.getElementById("contraseñaConfirmar");

    form.addEventListener("submit", function(event) {
        event.preventDefault();

        if (!nombreInput.value || !apellidoInput.value || !emailInput.value || !contraseñaInput.value || !confirmarContraseñaInput.value) {
            alert("Por favor, completa todos los campos.");
            return;
        }
        if (contraseñaInput.value !== confirmarContraseñaInput.value) {
            alert("Las contraseñas no coinciden.");
            return;
        }
        alert("Formulario enviado correctamente.");
        form.reset();
        window.location.href = "indexx.html";
    });
});