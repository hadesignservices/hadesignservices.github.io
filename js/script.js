// Wait for the DOM to load
document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll('.intro-slideshow img');
  let currentIndex = 0;

  // Function to show the next image
  function showNextImage() {
    // Hide the current image
    images[currentIndex].classList.remove('active');

    // Update the index
    currentIndex = (currentIndex + 1) % images.length;

    // Show the next image
    images[currentIndex].classList.add('active');
  }

  // Start the slideshow (change every 3 seconds)
  setInterval(showNextImage, 3000);

  // Show the first image initially
  images[currentIndex].classList.add('active');
});
