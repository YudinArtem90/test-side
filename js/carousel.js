document.addEventListener('DOMContentLoaded', function () {
  const list = document.querySelector('.reviews__list');

  function initCarousel() {
    const reviewsImage = document.getElementsByClassName('reviews__image');
    const isFlickityEnabledActive = list.classList.contains('flickity-enabled');
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
  }

  initCarousel();
  window.addEventListener('resize', initCarousel);
});
