$(document).ready(function(){
    $('#mobilemenu').click(function(){
        $('ul').toggleClass('show')
    });
});
// toggle mobilemenu

function ToggleMenu(){
    const menuToggle = document.querySelector('.mobile-toggle');
    menuToggle.classList.toggle('active')
}

// slideshow behaviour
const slider = document.querySelector('.slider');
const nextBtn = document.querySelector('.next-btn');
const prevBtn = document.querySelector('.prev-btn');
const slides = document.querySelectorAll('.slide');
const slideIcons = document.querySelectorAll('.slide-icon');
const noOfSlides = slides.length;

let slideno = 0;

// navigation buttons
nextBtn.addEventListener('click',() =>{
    slides.forEach((slide) => {
        slide.classList.remove('active');
    })
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove('active');
    })
    slideno++;
    if(slideno > (noOfSlides -1)){
        slideno = 0;
    }
    slides[slideno].classList.add('active');
    slideIcons[slideno].classList.add('active');
});

prevBtn.addEventListener('click',() =>{
    slides.forEach((slide) => {
        slide.classList.remove("active");
    })
    slideIcons.forEach((slideIcon) => {
        slideIcon.classList.remove("active");
    })
    slideno--;
    if(slideno < 0){
        slideno = noOfSlides - 1;
    }
    slides[slideno].classList.add('active');
    slideIcons[slideno].classList.add('active');
});

// loop 
let repeater =() =>
{
    playSlider= setInterval(function(){
        slides.forEach((slide) => {
            slide.classList.remove("active");
        })
        slideIcons.forEach((slideIcon) => {
            slideIcon.classList.remove("active");
        })
        slideno++;
        if(slideno > (noOfSlides -1)){
            slideno = 0;
        }
        slides[slideno].classList.add("active");
        slideIcons[slideno].classList.add("active");
    },4000);
}
repeater();

// stop autoplay on mousehover
slider.addEventListener('mouseover', () => {
    clearInterval(playSlider);
});
// start autoplay on mousehover
slider.addEventListener('mouseover', () => {
    repeater();
});