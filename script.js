const headerEl = document.querySelector('.header');
var elements = document.getElementsByClassName("column");

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerEl.classList.add('header-scrolled');
    } else if (window.scrollY <= 50) {
        headerEl.classList.remove('header-scrolled');
    }
});

// Declare a "loop" variable
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}