const burger = document.querySelector(".burger");
const links = document.querySelector("#links");
const nav = document.querySelector("#main-nav");

const toggleLinks = () => {
  links.classList.toggle("active");
  burger.classList.toggle("toggle");
};

const handleNavbarBackground = () => {
  document.body.scrollTop > 50 || document.documentElement.scrollTop > 50
    ? nav.classList.add("navbar-bg")
    : nav.classList.remove("navbar-bg");
};

burger.addEventListener("click", toggleLinks);
window.addEventListener("scroll", handleNavbarBackground);
