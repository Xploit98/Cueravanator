function randomBetween(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Generate absurd statistics
document.getElementById("stat-happiness").textContent =
  randomBetween(87, 99) + "%";

document.getElementById("stat-productivity").textContent =
  randomBetween(12, 48) + "%";

document.getElementById("stat-approval").textContent =
  randomBetween(93, 100) + "%";

document.getElementById("stat-seriousness").textContent =
  randomBetween(0, 7) + "%";