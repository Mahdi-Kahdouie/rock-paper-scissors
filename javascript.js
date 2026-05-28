
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
    console.log(humanChoice)
    console.log(computerChoice)
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



