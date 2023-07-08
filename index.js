    // Obtener todos los elementos de enlace en la barra de navegación
    var navLinks = document.querySelectorAll('nav ul li a');

    // Iterar sobre cada enlace y agregar un controlador de eventos
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevenir el comportamiento predeterminado del enlace

            // Obtener el ID de la sección vinculada al enlace
            var targetSectionId = link.getAttribute('href');

            // Eliminar la clase 'active' de todos los enlaces de la barra de navegación
            navLinks.forEach(function(navLink) {
                navLink.classList.remove('active');
            });

            // Agregar la clase 'active' al enlace actual
            link.classList.add('active');

            // Enfocar la sección correspondiente
            document.querySelector(targetSectionId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });