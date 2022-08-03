"use strict";

// Global Variables
let time = 15;
let score = 0;
let isPlaying = false;
let userName = "";
let scoreCounter = 0;


// DOM Elements
let startGameButton = document.getElementById("startGame");
let gameContainer = document.getElementById("gameContainer");
let timer = document.getElementById("countDownTimer");
let scoreDom = document.getElementById("playerScore");
let difficulty = document.getElementById("difficulty").value;
let nickname = document.querySelector("input").value;
let startForm = document.getElementById("startForm");
let highScoreList = document.querySelector("#leaderBoard ol");
let flyzone = document.getElementById('flyzone');

// Event Listener
startGameButton.addEventListener("click", startGame);

// Event Handler
function startGame() {
  hideOrShowElement("startForm", "hide");
  hideOrShowElement("timer", "show");
  hideOrShowElement("flyzone", "show");
  startTimer();
  // beginGame();
}

function endGame() {
  genLeaderBoard();
  hideOrShowElement("leaderBoard", "show");
  hideOrShowElement("flyzone", "hide");
  // hideFlyzone();
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

// Factory Helper Functions

// Toggle Elments
function hideOrShowElement(element, hideOrShow) {
  let el = document.getElementById(element);
  if (hideOrShow === "hide") {
    el.style.display = "none";
  } else if (hideOrShow === "show") {
    el.style.display = "";
  }
}

function genLeaderBoard() {
  // Dummy data
  // let leaderBoardList = [
  //   "name: David Score: 1000",
  //   "name: Migueal Score: 3000",
  //   "name: Jackson Score: 2000",
  // ];

  let leaderBoardList = JSON.parse(localStorage.getItem("leaderBoardList"));
  if (leaderBoardList) {
    leaderBoardList.push(`PlayerName Score:${score}`);
  } else {
    leaderBoardList = [];
    leaderBoardList.push(`PlayerName Score:${score}`);
  }
  localStorage.setItem("leaderBoardList", JSON.stringify(leaderBoardList));
  let leaderBoardLists = localStorage.getItem("leaderBoardList");
  console.log(leaderBoardLists);

  for (let list of leaderBoardList) {
    let li = document.createElement("li");
    li.textContent = list;
    highScoreList.appendChild(li);
  }
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
