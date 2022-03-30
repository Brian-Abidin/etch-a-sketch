const boxParent = document.querySelector('#boxParent');
const button = document.querySelector('#buttons');
const resetButton = document.createElement('button');
const resizeGrid = document.createElement('button');
const Black = document.createElement('button');
const RGB = document.createElement('button');
const Grey = document.createElement('button');

resetButton.textContent = "Reset Grid";
resetButton.addEventListener("click", resetGrid);
button.appendChild(resetButton);

resizeGrid.textContent = "Resize Grid";
resizeGrid.addEventListener('click', gridSize);
button.appendChild(resizeGrid);

Black.textContent = "Color: Black";
Black.addEventListener("click", colorBlack);
button.appendChild(Black);

RGB.textContent = "Color: Random RGB";
RGB.addEventListener("click", colorRGB);
button.appendChild(RGB);

Grey.textContent = "Color: Grey Monochrome";
Grey.addEventListener("click", colorGrey);
button.appendChild(Grey);

function nameTitle(){
    const title = document.querySelector('h1');
    title.textContent = "Etch-A-Sketch";
}

function checkSize(){
    userInput = prompt("how many rows and columns do you want your grid to have? (Must be greater than 0 but less than 100)");
    if(userInput > 100 || userInput < 1 || userInput === null || userInput === '' || isNaN(userInput)){
        return 16;
    } else {
        return userInput;
    }
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
function deleteGrid(){ // deletes all nodes in boxParent
    let node = document.getElementById("boxParent")
    node.querySelectorAll('*').forEach(n => n.remove()); //for all node in boxParent delete them
}

function resetGrid(){ // all div named box background is reset to white 
    let box = document.getElementsByClassName("box");
    Array.from(box).forEach(reset => reset.style.background = 'white');
}

function gridSize(){ // runs different functions to clear & reset the gridSize based on user input
    resetGrid();
    deleteGrid();
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

function colorRGB(){
    let box = document.getElementsByClassName("box"); 
    Array.from(box).forEach(etch => etch.addEventListener('mouseover', function(){ //changes variable into array and turns mouseover boxes background color black
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        etch.style.background = `rgb(${R}, ${G}, ${B}`;
    }));
}

function colorGrey(){
    let box = document.getElementsByClassName("box"); 
    Array.from(box).forEach(etch => etch.addEventListener('mouseover', function(){ //changes variable into array and turns mouseover boxes background color black
        let grey = Math.floor(Math.random() * 255);
        etch.style.background = `rgb(${grey}, ${grey}, ${grey}`;
    }));
}

window.onload = function(){
    nameTitle();
    let input = checkSize();
    makeGrid(input);
    colorBlack();
}