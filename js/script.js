// GLEMTE SAGER
document.addEventListener('DOMContentLoaded', function() {
    const packagesContainer = document.querySelector('.packages-container');
    let isScrolling = false;
    let startX;
    let scrollLeft;
  
    packagesContainer.addEventListener('mousedown', (e) => {
      isScrolling = true;
      startX = e.pageX - packagesContainer.offsetLeft;
      scrollLeft = packagesContainer.scrollLeft;
    });
  
    packagesContainer.addEventListener('mouseleave', () => {
      isScrolling = false;
    });
  
    packagesContainer.addEventListener('mouseup', () => {
      isScrolling = false;
    });
  
    packagesContainer.addEventListener('mousemove', (e) => {
      if (!isScrolling) return;
      e.preventDefault();
      const x = e.pageX - packagesContainer.offsetLeft;
      const walk = (x - startX) * 2;
      packagesContainer.scrollLeft = scrollLeft - walk;
    });
  });

  function handleSubmit(event) {
    event.preventDefault();
    alert("Tak for din henvendelse, vi tjekker vores glemte sager igennem og vender tilbage om 1-2 arbejdsdage");
}

// PRIVATE ARRANGEMENTER
function openMenu(menuType) {
    const modal = document.getElementById('menuModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    let menuContent = '';
    
    switch(menuType) {
        case 'tapas':
            modalTitle.textContent = 'TAPAS';
            menuContent = `
                <h3>Pølsebord bestående af:</h3>
                <ul>
                    <li>Spansk chorizo & grignotons (små stærke chorizo)</li>
                    <li>Lufttørret spansk serranoskinke (15 mdr.)</li>
                    <li>Italiensk trøffelsalami</li>
                    <li>Krydret fennikelpølse</li>
                </ul>

                <h3>Osteplatte bestående af:</h3>
                <ul>
                    <li>Dansk Vesterhavsost</li>
                    <li>Fransk brie med druer & solbærmarmelade</li>
                    <li>Tomme de Savoie med peberfrugt</li>
                </ul>

                <h3>Tilbehør bestående af:</h3>
                <ul>
                    <li>Pesto</li>
                    <li>Hjemmelavet humus</li>
                    <li>Hjemmelavet aioli & ajvar</li>
                    <li>Sprøde grissini & mix af oliven</li>
                    <li>Foccacciabrød bagt med olie & rosmarinsalt, hertil urtemayo</li>
                </ul>
            `;
            break;
        case 'standard':
            modalTitle.textContent = 'STANDARD BUFFET';
            menuContent = `
                <h3>Forretter:</h3>
                <ul>
                    <li>Varmrøget laks med dildcreme</li>
                    <li>Serranoskinke med melon & pesto</li>
                    <li>Tunmousse med citron & dild</li>
                </ul>

                <h3>Hovedretter:</h3>
                <ul>
                    <li>Rosastegt kalveculotte</li>
                    <li>Kryddermarineret kyllingebryst</li>
                    <li>Flødebagte kartofler med hvidløg & timian</li>
                    <li>Blandede salater med vinaigrette</li>
                    <li>Tomatsalat med mozzarella & basilikum</li>
                </ul>

                <h3>Tilbehør:</h3>
                <ul>
                    <li>Hjemmebagt brød med smør</li>
                    <li>Bearnaisesauce</li>
                    <li>Rødvinssauce</li>
                </ul>
            `;
            break;
        case 'luksus':
            modalTitle.textContent = 'LUKSUS BUFFET';
            menuContent = `
                <h3>Forretter:</h3>
                <ul>
                    <li>Hummerbisque med cognac & fløde</li>
                    <li>Carpaccio af okseinderlår med trøffelolie & parmesan</li>
                    <li>Røget laks med asparges & hollandaise</li>
                    <li>Foie gras terrine med brioche & æblekompot</li>
                </ul>

                <h3>Hovedretter:</h3>
                <ul>
                    <li>Oksemørbrad med rødvinssauce</li>
                    <li>Confiteret andelår med appelsinsauce</li>
                    <li>Grillet hummer med hvidløgssmør</li>
                    <li>Trøffelrisotto med svampe</li>
                    <li>Pommes Anna med rosmarin</li>
                    <li>Sæsonens grøntsager i smør</li>
                </ul>

                <h3>Salater & Tilbehør:</h3>
                <ul>
                    <li>Grøn salat med granatæble & valnødder</li>
                    <li>Quinoasalat med bagte rodfrugter</li>
                    <li>Hjemmelavet focaccia & økologisk smør</li>
                    <li>Selection af franske oste med tilbehør</li>
                </ul>

                <h3>Desserter:</h3>
                <ul>
                    <li>Chokoladefondant med vaniljeis</li>
                    <li>Crème brûlée med bær</li>
                    <li>Petit fours & chokoladetrøfler</li>
                </ul>
            `;
            break;
    }
    
    modalContent.innerHTML = menuContent;
    modal.style.display = 'block';
}

// Luk modal når der klikkes på X
document.querySelector('.close').onclick = function() {
    document.getElementById('menuModal').style.display = 'none';
}

// Luk modal når der klikkes udenfor
window.onclick = function(event) {
    const modal = document.getElementById('menuModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.carousel-slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    let currentSlide = 0;
    let autoSlideInterval;

    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function nextSlide() {
        showSlide(currentSlide + 1);
    }

    function prevSlide() {
        showSlide(currentSlide - 1);
    }

    // Event listeners
    prevBtn?.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    nextBtn?.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            showSlide(index);
            resetAutoSlide();
        });
    });

    function startAutoSlide() {
        autoSlideInterval = setInterval(nextSlide, 5000); // Skift slide hver 5. sekund
    }

    function resetAutoSlide() {
        clearInterval(autoSlideInterval);
        startAutoSlide();
    }

    // Start karrusellen
    showSlide(0);
    startAutoSlide();
});

