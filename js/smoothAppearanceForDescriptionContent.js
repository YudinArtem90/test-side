// плавное появление только для description__content
  document.addEventListener('DOMContentLoaded', () => {
    const section = document.querySelector('.description__content');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            section.classList.add('visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 },
    );

    observer.observe(section);
  });