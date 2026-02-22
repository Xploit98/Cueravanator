document.addEventListener("DOMContentLoaded", () => {

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");

  if (!lightbox || !lightboxImg) return;

  // ⭐ Event delegation (IMPORTANT)
  document.addEventListener("click", (e) => {

    const target = e.target;

    // Only trigger if gallery image is clicked
    if (target.closest(".gallery-card img")) {

      lightboxImg.src = target.src;
      lightbox.classList.add("active");

    }

    // Close lightbox when clicking outside image
    if (target.id === "lightbox") {
      lightbox.classList.remove("active");
    }

  });

});