
  document.addEventListener("DOMContentLoaded", function() {
    var swiper = new Swiper(".coming-container", {
      spaceBetween: 30,
      loop: true,
      centeredSlides: true,
      autoplay: {
        delay: 1900,
        disableOnInteraction: false,
      },
      breakpoints: {
        0: {
          slidesPerView: 2,
        },
        568: {
          slidesPerView: 3,
        },
        768: {
          slidesPerView: 4,
        },
        968: {
          slidesPerView: 5,
        },
      },
    });
  });


   // Event listener para el botón principal "Reproducir"
   document.getElementById('play-button-main').addEventListener('click', function () {
    const trailerLink = 'https://www.youtube.com/watch?v=NVw3DnN9WoA&ab_channel=WarnerBros.PicturesLatinoam%C3%A9rica'; // Enlace del tráiler subtitulado al español
    const trailerLinkWithSubtitles = `${trailerLink}&hl=es`; // Agregar parámetro de subtítulos en español
    window.open(trailerLinkWithSubtitles, '_blank'); // Abrir en una nueva pestaña
});


 