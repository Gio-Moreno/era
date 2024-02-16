



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
