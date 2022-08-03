"use strict";
let check = true;
var audio, playbtn, seek_bar;
audio = new Audio();
audio.src = "Audio/jellyfish_jam.mp3";
audio.loop = true;

function initAudioPlayer() {
  audio.muted = false;
  audio.play();
}

window.addEventListener("click", initAudioPlayer);

let playButton = document.getElementById("playbtn");
console.log(playButton);
playbtn.addEventListener("click", mutePlay);
function mutePlay() {
  if (check === true) {
    audio.muted = true;
    check = false;
  } else {
    audio.muted = false;
    check = true;
  }
}

