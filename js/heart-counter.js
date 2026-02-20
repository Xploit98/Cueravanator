const clickableImage = document.querySelector('.clickable-image');
const counter = document.getElementById('heart-counter');

let heartCount = 0;

clickableImage.addEventListener('click', () => {
  // Increment counter
  heartCount++;
  counter.textContent = `${heartCount} ❤️`;

  // Animate counter
  counter.classList.add('bump');
  setTimeout(() => {
    counter.classList.remove('bump');
  }, 200);
});