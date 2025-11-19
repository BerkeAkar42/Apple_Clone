// Cardlar kaydırma kodu

function scrollCards(direction, buttonElement) {
    const wrapper = buttonElement.closest('.slider-container').querySelector('.card-wrapper');
    const scrollAmount = 300; // Kart kaydırma mesafesi
    wrapper.scrollBy({
      left: direction * scrollAmount,
      behavior: 'smooth'
    });
  }
    