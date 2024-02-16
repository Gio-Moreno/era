
        document.addEventListener("DOMContentLoaded", function() {
            // Obtener los parámetros de la URL
            const urlParams = new URLSearchParams(window.location.search);
            const idpost = urlParams.get('idpost');
            const nivel = urlParams.get('nivel');

            // URL del archivo JSON
            const jsonFile = '../data/data-articulos.json'; // Reemplaza 'ruta/al/archivo.json' con la ruta correcta hacia tu archivo JSON

            // Fetch para obtener los datos del artículo del archivo JSON
            fetch(jsonFile)
                .then(response => response.json())
                .then(data => {
                    // Verificar si el artículo está presente en los datos
                    if (data.idpost === parseInt(idpost) && data.nivel === nivel) {
                        // Construir el HTML con los datos del artículo
                        const articleHTML = `
                        <section class=" bg-dark">
                            <div class="container text-center py-5">
                                <div id="imagen"></div>
                                <p class="text-uppercase"><strong></strong>${data.categorias}</p>
                                <h2 class="text-light m-0 fs-1"><span class="text-primary text-uppercase">${data.titulo}</span></h2>
                                <p><strong>Autor:</strong> ${data.autor.nombre}</p>
                            </div>
                        </section>

                        <!-- Contenido Start -->
                        <div class="container d-lg-flex">
                            <div class="col-12 col-lg-9 container-xxl py-5 mt-3">
                                <div class="container">
                                    <div class="g-5">
                                        <div class="wow " data-wow-delay="0.5s">
                                            <div class="h-100">
                                                <h4 class="mb-3" id="">${data.extracto}</h4>
                                                <p class="fs-5">${data.contenido}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-12 col-lg-3 container-xxl py-5 mt-3">
                                <div class="container">
                                    <div class="g-5">
                                        <h4 class="mb-3" id="">Otros artículos</h4>

                                        <div class="">
                                         <div class="">
                                             <div class="service-item bg-white h-100">
                                                 <img class="img-fluid" src="img/caminata-sobre-brasas-era.webp" alt="">
                                                 <h5 class="py-3 text-decoration-underline" id="articulo4">Para qué la Urgencia</h5>  
                                             </div>
                                         </div>
                                         <div class="">
                                             <div class="service-item bg-white h-100">
                                                 <img class="img-fluid" src="img/coaches-personalizados-era.webp" alt="">
                                                 <h5 class="py-3 text-decoration-underline" id="articulo4">Para qué la Urgencia</h5>  
                                             </div>
                                         </div>
                                         <div class="">
                                             <div class="service-item bg-white h-100">
                                                 <img class="img-fluid" src="img/comunidad-era.webp" alt="">
                                                 <h5 class="py-3 text-decoration-underline" id="articulo4">Para qué la Urgencia</h5>  
                                             </div>
                                         </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Contenido End -->
                        `;
                        
                        // Insertar el HTML del artículo en el contenedor
                        document.getElementById('article-container').innerHTML = articleHTML;
                    } else {
                        console.error('El artículo especificado no existe.');
                    }
                })
                .catch(error => {
                    console.error('Error al cargar el archivo JSON:', error);
                });
        });
 