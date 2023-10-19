const ROCK_VALUE = 0;
const PAPER_VALUE = 1;
const SCISSORS_VALUE = 2;

const choicesMap = new Map([
  [ROCK_VALUE, "Rock"],
  [PAPER_VALUE, "Paper"],
  [SCISSORS_VALUE, "Scissors"],
]);

//Generate Computer Choice
function getRandomRockPaperScissorsValue() {
  const randomIndex = Math.floor(Math.random() * 3);
  return [ROCK_VALUE, PAPER_VALUE, SCISSORS_VALUE][randomIndex];
}

//Define the winner
function getRockPaperScissorsWinner(playerValue, computerValue) {
  if (playerValue === computerValue) {
    return "tie";
  } else if (
    playerValue - 1 === computerValue ||
    (playerValue === ROCK_VALUE && computerValue === SCISSORS_VALUE)
  ) {
    return "player";
  } else {
    return "computer";
  }
}

document.getElementById("form").onchange = function () {
  const playerChoice = document.querySelector(
    "input[type=radio]:checked"
  ).value;
  const playerValue = choicesMap.values
    .toLowerCase()
    .get(playerChoice)
    .toLowerCase();

  const computerValue = getRandomRockPaperScissorsValue();
  const computerChoice = choicesMap.get(computerValue);

  const winner = getRockPaperScissorsWinner(playerValue, computerValue);

  const message = document.getElementById("result");
  message.innerHTML = `
    ${winner[0].toUpperCase() + winner.slice(1)} Won!!<br/>
    Computer Choice: ${computerChoice}<br/>
    Your Choice: ${playerChoice[0].toUpperCase() + playerChoice.slice(1)}
  `;
};
