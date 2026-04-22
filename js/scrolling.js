document.addEventListener('click', (e) => {
  const link = e.target.closest('a[data-scroll], [data-scroll-to]');
  if (!link) return;

  e.preventDefault();

  const targetId =
    link.dataset.scrollTo || link.getAttribute('href')?.substring(1);

  const target = document.getElementById(targetId);
  if (!target) return;

  const headerOffset = 56;
  const offsetPosition =
    target.getBoundingClientRect().top + window.scrollY - headerOffset;

  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth',
  });
});
