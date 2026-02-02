// Main JavaScript file for Revenue Zone

document.addEventListener('DOMContentLoaded', () => {
    // Navbar Scroll Effect (Desktop Only)
    // Mobile is handled purely by CSS to ensure stability
    const navbar = document.getElementById('mainNav');

    window.addEventListener('scroll', () => {
        // STRICT CHECK: Only run this logic if screen is wider than 991px (Desktop)
        if (window.innerWidth > 991) {
            if (window.scrollY > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        } else {
            // FORCE REMOVE on mobile to prevent any lingering state
            navbar.classList.remove('scrolled');
        }
    });
});




document.addEventListener("click", function (event) {
    const navbar = document.getElementById("navbarNav");
    const toggler = document.querySelector(".navbar-toggler");

    // If navbar is open
    if (navbar.classList.contains("show")) {

        // If click is outside navbar & toggler
        if (!navbar.contains(event.target) && !toggler.contains(event.target)) {
            toggler.click(); // close navbar
        }
    }
});