async function loadPart(id, file) {
  try {
    const res = await fetch(file);
    if (!res.ok) throw new Error(res.statusText);
    const html = await res.text();
    document.getElementById(id).innerHTML = html;
  } catch (err) {
    console.error(`Ошибка при загрузке ${file}:`, err);
  }
}

loadPart('header', '../header.html');
loadPart('footer', '../footer.html');
