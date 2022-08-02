"use strict";

// Global Variables
let startGameButton = document.getElementById("startGame");
let time = 5;
let isPlaying = false;

// DOM Elements
let gameContainer = document.getElementById("gameContainer");
let timer = document.getElementById("countDownTimer");
let score = document.getElementById("playerScore");
let difficulty = document.getElementById("difficulty").value;
let nickname = document.querySelector("input").value;

// Event Listener
startGameButton.addEventListener("click", startGame);

// Event Handler
function startGame() {
  hideStartForm();
  showTimerBar();
  showFlyzone();
  startTimer();
  // beginGame();
}

function endGame() {
  showLeaderBoard();
  hideFlyzone();
}

// Fly Constructor
function Fly(hp = 1, color = "gray", size = 3, speed = 1) {
  this.hp = hp;
  this.color = color;
  this.size = size;
  this.speed = speed;
}

Fly.prototype.genRandLoc = function () {};
Fly.prototype.renderFly = function () {};
Fly.prototype.swatted = function () {};

// Toggle Elments
function hideStartForm() {
  document.getElementById("startForm").style.display = "none";
}
function showTimerBar() {
  document.getElementById("timer").style.display = "";
}
function showFlyzone() {
  document.getElementById("flyzone").style.display = "";
}
function hideFlyzone() {
  document.getElementById("flyzone").style.display = "none";
}
function showLeaderBoard() {
  document.getElementById("leaderBoard").style.display = "";
}
function hideLeaderBoard() {
  document.getElementById("leaderBoard").style.display = "none";
}

function startTimer() {
  //fills the timer with a sixty second countdown
  //Starts creating fly's until the countdown ends
  var timerTracker = setInterval(runClock, 1000);
  function runClock() {
    timer.innerHTML = time;
    time--;
    //TODO based on difficulty, while the timer is running, spawn in flies
    if (time < 0) {
      clearInterval(timerTracker);
      endGame();
    }
  }
}

function fly(hp, size, speed) {
  this.hp = hp;
  this.size = size;
  this.speed = speed;
}

function flyCreator() {
  //
}
