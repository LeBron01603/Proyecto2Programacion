document.addEventListener("DOMContentLoaded", function() {
    const pwShowHide = document.querySelectorAll(".eye-icon");

    pwShowHide.forEach(eyeIcon => {
        eyeIcon.addEventListener("click", () => {
            let pwField = eyeIcon.previousElementSibling; // Selecciona el campo de contraseña anterior al icono de ojo

            if (pwField.type === "password") {
                pwField.type = "text";
                eyeIcon.classList.replace("bx-hide", "bx-show");
            } else {
                pwField.type = "password";
                eyeIcon.classList.replace("bx-show", "bx-hide");
            }
        });
    });

    // En el evento submit del formulario de login (index.html)
    document.querySelector('#login-form').addEventListener('submit', function(event) {
        event.preventDefault(); // Evita que se envíe el formulario y se recargue la página

        // Aquí podrías realizar una validación real de credenciales si fuera necesario
        //aqui va la logica de autenticacion
        // Redirigir al usuario a la página de menú
        window.location.href = '../Menu/menu.html';
    });
});
