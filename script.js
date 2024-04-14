document.addEventListener('DOMContentLoaded', function() {

  document.querySelectorAll("button").forEach(function(button) {
    button.addEventListener("click", function() {
      startGame(button.id); // Pass the ID of the clicked button to startGame function
    });
  });
});

function startGame(playerChoice) {
  const computerChoice = compChoice();

  console.log('Player choice:', playerChoice);
  console.log('Computer choice:', computerChoice);

  const result = determineWinner(playerChoice, computerChoice);
  console.log(result);
}

function compChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
}

function determineWinner(player, computer) {
  if (player === computer) {
    return 'Tie';
  } else if ((player === 'rock' && computer === 'scissors') || 
             (player === 'paper' && computer === 'rock') || 
             (player === 'scissors' && computer === 'paper')) {
    return 'You Win!';
  } else {
    return 'You Lose!';
  }
}
