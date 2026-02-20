const clickableImage = document.querySelector('.clickable-image');
const counter = document.getElementById('heart-counter');
const milestoneMessage = document.getElementById('milestone-message');
const clickSound = new Audio('../assets/sounds/click.mp3');
const milestoneSound = new Audio('../assets/sounds/rizz.mp3');
const fireworkSound = new Audio('../assets/sounds/firework.mp3');
const LightCompel = new Audio('../assets/sounds/LightCompel.mp3');

let heartCount = 0;
let milestoneTimeout; // store timeout so we can reset it

clickableImage.addEventListener('click', () => {

  clickSound.currentTime = 0; // restart if fast clicks
  clickSound.play();
  // Increment counter (unchanged)
  heartCount++;
  counter.textContent = `${heartCount} ❤️`;

  // Animate counter
  counter.classList.add('bump');
  setTimeout(() => counter.classList.remove('bump'), 200);

  // Check milestones
  handleMilestones();
});

function handleMilestones() {
  let message = '';

  // Text milestone every 10 hearts
  if (heartCount % 10 === 0) {
    message = `💯 You sent ${heartCount} hearts! Keep going!`;
  }

  // Firework milestones every 50 or 100 hearts
  if (heartCount % 50 === 0) {
    createFireworks(); // always fire fireworks
    if (heartCount % 100 === 0) {
      message = `🔥 Amazing! ${heartCount} hearts!`; // override text at 100
    } else {
      message = `🎉 Wow! ${heartCount} hearts!`; // 50 milestone text
    }
  }

  // Show message if any
  if (message && milestoneMessage) {
    // Play milestone sound
    milestoneSound.currentTime = 0;
    milestoneSound.play();

    milestoneMessage.textContent = message;
    milestoneMessage.classList.add('show');

    // Clear previous timeout if exists
    if (milestoneTimeout) clearTimeout(milestoneTimeout);

    milestoneTimeout = setTimeout(() => {
      milestoneMessage.classList.remove('show');
    }, 2000);
  }
}

// Fireworks function (unchanged)
function createFireworks() {

    fireworkSound.currentTime = 0;
    fireworkSound.play();
    LightCompel.currentTime = 0;
    LightCompel.play();
  for (let i = 0; i < 10; i++) {
    const firework = document.createElement('div');
    firework.classList.add('firework');

    // Random position around image
    const x = Math.random() * 120 - 60; // -60px to +60px
    const y = Math.random() * 120 - 60;
    firework.style.left = `calc(50% + ${x}px)`;
    firework.style.top = `calc(50% + ${y}px)`;

    document.querySelector('.heart-container').appendChild(firework);

    firework.addEventListener('animationend', () => {
      firework.remove();
    });
  }
}