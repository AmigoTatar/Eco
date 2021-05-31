
// всплывающее окно
  function openWindow() {
   let hideForms = document.getElementById("modals");
     hideForms.style.display = "block";  
 }
 function closeWindow() {
    let hideForms = document.getElementById("modals");
      hideForms.style.display = "none";  
  }

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующй слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);  
}

/* Устанавливает текущий слайд */
function currentSlide(n) {
    showSlides(slideIndex = n);
}

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("item");
    var dots = document.getElementsByClassName("slider-dots_item");
    if (n > slides.length) {
      slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
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

function up() {  
    let top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);  
  if(top > 0) {  
    window.scrollBy(0,((top+100)/-10));  
    t = setTimeout('up()',20);  
  } else clearTimeout(t);  
  return false;  
  } 