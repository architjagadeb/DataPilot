// pricing.js
// Add interactive effects to pricing cards

document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll('.pricing-card');
  cards.forEach(card => {
    card.addEventListener('mouseenter', () => {
      card.classList.add('hovered');
    });
    card.addEventListener('mouseleave', () => {
      card.classList.remove('hovered');
    });
  });

  // Optionally, highlight the popular card on load
  const popular = document.querySelector('.pricing-card.popular');
  if (popular) {
    popular.classList.add('hovered');
    setTimeout(() => popular.classList.remove('hovered'), 1200);
  }
}); 