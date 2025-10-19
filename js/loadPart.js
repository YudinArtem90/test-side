import { initMenu } from './menu.js';

async function loadPart(id, file, callback) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(res.statusText);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;

    if (typeof callback === 'function') callback();
  } catch (err) {
    console.error(`Ошибка при загрузке ${file}:`, err);
  }
}

loadPart('header', '../header.html', initMenu);
loadPart('footer', '../footer.html');
