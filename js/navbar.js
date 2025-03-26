let currentIndex = 0;

function slideCarousel(direction) {
  const carousel = document.getElementById('iconCarousel');
  const columns = carousel.querySelectorAll('.icon-column');
  const totalColumns = columns.length;
  const visibleColumns = 3;

  currentIndex += direction;

  if (currentIndex < 0) currentIndex = 0;
  if (currentIndex > totalColumns - visibleColumns) {
    currentIndex = totalColumns - visibleColumns;
  }

  const columnWidth = columns[0].offsetWidth + 20; // 20px margen horizontal aprox
  carousel.style.transform = `translateX(-${currentIndex * columnWidth}px)`;
}
