import "./style.css";

console.log("Hello Typescript!");

const cardImg = document.getElementById("card");

document.addEventListener("DOMContentLoaded", initGame);

function initGame() {
  if (cardImg && cardImg instanceof HTMLImageElement) {
    cardImg.addEventListener("click", function () {
      cardImg.src = "";
      console.log("The card was clicked!");
    });
  }
}
