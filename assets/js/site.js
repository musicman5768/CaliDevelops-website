const menu = document.querySelector('.menu');
const menuToggle = menu.querySelector('summary');

menu.querySelector('nav').addEventListener('click', (event) => {
  if (event.target.closest('a')) {
    menu.open = false;
  }
});

menu.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && menu.open) {
    menu.open = false;
    menuToggle.focus();
  }
});

document.addEventListener('click', (event) => {
  if (menu.open && !menu.contains(event.target)) {
    menu.open = false;
  }
});
