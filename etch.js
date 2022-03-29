function makeGrid(){
    for(let i=0; i<20; i++){
        let row = document.createElement('div'); // creates i amount of row
        row.className = "row"; // div given class name row
        for(let j=0; j<20; j++){
            let box = document.createElement('div'); //creates j amount of boxes
            box.className = "box"; // div given class name box
            row.appendChild(box); //adds j boxes to each row 
        }
        document.getElementById('boxParent').appendChild(row); //puts all divs inside boxParent div
    } 
}
window.onload = function(){ 
    makeGrid();// when page load run makeGrid
    let box = document.getElementsByClassName("box"); 
    Array.from(box).forEach(etch => etch.addEventListener('mouseover', function(){ //changes variable into array and turns mouseover boxes background color black
        etch.style.background = 'black';
    }));
}
const resetButton = document.createElement('button');
resetButton.textContent = "Reset Grid";
resetButton.setAttribute('onclick', "alert('hello!');");
container.appendChild(resetButton);
