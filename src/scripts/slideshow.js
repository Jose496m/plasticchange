let slideIndex = 1;
let slideIndex2 = 1;
showSlides(slideIndex);
showSlides2(slideIndex2);

// Next/previous controls
function plusSlides(n) {
  console.log("plusSlides");
  showSlides((slideIndex += n));
}
function plusSlides2(n) {
  console.log("plusSlides2");
  showSlides2((slideIndex2 += n));
}
// Thumbnail image controls
function currentSlide(n) {
  console.log("currentSlide");
  showSlides((slideIndex = n));
}
function currentSlide2(n) {
  console.log("currentSlide2");
  showSlides2((slideIndex2 = n));
}

function showSlides(n) {
  console.log("showSlides");
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}
