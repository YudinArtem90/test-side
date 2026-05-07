document.addEventListener('DOMContentLoaded', () => {
  MicroModal.init();

  const form = document.getElementById('contact-form');
  const result = document.getElementById('form-result');

  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const formData = new FormData(form);

    const phone = formData.get('phone').trim();
    const email = formData.get('email').trim();

    const phoneRegex = /^[0-9+\-\s()]{6,20}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!phoneRegex.test(phone)) {
      result.textContent = 'Введите корректный телефон';
      return;
    }

    if (!emailRegex.test(email)) {
      result.textContent = 'Введите корректный email';
      return;
    }

    result.textContent = 'Отправка...';

    try {
      const response = await fetch('send.php', {
        method: 'POST',
        body: formData,
      });

      const text = await response.text();

      if (text.trim() === 'OK') {
        form.reset();
        result.textContent = '';

        MicroModal.show('modal-success');
      } else {
        result.textContent = 'Ошибка отправки';
      }
    } catch (error) {
      result.textContent = 'Ошибка соединения';
    }
  });
});
