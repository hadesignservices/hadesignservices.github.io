document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".intro-slideshow img");
    let currentIndex = 0;
  
    function showNextImage() {
      images[currentIndex].style.opacity = 0; // Hide current image
      currentIndex = (currentIndex + 1) % images.length; // Move to the next image, loop back when at the end
      images[currentIndex].style.opacity = 1; // Show next image
    }
  
    // Set the first image to be visible
    images[currentIndex].style.opacity = 1;
  
    // Change image every 3 seconds (adjust if needed)
    setInterval(showNextImage, 3000);
  });
  