const $video = document.querySelector("#video");
const $play = document.querySelector("#play");
const $pause = document.querySelector("#pause");
const $backward = document.querySelector("#backward");
const $fordward = document.querySelector("#fordward");

$play.addEventListener("click", handlePlay);
$pause.addEventListener("click", handlePause);

function handlePlay() {
  $video.play();
  $play.hidden = true;
  $pause.hidden = false;
  console.log("le diste clik al boton de play");
}
function handlePause() {
  $video.pause();
  $pause.hidden = true;
  $play.hidden = false;
  console.log("le diste clik al boton de pausa");
}

$backward.addEventListener("click", handleBackward);

function handleBackward() {
  //$video.currentTime = $video.currentTime - 10;
  $video.currentTime -= 10;
  console.log("para atras 10 seg");
}

$fordward.addEventListener("click", handleFordward);
function handleFordward() {
  //$video.currentTime = $video.currentTime + 10;
  $video.currentTime += 10;
  console.log("para adelante 10 seg");
}

const $progress = document.querySelector("#progress");
$video.addEventListener("loadedmetadata", handleLoaded);
$video.addEventListener("timeupdate", handleTimeUpdate);

function handleLoaded() {
  $progress.max = $video.duration;
  console.log("ha cargado el video");
}
function handleTimeUpdate() {
  $progress.value = $video.currentTime;
}

$progress.addEventListener("input", handleInput);

function handleInput() {
  $video.currentTime = progress.value;
  console.log($progress.value);
}
