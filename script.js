// Navigation
function navigateTo(id) {
  document.querySelectorAll('.screen').forEach(screen => {
    screen.classList.remove('active');
  });
  document.getElementById(id).classList.add('active');
}

// Typewriter Effect
const text = "ElectroGenius";
let index = 0;
const typeInterval = setInterval(() => {
  document.getElementById("type-text").textContent += text.charAt(index);
  index++;
  if (index >= text.length) clearInterval(typeInterval);
}, 150);

// Animated Particle Background
const canvas = document.getElementById("background-canvas");
const ctx = canvas.getContext("2d");
let w, h;
let particles = [];

function resize() {
  w = canvas.width = window.innerWidth;
  h = canvas.height = window.innerHeight;
}
resize();
window.addEventListener("resize", resize);

class Particle {
  constructor() {
    this.reset();
  }
  reset() {
    this.x = Math.random() * w;
    this.y = Math.random() * h;
    this.vx = (Math.random() - 0.5) * 1;
    this.vy = (Math.random() - 0.5) * 1;
    this.radius = 1 + Math.random() * 2;
  }
  update() {
    this.x += this.vx;
    this.y += this.vy;
    if (this.x < 0 || this.x > w || this.y < 0 || this.y > h) this.reset();
  }
  draw() {
    ctx.beginPath();
    ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
    ctx.fillStyle = "#ff0055";
    ctx.fill();
  }
}
for (let i = 0; i < 120; i++) {
  particles.push(new Particle());
}

function animate() {
  ctx.clearRect(0, 0, w, h);
  particles.forEach(p => {
    p.update();
    p.draw();
  });
  requestAnimationFrame(animate);
}
animate();

// Touch Reaction
canvas.addEventListener("pointerdown", e => {
  for (let i = 0; i < 15; i++) {
    const p = new Particle();
    p.x = e.clientX;
    p.y = e.clientY;
    particles.push(p);
  }
});