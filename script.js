const slides = document.querySelectorAll(".slides img");
const indicators = document.querySelectorAll(".indicators span");

let index = 0;

setInterval(() => {
  slides[index].classList.remove("active");
  indicators[index].classList.remove("active");

  index = (index + 1) % slides.length;

  slides[index].classList.add("active");
  indicators[index].classList.add("active");
}, 5000);

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");

  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});