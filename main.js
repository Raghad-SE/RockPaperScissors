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
    return "It's a tie!";
  } else if (
    playerValue - 1 === computerValue ||
    (playerValue === ROCK_VALUE && computerValue === SCISSORS_VALUE)
  ) {
    return "Congrats! You Win!";
  } else {
    return "Computer Win!";
  }
}

document.getElementById("form").onchange = function () {
  const playerChoice = document.querySelector(
    "input[type=radio]:checked"
  ).value;
  // Convert the map to an array of key-value pairs.
  const keyValuePairs = Array.from(choicesMap);

  // Find the first element in the array that matches the player's choice.
  const keyValuePair = keyValuePairs.find((pair) => pair[1] === playerChoice);

  const playerValue = keyValuePair[0];

  const computerValue = getRandomRockPaperScissorsValue();
  const computerChoice = choicesMap.get(computerValue);

  const winner = getRockPaperScissorsWinner(playerValue, computerValue);

  const message = document.getElementById("result");
  message.innerHTML = `
    ${winner} <br/>
    Computer Choice: ${computerChoice}<br/>
    Your Choice: ${playerChoice[0].toUpperCase() + playerChoice.slice(1)}
  `;
};
