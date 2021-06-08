
//setting

var slspreed;

//spreed;
slspreed=2000;





var slideIndex = 1;
showSlides(slideIndex);

setInterval( () => {
  plusSlides(1) ;
}, slspreed);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  var dotintodiv=document.querySelectorAll(".dot div");
 
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
    dotintodiv[i].className = dotintodiv[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dotintodiv[slideIndex-1].className += " active";
}


