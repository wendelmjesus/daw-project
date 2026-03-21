const slides = document.querySelectorAll(".slides img");
const indicators = document.querySelectorAll(".indicators span");
const filter = document.querySelector("#filter");
const products = document.querySelectorAll(".product-cards");

function showSlide(i) {
  slides.forEach((slide, idx) => {
    slide.classList.toggle("active", idx === i);
    indicators[idx].classList.toggle("active", idx === i);
  });
}

let index = 0;

setInterval(() => {
  index = (index + 1) % slides.length;
  showSlide(index);
}, 5000);

if(filter) {
  filter.addEventListener("change", () => {
    const selectedCategory = filter.value;
    products.forEach(product => {
      const productCategory = product.dataset.category;
      if (selectedCategory === "all") {
        product.style.display = "block";
      } else if (productCategory === selectedCategory) {
        product.style.display = "block";
      } else {
        product.style.display = "none";
      }
    });
  });
}

window.addEventListener("scroll", () => {
  const header = document.querySelector("header");
  if (window.scrollY > 50) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});