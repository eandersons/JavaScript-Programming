// const cardBack = { colour: "#ddd", text: "?" };  // TODO: Remove if not needed!
const colours = ["red", "blue", "green", "purple", "orange", "pink"];
const cssClasses = { card: "card", matched: "matched" };
const gameContainer = document.getElementById("gameContainer");
const gameTime = 30;
const scoreElement = document.querySelector("#score > b");
const startButton = document.getElementById("startButton");
const timerElement = document.querySelector("#timer > b");
let cards = shuffle(colours.concat(colours));
let gameInterval;
let score = 0;
let selectedCards = [];
let timeLeft = gameTime;
startButton.addEventListener("click", startGame);

function checkMatch() {
  const [card1, card2] = selectedCards;

  if (card1.dataset.colour === card2.dataset.colour) {
    selectedCards.forEach((card) => card.classList.add(cssClasses.matched));
    score += 2;
    scoreElement.textContent = score;
  } else {
    selectedCards.forEach((card) => {
      card.textContent = "?";
      card.style.backgroundColor = "#ddd";
    });
  }

  selectedCards = [];

  if (
    gameContainer.getElementsByClassName("card").length ===
    gameContainer.getElementsByClassName("card matched").length
  ) {
    clearInterval(gameInterval);
    alert("You won!");
    enableStartButton();
  }
}

function enableStartButton() {
  startButton.disabled = false;
}

function generateCards() {
  for (const colour of cards) {
    const card = document.createElement("div");
    card.classList.add(cssClasses.card);
    card.dataset.colour = colour;
    card.textContent = "?";
    gameContainer.appendChild(card);
  }
}

function handleCardClick(event) {
  const card = event.target;

  if (
    !card.classList.contains(cssClasses.card) ||
    card.classList.contains(cssClasses.matched)
  ) {
    return;
  }

  card.textContent = card.dataset.colour;
  card.style.backgroundColor = card.dataset.colour;
  selectedCards.push(card);

  if (selectedCards.length === 2) {
    setTimeout(checkMatch, 333);
  }
}

/**
 * Change the order of items in the given array.
 *
 * The Fisher-Yates shuffle algorithm is used to reorder the given array.
 *
 * @param values An array.
 * @returns Shuffled array.
 */
function shuffle(values) {
  for (let i = values.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [values[i], values[j]] = [values[j], values[i]];
  }

  return values;
}

function startGame() {
  let timeLeft = gameTime;
  startButton.disabled = true;
  score = 0;
  scoreElement.textContent = score;
  startGameTimer(timeLeft);
  cards = shuffle(colours.concat(colours));
  selectedCards = [];
  gameContainer.innerHTML = "";
  generateCards();
  gameContainer.addEventListener("click", handleCardClick);
}

function startGameTimer(timeLeft) {
  timerElement.textContent = timeLeft;
  gameInterval = setInterval(() => {
    timeLeft--;
    timerElement.textContent = timeLeft;

    if (timeLeft === 0) {
      clearInterval(gameInterval);
      let timeLeft = gameTime;
      alert("Game over!");
      enableStartButton();
    }
  }, 1000);
}
