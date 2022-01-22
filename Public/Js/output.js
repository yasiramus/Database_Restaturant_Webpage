//sticky navbar scrolling 
window.addEventListener('scroll', function () {
    var header = document.querySelector('.header');
    header.classList.toggle('sticky', window.scrollY > 0)
})
//sliding section
var slideIndex = 1;
function showSlides(sliding) {
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    var i;
    if (sliding > slides.length) { 
        slideIndex = 1 
        console.log(slides.length)
    }
    // if (sliding < 1) { 
    //     slideIndex = slides.length 
    // }
    //looping through the slides content
    for ( let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    //this responsible for the recouting after it get to require number it actomatical restart
    if (slideIndex > slides.length) {
        slideIndex = 1
        console.log(slides.length)
    }
    //this is for the dot
    //looping through the doit
    // for (let i = 0; i < dots.length; i++) {
    //     dots[i].className = dots[i].className.replace(" active", "");
    // }
    slides[slideIndex - 1].style.display = "block";
    // dots[slideIndex - 1].className += " active";
    setTimeout(showSlides, 10000);
}
showSlides(slideIndex);

// click dot controls to change to different you want
function currentSlide(n) {
    showSlides(slideIndex = n);
}