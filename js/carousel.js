document.addEventListener('DOMContentLoaded', () => {
  const carousels = document.querySelectorAll('.carousel');

  carousels.forEach((carousel) => {
    const track = carousel.querySelector('.carousel__track');
    if (!track) return;

    const isReviews = carousel.classList.contains('carousel--reviews');

    let flkty = null;

    function initCarousel() {
      const isFlickityEnabledActive =
        track.classList.contains('flickity-enabled');

      if (isReviews) {
        const reviewsImage = carousel.querySelectorAll('.reviews__image');

        if (window.innerWidth <= 1522 && reviewsImage.length) {
          reviewsImage[0].remove();
        }

        if (window.innerWidth <= 1522 && !isFlickityEnabledActive) {
          flkty = new Flickity(track, {
            cellSelector: '.carousel__slide',
            cellAlign: 'left',
            contain: true,
            pageDots: false,
            prevNextButtons: window.innerWidth > 344,
            wrapAround: true,
            draggable: true,
            groupCells: 1,
          });
        }

        if (window.innerWidth > 1522 && isFlickityEnabledActive) {
          flkty.destroy();
          flkty = null;
        }

        return;
      }

      if (!isFlickityEnabledActive) {
        flkty = new Flickity(track, {
          cellSelector: '.carousel__slide',
          cellAlign: 'center',
          fullscreen: true,
          lazyLoad: true,
          contain: true,
          pageDots: false,
          prevNextButtons: true,
          wrapAround: true,
          draggable: true,
        });
      }
    }

    initCarousel();

    window.addEventListener('resize', initCarousel);
  });
});
