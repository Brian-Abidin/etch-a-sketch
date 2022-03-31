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

function makeGrid(size){
    for(let i = 0; i<(size*size); i++){
        const row = document.createElement('div');
        boxParent.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
        boxParent.style.gridTemplateRows = `repeat(${size}, 1fr)`;
        boxParent.appendChild(row).classList.add('box');
    }
}
function deleteGrid(){ 
    let node = document.getElementById("boxParent")
    node.querySelectorAll('*').forEach(n => n.remove()); 
}

function gridSize(){ 
    resetGrid();
    deleteGrid();
    let input = checkSize();
    makeGrid(input);
    colorBlack();
}

function resetGrid(){ 
    let box = document.getElementsByClassName("box");
    Array.from(box).forEach(reset => reset.style.background = 'white');
}

function colorBlack(){
    let box = document.getElementsByClassName("box"); 
    Array.from(box).forEach(etch => etch.addEventListener('mouseover', function(){ 
        etch.style.background = 'black';
    }));
}

function colorRGB(){
    let box = document.getElementsByClassName("box");
    Array.from(box).forEach(etch => etch.addEventListener('mouseover', function(){
        let R = Math.floor(Math.random() * 255);
        let G = Math.floor(Math.random() * 255);
        let B = Math.floor(Math.random() * 255);
        etch.style.background = `rgb(${R}, ${G}, ${B}`;
    }));
}

function colorGrey(){
    let box = document.getElementsByClassName("box"); 
    Array.from(box).forEach(etch => etch.addEventListener('mouseover', function(){ 
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