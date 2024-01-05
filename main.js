let color = "black";

let popup = document.querySelector("#popup");
popup.addEventListener("click", function (){
     let size = getInput();
     createBoard(size);
});


function createBoard(size){
    let board = document.querySelector(".board");

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    let numSquare = size * size;

    for(let i= 0; i < numSquare; i++){
        let square = document.createElement("div");
        square.addEventListener("mouseover", changeColor);
        board.insertAdjacentElement("beforeend", square);
    }
}
function getInput(){
    let input = prompt("Enter Size of the of board");
    let message = document.querySelector("#message");

    if(input == ""){
         message.innerHTML = "Provide a number between 1 and 100";
    }else if(input < 1 || input > 100){
        message.innerHTML = "Provide a number between 1 and 100";
    }else{
        message.innerHTML = "Amazing";
        return input;
    }

}

function changeColor(){
    if(color == "random"){
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
    }
    else{
        this.style.backgroundColor = "black";
    }

}

function setColor(choice){
     color = choice;
}
function reset(){
    let divs = document.querySelectorAll("div");
    divs.forEach((div) => div.style.backgroundColor = "white");
}
