const image = document.querySelector('.clickable-image');
const container = document.querySelector('.heart-container');

image.addEventListener('click', (e) => {

  const rect = container.getBoundingClientRect();

  // Get click position relative to container
  const xPos = e.clientX - rect.left;
  const yPos = e.clientY - rect.top;

  const heart = document.createElement('div');
  heart.classList.add('heart');

  // Position heart exactly where clicked
  heart.style.left = `${xPos - 15}px`;
  heart.style.top = `${yPos - 15}px`;

  // Random floating direction
  const xMove = (Math.random() * 100 - 50) + 'px';
  const yMove = (-Math.random() * 150 - 50) + 'px';

  heart.style.setProperty('--x', xMove);
  heart.style.setProperty('--y', yMove);

  container.appendChild(heart);

  heart.addEventListener('animationend', () => {
    heart.remove();
  });
});
