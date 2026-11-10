const envelope = document.getElementById("envelope");
const hint = document.getElementById("envelopeHint");
const note = document.getElementById("openNote");
let opened = false;

envelope.addEventListener("click", () => {
  opened = !opened;
  envelope.classList.toggle("open", opened);
  hint.textContent = opened ? "UNA CARTA QUE VIAJÓ DIRECTO A TU CORAZÓN" : "TOCÁ EL SOBRE PARA ABRIRLO";
  note.textContent = opened
    ? "TE EXTRAÑO, JAZ. HOY, MAÑANA Y EN CADA RECUERDO LINDO. ♡"
    : "Una carta, un recuerdo y una flor violeta para vos.";
  envelope.setAttribute("aria-label", opened ? "Cerrar la carta para Jaz" : "Abrir la carta para Jaz");
});

// Pequeñas estrellas que aparecen al tocar/clicar en la página.
document.addEventListener("pointerdown", (event) => {
  if (event.target.closest("button, a")) return;
  const sparkle = document.createElement("span");
  sparkle.className = "click-sparkle";
  sparkle.textContent = ["✦", "♡", "✧"][Math.floor(Math.random() * 3)];
  sparkle.style.left = `${event.clientX}px`;
  sparkle.style.top = `${event.clientY}px`;
  document.body.appendChild(sparkle);
  setTimeout(() => sparkle.remove(), 900);
});

const style = document.createElement("style");
style.textContent = `.click-sparkle{position:fixed;z-index:30;pointer-events:none;color:#d8b8ff;font-size:20px;animation:sparkleOut .9s ease forwards}@keyframes sparkleOut{to{opacity:0;transform:translateY(-28px) scale(1.7)}}`;
document.head.appendChild(style);

// El botón musical deja preparado el gesto visual sin reproducir audio inesperado.
const soundToggle = document.getElementById("soundToggle");
soundToggle.addEventListener("click", () => {
  const active = soundToggle.classList.toggle("active");
  soundToggle.innerHTML = active ? "♫ <span>ambiente activado</span>" : "♫ <span>sonido</span>";
  soundToggle.style.borderColor = active ? "#d9b8ff" : "#ffffff30";
  soundToggle.style.color = active ? "#f2b8d0" : "#fff";
});