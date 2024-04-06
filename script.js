function compRandom() {
    let result;
    for (let x = 0; x < 3; x++) {
      result = Math.floor(Math.random() * 3) + 1;
    }
    return result;
  }
  
  function compChoice() {
    let result = compRandom();
    if (result === 1) {
      return 'rock';
    } else if (result === 2) {
      return 'paper';
    } else {
      return 'scissors';
    }
  }
  
  function playerChoice() {
    let choice = prompt('Make your choice!').trim();
    if (choice === 'rock' || choice === 'paper' || choice === 'scissors') {
      return choice;
    } else {
      return 'Invalid Weapon!';
    }
  }
  
  function round() {
    let player = playerChoice();
    console.log('Player choice:', player);
  
    let computer = compChoice();
    console.log('Computer choice:', computer);
  
    if (player === computer) {
      return 'Tie';
    } else if ((player === 'rock' && computer === 'scissors') || (player === 'paper' && computer === 'rock') || (player === 'scissors' && computer === 'paper')) {
      return 'You Win!';
    } else {
      return 'You Lose!';
    }
  }
  
  console.log(round());