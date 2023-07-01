function getComputerChoice() {
    let min = 1;
    let max = 3;
    let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
    
    if (randomNumber === 1) {
      return 'rock';
    } else if (randomNumber === 2) {
      return 'paper';
    } else {
      return 'scissor';
    }
  }
  
  function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    
    if (playerSelection === computerSelection) {
      return 'Tie!';
    } else if (playerSelection === 'rock') {
      if (computerSelection === 'paper') {
        return 'lose';
      } else if (computerSelection === 'scissor') {
        return 'win';
      } else {
        return;
      }
    } else if (playerSelection === 'paper') {
      if (computerSelection === 'scissor') {
        return 'lose';
      } else if (computerSelection === 'rock') {
        return 'win';
      } else {
        return;
      }
    } else if (playerSelection === 'scissor') {
      if (computerSelection === 'rock') {
        return 'lose';
      } else if (computerSelection === 'paper') {
        return 'win';
      } else {
        return;
      }
    } else {
      return 'invalid input';
    }
  }
  
  let round = 0;
  let computerWins = 0;
  let playerWins = 0;
  const result = document.querySelector('.result');
  const rock = document.querySelector('.rock');
  const paper = document.querySelector('.paper');
  const scissor = document.querySelector('.scissor');
  
  function updateResult() {
    if (round === 5) {
      if (computerWins === playerWins) {
        result.textContent = 'It\'s a tie!';
      } else if (computerWins > playerWins) {
        result.textContent = 'You lose!';
      } else {
        result.textContent = 'You win!';
      }
      round = 0;
      computerWins = 0;
      playerWins = 0;
    }
  }
  
  rock.addEventListener('click', function() {
    if (playRound('rock', getComputerChoice()) === 'win') {
      playerWins++;
    } else {
      computerWins++;
    }
    round++;
    updateResult();
  });
  
  paper.addEventListener('click', function() {
    if (playRound('paper', getComputerChoice()) === 'win') {
      playerWins++;
    } else {
      computerWins++;
    }
    round++;
    updateResult();
  });
  
  scissor.addEventListener('click', function() {
    if (playRound('scissor', getComputerChoice()) === 'win') {
      playerWins++;
    } else {
      computerWins++;
    }
    round++;
    updateResult();
  });
  