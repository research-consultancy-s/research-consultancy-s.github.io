const toggle = document.querySelector('.nav-toggle');
const nav = document.getElementById('site-nav');

function closeNav() {
  nav.classList.remove('is-open');
  toggle.setAttribute('aria-expanded', 'false');
  toggle.setAttribute('aria-label', 'Open menu');
}

toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  toggle.setAttribute('aria-expanded', String(open));
  toggle.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
});

nav.addEventListener('click', (e) => {
  if (e.target.closest('a')) closeNav();
});

document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('is-open')) {
    closeNav();
    toggle.focus();
  }
});

document.addEventListener('click', (e) => {
  if (!nav.classList.contains('is-open')) return;
  if (!e.target.closest('.site-header')) closeNav();
});

// Only one FAQ answer open at a time.
const faqItems = document.querySelectorAll('.faq details');
faqItems.forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    faqItems.forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
