const scramblleWords = [
  "apple",
  "tiger",
  "happy",
  "pizza",
  "candy",
  "ocean",
  "eagle",
  "puppy",
  "dream",
  "lemon",
  "fairy",
  "smile",
  "beach",
  "green",
  "cloud",
  "zebra",
  "robot",
  "music",
  "water",
  "horse",
  "panda",
  "cherry",
  "banana",
  "guitar",
  "cookie",
  "snake",
  "magic",
  "pilot",
  "sunny",
  "space",
  "turtle",
  "sugar",
  "ghost",
  "piano",
  "flower",
  "snail",
  "coffee",
  "dolphin",
  "rocket",
  "flying",
  "purple",
  "jungle",
  "monkey",
  "orange",
  "bottle",
  "rabbit",
  "planet",
  "soccer",
  "mirror",
  "dragon",
  "castle",
  "fluffy",
  "silver",
  "parrot",
  "comet",
  "spider",
  "garden",
  "whale",
  "tiara",
  "carrot",
  "sunrise",
  "crayon",
  "crunch",
  "pickle",
  "cupcake",
  "scooter",
  "cactus",
  "flower",
];

const wordScramblle = document.getElementById("word");
const wrongLetters = document.getElementsByClassName("container-wrongs")[0];
const letters = document.getElementsByClassName("container-letters")[0];
let scrambleWord = "";
let tries = 1;

const selectRandomWord = () => {
  const randomIndex = Math.floor(Math.random() * scramblleWords.length);
  return scramblleWords[randomIndex];
};

const showScramblleWord = (word) => {
  wordScramblle.innerHTML = word
    .split("")
    .sort(() => 0.5 - Math.random())
    .join("");
};


function checkLetters(letter, index) {
  if (letter == "") {
    return;
  }
  if (letter.toLowerCase() !== scrambleWord.charAt(index)) {
    updateMistakes(letter);
    return;
  }
  document.querySelectorAll(".letter")[index].disabled = true;
  if (!checkGameWon()) {
    document.querySelectorAll(".letter")[index + 1].focus();
  } else {
    window.alert('Congratulations, you win this game 🙌!!!!');
  }
}

const updateMistakes  = (letter) => {
  wrongLetters.innerHTML += `<span class="wrong-letter">${letter}</span>`;
  const currentTry = document.querySelectorAll('.dot')[tries++];
  const currentTryNumber = document.getElementById('current-attemp');
  currentTry.classList.add('active-dot');
  currentTryNumber.textContent = tries;
  if (tries >= 5){
    window.alert('You lose this game😞...');
    resetGame();
  }
}


const generateInputsWord = (word) => {
  letters.innerHTML = "";
  for (let i = 0; i < word.length; i++) {
    letters.innerHTML += `<input type="text" class="letter" placeholder="_" maxlength="1" oninput='checkLetters(this.value,${i})' >`;
  }
  const nextEl = document.querySelectorAll(".letter")[0];
  nextEl.focus();
};

const resetMistakes = () => {
  const dots = document.querySelectorAll(".dot");
  dots.forEach((dot) => {
    dot.classList.remove("active-dot");
  });
  document.getElementById('current-attemp').textContent = 1;
  tries = 0;
}

const initGame = () => {
  scrambleWord = selectRandomWord();
  showScramblleWord(scrambleWord);
  generateInputsWord(scrambleWord);
  resetMistakes();
};


const checkGameWon = () => {
  let currentWord = "";
  const letters = document.querySelectorAll(".letter");
  for (const letter of letters) {
    currentWord += letter.value;
  }
  console.log(currentWord);
  return currentWord === scrambleWord;
};

const resetGame = () => {
  wrongLetters.innerHTML = "";
  generateInputsWord(scrambleWord);
  resetMistakes();
};

initGame();

