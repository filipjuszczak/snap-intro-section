const htmlEl = document.documentElement;
const overlayEl = document.querySelector('.overlay');
const headerEl = document.querySelector('.header');
const navLinkEls = document.querySelectorAll('.header__nav__btn');
const arrowEls = document.querySelectorAll('.arrow-icon');
const dropdownEls = document.querySelectorAll('.nav__dropdown__container');
const buttonEl = document.querySelector('.menu-btn');
const menuEl = document.querySelector('.header__nav-container');

buttonEl.addEventListener('click', () => {
  menuEl.classList.toggle('header__nav-container--open');
  headerEl.classList.toggle('nav-open');
  overlayEl.classList.toggle('overlay--hidden');
  htmlEl.classList.toggle('scroll-lock');
});

function closeOpenDropdowns() {
  dropdownEls.forEach((el) => {
    el.classList.remove('nav__dropdown__container--open');
  });
}

function flipArrowIcons() {
  arrowEls.forEach((el) => {
    el.classList.remove('arrow-icon--open');
  });
}

navLinkEls.forEach((el) => {
  el.addEventListener('click', (e) => {
    e.preventDefault();
    const arrows = el.parentElement.querySelectorAll('.arrow-icon');
    const dropdownEl = el.parentElement.querySelector(
      '.nav__dropdown__container'
    );
    const shouldOpen = !dropdownEl.classList.contains(
      'nav__dropdown__container--open'
    );
    closeOpenDropdowns();
    flipArrowIcons();
    if (shouldOpen) {
      arrows.forEach((el) => {
        el.classList.add('arrow-icon--open');
      });
      dropdownEl.classList.add('nav__dropdown__container--open');
    }
    e.stopPropagation();
  });
});

window.addEventListener('click', (e) => {
  if (e.target != navLinkEls) {
    closeOpenDropdowns();
    flipArrowIcons();
  }
});
