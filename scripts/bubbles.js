const bubblesContainer = document.querySelector('.bubbles');
const MAX_BUBBLES = 35;

function createBubble() {
  const currentBubbles = bubblesContainer.querySelectorAll('.bubble').length;
  if (currentBubbles >= MAX_BUBBLES) {
    return;
  }

  const bubble = document.createElement('div');
  bubble.classList.add('bubble');

  const size = Math.random() * 20 + 10;
  bubble.style.width = `${size}px`;
  bubble.style.height = `${size}px`;

  bubble.style.left = `${Math.random() * 100}vw`;

  const duration = Math.random() * 5 + 5;
  bubble.style.animationDuration = `${duration}s`;

  bubblesContainer.appendChild(bubble);

  bubble.addEventListener('animationend', () => {
    bubble.remove();
  });
}

setInterval(createBubble, 800);
