const boxParent = document.querySelector('#boxParent');
const button = document.querySelector('#buttons');


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

function nameTitle(){
    const title = document.querySelector('h1');
    title.textContent = "Etch-A-Sketch";
}

function makeGrid(col, row){
    for(let i = 0; i<(col*row); i++){
        const row = document.createElement('div');
        row.style.border = '1px solid black';
        boxParent.style.gridTemplateColumns = `repeat(${col}, 1fr)`;
        boxParent.style.gridTemplateRows = `repeat(${row}, 1fr)`;
        boxParent.appendChild(row).classList.add('box');
    }
}

window.onload = function(){
    nameTitle();
    makeGrid(16,16);
    let box = document.getElementsByClassName("box"); 
    Array.from(box).forEach(etch => etch.addEventListener('mouseover', function(){ //changes variable into array and turns mouseover boxes background color black
        etch.style.background = 'black';
    }));
}

const resetButton = document.createElement('button');
resetButton.textContent = "Reset Grid";
button.appendChild(resetButton);
resetButton.addEventListener("click", resetGrid);

function resetGrid(){
    let box = document.getElementsByClassName("box");
    Array.from(box).forEach(reset => reset.style.background = 'white');
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

