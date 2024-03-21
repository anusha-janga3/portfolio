// JavaScript for mobile menu toggle button
const checkbox = document.querySelector('.checkbox');
const navContent = document.querySelector('.nav__content');

checkbox.addEventListener('click', () => {
  navContent.classList.toggle('active');
});
