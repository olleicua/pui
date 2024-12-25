const $splitView = document.querySelector('.split-view');
const $divider = document.querySelector('.divider');
const $menu = document.querySelector('.menu');
const $instructions = document.querySelector('.instructions');

const transparentImage = new Image();
transparentImage.src = '';
let resizing = false;
$divider.addEventListener('dragstart', () => {
  event.dataTransfer.setDragImage(transparentImage, 0, 0);
  resizing = true;
});
$divider.addEventListener('dragend', () => { resizing = false; });

$splitView.addEventListener('dragover', (event) => {
  event.preventDefault();

  if (!resizing) return;

  $divider.style.left = `${event.clientX - 2}px`;
  $menu.style.width = `${event.clientX - 2}px`;
  $instructions.style.width = `${window.innerWidth - event.clientX - 4}px`;

  console.log(event.clientX);
});
