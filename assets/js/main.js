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

