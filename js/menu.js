export function initMenu() {
  const burger = document.querySelector('.site-header__burger');
  const navIconsWrapper = document.querySelector('.site-header__nav-icons');
  const separator = document.querySelector('.site-header__separator');

  const toggleMenu = () => {
    navIconsWrapper.classList.toggle('active');
    burger.classList.toggle('is-active');
    separator.classList.toggle('site-header__separator--visible');
  };

  burger.addEventListener('click', (e) => {
    e.stopPropagation();
    toggleMenu();
  });

  document.addEventListener('click', (e) => {
    const isClickInside = navIconsWrapper.contains(e.target);
    if (!isClickInside && navIconsWrapper.classList.contains('active')) {
      toggleMenu();
    }
  });

  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && navIconsWrapper.classList.contains('active')) {
      toggleMenu();
    }
  });
}
