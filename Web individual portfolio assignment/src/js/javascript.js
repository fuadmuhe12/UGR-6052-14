document.addEventListener('DOMContentLoaded', () => {

    // Get all "navbar-burger" elements
    const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
  
    // Add a click event on each of them
    $navbarBurgers.forEach( el => {
      el.addEventListener('click', () => {
  
        // Get the target from the "data-target" attribute
        const target = el.dataset.target;
        const $target = document.getElementById(target);
  
        // Toggle the "is-active" class on both the "navbar-burger" and the "navbar-menu"
        el.classList.toggle('is-active');
        $target.classList.toggle('is-active');
  
      });
    });
  
  });
const burgerIcon = document.querySelector('#burger');
const navbarMenu = document.querySelector('#nav-links'); 
burgerIcon.addEventListener('click', () => {
    navbarMenu.classList.toggle('is-active');
});


// slider
var slideIndex = 1;
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
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";}


  document.addEventListener('DOMContentLoaded', function () {
    const roles = ["Dedicated Fullstack Developer", "Backend Developer", "UI/UX Designer"];
    let roleIndex = 0;
    let textIndex = 0;
    let currentText = '';
    let isDeleting = false;
  
    function type() {
      const speed = 100; // Adjust typing speed here
      const targetElement = document.getElementById('typing');
  
      if (!isDeleting && textIndex < roles[roleIndex].length) {
        currentText += roles[roleIndex][textIndex];
        textIndex++;
      } else if (isDeleting && textIndex >= 0) {
        currentText = roles[roleIndex].substring(0, textIndex);
        textIndex--;
      }
  
      targetElement.innerHTML = currentText;
  
      const typingSpeed = isDeleting ? speed / 2 : speed;
  
      if (!isDeleting && textIndex === roles[roleIndex].length) {
        isDeleting = true;
        setTimeout(type, 1000); // Pause before deleting
      } else if (isDeleting && textIndex === 0) {
        isDeleting = false;
        roleIndex = (roleIndex + 1) % roles.length;
        setTimeout(type, 500); // Pause before typing the next role
      } else {
        setTimeout(type, typingSpeed);
      }
    }
  
    type();
  });
  

