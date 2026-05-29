
let humanScore =0;
let computerScore =0;

function getComputerChoice(){
    num=Math.floor(Math.random()*3)
    if (num==0) {
        return "rock"
    }
    else if (num==1){
        return "paper"
    }
    else if (num==2){
        return "scissors"
    }
}


function getHumanChoice(){
   let choice= prompt("Enter your choice");
   return choice.toLowerCase();
}




function playRound(humanChoice, computerChoice) {

  switch (humanChoice) {
    case "rock":
        if (computerChoice=="paper"){
            ++computerScore;
            return console.log("You lose");
            }
        else if (computerChoice=="scissors"){
            ++humanScore;
            return console.log("You win");
            }
        else 
            return  console.log("Draw");
        break;

    case "paper":
        if (computerChoice=="scissors"){
            ++computerScore;
            return console.log("You lose");
            }
        else if (computerChoice=="rock"){
            ++humanScore;
            return console.log("You win");
        }
        else 
            return  console.log("Draw");
        break;

    case "scissors":
        if (computerChoice=="rock"){
            ++computerScore;
            return console.log("You lose");
            }
        else if (computerChoice=="paper"){
            ++humanScore;
            return console.log("You win");
            }
        else 
            return  console.log("Draw");
        break;
  }


}

function playGame(){
    for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`)
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    console.log(`Your choice is ${humanSelection}`);
    console.log(`Computer choice is ${computerSelection}`);
    playRound(humanSelection, computerSelection);
    console.log(humanScore);
    console.log(computerScore);
    }
    
    if(humanScore > computerScore)
        console.log(`You win the game with score ${humanScore}`);

    else if (humanScore < computerScore)
        console.log(`Computer win the game with score ${computerScore}`);

    else
        console.log("Draw!!!");
}