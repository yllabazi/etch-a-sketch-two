let containerDiv = document.querySelector(".grid-container");
let btnNewGrid = document.querySelector("#newGrid");
let btnClearGrid = document.querySelector("#clearGrid");
let btnRandomColor = document.querySelector("#randomColors");
let btnBlackColor = document.querySelector("#black");

drawSqr(32);

btnRandomColor.addEventListener('click', function(e){
    let grids = document.querySelectorAll(".grid-item");
    
    grids.forEach((grid) =>{
        grid.addEventListener('mouseover', function(e) {
            grid.style.backgroundColor = '#'+(0x1000000+(Math.random())*0xffffff).toString(16).substr(1,6);
        })
    });
})

btnBlackColor.addEventListener('click', function(e){
    let grids = document.querySelectorAll(".grid-item");
    
    grids.forEach((grid) =>{
        grid.addEventListener('mouseover', function(e) {
            grid.style.backgroundColor = "black";
        })
    });
})

btnNewGrid.addEventListener('click', function(){
    newGrid();
});

btnClearGrid.addEventListener('click', function(){
    clearGrid();
});

function newGrid() {
    newNumber = prompt("Enter number of squares to drarw...");
    removeOldGrid()
    drawSqr(newNumber);
};

function removeOldGrid(){
    document.querySelectorAll(".grid-item").forEach((grid) => {
        grid.parentNode.removeChild(grid);
    })
}

function clearGrid(){
    let grids = document.querySelectorAll(".grid-item");
    
    grids.forEach((grid) =>{
            grid.style.backgroundColor = "white";
    });
}

function drawSqr(grid){
    for (let i = 0; i < (grid*grid); i++) {
        let divs = document.createElement("div");
        divs.classList.add("grid-item");
        containerDiv.appendChild(divs);
    }
    
    containerDiv.style.gridTemplateColumns = "repeat(" + grid + ", auto)";
    
    let sqrWidth = 600/grid;
    let sqrHeight = 600/grid;
    
    let squares = document.querySelector(".grid-item");
    
    squares.style.width = sqrWidth;
    squares.style.height = sqrHeight;
    
    let grids = document.querySelectorAll(".grid-item");
    
    grids.forEach((grid) =>{
        grid.addEventListener('mouseover', function(e) {
            grid.style.backgroundColor = "black";
        })
    });
}