const boxParent = document.querySelector('#boxParent');
const button = document.querySelector('#buttons');
const resetButton = document.createElement('button');
const resizeGrid = document. createElement('button');

resetButton.textContent = "Reset Grid";
resetButton.addEventListener("click", resetGrid);
button.appendChild(resetButton);

resizeGrid.textContent = "Resize Grid";
resizeGrid.addEventListener('click', gridSize);
button.appendChild(resizeGrid);

/* function makeGrid(col, row){
    for(let i=0; i<36; i++){
        let row = document.createElement('div'); // creates i amount of row
        row.className = "row"; // div given class name row
        for(let j=0; j<36; j++){
            let box = document.createElement('div'); //creates j amount of boxes
            box.className = "box"; // div given class name box
            row.appendChild(box); //adds j boxes to each row 
        }
        document.getElementById('boxParent').appendChild(row); //puts all divs inside boxParent div
    } 
} */


function checkSize(){
    userInput = prompt("how many rows and columns do you want your grid to have? (Must be greater than 0 but less than 100)");
    if(userInput > 100 || userInput < 1 || userInput === null || userInput === '' || isNaN(userInput)){
        return 16;
    } else {
        return userInput;
    }
}

function nameTitle(){
    const title = document.querySelector('h1');
    title.textContent = "Etch-A-Sketch";
}

function makeGrid(rowscolumns){
    for(let i = 0; i<(rowscolumns*rowscolumns); i++){
        const row = document.createElement('div');
        row.style.border = '1px solid black';
        boxParent.style.gridTemplateColumns = `repeat(${rowscolumns}, 1fr)`;
        boxParent.style.gridTemplateRows = `repeat(${rowscolumns}, 1fr)`;
        boxParent.appendChild(row).classList.add('box');
    }
}
function deleteBox(){
    let node = document.getElementById("boxParent")
    node.querySelectorAll('*').forEach(n => n.remove());
}

function resetGrid(){
    let box = document.getElementsByClassName("box");
    Array.from(box).forEach(reset => reset.style.background = 'white');
}

function gridSize(){
    resetGrid();
    deleteBox();
    let input = checkSize();
    makeGrid(input);
    colorBlack();
}
function colorBlack(){
    let box = document.getElementsByClassName("box"); 
    Array.from(box).forEach(etch => etch.addEventListener('mouseover', function(){ //changes variable into array and turns mouseover boxes background color black
        etch.style.background = 'black';
    }));
}


window.onload = function(){
    nameTitle();
    let input = checkSize();
    console.log(input);
    makeGrid(input);
    colorBlack();
}


/* window.onload = function(){ 
    makeGrid();// when page load run makeGrid
    let box = document.getElementsByClassName("box"); 
    Array.from(box).forEach(etch => etch.addEventListener('mouseover', function(){ //changes variable into array and turns mouseover boxes background color black
        etch.style.background = 'black';
    }));
}

const resetButton = document.createElement('button');
resetButton.textContent = "Reset Grid";
resetButton.setAttribute('onclick', "alert('hello!');");
container.appendChild(resetButton); */

