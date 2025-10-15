document.addEventListener('DOMContentLoaded', function () {
  const list = document.querySelector('.reviews__list');

  function initCarousel() {
    const reviewsImage = document.getElementsByClassName('reviews__image');
    const isFlickityEnabledActive = list.classList.contains('flickity-enabled');
    const servicesGrid = document.querySelector('.services__grid');

    if (window.innerWidth <= 1522 && !isFlickityEnabledActive) {
      reviewsImage[0].remove();
      new Flickity(list, {
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: true,
        wrapAround: true,
        draggable: true,
        touchVerticalScroll: true,
      });
    } else if (!reviewsImage.length && !isFlickityEnabledActive) {
      const div = document.createElement('div');
      div.className = 'reviews__image';
    }

    if (window.innerWidth <= 344) {
      new Flickity(servicesGrid, {
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: false,
        wrapAround: true,
        draggable: true,
        touchVerticalScroll: true,
        groupCells: 1,
      });
    }
  }

  initCarousel();
  window.addEventListener('resize', initCarousel);
});
