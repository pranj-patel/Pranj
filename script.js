document.addEventListener('DOMContentLoaded', function() {
  // Get elements to animate
  var helloText = document.querySelector('.section__text__p1');
  var nameTitle = document.querySelector('.title');
  var roleText = document.querySelector('.section__text__p2');

  // Add a class to trigger animation on load
  helloText.classList.add('animate');
  nameTitle.classList.add('animate');
  roleText.classList.add('animate');

  // Optional: Delay animation for better effect
  setTimeout(function() {
    helloText.style.opacity = '1';
    nameTitle.style.opacity = '1';
    roleText.style.opacity = '1';
  }, 300); // Adjust delay as needed
});
