document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('btn-insertar').addEventListener('click', function() {
        // Redireccionar a la página de insertar
        window.location.href = '../Mantenimiento/insertarP.html';
    });

    document.getElementById('btn-mantenimiento').addEventListener('click', function() {
        // Redireccionar a la página de mantenimiento
        window.location.href = '../Mantenimiento/mantenimiento.html';
    });

    document.getElementById('btn-desarrolladores').addEventListener('click', function() {
        // Redireccionar a la página de desarrolladores
        window.location.href = '../Mantenimiento/desarrolladores.html';
    });

    document.getElementById('btn-salir').addEventListener('click', function() {
        // Redireccionar a la página de inicio de sesión (index.html)
        window.location.href = '../Login/index.html';
    });
});
