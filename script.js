const buttons = document.querySelectorAll(".board button");
const reStartButton = document.querySelector(".reStartButton");
const winnerText = document.querySelector(".winner")

const userX = "X";
const userO = "O";
let currentPlayer = userX;


const horisontalWin = [
[0, 1, 2], 
[3, 4, 5], 
[6, 7, 8],];

const verticalWin = [
[0, 3, 6], 
[1, 4, 7], 
[2, 5, 8],];

const diagonalWin = [
[0, 4, 8], 
[2, 4, 6]
];

const winningCombinations = [horisontalWin, verticalWin, diagonalWin];


const startGame = () => {
  
}

const endGame = () => {

}

const playingGame = () => {
    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            if(event.currentTarget.textContent === ""){
                event.currentTarget.textContent = currentPlayer;
                winningGame();
                currentPlayer = currentPlayer === userX ? userO : userX;
            }
        })
    })
}

const winningGame = () => {

    for(let i = 0; i < winningCombinations.length; i++){
        for(let j = 0; j < winningCombinations[i].length; j++){
            const [indexA, indexB, indexC] = winningCombinations[i][j]
            if(buttons[indexA].textContent && 
                buttons[indexA].textContent === buttons[indexB].textContent && 
                buttons[indexA].textContent === buttons[indexC].textContent){

            winnerText.textContent = `Player ${buttons[indexA].textContent} is the winner`;

                }
        }
    }
}


playingGame()