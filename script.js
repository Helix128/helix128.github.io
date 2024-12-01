document.addEventListener('DOMContentLoaded', () => {
  const header = document.querySelector('header');
  const text = header.textContent;
  header.innerHTML = '';
  header.style.position = 'relative';
  header.style.overflow = 'hidden';

  const bg = document.createElement('div');
  bg.style.position = 'absolute';
  bg.style.top = 0;
  bg.style.left = 0;
  bg.style.height = '100%';
  bg.style.width = '0';
  bg.style.backgroundColor = 'rgba(0, 0, 0, 0)';
  bg.style.transition = 'width 0.66s ease-out, background-color 0.1s ease-out';
  header.appendChild(bg);

  Array.from(text).forEach((char, index) => {
    const span = document.createElement('span');
    span.textContent = char === ' ' ? '\u00A0' : char; // conserva los espacios
    span.style.animation = `fadeIn 0.25s ease-in-out forwards ${0.2+index / 40}s`;
    header.appendChild(span);
  });

  requestAnimationFrame(() => {
    bg.style.width = '100vw';
    bg.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
  });
});

const canvas = document.createElement('canvas');
document.getElementById("canvasParent").appendChild(canvas);
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const lines = [];
const lineCount = 64;
const maxLineLength = 0;

for (let i = 0; i < lineCount; i++) {
  const side = Math.floor(Math.random() * 4);
  let x, y;

  switch (side) {
    case 0: // arriba
      x = Math.random() * canvas.width;
      y = -10;
      break;
    case 1: // derecha
      x = canvas.width + 10;
      y = Math.random() * canvas.height;
      break;
    case 2: // abajo
      x = Math.random() * canvas.width;
      y = canvas.height + 10;
      break;
    case 3: // izquierda
      x = -10;
      y = Math.random() * canvas.height;
      break;
  }

  lines.push({
    x: x,
    y: y,
    length: 9000000,
    angle: Math.random() * 2 * Math.PI,
    speed: (Math.random() - 0.5) * 0.0009+(Math.sin(y*16)*0.00025),
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
  ctx.lineWidth = 4;
  var i = 1;
  lines.forEach(line => {
    ctx.strokeStyle = `rgba(255, 255, 255, ${0.5*i/lineCount}) `;
    ctx.beginPath();
    ctx.moveTo(line.x, line.y);
    ctx.lineTo(
      line.x + line.length * Math.cos(line.angle),
      line.y + line.length * Math.sin(line.angle)
    );
    ctx.stroke();

    line.angle += line.speed;
    if (line.angle > 2 * Math.PI) line.angle -= 2 * Math.PI;
    if (line.angle < 0) line.angle += 2 * Math.PI;
    i++;
  }
);

  requestAnimationFrame(draw);
}

window.addEventListener('resize', () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

draw();