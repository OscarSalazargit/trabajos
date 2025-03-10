
document.addEventListener('DOMContentLoaded', function () {
    const tarjetas = document.querySelectorAll('.tarjeta');

    // Función para añadir efectos al pasar el cursor
    tarjetas.forEach(function (tarjeta, indice) {
        tarjeta.addEventListener('mouseenter', function () {
            this.style.zIndex = "10";

            console.log(`Has seleccionado el proyecto ${indice + 1}`);
        });

        tarjeta.addEventListener('mouseleave', function () {
            this.style.zIndex = "1";
        });

        // Prevenir comportamiento por defecto pero guardar la URL
        tarjeta.addEventListener('click', function (evento) {
            evento.preventDefault();
            const enlace = this.getAttribute('href');

            // Simular carga con setTimeout
            this.classList.add('tarjeta--activa');

            setTimeout(() => {
                //alert(`Navegando a: ${enlace}`);
                window.location.href = enlace;
            }, 300);
        });
    });

    // Función para añadir números aleatorios en el fondo (efecto matriz)
    function crearEfectoMatriz() {
        const cuerpo = document.body;
        const numeroAleatorio = document.createElement('div');

        // numeroAleatorio.textContent = Math.floor(Math.random() * 2);
        numeroAleatorio.innerHTML = "<img src='assets/logo3colores.png' height='20px'></img>"
        numeroAleatorio.style.zIndex = '-1';
        numeroAleatorio.style.position = 'absolute';
        numeroAleatorio.style.color = 'rgba(227, 204, 166, 0.1)';
        // numeroAleatorio.style.color = 'rgba(249, 168, 37, 0.1)';
        numeroAleatorio.style.left = Math.random() * window.innerWidth + 'px';
        numeroAleatorio.style.top = Math.random() * window.innerHeight + 'px';
        numeroAleatorio.style.fontSize = Math.random() * 20 + 100 + 'px';
        numeroAleatorio.style.userSelect = 'none';
        numeroAleatorio.style.pointerEvents = 'none';

        cuerpo.appendChild(numeroAleatorio);

        setTimeout(() => {
            numeroAleatorio.remove();
        }, 5000);
    }

    // Crear efecto matriz cada cierto tiempo
    setInterval(crearEfectoMatriz, 2000);
});
