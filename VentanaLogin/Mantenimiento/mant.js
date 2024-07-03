// Encapsulamos el código en una función anónima para evitar conflictos globales
(function() {
    // Obtener referencias a los elementos de las pestañas y contenido
    var tabs = document.querySelectorAll('.tab');
    var contentSections = document.querySelectorAll('.content-section');

    // Agregar listeners para cada pestaña
    tabs.forEach(function(tab) {
        tab.addEventListener('click', function() {
            // Desactivar todas las pestañas y ocultar todo el contenido
            tabs.forEach(function(t) {
                t.classList.remove('active');
            });
            contentSections.forEach(function(section) {
                section.style.display = 'none';
            });

            // Activar la pestaña clickeada y mostrar el contenido correspondiente
            tab.classList.add('active');
            var tabName = tab.id.replace('tab-', '');
            document.getElementById(tabName + '-content').style.display = 'block';
        });
    });
})();
