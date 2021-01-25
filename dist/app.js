const burger = document.querySelector(".burger");
const links = document.querySelector("#links");

const toggleLinks = () => {
  links.classList.toggle("active");
  burger.classList.toggle("toggle");
};

burger.addEventListener("click", toggleLinks);
