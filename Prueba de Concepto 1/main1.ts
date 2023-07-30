import "./style.css";

console.log("Hello Typescript!");

type GameCards = [
  Animal1: string,
  Animal2: string,
  Animal3: string,
  Animal4: string,
  Animal5: string,
  Animal6: string,
  Animal7: string,
  Animal8: string,
  Animal9: string,
  Animal10: string,
  Animal11: string,
  Animal12: string,
]
let cardDeck [
    Animal1 = "A",
    Animal2 = "B",
    Animal3 = "C",
    Animal4 = "D",
    Animal5 = "E",
    Animal6 = "F",
    Animal7 = "G",
    Animal8 = "H",
    Animal9 = "I",
    Animal10 = "J",
    Animal11 = "K",
    Animal12 = "L",
]

function shuffleArray(array: GameCards) {
  for (let lastNumber = array.length - 1; lastNumber > 0; lastNumber--) {
    const randomNumber = Math.floor(Math.random() * (lastNumber + 1));
    [array[lastNumber], array[randomNumber]] = [array[randomNumber], array[lastNumber]];
  }
}

shuffleArray(cardDeck)
