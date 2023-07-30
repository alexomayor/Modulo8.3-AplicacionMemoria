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
