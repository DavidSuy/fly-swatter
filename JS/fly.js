"use strict";

let maxFlyCount = 5;
let flyCords = document.getElementById("flyzone");
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
  let xMax = 20;
  let yMin = 0;
  let yMax = 10;
  this.xCord = Math.floor(Math.random() * (xMax - xMin) + xMin);
  this.yCord = Math.floor(Math.random() * (yMax - yMin) + yMin);
};

Fly.prototype.renderFly = function () {
  this.genRandLoc();
  //max flys on screen
  if (flyCords.childElementCount > maxFlyCount) {
    return;
  }
  let img = document.createElement("img");

  img.setAttribute("class", "overlays");
  img.id = this.genUniqueId();
  img.src = "IMG/fly-pic.PNG";
  img.width = this.width;
  img.height = this.height;
  flyzone.appendChild(img);
  img.style.gridRow = this.yCord;
  img.style.gridColumn = this.xCord;
  let fly = document.getElementById(img.id);
  this.el = fly;
  fly.addEventListener("click", this.swatted);
};

Fly.prototype.genUniqueId = function () {
  while (indexArr.length < maxFlyCount) {
    let randNum = Math.ceil(Math.random() * maxFlyCount);
    if (!indexArr.includes(randNum)) {
      indexArr.push(randNum);
    }
  }
  return `fly${indexArr.shift()}`;
};

Fly.prototype.swatted = function (e) {
  e.target.remove();
  // console.log(e.target.id.slice(3, 1));
  score++;
  scoreDom.textContent = score;
  flyCreator();
  // this.hp--;
  if (this.hp === 0) {
    // flyzone.removeChild(this.img);
    scoreCounter++;
  }
};
//Called in the main file, in the timer file
function flyCreator() {
  let newFly = new Fly();
  newFly.renderFly();
}
