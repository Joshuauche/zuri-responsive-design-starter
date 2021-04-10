
let hamburger = document.querySelector('.hamburger');
let menu = document.querySelector('.nav-links');
let bod = document.querySelector('.nav-bar');

hamburger.addEventListener('click', function() {
  hamburger.classList.toggle('isactive');
  menu.classList.toggle('active');

});