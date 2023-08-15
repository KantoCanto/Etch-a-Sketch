//initial color is set to black
let color = "black";

//this variable will be responsible for toggling on and off the colouring event
let click = true;


//the populate baord takes in the size argument that indicates the dimensions of the board
function populateBoard(size){
  //set board as the querySelector for the .board div
  let board = document.querySelector(".board");

  //reset the previously set squares so we can create a new board
  let squares = board.querySelectorAll("div");
  squares.forEach((div) => div.remove());

  board.style.gridTemplateColumns = `repeat(${size} , 1fr)`;
  board.style.gridTemplateRows = `repeat(${size} , 1fr)`;

  //set the area of the board by multiplying the input size
  let area = size * size;
  for (let i = 0; i < area; i++) {
    //create the individual square/div
    let square = document.createElement("div");

    //listens to mouseover events and turns the divs that are hovered to black tiles
    square.addEventListener("mouseover", colorSquare);
    //give the created square the color blue
    square.style.backgroundColor = "white";
    //append the created square to the board element
    board.insertAdjacentElement("beforeend", square);
  }
}

populateBoard(16);

//will take in the input for the size of the board, which will be passed to the populateBoard function
function changeSize(input){
    if(input >=2 && input <=100) {
        populateBoard(input);
    } else {
        console.log("Out of Range")
    }
}

function colorSquare(){  

   //if click is true, then we can sketch on the board. the value changes by clicking
   if(click)
    {
     if (color === "random") {
        //creates a random color
       this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`;
     } else {
       //this reffers to whatever square was created in the populateBoard function
       this.style.backgroundColor = color;
     }
    }
}

//takes in the value assossiated with the button press that will be assigned to the current color
function changeColor(choice){
    color = choice;
}

//called when the reset button is pressed, it selects all the board divs and changes theis color to white, reseting the board
function resetBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.style.backgroundColor="white");
}

//select the entire page body and listens to clicks. if the user click, it fires off a function that changes click value to whatever it isn't (true or false)
document.querySelector("body").addEventListener("click", (e) =>{
    if(e.target.tagName != "BUTTON"){
        click = !click;

        if (click) {
          document.querySelector(".mode").textContent = "Mode: Coloring";
        } else {
          document.querySelector(".mode").textContent = "Mode: Not Coloring";
        }
    }
})