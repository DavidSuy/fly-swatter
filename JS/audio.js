"use strict";

var audio, playbtn, seek_bar;
audio = new Audio();
audio.src = "Audio/jellyfish_jam.mp3";
audio.loop = true;

function initAudioPlayer() {
  audio.muted = false;
  audio.play();
}
window.addEventListener("click", initAudioPlayer);
