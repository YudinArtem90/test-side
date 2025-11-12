document.addEventListener('DOMContentLoaded', () => {
  function initModal() {
    if (typeof MicroModal === 'undefined') {
      return setTimeout(initModal, 100);
    }

    MicroModal.init();
  }

  initModal();
});
