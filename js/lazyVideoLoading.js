document.addEventListener('DOMContentLoaded', () => {
  const videoBlock = document.querySelector('.about__media--video');
  const playBtn = videoBlock.querySelector('.about__media-play');
  const mediaInner = videoBlock.querySelector('.about__media-inner--video');
  const videoSrc = videoBlock.getAttribute('data-video');

  playBtn.addEventListener('click', () => {
    // создаём контейнер для iframe
    const iframeWrapper = document.createElement('div');
    iframeWrapper.className = 'about__media-video';

    const iframe = document.createElement('iframe');
    iframe.src = videoSrc + '?autoplay=1';
    iframe.allow =
      'autoplay; fullscreen; picture-in-picture; encrypted-media; gyroscope; accelerometer; clipboard-write; screen-wake-lock;';
    iframe.allowFullscreen = true;

    iframeWrapper.appendChild(iframe);
    mediaInner.appendChild(iframeWrapper);

    // плавно убираем картинку и кнопку
    const img = mediaInner.querySelector('img');
    img.style.opacity = '0';
    playBtn.style.opacity = '0';

    // немного подождать, затем показываем видео
    setTimeout(() => {
      iframeWrapper.classList.add('active');
      img.remove();
      playBtn.remove();
    }, 200);
  });
});
