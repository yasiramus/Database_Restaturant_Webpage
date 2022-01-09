//sticky navbar scrolling 
window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0)
})
//sliding section
var slideIndex = 1;
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) { 
        slideIndex = 1 
    }
    if (n < 1) { 
        slideIndex = slides.length 
    }
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
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 2000);
}
showSlides(slideIndex);

// click dot controls to change to different you want
function currentSlide(n) {
    showSlides(slideIndex = n);
}