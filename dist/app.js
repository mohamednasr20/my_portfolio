const burger = document.querySelector('.burger');
const links = document.querySelector('#links');
const nav = document.querySelector('#main-nav');

const headerContent = document.querySelector('.header-content');

const handletoggleNavLinks = () => {
  links.classList.toggle('active');
  burger.classList.toggle('toggle');
};

const handleNavbarBackground = () => {
  document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
    ? nav.classList.add('navbar-bg')
    : nav.classList.remove('navbar-bg');
};

const handleTransiton = (element) => {
  setTimeout(() => {
    element.classList.remove('hidden');
  }, 500);
};

burger.addEventListener('click', handletoggleNavLinks);
window.addEventListener('scroll', handleNavbarBackground);
window.addEventListener(
  'load',
  handleTransiton(headerContent),
  handleTransiton(nav)
);
