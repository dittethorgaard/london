document.addEventListener('DOMContentLoaded', function() {
    const burgerMenu = document.querySelector('.burgermenu-container');
    const navbar = document.querySelector('.navbar');
    const londonButtons = document.querySelector('.london-buttons');
    const header = document.querySelector('header');

    burgerMenu.addEventListener('click', function() {
        navbar.classList.toggle('active');
        burgerMenu.classList.toggle('active');
        
        if (londonButtons) {
            if (navbar.classList.contains('active')) {
                londonButtons.style.opacity = '0';
                londonButtons.style.visibility = 'hidden';
            } else {
                londonButtons.style.opacity = '1';
                londonButtons.style.visibility = 'visible';
            }
        }
    });

    // Tilføj scroll event listener
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });
});