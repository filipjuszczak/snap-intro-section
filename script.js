const html = document.documentElement;
const overlay = document.querySelector('.overlay');
const nav = document.querySelector('.header__nav');
const navLinks = document.querySelectorAll('.header__nav__btn');
const navToggle = document.querySelector('.menu-btn');

navToggle.addEventListener('click', () => {
  const isNavExpanded = navToggle.getAttribute('aria-expanded');
  if (isNavExpanded === 'false') {
    navToggle.setAttribute('aria-expanded', 'true');
    nav.setAttribute('aria-expanded', 'true');
    overlay.setAttribute('data-visible', 'true');
    html.classList.add('scroll-lock');
  } else {
    navToggle.setAttribute('aria-expanded', 'false');
    nav.setAttribute('aria-expanded', 'false');
    overlay.setAttribute('data-visible', 'false');
    html.classList.remove('scroll-lock');
  }
});

const dropdowns = document.querySelectorAll('.nav__dropdown');
function closeOpenDropdowns() {
  dropdowns.forEach((dropdown) => {
    dropdown.setAttribute('data-expanded', 'false');
  });
  navLinks.forEach((navLink) => {
    navLink.setAttribute('aria-expanded', 'false');
  });
}

navLinks.forEach((navLink) => {
  navLink.addEventListener('click', (e) => {
    e.preventDefault();
    const dropdown = navLink.parentElement.querySelector('.nav__dropdown');
    const isDropdownExpanded = navLink.getAttribute('aria-expanded');
    closeOpenDropdowns();
    if (isDropdownExpanded === 'false') {
      navLink.setAttribute('aria-expanded', 'true');
      dropdown.setAttribute('data-expanded', 'true');
    } else {
      navLink.setAttribute('aria-expanded', 'false');
      dropdown.setAttribute('data-expanded', 'false');
    }
    e.stopPropagation();
  });
});

window.addEventListener('click', (e) => {
  if (e.target != navLinks) {
    closeOpenDropdowns();
  }
});
