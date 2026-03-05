document.addEventListener('DOMContentLoaded', () => {
  const videos = document.querySelectorAll('.video');

  videos.forEach((video) => {
    const playBtn = video.querySelector('.video__play');
    const inner = video.querySelector('.video__inner');
    const thumb = video.querySelector('.video__thumb');
    const videoSrc = video.dataset.video;

    if (!playBtn || !videoSrc) return;

    playBtn.addEventListener('click', () => {
      const iframeWrapper = document.createElement('div');
      iframeWrapper.className = 'video__iframe';

      const iframe = document.createElement('iframe');
      iframe.src = videoSrc + '?autoplay=1';
      iframe.allow = 'autoplay; fullscreen; picture-in-picture;';
      iframe.allowFullscreen = true;

      iframeWrapper.appendChild(iframe);
      inner.appendChild(iframeWrapper);

      // плавно скрываем картинку и кнопку
      if (thumb) thumb.style.opacity = '0';
      playBtn.style.opacity = '0';

      // удаляем после анимации
      setTimeout(() => {
        if (thumb) thumb.remove();
        playBtn.remove();
      }, 300);
    });
  });
});