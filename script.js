const form = document.getElementById('contact-form');
const note = document.getElementById('form-note');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  note.textContent = '¡Gracias! Recibimos tu mensaje y te contactaremos pronto.';
  form.reset();
});

const header = document.querySelector('.header');
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');

navToggle.addEventListener('click', () => {
  const isOpen = header.classList.toggle('is-open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

nav.querySelectorAll('a').forEach((link) => {
  link.addEventListener('click', () => {
    header.classList.remove('is-open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});
