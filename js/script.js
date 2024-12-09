
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