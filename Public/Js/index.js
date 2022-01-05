//sticky navbar scrolling 
window.addEventListener('scroll', function () {
  var header = document.querySelector('.header');
  header.classList.toggle('sticky', window.scrollY > 0)
})


//toggle section for color
// const head = document.querySelector('body');
// const toggle = document.querySelector('.toggle-color-change');
// toggle.onclick = function () {
//   head.classList.toggle('dark');
// }
//hamburger
const containerNav = document.querySelector('nav');
const closeMenu = document.querySelector('.closeMenu');
const openMenu = document.querySelector('.openMenu');

openMenu.addEventListener('click', show);
closeMenu.addEventListener('click', close);

function show() {
  containerNav.style.top = '0';
}
function close() {
  containerNav.style.top = '-100%';
}


//clik to show menu items
const button = document.querySelector('.button');
const menu = document.querySelector('#menutabs');
button.addEventListener('click', showsMenu);
function showsMenu() {
  if (menu.style.display === 'none') {
    return menu.style.display = 'block';
  } else {
    return menu.style.display = 'none';
  }
}

//sliding section
var slideIndex = 1;
function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  //this responsible for the recouting after it get to require number it actomatical restart
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000);
}
showSlides(slideIndex);

// click dot controls to change to different you want
function currentSlide(n) {
  showSlides(slideIndex = n);
}

//counter section
const counter = document.querySelectorAll('.timer');
const speed = 150;
counter.forEach(counter => {
  const updateCount = () => {
    const target = +counter.getAttribute('data-target');
    // console.log(typeof target);
    const count = +counter.innerText;
    const increatment = target / speed;

    console.log(count);

    if (count < target) {
      counter.innerText = Math.ceil(count + increatment);
      setTimeout(updateCount, 1);
    } else {
      count.innerText = target;
    }
  }
  updateCount();
});

