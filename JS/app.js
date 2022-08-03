"use strict";

// Global Variables
let startGameButton = document.getElementById("startGame");
let time = 15;
let isPlaying = false;
let scoreCounter = 0;

// DOM Elements
let gameContainer = document.getElementById("gameContainer");
let timer = document.getElementById("countDownTimer");
let score = document.getElementById("playerScore");
let difficulty = document.getElementById("difficulty").value;
let nickname = document.querySelector("input").value;
let flyzone = document.getElementById('flyzone');
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
function Fly(hp = 1, color = "gray", width = 40, height = 60, speed = 1) {
  this.hp = hp;
  this.color = color;
  this.width = width;
  this.height = height;
  this.speed = speed;
  this.xCord = 0;
  this.yCord = 0;
}

Fly.prototype.genRandLoc = function () {
  //this gets the starting x and y axis, as well as the elements width and height, with those four numbers and a little math, you can determine its x and y cords
  let flyCords = document.getElementById('flyzone').getBoundingClientRect();
  //I store the articles images here
  let xMin = flyCords.left
  //size of the article
  let xMax = flyCords.right - this.width;
  let yMin = flyCords.top;
  //height of the article
  let yMax = flyCords.bottom - this.height;
  console.log(flyCords.x);
  do {
    this.xCord = Math.floor(Math.random() * (xMax - xMin) + xMin);
    this.yCord = Math.floor(Math.random() * (yMax - yMin) + yMin);
    console.log(this.xCord, this.yCord)
  } while (this.xCord + this.width >= flyCords.right || this.yCord + this.height >= flyCords.bottom);
};
Fly.prototype.renderFly = function () {
  this.genRandLoc();
  let img = document.createElement('img');
  img.setAttribute('class', 'overlays');
  img.src = "IMG/fly-pic.PNG";
  img.width = this.width;
  img.height = this.height;
  flyzone.appendChild(img);
  console.log(this.xCord);
  console.log(this.yCord);
  img.style.left = this.xCord + "px";
  img.style.top = this.yCord + "px";
};
Fly.prototype.swatted = function () {
  this.hp--;
  if (this.hp === 0) {
    flyzone.removeChild(this.img);
    scoreCounter++;
  }
};

// Toggle Elements
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
    flyCreator();
    //TODO based on difficulty, while the timer is running, spawn in flies
    if (time < 0) {
      clearInterval(timerTracker);
      endGame();
    }
  }
}

function flyCreator() {
  let newFly = new Fly();
  newFly.renderFly();
}
