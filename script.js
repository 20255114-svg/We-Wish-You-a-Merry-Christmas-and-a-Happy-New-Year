const card = document.getElementById("card");
const audio = document.getElementById("christmas-audio");
const video = document.querySelector(".fireworks-bg");

let played = false;

card.addEventListener("click", () => {
  if (played) return;
  played = true;

  card.classList.add("flipped");

  audio.currentTime = 0;
  audio.play();
  setTimeout(() => audio.pause(), 5000);

  video.currentTime = 0;
  video.play();
});
