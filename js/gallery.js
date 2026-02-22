document.addEventListener("DOMContentLoaded", () => {

  const galleryImages = [
    "illugaen.png",
    "bending.png",
    "pedolluga.png",
    "DDRR.png",
    "amogus.png",
    "sybau.png",
    "cry.png",
    "cross.png",
    "bananaolsen.png",
    "MC.png",
    "baldy.png",
    "smugluga.png"
  ];

  const galleryGrid = document.getElementById("galleryGrid");

  if (!galleryGrid) return;

  galleryImages.forEach(img => {
    const card = document.createElement("div");
    card.className = "gallery-card";

    const image = document.createElement("img");

    // IMPORTANT PATH FIX
    image.src = `../assets/${img}`;

    card.appendChild(image);
    galleryGrid.appendChild(card);
  });

});