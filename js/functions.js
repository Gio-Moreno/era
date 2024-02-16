



// Consulta fecth a fechas de entrenamiento

document.addEventListener('DOMContentLoaded', function() {
    fetch('../data/dates.json')
    .then(response => response.json())
    .then(data => {
        const fechas = data.fechas;

        for (let evento in fechas) {
            const fecha = new Date(fechas[evento]);
            const mes = fecha.toLocaleString('es-ES', { month: 'long' });
            const dia = fecha.getDate() + 1;
 
            // Obtener el div correspondiente al evento y insertar la fecha
            const divEvento = document.getElementById(evento);
            if (divEvento) {
                divEvento.innerText = `${mes} ${dia}`;
        }
    }
    })
    .catch(error => console.error('Error al cargar los datos:', error));
});


// Contador para próximo entrenamiento


// Fetch para obtener la fecha del webinar desde el archivo JSON
fetch('../data/dates.json')
    .then(response => response.json())
    .then(data => {
        const fechaWebinar = new Date(data.fechas.encontrarse);
        fechaWebinar.setHours(8, 0, 0, 0); // Establece la hora a las 8:00 am
        const targetDate = fechaWebinar.getTime();

        function actualizarCuentaRegresiva() {
            const currentDate = new Date().getTime();
            const difference = fechaWebinar - currentDate;

            // Calcula los días, horas, minutos y segundos restantes
            const days = Math.floor(difference / (1000 * 60 * 60 * 24));
            const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((difference % (1000 * 60)) / 1000);

            // Actualiza el HTML con los valores de la cuenta regresiva
            document.getElementById('dias').innerText = days;
            document.getElementById('horas').innerText = hours;
            document.getElementById('minutos').innerText = minutes;
            document.getElementById('segundos').innerText = seconds;
        }

        // Actualiza la cuenta regresiva cada segundo
        setInterval(actualizarCuentaRegresiva, 1000);
    })
    .catch(error => console.error('Error al cargar la fecha del webinar:', error));

    




    document.addEventListener("DOMContentLoaded", function() {
        // Obtener el parámetro 'nivel' de la URL
        const urlParams = new URLSearchParams(window.location.search);
        const nivel = urlParams.get('nivel');
        
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
                    document.getElementById('beneficio1').innerText = `${nivelData.beneficio1}`;
                    document.getElementById('descripcionBeneficio1').innerText = `${nivelData.descripcionBeneficio1}`;
                    document.getElementById('beneficio2').innerText = `${nivelData.beneficio2}`;
                    document.getElementById('descripcionBeneficio2').innerText = `${nivelData.descripcionBeneficio2}`;
                    document.getElementById('beneficio3').innerText = `${nivelData.beneficio3}`;
                    document.getElementById('descripcionBeneficio3').innerText = `${nivelData.descripcionBeneficio3}`;
                } else {
                    // Mostrar un mensaje si el nivel no existe
                    console.error('El nivel especificado no existe.');
                    // Actualizar los divs con un mensaje de error
                    document.getElementById('nivel').innerText = 'Error';
                    document.getElementById('imagen').innerText = 'El nivel especificado no existe.';
                    document.getElementById('titulo').innerText = '';
                    document.getElementById('duracion').innerText = '';
                    document.getElementById('beneficios').innerText = '';
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
                document.getElementById('beneficios').innerText = '';
            });
    });
