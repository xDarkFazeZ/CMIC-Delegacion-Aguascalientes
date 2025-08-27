/*Script para el menú hamburguesa*/
document.addEventListener('DOMContentLoaded', function () {
    const menuHamburguesa = document.querySelector('.menu-hamburguesa');
    const navegacion = document.querySelector('.navegacion');
    const overlay = document.querySelector('.overlay');

    menuHamburguesa.addEventListener('click', function () {
        this.classList.toggle('active');
        navegacion.classList.toggle('active');
        overlay.classList.toggle('active');

        // Prevenir scroll cuando el menú está abierto
        document.body.style.overflow = navegacion.classList.contains('active') ? 'hidden' : '';
    });

    // Cerrar menú al hacer clic en overlay
    overlay.addEventListener('click', function () {
        menuHamburguesa.classList.remove('active');
        navegacion.classList.remove('active');
        this.classList.remove('active');
        document.body.style.overflow = '';
    });

    // Cerrar menú al hacer clic en un enlace (útil en móviles)
    const enlaces = document.querySelectorAll('.navegacion__enlace');
    enlaces.forEach(enlace => {
        enlace.addEventListener('click', function () {
            menuHamburguesa.classList.remove('active');
            navegacion.classList.remove('active');
            overlay.classList.remove('active');
            document.body.style.overflow = '';
        });
    });
});
// Script básico para el carrusel
document.addEventListener('DOMContentLoaded', function () {
    const carruselInner = document.querySelector('.carrusel-inner');
    const items = document.querySelectorAll('.carrusel-item');
    const prevBtn = document.querySelector('.carrusel-control.prev');
    const nextBtn = document.querySelector('.carrusel-control.next');
    let currentIndex = 0;

    function updateCarrusel() {
        carruselInner.style.transform = `translateX(-${currentIndex * 100}%)`;
    }

    nextBtn.addEventListener('click', function () {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarrusel();
    });

    prevBtn.addEventListener('click', function () {
        currentIndex = (currentIndex - 1 + items.length) % items.length;
        updateCarrusel();
    });

    // Cambio automático cada 5 segundos
    setInterval(function () {
        currentIndex = (currentIndex + 1) % items.length;
        updateCarrusel();
    }, 5000);
});