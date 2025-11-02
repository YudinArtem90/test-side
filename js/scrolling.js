document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href^="#"]');

  links.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();
      const targetId = link.getAttribute('href').substring(1);
      const target = document.getElementsByClassName(targetId);

      if (target) {
        const headerOffset = 56;
        const elementPosition = target[0].getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth',
        });
      }
    });
  });
});
