'use strict'
let startgame = document.getElementById('startGame');
console.log('hi');

function rendergame() {
  let difficulty = document.getElementById('difficulty').value;
  let nickname = document.querySelector('input').value;
  console.log('hi');
  console.log(difficulty);
  console.log(nickname);
  clearScreen();
  rendergameScreen();
  beginGame();
}


//DONE
function clearScreen(){
  //Clears the form and the h1 tag so that its a blank page, minus the header and footer
  document.getElementById('startForm').style.display = "none"; 
}


//TODO
function rendergameScreen(){
  document.querySelector('article').style.display = "";
}


//TODO
function beginGame(){
  //fills the timer with a sixty second countdown
  //Starts creating fly's until the countdown ends
  let timer = document.getElementById('timer').nth-child();
  let score = document.getElementById('timer').nth-child(2);
  let time = 60;
  var timerTracker = setInterval(runClock, 1000);
  function runClock(){
    timer.textContext = time;
    time--;
    //TODO based on difficulty, run the timer 
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