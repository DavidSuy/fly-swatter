"use strict";

// Global Variables
let time = 60;
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
// Factory Helper Functions

// Toggle Elements
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
