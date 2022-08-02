"use strict";

// Global Variables
let startGameButton = document.getElementById("startGame");
let time = 5;
let isPlaying = false;

// DOM Elements
let difficulty = document.getElementById("difficulty").value;
let nickname = document.querySelector("input").value;
let timer = document.getElementById("countDownTimer");
let score = document.getElementById("playerScore");

// Event Listener
startGameButton.addEventListener("click", startGame);

// Event Handler
function startGame() {
  hideStartForm();
  showTimerBar();
  startTimer();
  // beginGame();
}

function endGame() {
  showLeaderBoard();
}

// Toggle Elments
function hideStartForm() {
  document.getElementById("startForm").style.display = "none";
}

function showTimerBar() {
  document.getElementById("timer").style.display = "";
}

function showLeaderBoard() {
  document.getElementById("leaderBoard").style.display = "";
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
