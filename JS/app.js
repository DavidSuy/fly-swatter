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


//TODO
function clearScreen(){
  //Clears the form and the h1 tag so that its a blank page, minus the header and footer
  document.getElementById('gameContainer').style.display = "none"; 
}


//TODO
function rendergameScreen(){
  //adds a div the width of the screen and about 1000px that has a background of our game
  //adds a scoreboard to the top right
  //adds a timer box to the top center
}


//TODO
function beginGame(){
  //fills the timer with a sixty second countdown
  //
}


startgame.addEventListener('click', rendergame);