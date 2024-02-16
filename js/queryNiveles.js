// Consulta datos de niveles

document.addEventListener("DOMContentLoaded", function() {
    // Obtener el parámetro 'nivel' de la URL
    const urlParams = new URLSearchParams(window.location.search);
    const nivel = urlParams.get('nivel');
    
    // Verificar si el nivel no está en la lista de niveles esperados y redirigir a la página de inicio
    if (!['encontrarse', 'renacer', 'accionar'].includes(nivel)) {
        window.location.href = '/'; // Cambia 'pagina_de_inicio.html' por la ruta de tu página de inicio
    }

    // URL del archivo JSON
    const jsonFile = '../data/data-niveles.json';
    
    // Fetch para obtener los datos del archivo JSON
    fetch(jsonFile)
        .then(response => response.json())
        .then(data => {
            // Verificar si el nivel existe en los datos
            if (nivel && data[nivel]) {
                const nivelData = data[nivel];
                
                // Actualizar los divs con la información del nivel
                
                document.getElementById('nivel').innerText = nivelData.nivel;
                document.getElementById('imagen').innerHTML = `<img class="img-fluid mb-4" src="/img/${nivelData.imagen}" alt="${nivelData.nivel}">`;
                document.getElementById('titulo').innerText = nivelData.titulo;
                document.getElementById('descripcion').innerText = nivelData.descripcion;
                document.getElementById('duracion').innerText = `${nivelData.duracion}`;
                document.getElementById('articulo1').innerText = `${nivelData.articulo1}`;
                document.getElementById('descripcionarticulo1').innerText = `${nivelData.descripcionarticulo1}`;
                document.getElementById('articulo2').innerText = `${nivelData.articulo2}`;
                document.getElementById('descripcionarticulo2').innerText = `${nivelData.descripcionarticulo2}`;
                document.getElementById('articulo3').innerText = `${nivelData.articulo3}`;
                document.getElementById('descripcionarticulo3').innerText = `${nivelData.descripcionarticulo3}`;
                document.getElementById('articulo4').innerText = `${nivelData.articulo4}`;
                document.getElementById('descripcionarticulo4').innerText = `${nivelData.descripcionarticulo4}`;
            } else {
                // Mostrar un mensaje si el nivel no existe
                console.error('El nivel especificado no existe.');
                // Actualizar los divs con un mensaje de error
                document.getElementById('nivel').innerText = 'Error';
                document.getElementById('imagen').innerText = 'El nivel especificado no existe.';
                document.getElementById('titulo').innerText = '';
                document.getElementById('duracion').innerText = '';
                document.getElementById('articulo').innerText = '';
            }
        })
        .catch(error => {
            console.error('Error al cargar el archivo JSON:', error);
            // Mostrar un mensaje de error si falla la carga del archivo JSON
            // Actualizar los divs con un mensaje de error
            document.getElementById('nivel').innerText = 'Error';
            document.getElementById('imagen').innerText = 'Error al cargar los datos del nivel.';
            document.getElementById('titulo').innerText = '';
            document.getElementById('duracion').innerText = '';
            document.getElementById('articulos').innerText = '';
        });
});
