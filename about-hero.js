// about-hero.js
// Fades out the Happy Sellers overlay and fades in the main content

document.addEventListener("DOMContentLoaded", () => {
  const overlay = document.getElementById("about-hero-overlay");
  const mainContent = document.querySelector(".testimonials-section");
  if (mainContent) mainContent.style.opacity = "0";

  setTimeout(() => {
    overlay.style.opacity = "0";
    overlay.style.pointerEvents = "none";
    if (mainContent) {
      mainContent.style.transition = "opacity 1.2s cubic-bezier(.4,2,.6,1)";
      mainContent.style.opacity = "1";
    }
  }, 3400); // 1.2s fade in + 1s hold + 1.2s fade out
}); 