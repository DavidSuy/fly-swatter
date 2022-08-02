'use strict'

let startgame = document.getElementById('startGame');
let time = 60;

//grabs the difficulty, and nickname, stores it and then clears the screen, renders the video game and then runs timer which starts the game

function rendergame() {
  let difficulty = document.getElementById('difficulty').value;
  let nickname = document.querySelector('input').value;

  clearScreen();
  rendergameScreen();
  beginGame();
}

//DONE
function clearScreen(){
  //Clears the form and the h1 tag so that its a blank page, minus the header and footer
  document.getElementById('startForm').style.display = "none"; 
}

function rendergameScreen(){
  document.getElementById('timer').style.display = "";

}


//TODO
function beginGame(){
  //fills the timer with a sixty second countdown
  //Starts creating fly's until the countdown ends
  let timer = document.getElementById('countDownTimer');
  let score = document.getElementById('playerScore');
  var timerTracker = setInterval(runClock, 1000);
  function runClock(){
    timer.innerHTML = time;
    time--;
    //TODO based on difficulty, while the timer is running, spawn in flies 
    if(time <= 0){
      clearInterval(timerTracker);
    }
  }
}
function fly(hp, size, speed){
  this.hp = hp;
  this.size = size;
  this.speed = speed;
}
function flyCreator(){
  //
}


startgame.addEventListener('click', rendergame);