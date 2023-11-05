

const GameBoard = (function(){
    const gameBoardArr = ["","","","","","","","",""];

    const playerFactory = (name,mark,ai,turn) =>{
        return{name,mark,ai,turn}
    }

    const winningCombos = [ //? If winning doesn't work in certain directions its probably this
        [0,1,2],
        [0,4,8],
        [6,4,2],
        [1,4,7],
        [3,4,5],
        [6,7,8],
        [2,5,8],
        [0,3,6]

    ]

    const player1 = playerFactory("player1", 'O', false, true)
    const player2 = playerFactory("player2", 'X', false, false)

    var currentPlayer = player1

    const updateGameBoard = (index)=>{  
        
        let square = document.getElementById("square_" + index)
        if(gameBoardArr[index] === ""){
            square.innerHTML = currentPlayer.mark;
            gameBoardArr[index] = currentPlayer.mark;

            currentPlayer.turn = false;
            if(currentPlayer=== player1){
                currentPlayer = player2;
            }
            else if(currentPlayer === player2){
                currentPlayer = player1;
            }
            else{
                currentPlayer = player1
            }}


    }
    
    const checkWin = () => {
    for (var combo of winningCombos){
        var [a,b,c] = combo;
        if (
            gameBoardArr[a] !== "" &&
            gameBoardArr[a] === gameBoardArr[b] &&
            gameBoardArr[b] === gameBoardArr[c]
        ){
            return gameBoardArr[a];
            }
        };
        return null;
    }
    return {gameBoardArr,
            updateGameBoard,
            checkWin};
})();


const squares = document.getElementById("squares")



for(let i=0; i<GameBoard.gameBoardArr.length; i++){
    let square = document.createElement("div")
    square.setAttribute("class", "square");
    square.setAttribute("id", 'square_'+i)

    square.addEventListener("click", () => {
        GameBoard.updateGameBoard(i)
        
        console.log(i)
        console.log(GameBoard.gameBoardArr)
    })

    squares.appendChild(square)

    square.addEventListener("click", () => {
        GameBoard.updateGameBoard(i);
        const winner = GameBoard.checkWin();

        if (winner){
            alert("Player " + winner + " wins")
            //add logic to clear board
            clearBoard()
            

        }
        else if (!GameBoard.gameBoardArr.includes("")){
            //add logic to clear board
            alert("its a tie")
            clearBoard()
        }
    })

}



// TOdo  adding announcement, then it should be done besides html

const clearBoard = () =>{
    for(i=0; i< GameBoard.gameBoardArr.length; i++){
        let square = document.getElementById("square_" + i)
        square.innerHTML = ""
        GameBoard.gameBoardArr[i] = ''
    }
}