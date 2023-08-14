const hostButton = document.getElementById("hostButton");
const hostCountElement = document.getElementById("hostCount");
const preHostImage = document.getElementById("preHostImage");
const postHostImage = document.getElementById("postHostImage");
const audioElement = new Audio("your_music.mp3");

let hostCount = 0;

hostButton.addEventListener("click", () => {
  hostCount++;
  updateHostCount();
  toggleFlagImages();
  playAudio();
});

function updateHostCount() {
  hostCountElement.textContent = hostCount;
}

function toggleFlagImages() {
  preHostImage.style.display = "none";
  postHostImage.style.display = "block";
}

function playAudio() {
  audioElement.play();
}
