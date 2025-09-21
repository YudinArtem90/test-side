document.addEventListener('DOMContentLoaded', function () {
  const list = document.querySelector('.reviews__list');

  // инициализация только если <= 1024
  function initCarousel() {
    if (
      window.innerWidth <= 1024 &&
      !list.classList.contains('flickity-enabled')
    ) {
      new Flickity(list, {
        cellAlign: 'left',
        contain: true,
        pageDots: false,
        prevNextButtons: true,
        wrapAround: true,
      });
    }
  }

  initCarousel();
  window.addEventListener('resize', initCarousel);
});
