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

    // Selección de elementos
    const tabMantenimiento = document.getElementById('tab-mantenimiento');
    const tabListado = document.getElementById('tab-listado');
    const mantenimientoContent = document.getElementById('mantenimiento-content');
    const listadoContent = document.getElementById('listado-content');
    const btnConsultar = document.getElementById('btn-consultar');
    const btnExitListado = document.querySelector('.btn-exit');
    const resultadoListado = document.getElementById('resultado-listado');

    // Mostrar contenido de mantenimiento por defecto al cargar la página
    tabMantenimiento.classList.add('active');
    tabListado.classList.remove('active');
    listadoContent.style.display = 'none';

    // Eventos para cambiar entre pestañas
    tabMantenimiento.addEventListener('click', function() {
        tabMantenimiento.classList.add('active');
        tabListado.classList.remove('active');
        mantenimientoContent.style.display = 'block';
        listadoContent.style.display = 'none';
    });

    tabListado.addEventListener('click', function() {
        tabMantenimiento.classList.remove('active');
        tabListado.classList.add('active');
        mantenimientoContent.style.display = 'none';
        listadoContent.style.display = 'block';
    });

    // Botón Consultar en listado
    btnConsultar.addEventListener('click', function() {
        // Simulación de datos de usuarios (reemplazar con datos reales)
        const usersData = [
            { cedula: '123456789', nombre1: 'Nombre1', nombre2: 'Nombre2', apellido1: 'Apellido1', apellido2: 'Apellido2', usuario: 'user1' },
            { cedula: '987654321', nombre1: 'Nombre3', nombre2: 'Nombre4', apellido1: 'Apellido3', apellido2: 'Apellido4', usuario: 'user2' }
        ];
    
        // Limpiar resultado anterior
        resultadoListado.innerHTML = '';
    
        // Construir tabla de usuarios
        const table = document.createElement('table');
        table.classList.add('user-table');
        const tableHead = document.createElement('thead');
        const headRow = document.createElement('tr');
        headRow.innerHTML = `
            <th>Cédula</th>
            <th>Nombre 1</th>
            <th>Nombre 2</th>
            <th>Apellido 1</th>
            <th>Apellido 2</th>
            <th>Usuario</th>
            <th>Acciones</th>
        `;
        tableHead.appendChild(headRow);
        const tableBody = document.createElement('tbody');
    
        usersData.forEach(user => {
            const bodyRow = document.createElement('tr');
            bodyRow.innerHTML = `
                <td>${user.cedula}</td>
                <td>${user.nombre1}</td>
                <td>${user.nombre2}</td>
                <td>${user.apellido1}</td>
                <td>${user.apellido2}</td>
                <td>${user.usuario}</td>
                <td class="actions">
                    <button class="btn-delete">Eliminar</button>
                </td>
            `;
            tableBody.appendChild(bodyRow);
        });
    
        table.appendChild(tableHead);
        table.appendChild(tableBody);
        resultadoListado.appendChild(table);
    
        // Mostrar tabla y mantener visible el resultado
        resultadoListado.style.display = 'block';
    });
    
    // Ajustar el evento de salir para que solo cambie las pestañas y no oculte resultadoListado
    btnExitListado.addEventListener('click', function() {
        tabMantenimiento.classList.add('active');
        tabListado.classList.remove('active');
        mantenimientoContent.style.display = 'block';
        // No cambiar la visibilidad de listadoContent aquí
    }); 
    
})();
