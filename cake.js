function blowCandle() {
  const flame = document.getElementById("flame");
  if (flame) {
    flame.style.display = "none";
    launchConfetti();
  }
}

function cutCake() {
  document.getElementById("cut-sound").play();
  const cakeBody = document.querySelector(".cake-body");
  const serveBtn = document.getElementById("serveBtn");
  const cutBtn = document.getElementById("cutBtn");
  const cutText = document.getElementById("cut-text");

  if (cakeBody) cakeBody.classList.add("cut");
  if (serveBtn) serveBtn.classList.remove("hidden");
  if (cutBtn) cutBtn.style.display = "none";
  if (cutText) cutText.textContent = "Yay! The cake is cut 🎉";

  launchConfetti();
  launchContinuousSparkles(); // ⬅️ start falling sparkles continuously
}

// One-time confetti burst
function launchConfetti() {
  for (let i = 0; i < 50; i++) {
    const confetti = document.createElement("div");
    confetti.textContent = Math.random() > 0.5 ? "🎉" : "✨";
    confetti.style.position = "fixed";
    confetti.style.left = `${Math.random() * 100}%`;
    confetti.style.top = `${Math.random() * 100}%`;
    confetti.style.fontSize = `${Math.random() * 20 + 10}px`;
    confetti.style.opacity = "0.8";
    confetti.style.animation = "confettiFall 2s linear forwards";
    document.body.appendChild(confetti);
    setTimeout(() => confetti.remove(), 2000);
  }
}

// Continuous falling sparkles
function launchContinuousSparkles() {
  const bg = document.getElementById("party-background");

  setInterval(() => {
    const el = document.createElement("div");
    el.className = "sparkle";
    el.textContent = Math.random() > 0.5 ? "✨" : "🎊";
    el.style.position = "absolute";
    el.style.left = `${Math.random() * bg.offsetWidth}px`;
    el.style.top = `0px`;
    el.style.fontSize = `${Math.random() * 20 + 15}px`;
    el.style.opacity = "0.9";
    el.style.animation = "fallDown 3s linear forwards";
    bg.appendChild(el);

    setTimeout(() => el.remove(), 3000);
  }, 300); // 1 sparkle every 300ms
}

// Add falling animation to <style>
const style = document.createElement("style");
style.innerHTML = `
@keyframes confettiFall {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(200px); opacity: 0; }
}
@keyframes fallDown {
  0% { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(300px); opacity: 0; }
}`;
document.head.appendChild(style);
window.addEventListener("click", () => {
  const bgMusic = document.getElementById("bg-music");
  if (bgMusic && bgMusic.paused) {
    bgMusic.play();
  }
}, { once: true });
const floaterBg = document.getElementById("background-floaters");

function createFloatingBackground() {
  const el = document.createElement("div");
  const type = Math.random() > 0.5 ? "✨" : "❤️";
  const size = Math.random() * 20 + 10;

  el.textContent = type;
  el.style.position = "absolute";
  el.style.fontSize = `${size}px`;
  el.style.left = `${Math.random() * 100}%`;
  el.style.top = "100%";
  el.style.opacity = "0.6";
  el.style.animation = `floatUpCake ${4 + Math.random() * 4}s linear forwards`;

  floaterBg.appendChild(el);
  setTimeout(() => el.remove(), 8000);
}

setInterval(createFloatingBackground, 300);
