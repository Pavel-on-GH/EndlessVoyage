const navBtn = document.querySelector('.nav-icon-btn');
const navIcon = document.querySelector('.nav-icon');
const topRow = document.querySelector('.header__top-row');
console.log(navBtn, topRow);

navBtn.addEventListener('click', () => {
  topRow.classList.toggle('header__top-row--mobile');
  navIcon.classList.toggle('nav-icon--active');
  document.body.classList.toggle('not-scroll');
});
