  document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.about__media--video').forEach(media => {
      const btn = media.querySelector('.about__media-play');
      const inner = media.querySelector('.about__media-inner');
      const src = media.dataset.video;

      btn.addEventListener('click', () => {
        const video = document.createElement('video');
        video.src = src;
        video.controls = true;
        video.autoplay = true;
        video.style.width = '100%';
        video.style.borderRadius = '16px';
        inner.innerHTML = '';
        inner.appendChild(video);
      });
    });
  });

