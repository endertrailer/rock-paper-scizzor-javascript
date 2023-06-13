
function getComputerChoice() {
let min = 1;
let max = 3;
let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
if (randomNumber === 1){
    return 'rock';
}
else if(randomNumber === 2){
    return  'paper';
}
else{
    return 'scizzor';
}
}
const computerSelection = getComputerChoice();
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase()
    if (playerSelection === computerSelection){
        return 'Tie!';
    }
    else if (playerSelection === "rock"){
        if (computerSelection === 'paper'){
            return 'lose';
        }
        else if (computerSelection === 'scizzor'){
            return 'win';
        }
    }
    else if (playerSelection === "paper"){
        if (computerSelection === 'scizzor'){
            return 'lose';
        }
        else if (computerSelection === 'rock'){
            return 'win';
        }
    }
    else if (playerSelection === "scizzor"){
        if (computerSelection ==='rock'){
            return 'lose';
        }
        else if (computerSelection === 'paper'){
            return 'win';
        }
    }
    else {
        return 'invalid input';
    }
  }
   function game(){
    let computerWins = 0;
    let playerWins = 0;
    for(let i = 0; i < 5; i++){
        let playerSelection = prompt('enter choice: ');
        let round = playRound(playerSelection, computerSelection)
        if (round === 'win'){
            playerWins = playerWins + 1;
        }
        else if (round === 'lose'){
            computerWins = computerWins + 1;
        }
        else{
            return 'invalid input';
        }
    }
    if (computerWins === playerWins){
        return 'Its a tie!';
    }
    else if (computerWins >= playerWins){
        return 'you lose';
    }
    else{
        return 'you win';
    }
   }
  
 game()
  