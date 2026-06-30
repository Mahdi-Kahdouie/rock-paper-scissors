
let humanScore =0;
let computerScore =0;
let round=1;

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


// function getHumanChoice(){
//    let choice= prompt("Enter your choice");
//    return choice.toLowerCase();
// }




function playRound(humanChoice, computerChoice) {

  switch (humanChoice) {
    case "rock":
        if (computerChoice=="paper"){
            ++computerScore;
            return displayResult("You lose");
            // return console.log("You lose");
            }
        else if (computerChoice=="scissors"){
            ++humanScore;
            return displayResult("You win")
            // return console.log("You win");
            }
        else 
            return displayResult("Draw")
            // return  console.log("Draw");
        break;

    case "paper":
        if (computerChoice=="scissors"){
            ++computerScore;
            return displayResult("You lose");
            // return console.log("You lose");
            }
        else if (computerChoice=="rock"){
            ++humanScore;
            return displayResult("You win")
            // return console.log("You win");
        }
        else 
            return displayResult("Draw")
            // return  console.log("Draw");
        break;

    case "scissors":
        if (computerChoice=="rock"){
            ++computerScore;
            return displayResult("You lose");
            // return console.log("You lose");
            }
        else if (computerChoice=="paper"){
            ++humanScore;
            return displayResult("You win")
            // return console.log("You win");
            }
        else 
            return displayResult("Draw")
            // return  console.log("Draw");
        break;
  }


}

function playGame(){

        // console.log(`Round ${i}`)
        // displayResult(`Round ${i}`)
        // const humanSelection = getHumanChoice();

        let humanSelection
        let computerSelection 
        let rockBtn = document.querySelector('#rock_btn');
        rockBtn.addEventListener('click',(event) => {
            calculateResult('rock')
        });
        let paperBtn = document.querySelector('#paper_btn');
        paperBtn.addEventListener('click',(event) => {
            calculateResult('paper')
        });
        let scissorsBtn = document.querySelector('#scissors_btn');
        scissorsBtn.addEventListener('click',(event) => {
            calculateResult('scissors')
        });
    

function calculateResult(choice){
        if(round<=5){
            displayResult(`Round ${round} --->  Your score is ${humanScore} ,and computer score is ${computerScore}`)
            humanSelection = choice;
            computerSelection = getComputerChoice();
            displayResult(`Your choice is ${humanSelection}`)
            displayResult(`Computer choice is ${computerSelection}`)
            // console.log(`Your choice is ${humanSelection}`);
            // console.log(`Computer choice is ${computerSelection}`);
            ++round;
            playRound(humanSelection, computerSelection);
            // displayResult(`Your score is ${humanScore} ,and computer score is ${computerScore}`)
            if(round >5)
                calculateWinner()
        }  

}
    

    function calculateWinner(){
    if(humanScore > computerScore)
        displayResult(`You win the game with score ${humanScore}`)
        // console.log(`You win the game with score ${humanScore}`);

    else if (humanScore < computerScore)
        displayResult(`Computer win the game with score ${computerScore}`);
        // console.log(`Computer win the game with score ${computerScore}`);

    else
        displayResult("Draw!!!")
        // console.log("Draw!!!");
    displayResult("Please refresh page for play again")
    }
    
}



function displayResult(message) {
    const resultsContainer = document.getElementById("printMassage");
    const messageLine = document.createElement('p');
    
    
    messageLine.innerText = message;
    
   
    messageLine.style.padding = '5px';
    messageLine.style.borderBottom = '1px dashed #000000';
    
    
    resultsContainer.appendChild(messageLine);
}






   





