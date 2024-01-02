const grid = document.getElementById("container");
let isDrawing = false;

createGrid(20);

let color = "black";
let erase = false;

document.getElementById("colorButton").addEventListener("input", function(event) {

    color = event.target.value;
    document.getElementById("colorButton").style.backgroundColor = color;
});

document.getElementById("eraserButton").addEventListener("click", () => {

    erase = true;
});

document.getElementById("drawButton").addEventListener("click", () => {

    erase = false;
});

function createGrid(size) {

    const spaceWithoutGap = 800 - (5 * (size - 1)); 

    for(let x = 0; x < size * size; x++) {

        let toAdd = document.createElement("div");
        toAdd.classList.add("gridElement");
        toAdd.style.height = (spaceWithoutGap / size) + "px"; 
        toAdd.style.width = (spaceWithoutGap / size) + "px"; 

        toAdd.addEventListener('mouseover', () => {

            if(isDrawing)
                if(erase) 
                    toAdd.style.backgroundColor = "white";
                else
                    toAdd.style.backgroundColor = color;
        });    

        grid.appendChild(toAdd);
    }
}

document.body.addEventListener('mousedown', () => {

    isDrawing = true;
}); 

document.body.addEventListener('mouseup', () => {

    isDrawing = false;
}); 

document.getElementById("clearButton").addEventListener('click', () => {

    let elements = document.getElementsByClassName("gridElement");

    Array.from(elements).forEach((element) => {

        element.style.backgroundColor = "white";
    });
}); 