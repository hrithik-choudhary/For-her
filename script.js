function goToNext() {
  window.location.href = "cake.html";
}

const heartContainer = document.getElementById("hearts");
const hearts = [
  { color: "pink", rotation: "20deg", flip: true },
  { color: "hotpink", rotation: "45deg", flip: true },
  { color: "lightpink", rotation: "70deg", flip: true },
];

hearts.forEach(({ color, rotation, flip }) => {
  const wrapper = document.createElement("div");
  wrapper.classList.add("heart-wrapper");
  wrapper.style.transform = `rotate(${rotation}) ${flip ? "scaleX(-1)" : ""}`;

  const heart = document.createElement("div");
  heart.classList.add("heart", color);

  wrapper.appendChild(heart);
  heartContainer.appendChild(wrapper);
});

const bg = document.getElementById("background-effects");

function createFloatingElement() {
  const el = document.createElement("div");
  const size = Math.random() * 30 + 10;
  const type = Math.random() > 0.5 ? "❤️" : "✨";
  el.textContent = type;
  el.style.position = "absolute";
  el.style.fontSize = `${size}px`;
  el.style.left = `${Math.random() * 100}%`;
  el.style.top = "100%";
  el.style.opacity = "0.7";
  el.style.animation = `floatUp ${4 + Math.random() * 4}s linear forwards`;
  bg.appendChild(el);
  setTimeout(() => el.remove(), 8000);
}

setInterval(createFloatingElement, 300);

const style = document.createElement("style");
style.innerHTML = `
@keyframes floatUp {
  0% { transform: translateY(0); opacity: 0.7; }
  100% { transform: translateY(-120vh); opacity: 0; }
}`;
document.head.appendChild(style);
// Ensures background music plays on first click
window.addEventListener(
  "click",
  () => {
    const music = document.getElementById("bg-music");
    if (music && music.paused) {
      music.play();
    }
  },
  { once: true }
);
