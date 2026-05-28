function getComputerChoice(){
    num=Math.floor(Math.random()*3)
    console.log(num)
    if (num==0) {
        return "Rock"
    }
    else if (num==1){
        return "Paper"
    }
    else if (num==2){
        return "Scissors"
    }
}