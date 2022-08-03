"use strict";

let flyCords = document.getElementById('flyzone');
// Fly Constructor
function Fly(hp = 1, color = "gray", width = 40, height = 60, speed = 1) {
  this.hp = hp;
  this.color = color;
  this.width = width;
  this.height = height;
  this.speed = speed;
  let xCord, yCord;
}

Fly.prototype.genRandLoc = function () {
  //this gets the starting x and y axis, as well as the elements width and height, with those four numbers and a little math, you can determine its x and y cords
  //I store the articles images here
  let xMin = 0;
  let xMax = 100;
  let yMin = 0;
  let yMax = 100;
  this.xCord = Math.floor(Math.random() * (xMax - xMin) + xMin);
  this.yCord = Math.floor(Math.random() * (yMax - yMin) + yMin);
};
Fly.prototype.renderFly = function () {
  this.genRandLoc();
  if(flyCords.childElementCount > 5){return;}
  let img = document.createElement('img');
  img.setAttribute('class', 'overlays');
  img.src = "IMG/fly-pic.PNG";
  img.width = this.width;
  img.height = this.height;
  flyzone.appendChild(img);
  img.style.left = this.xCord + "%";
  img.style.top = this.yCord + "%";
};
Fly.prototype.swatted = function () {
  this.hp--;
  if (this.hp === 0) {
    flyzone.removeChild(this.img);
    scoreCounter++;
  }
};
//Called in the main file, in the timer file
function flyCreator() {
  let newFly = new Fly();
  newFly.renderFly();
}
