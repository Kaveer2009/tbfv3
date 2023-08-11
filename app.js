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
