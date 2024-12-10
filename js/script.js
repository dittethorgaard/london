
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


function openMenu(menuType) {
    const modal = document.getElementById('menuModal');
    const modalTitle = document.getElementById('modalTitle');
    const modalContent = document.getElementById('modalContent');
    
    // Set title based on menu type
    modalTitle.textContent = menuType.toUpperCase() + ' MENU';
    
    // Her kan du indsætte den rigtige menu content
    modalContent.innerHTML = `
        <p>Dette er en eksempel menu for ${menuType}</p>
        <p>Ret 1...</p>
        <p>Ret 2...</p>
        <p>Ret 3...</p>
    `;
    
    modal.style.display = 'block';
}

// Close modal when clicking on X
document.querySelector('.close').onclick = function() {
    document.getElementById('menuModal').style.display = 'none';
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById('menuModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}