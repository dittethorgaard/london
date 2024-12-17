document.addEventListener('DOMContentLoaded', () => {
    let currentSlide = 0;
    const slides = document.querySelectorAll('.course-card');
    const dots = document.querySelectorAll('.cirkel');
    const totalSlides = slides.length;

    function showSlide(index) {
        // Skjul alle slides
        slides.forEach(slide => {
            slide.style.display = 'none';
        });
        
        // Fjern active class fra alle dots
        dots.forEach(dot => {
            dot.classList.remove('active');
        });

        // Vis den aktuelle slide og aktiver tilsvarende dot
        slides[index].style.display = 'block';
        dots[index].classList.add('active');
    }

    // Næste slide
    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    // Forrige slide
    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    // Tilføj event listeners til knapperne
    document.querySelector('.next-knap').addEventListener('click', nextSlide);
    document.querySelector('.prev-knap').addEventListener('click', prevSlide);

    // Tilføj event listeners til prikkerne
    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            currentSlide = index;
            showSlide(currentSlide);
        });
    });

    // Funktion til at håndtere responsivitet
    function handleResponsive() {
        if (window.innerWidth <= 768) {
            // Mobil visning: Vis kun første slide
            showSlide(currentSlide);
            document.querySelectorAll('.carousel-knap').forEach(knap => {
                knap.style.display = 'block';
            });
            document.querySelector('.carousel-cirkler').style.display = 'block';
        } else {
            // Desktop visning: Vis alle slides
            slides.forEach(slide => {
                slide.style.display = 'block';
            });
            document.querySelectorAll('.carousel-knap').forEach(knap => {
                knap.style.display = 'none';
            });
            document.querySelector('.carousel-cirkler').style.display = 'none';
        }
    }

    // Kør ved pageload og når vinduet ændrer størrelse
    handleResponsive();
    window.addEventListener('resize', handleResponsive);
}); 