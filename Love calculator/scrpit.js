// Determinar resultado según porcentaje
let display = "";
if (percent < 50) {
  display = "😢"; // Emoji triste
  tipsEl.textContent = "Sometimes love needs time 💔";
} else if (percent < 95) {
  display = "🙂"; // Emoji contento
  tipsEl.textContent = "You have a good connection! 😍";
} else {
  display = "img/amor_total.png"; // Imagen desde tu carpeta img
  tipsEl.textContent = "Perfect match! True love 💖";
}

// Crear o actualizar imagen/emoji
let img = document.querySelector("#result-container img");
if (!img) {
  img = document.createElement("img");
  img.id = "love-image";
  resultContainer.appendChild(img);
}

if (percent >= 95) {
  img.src = display;      // Muestra la foto
  img.style.display = "block";
} else {
  img.src = "";           // Oculta img para emoji
  img.style.display = "none";
}

// Mostrar emoji en el porcentajeEl
percentageEl.textContent = `❤️ Percentage: ${percent}% ${display}`;

