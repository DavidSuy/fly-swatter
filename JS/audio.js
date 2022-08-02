"use strict";

var audio, playbtn, seek_bar;
function initAudioPlayer() {
  audio = new Audio();
  audio.src = "Audio/jellyfish_jam.mp3";
  audio.loop = true;
  audio.play();
  console.log("hi");
}
window.addEventListener("load", initAudioPlayer);

