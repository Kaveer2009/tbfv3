// Wait for the document to fully load
document.addEventListener("DOMContentLoaded", function () {
    const goToTopBtn = document.getElementById("goToTopBtn");

    // Show/hide the button based on scroll position
    window.addEventListener("scroll", function () {
        if (window.pageYOffset > 100) { // You can adjust this value
            goToTopBtn.style.display = "block";
        } else {
            goToTopBtn.style.display = "none";
        }
    });

    // Smooth scroll to the top when the button is clicked
    goToTopBtn.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
});
/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "100%";
  }
  
  /* Close when someone clicks on the "x" symbol inside the overlay */
  function closeNav() {
    document.getElementById("myNav").style.width = "0%";
  }