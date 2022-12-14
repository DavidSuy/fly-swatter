"use strict";
let check = true;
var audio, playbtn, seek_bar;
audio = new Audio();
audio.src = "Audio/jellyfish_jam.mp3";
audio.loop = true;
audio.volume = .3;

function playSplat() {
  let splat = new Audio();
  splat.src = "Audio/splat.mp3";
  audio.loop = false;
  splat.play();
}

let playButton = document.getElementById("playbtn");
playButton.addEventListener("click", mutePlay);
function mutePlay() {
  audio.muted = false;
  audio.play();
}
let pauseButton = document.getElementById("mutebtn");
pauseButton.addEventListener("click", playPlay);
function playPlay() {
  audio.muted = true;
  audio.pause();
}
