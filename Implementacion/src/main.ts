import "./style.css";

console.log("Hello Typescript!");

type GameCards = [
  Animal1: InfoCarta,
  Animal2: InfoCarta,
  Animal3: InfoCarta,
  Animal4: InfoCarta,
  Animal5: InfoCarta,
  Animal6: InfoCarta,
  Animal7: InfoCarta,
  Animal8: InfoCarta,
  Animal9: InfoCarta,
  Animal10: InfoCarta,
  Animal11: InfoCarta,
  Animal12: InfoCarta
];

interface InfoCarta {
  idFoto: number;
  imagen: string;
}

let cardDeck: GameCards = [
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.png",
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.png",
  },
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.jpg",
  },
  {
    idFoto: 4,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.jpg",
  },
  {
    idFoto: 5,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.jpg",
  },
  {
    idFoto: 6,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.jpg",
  },
  {
    idFoto: 1,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/1.jpg",
  },
  {
    idFoto: 2,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/2.jpg",
  },
  {
    idFoto: 3,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/3.jpg",
  },
  {
    idFoto: 4,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/4.jpg",
  },
  {
    idFoto: 5,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/5.jpg",
  },
  {
    idFoto: 6,
    imagen:
      "https://raw.githubusercontent.com/Lemoncode/fotos-ejemplos/main/memo/6.jpg",
  },
];
const cardDiv1 = document.getElementById("cardDiv1");
const cardDiv2 = document.getElementById("cardDiv2");
const cardDiv3 = document.getElementById("cardDiv3");
const cardDiv4 = document.getElementById("cardDiv4");
const cardDiv5 = document.getElementById("cardDiv5");
const cardDiv6 = document.getElementById("cardDiv6");
const cardDiv7 = document.getElementById("cardDiv7");
const cardDiv8 = document.getElementById("cardDiv8");
const cardDiv9 = document.getElementById("cardDiv9");
const cardDiv10 = document.getElementById("cardDiv10");
const cardDiv11 = document.getElementById("cardDiv11");
const cardDiv12 = document.getElementById("cardDiv12");
document.addEventListener("DOMContentLoaded", initGame);
function initGame() {
  if (cardDiv1 && cardDiv1 instanceof HTMLImageElement) {
    cardDiv1.addEventListener("click", function () {
      cardDiv1.src = "";
      console.log("The card 1 was clicked!");
    });
  }
  if (cardDiv2 && cardDiv2 instanceof HTMLImageElement) {
    cardDiv2.addEventListener("click", function () {
      cardDiv2.src = "";
      console.log("The card 2 was clicked!");
    });
  }
  if (cardDiv3 && cardDiv3 instanceof HTMLImageElement) {
    cardDiv3.addEventListener("click", function () {
      cardDiv3.src = "";
      console.log("The card 3 was clicked!");
    });
  }
  if (cardDiv4 && cardDiv4 instanceof HTMLImageElement) {
    cardDiv4.addEventListener("click", function () {
      cardDiv4.src = "";
      console.log("The card 4 was clicked!");
    });
  }
  if (cardDiv5 && cardDiv5 instanceof HTMLImageElement) {
    cardDiv5.addEventListener("click", function () {
      cardDiv5.src = "";
      console.log("The card 5 was clicked!");
    });
  }
  if (cardDiv6 && cardDiv6 instanceof HTMLImageElement) {
    cardDiv6.addEventListener("click", function () {
      cardDiv6.src = "";
      console.log("The card 6 was clicked!");
    });
  }
  if (cardDiv7 && cardDiv7 instanceof HTMLImageElement) {
    cardDiv7.addEventListener("click", function () {
      cardDiv7.src = "";
      console.log("The card 7 was clicked!");
    });
  }
  if (cardDiv8 && cardDiv8 instanceof HTMLImageElement) {
    cardDiv8.addEventListener("click", function () {
      cardDiv8.src = "";
      console.log("The card 8 was clicked!");
    });
  }
  if (cardDiv9 && cardDiv9 instanceof HTMLImageElement) {
    cardDiv9.addEventListener("click", function () {
      cardDiv9.src = "";
      console.log("The card 9 was clicked!");
    });
  }
  if (cardDiv10 && cardDiv10 instanceof HTMLImageElement) {
    cardDiv10.addEventListener("click", function () {
      cardDiv10.src = "";
      console.log("The card 10 was clicked!");
    });
  }
  if (cardDiv11 && cardDiv11 instanceof HTMLImageElement) {
    cardDiv11.addEventListener("click", function () {
      cardDiv11.src = "";
      console.log("The card 11 was clicked!");
    });
  }
  if (cardDiv12 && cardDiv12 instanceof HTMLImageElement) {
    cardDiv12.addEventListener("click", function () {
      cardDiv12.src = "";
      console.log("The card 12 was clicked!");
    });
  }
}
function shuffleArray(array: GameCards) {
  for (let lastNumber = array.length - 1; lastNumber > 0; lastNumber--) {
    const randomNumber = Math.floor(Math.random() * (lastNumber + 1));
    [array[lastNumber], array[randomNumber]] = [
      array[randomNumber],
      array[lastNumber],
    ];
  }
  return array;
}

let shuffledDeck: GameCards = [...cardDeck];
shuffleArray(shuffledDeck);
console.log(cardDeck);
console.log(shuffledDeck);
