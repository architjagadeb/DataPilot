// Wait for the DOM to be ready
document.addEventListener("DOMContentLoaded", () => {
  const loader = document.getElementById("loader");
  const loaderVideo = document.getElementById("loaderVideo");
  const content = document.querySelector(".hero");

  // Hide loader and show content after video plays
  if (loaderVideo) {
    loaderVideo.addEventListener("loadedmetadata", () => {
      setTimeout(() => {
        loader.style.opacity = "0";
        loader.style.pointerEvents = "none";
        content.style.opacity = "1";
        
        // Remove loader from DOM after transition
        setTimeout(() => {
          loader.style.display = "none";
        }, 1000);
      }, 5000); // 5 second delay
    });
  }

  // Hero visuals logic with efficient video handling
  const words = Array.from(document.querySelectorAll(".word"));
  const visuals = [
    document.querySelector(".visual-create"),
    document.querySelector(".visual-reports"),
    document.querySelector(".visual-forecasts"),
    document.querySelector(".visual-dashboards"),
    document.querySelector(".visual-consolidations")
  ];

  function hideAllVisuals() {
    visuals.forEach(v => {
      if (v) {
        v.classList.remove("active");
        const vid = v.querySelector("video");
        if (vid) { vid.pause(); }
      }
    });
  }

  words.forEach((word, idx) => {
    word.addEventListener("mouseenter", () => {
      hideAllVisuals();
      if (visuals[idx]) {
        visuals[idx].classList.add("active");
        const vid = visuals[idx].querySelector("video");
        if (vid) { vid.currentTime = 0; vid.play(); }
      }
    });
    word.addEventListener("mouseleave", hideAllVisuals);
  });

  // Smooth scroll for navigation
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
});
