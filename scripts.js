 <script>
    // Alert welcome message on page load
    window.onload = function() {
      alert('Welcome to Mewaga Salon and Spa!');
      showSlide(currentSlide);
      setInterval(nextSlide, 3000); // Change slide every 3 seconds
    };

    // Image slider functionality
    let currentSlide = 0;
    const slides = document.querySelectorAll('.slide');

    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
      });
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % slides.length;
      showSlide(currentSlide);
    }
  </script>