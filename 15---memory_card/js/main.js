const cards = document.querySelectorAll(".memory-card");
const playagain = document.getElementById("reset");
let counter = 0;
let sec = 0;
let imgFound = 0;
let hasFlippedCard = false;
let lockBoard = false;
let firstCard, secondCard;

function flipCard() {
  if (lockBoard) return;
  if (this === firstCard) return;

  this.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = this;
    counter += 1;
    document.getElementById("counter").innerHTML = counter;
    return;
  }

  secondCard = this;
  counter += 1;
  lockBoard = true;
  document.getElementById("counter").innerHTML = counter;
  checkForMatch();
}

function checkForMatch() {
  let isMatch = firstCard.dataset.framework === secondCard.dataset.framework;

  isMatch ? disableCards() : unflipCards();
}

function disableCards() {
  firstCard.style.pointerEvents = "none";
  secondCard.style.pointerEvents = "none";
  resetBoard();
  imgFound++;
  if (imgFound == cards.length / 2) {
    myStopFunction();
  }
}

function unflipCards() {
  lockBoard = true;

  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resetBoard();
  }, 1500);
}

function resetBoard() {
  [hasFlippedCard, lockBoard] = [false, false];
  [firstCard, secondCard] = [null, null];
}

// play again
function resetGame() {
  counter = 0;
  imgFound = 0;
  sec = 0;
  document.getElementById("minutes").innerHTML = "00";
  document.getElementById("seconds").innerHTML = "00";

  document.getElementById("counter").innerHTML = "" + counter;
  cards.forEach((card) => {
    card.classList.remove("flip");
    card.style.pointerEvents = "auto";
  });
  shuffle();

  return false;
}

// radom card
function shuffle() {
  cards.forEach((card) => {
    let randomPos = Math.ceil(Math.random() * 12);
    card.style.order = randomPos;
  });
}
// count time
function pad(val) {
  return val > 9 ? val : "0" + val;
}
let myTimer = setInterval(function () {
  document.getElementById("seconds").innerHTML = pad(++sec % 60);
  document.getElementById("minutes").innerHTML = pad(parseInt(sec / 60, 10));
}, 1000);

function myStopFunction() {
  clearInterval(myTimer);
}

cards.forEach((card) => card.addEventListener("click", flipCard));
playagain.addEventListener("click", resetGame);
shuffle();
