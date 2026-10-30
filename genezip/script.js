const dialog = document.getElementById('figure-dialog');
const enlargedFigure = document.getElementById('enlarged-figure');
let activeFigureLink;

document.querySelectorAll('[data-lightbox]').forEach(link => {
  link.addEventListener('click', event => {
    if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) return;
    event.preventDefault();
    activeFigureLink = link;
    enlargedFigure.src = link.href;
    enlargedFigure.alt = link.querySelector('img').alt;
    document.getElementById('figure-caption').textContent = link.dataset.caption;
    document.getElementById('original-image-link').href = link.href;
    dialog.showModal();
  });
});

document.getElementById('close-figure').addEventListener('click', () => dialog.close());
dialog.addEventListener('click', event => {
  if (event.target === dialog) {
    const rect = dialog.getBoundingClientRect();
    if (event.clientX < rect.left || event.clientX > rect.right ||
        event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
  }
});
dialog.addEventListener('close', () => activeFigureLink?.focus());

document.getElementById('copy-citation').addEventListener('click', async () => {
  const bibtex = document.getElementById('bibtex');
  const status = document.getElementById('copy-status');
  try {
    await navigator.clipboard.writeText(bibtex.textContent);
    status.textContent = 'BibTeX copied.';
  } catch {
    const range = document.createRange();
    range.selectNodeContents(bibtex);
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Citation selected. Press Ctrl+C or ⌘C to copy.';
  }
});
