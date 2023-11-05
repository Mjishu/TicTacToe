const GameBoard = (function(){
    const gameBoardArr = ["","","","","","","","",""];

    return {gameBoardArr};
})();

function player(name){
    //* need to add player O and player X
}

const squares = document.getElementById("squares")

// for(i=0; i<9; i++){
//     square.addEventListener("Click", () =>{
//         console.log(i)
//     })
// }

//* Need to acesss each id seprately and update check if it was clicked or not and then i can relate to that to whicch player was selected maybe with a ? true:false thing again and need to fix css
for(let i=0; i<GameBoard.gameBoardArr.length; i++){
    let square = document.createElement("div")
    square.setAttribute("class", "square");
    square.setAttribute("id", ''+i)

    square.addEventListener("click", () => {
        square.innerHTML = "X";
        
        console.log(i)
    })

    squares.appendChild(square)

}