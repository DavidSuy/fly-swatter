"use strict";

let maxFlyCount = 15;
let flyCords = document.getElementById("flyzone");
// Fly Constructor
function Fly(hp = 1, flyId, width = 40, height = 60, speed = 1) {
  this.hp = hp;
  this.width = width;
  this.height = height;
  this.speed = speed;
  let xCord, yCord;
  this.flyId = flyArray.length;
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
  // if (flyCords.childElementCount > maxFlyCount) {
  //   return;
  // }
  let img = document.createElement("img");
  img.setAttribute("class", "overlays");
  img.src = "IMG/fly-pic.PNG";
  img.id = this.flyId;
  img.width = this.width;
  img.height = this.height;
  flyzone.appendChild(img);
  img.style.gridRow = this.yCord;
  img.style.gridColumn = this.xCord;
};

// Fly.prototype.genUniqueId = function () {
//   while (indexArr.length < maxFlyCount) {
//     let randNum = Math.ceil(Math.random() * maxFlyCount);
//     if (!indexArr.includes(randNum)) {
//       indexArr.push(randNum);
//     }
//   }
//   return `fly${indexArr.shift()}`;
// };

Fly.prototype.swatted = function () {
  this.hp--;
  // this.hp--;
  if (this.hp === 0) {
    playSplat();
    document.getElementById(this.flyId).src = "images/death.gif";
    setTimeout(() => {  this.delete(); }, 800);
  }
};
Fly.prototype.delete = function () {
  flyCount--;
  score++;
  scoreDom.textContent = score;
  // flyzone.removeChild(this.img);
  flyCount--;
  score++;
  document.getElementById(this.flyId).remove();
}
//Called in the main file, in the timer file
function flyCreator() {
  let newFly = new Fly();
  flyArray.push(newFly);
  newFly.renderFly();
}
