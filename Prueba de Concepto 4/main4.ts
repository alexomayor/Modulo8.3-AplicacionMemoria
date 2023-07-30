import "./style.css";

console.log("Hello Typescript!");

const cardImg1 = document.getElementById("card1Img");
const cardImg2 = document.getElementById("card2Img");

document.addEventListener("DOMContentLoaded", initGame);

function initGame() {
  if (cardImg1 && cardImg1 instanceof HTMLImageElement) {
    cardImg1.addEventListener("click", function () {
      cardImg1.src = "";
      console.log("The card was clicked!");
    });
  }
  if (cardImg2 && cardImg2 instanceof HTMLImageElement) {
    cardImg2.addEventListener("click", function () {
      cardImg2.src = "";
      console.log("The card was clicked!");
    });
  }
}
