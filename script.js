document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Back to Top Button
    const backToTop = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });
    backToTop.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });

    // Dark Mode Toggle
    const toggleMode = document.querySelector('.toggle-mode');
    toggleMode.addEventListener('click', () => {
        document.body.classList.toggle('dark-mode');
    });

    // Any other JavaScript code you have goes here.
    // ... (For example, if you add a save button later, its logic would go here)

}); // End of DOMContentLoaded (only one closing curly brace)
