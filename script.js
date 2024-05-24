const headerEl = document.querySelector('.header');
var elements = document.getElementsByClassName("column");

/*
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        headerEl.classList.add('header-scrolled');
        headerEl.classList.remove('header');
    } else if (window.scrollY <= 50) {
        headerEl.classList.remove('header-scrolled');
        headerEl.classList.add('header');
    }
});*/

// Declare a "loop" variable
var i;

// Full-width images
function one() {
  for (i = 0; i < elements.length; i++) {
    elements[i].style.flex = "100%";
  }
}

const imgs = document.querySelectorAll('.column img');
const fullPage = document.querySelector('#fullpage');

imgs.forEach(img => {
  img.addEventListener('click', function() {
    fullPage.style.backgroundImage = 'url(' + img.src + ')';
    fullPage.style.display = 'block';
  });
});

const bodyEl = document.querySelector('.body');
const navEl = document.querySelector('.nav');
const links = document.querySelector('.link-item');