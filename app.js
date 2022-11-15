let menuToggler = document.querySelector(".nav_button");
let navLinks = document.querySelectorAll(".nav-link");
let body = document.querySelector("body");

menuToggler.addEventListener("click", () => {
    body.classList.toggle("open");
});

navLinks.forEach(link => {
    link.addEventListener("click", () => {
        body.classList.toggle("open");
    });
});


// menu slide show

let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  let captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}

// about slideshow

//var aboutSlideIndex = 1;
//showDivs(aboutSlideIndex);

//function plusDivs(n) {
  //showDivs(aboutSlideIndex += n);
//}

//function showDivs(n) {
  //var i;
  //var x = document.getElementsByClassName("aboutSlides");
  //if (n > x.length) {aboutSlideIndex = 1}
  //if (n < 1) {aboutSlideIndex = x.length} ;
  //for (i = 0; i < x.length; i++) {
    
 // }
  //x[aboutSlideIndex-1].style.display = "block";
//}