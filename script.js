document.addEventListener('DOMContentLoaded', function () {
  // Get elements to animate
  var helloText = document.querySelector('.section__text__p1');
  var nameTitle = document.querySelector('.title');
  var roleText = document.querySelector('.section__text__p2');

  // Add a class to trigger animation on load
  helloText.classList.add('animate');
  nameTitle.classList.add('animate');
  roleText.classList.add('animate');

  // Optional: Delay animation for better effect
  setTimeout(function () {
    helloText.style.opacity = '1';
    nameTitle.style.opacity = '1';
    roleText.style.opacity = '1';
  }, 300); // Adjust delay as needed

  // Hamburger menu toggle functionality in mobile
  const hamburgerIcon = document.querySelector('.hamburger-icon');
  const menuLinks = document.querySelector('.menu-links');

  function toggleMenu() {
    menuLinks.classList.toggle('open');
  }

  hamburgerIcon.addEventListener('click', toggleMenu);
});

// Move left/right functions outside of DOMContentLoaded so they are accessible
let scrollAmount = 0;
const scrollStep = 300; // Amount to scroll by with each button press

function moveLeft() {
  const container = document.querySelector('.placement-horizontal-scroll');
  scrollAmount -= scrollStep;

  // Ensure it doesn't scroll beyond the start
  if (scrollAmount < 0) {
    scrollAmount = 0;
  }

  container.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}

function moveRight() {
  const container = document.querySelector('.placement-horizontal-scroll');
  const maxScrollLeft = container.scrollWidth - container.clientWidth;

  scrollAmount += scrollStep;

  // Ensure it doesn't scroll beyond the end
  if (scrollAmount > maxScrollLeft) {
    scrollAmount = maxScrollLeft;
  }

  container.scrollTo({
    left: scrollAmount,
    behavior: 'smooth'
  });
}
// Function to open the modal with animations
function openModal(modalId) {
  const modal = document.getElementById(modalId);
  const modalContent = modal.querySelector('.modal-content');

  modal.style.display = "block"; // Show the modal
  setTimeout(function () {
      modal.classList.add('show'); // Add 'show' class for background fade-in
      modalContent.classList.add('show'); // Add 'show' class for zoom-in and bounce effect
  }, 10); // Delay to trigger the transition properly
}

// Function to close the modal with animations
function closeModal(modalId) {
  const modal = document.getElementById(modalId);
  const modalContent = modal.querySelector('.modal-content');

  modalContent.classList.remove('show'); // Remove 'show' class to trigger zoom-out
  modal.classList.remove('show'); // Fade-out the background

  // Wait for animation to finish before hiding the modal
  setTimeout(function () {
      modal.style.display = "none"; // Hide the modal after the animation ends
  }, 600); // This matches the duration of the zoom-out effect (0.6s)
}

// Close the modal if the user clicks outside the modal content
window.onclick = function (event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
      if (event.target === modal) {
          closeModal(modal.id); // Close modal when clicking on the background
      }
  });
};

// Close modal when scrolling **outside** the modal content only
window.addEventListener('scroll', function (event) {
  const modals = document.querySelectorAll('.modal');
  modals.forEach(modal => {
      const modalContent = modal.querySelector('.modal-content');
      const rect = modalContent.getBoundingClientRect();

      // Only close modal if the content is out of view (i.e., not scrolling inside the modal itself)
      if (modal.style.display === 'block' && (rect.bottom < 0 || rect.top > window.innerHeight)) {
          closeModal(modal.id); // Close the modal when scrolling outside the modal content
      }
  });
});


