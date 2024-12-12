// BORDPAKKER
document.addEventListener('DOMContentLoaded', () => {
    const tables = {
      bordpakke1: {
        drinkinfo: {
          Image: 'images/BP1.webp',
          name: "BORDPAKKE 1",
          price: "500,-",
          quantity: "2 Cocktail Pitchers",
          options: "Vælg mellem:",
          pitcher: "Cocktail Pitcher: Gin Hass, Bramble, Passionada eller Fruity Safari",
          spiritus: "",
          mixer: "",
          pureshots: ""
        },
      },
      bordpakke2: {
        drinkinfo: {
          Image: 'images/BP2.webp',
          name: "BORDPAKKE 2",
          price: "700,-",
          quantity: "1 Cocktail Pitchers, 1 Flaske Spiritus (0,7L), 2L Mixer",
          options: "Vælg mellem:",
          pitcher: "Cocktail Pitcher: Gin Hass, Bramble, Passionada, Fruity Safari",
          spiritus: "Spiritus: Absolut Vodka, Beefeater Gin, Four Roses, Havana Club 3 yrs., Havana Especial",
          mixer: "Mixer: Æble Juice, Ananas Juice, Appelsin Juice, Tranebær Juice, Cola, Cola Zero, Lemon, Sprite, Fanta, Danskvand, Booter Black, Booter Black Zero, Old Jamaican Gingerbeer, Thomas Henry Tonic",
          pureshots: ""
        },
      },
      bordpakke3: {
        drinkinfo: {
          Image: 'images/BP3.webp',
          name: "BORDPAKKE 3",
          price: "1.600,-",
          quantity: "2 Cocktail Pitchers, 1 Flaske Spiritus (1,75L), 6L Mixer",
          options: "Vælg mellem:",
          pitcher: "Cocktail Pitcher: Gin Hass, Bramble, Passionada, Fruity Safari",
          spiritus: "Spiritus: Absolut Vodka, Beefeater Gin, Four Roses, Havana Club 3 yrs., Havana Especial",
          mixer: "Mixer: Æble Juice, Ananas Juice, Appelsin Juice, Tranebær Juice, Cola, Cola Zero, Lemon, Sprite, Fanta, Danskvand, Booter Black, Booter Black Zero, Old Jamaican Gingerbeer, Thomas Henry Tonic",
          pureshots: ""
          },
      },
      bordpakke4: {
        drinkinfo: {
          Image: 'images/BP4.webp',
          name: "BORDPAKKE 4",
          price: "2.000,-",
          quantity: "2 Cocktail Pitchers, 2 Flasker Spiritus (0,7L), 4L Mixer, 1 Flaske Pure Shots (0,7L)",
          options: "Vælg mellem:",
          pitcher: "Cocktail Pitcher: Gin Hass, Bramble, Passionada, Fruity Safari",
          spiritus: "Spiritus: Absolut Vodka, Beefeater Gin, Four Roses, Havana Club 3 yrs., Havana Especial",
          mixer: "Mixer: Æble Juice, Ananas Juice, Appelsin Juice, Tranebær Juice, Cola, Cola Zero, Lemon, Sprite, Fanta, Danskvand, Booter Black, Booter Black Zero, Old Jamaican Gingerbeer, Thomas Henry Tonic",
          pureshots: "Pure Shots: Pure Æble, Pure Lakrids, Pure Lemonade"
        },
      },
    };
  
    let currentSlide = 1;
    const totalSlides = 4;
    
    function showSlide(slideNumber) {
        const drinkImage = document.querySelector('.drink-image img');
        const drinkName = document.getElementById('drink-name');
        const price = document.getElementById('price');
        const quantity = document.getElementById('quantity');
        const options = document.getElementById('options');
        const pitcher = document.getElementById('pitcher');
        const spiritus = document.getElementById('spritus');
        const mixer = document.getElementById('mixer');
        const pureshots = document.getElementById('pureshots');
        
        const currentPakke = tables[`bordpakke${slideNumber}`].drinkinfo;
        
        drinkImage.src = currentPakke.Image;
        drinkName.textContent = currentPakke.name;
        price.textContent = currentPakke.price;
        quantity.textContent = currentPakke.quantity;
        options.textContent = currentPakke.options;
        pitcher.textContent = currentPakke.pitcher;
        spiritus.textContent = currentPakke.spiritus;
        mixer.textContent = currentPakke.mixer;
        pureshots.textContent = currentPakke.pureshots;
    }
    
    window.plusSlides = function(n) {
        currentSlide = ((currentSlide + n - 1 + totalSlides) % totalSlides) + 1;
        showSlide(currentSlide);
    }

    // Tilføj klikbehandlere til nederste billeder og knapper
    const bordpakkeElements = document.querySelectorAll('.bordpakke');
    bordpakkeElements.forEach((element, index) => {
        const img = element.querySelector('img');
        const btn = element.querySelector('.bp-knappen');
        
        // Tilføj klikbehandling for billed
        img.addEventListener('click', () => {
            currentSlide = index + 1;
            showSlide(currentSlide);
        });
        
        // Tilføj klikbehandling for knap
        btn.addEventListener('click', () => {
            currentSlide = index + 1;
            showSlide(currentSlide);
        });
    });

    showSlide(1);
});