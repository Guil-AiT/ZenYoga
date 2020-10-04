var slideIndex = 0;

function onLoad() {
  const btn = document.querySelector('.navbutton')
  const nav = document.querySelector('.navMenu')
  const a = document.querySelector('.navBtn')
  //const nav = document.querySelector('.navigation')
  btn.addEventListener('click', function() {
    if( nav.classList.contains('open') && a.classList.contains('open') ){
      nav.classList.remove('open')
      a.classList.remove('open')
    }
    else {
      nav.classList.add('open')
      a.classList.add('open')
    }
  })
  showSlides();
}
  
window.addEventListener("load", onLoad )
  
function showSlides() {
  var counter;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("index-dot");
  for (counter = 0; counter < slides.length; counter++) {
      slides[counter].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex> slides.length) {slideIndex = 1}    
  for (counter = 0; counter < dots.length; counter++) {
      dots[counter].className = dots[counter].className.replace(" active-dot", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active-dot";
  setTimeout(showSlides, 5000);
}