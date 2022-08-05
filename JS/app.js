"use strict";

// Global Variables
let time = 15;
let score = 0;
let isPlaying = false;
let userName = "";
let scoreCounter = 0;
let indexArr = [];
let flyCount = 0;
let flyArray = [];
let maxFlyCount = 15;

// DOM Elements
let startGameButton = document.getElementById("startGame");
let gameContainer = document.getElementById("gameContainer");
let timer = document.getElementById("countDownTimer");
let scoreDom = document.getElementById("playerScore");
let difficulty = document.getElementById("difficulty").value;
let nickname = document.querySelector("input").value;
let startForm = document.getElementById("startForm");
let highScoreList = document.querySelector("#leaderBoard ol");
let flyzone = document.getElementById("flyzone");
scoreDom.textContent = score;

// Event Listener
startGameButton.addEventListener("click", startGame);

// Event Handler
function startGame() {
  mutePlay();
  getUsername();
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
function attachEventListener(id, callback) {
  let el = document.getElementById(id);
  console.log(el);
  el.addEventListener("click", callback);
}

function genLeaderBoard() {
  let currentScoreList = `${userName}: ${score} Points`;

  let leaderBoardList = JSON.parse(localStorage.getItem("leaderBoardList"));
  if (leaderBoardList) {
    leaderBoardList.push([userName || "Anonymous", score]);
  } else {
    leaderBoardList = [];
    leaderBoardList.push([userName || "Anonymous", score]);
  }

  leaderBoardList.sort(function (a, b) {
    return b[1] - a[1];
  });

  localStorage.setItem("leaderBoardList", JSON.stringify(leaderBoardList));
  let leaderBoardLists = localStorage.getItem("leaderBoardList");
  console.log(leaderBoardLists);

  for (let list of leaderBoardList) {
    let li = document.createElement("li");
    li.textContent = `${list[0]}: ${list[1]} Points`;
    highScoreList.appendChild(li);
  }

  console.log(typeof highScoreList);
  for (let i in highScoreList.children) {
    if (highScoreList.children[i].textContent === currentScoreList) {
      console.log(`we in it ${i}`);
      highScoreList.children[i].style = "background-color: red;";
      break;
    }
  }
}

function startTimer() {
  //fills the timer with a sixty second countdown
  //Starts creating fly's until the countdown ends
  flyzone.addEventListener("click", checkForFly);
  var timerTracker = setInterval(runClock, 1000);
  function runClock() {
    timer.innerHTML = time;
    time--;
    //TODO based on difficulty, while the timer is running, spawn in flies
    if (time === 0) {
      time--;
      clearInterval(flySpawner);
      clearInterval(timerTracker);
      endGame();
    }
  }
  var flySpawner = setInterval(spawnFlies, 1400);
  function spawnFlies() {
    if (flyCount < maxFlyCount) {
      flyCount++;
      flyCount++;
      flyCount++;
      flyCreator();
      flyCreator();
      flyCreator();
    }
  }
}
function checkForFly(event) {
  for (let i in flyArray) {
    if (parseInt(event.target.id) === flyArray[i].flyId) {
      flyArray[i].swatted();
    }
  }
}

function getUsername() {
  if (userName === "") {
    userName = "Anonymous";
  } else {
    userName = document.getElementById("userName").value;
  }
}
