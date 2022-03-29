function makeGrid(){
    for(let i=0; i<16; i++){
        let row = document.createElement('div'); // creates i amount of row
        row.className = "row"; // div given class name row
        for(let j=0; j<16; j++){
            let box = document.createElement('div'); //creates j amount of boxes
            box.className = "box"; // div given class name box
            row.appendChild(box); //adds j boxes to each row 
        }
        document.getElementById('boxParent').appendChild(row); //puts all divs inside boxParent div
    } 
}
// window.onload = makeGrid; when page load run makeGrid

window.onload = function(){
    makeGrid();
    let box = document.getElementsByClassName("box");
    box[0].addEventListener("mouseover", func, false);
    box[0].addEventListener("mouseout", func1, false);
    function func(){
        let box = document.getElementsByClassName("box");
        for(let i = 0; i < box.length; i++){
            box[i].setAttribute("style", "background-color:blue;");
        }
    }
    function func1(){
        let box = document.getElementsByClassName("box");
        for(let i = 0; i < box.length; i++){
            box[i].setAttribute("style", "background-color:red;");
        }
    }
}
