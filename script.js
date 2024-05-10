let gridSize = 600;
let opacityMultiplier = 1;

const container = document.querySelector(".container");
const options = document.querySelector(".options");
const gridSizeInput = document.querySelector("#grid-size");
const containerSizeInput = document.querySelector("#container-size");
const multicolorSquares = document.querySelector("#rgb");

function setGridSize(gridSize) {
    container.style.width = `${gridSize}px`;
    container.style.height = `${gridSize}px`;
}

function createGrid(size) {
    // container is a reference to a DOM node
    for(let i = 0; i < size**2; i++) {
        const square = document.createElement("div");
        const width = gridSize / size;
        square.style.width = `${width}px`;
        square.style.height = `${width}px`;

        square.addEventListener("mouseenter", e => {
            if(multicolorSquares.checked) {
                let letters = "0123456789ABCDEF";
                let color = "#";
                for (let i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                e.target.style.backgroundColor = color;
            } else {
                e.target.style.backgroundColor = "rgb(11, 44, 79)";
            }
        });

        container.append(square)
    }
}

function clearGrid() {
    container.childNodes.forEach(
        n => n.style.backgroundColor = container.style.backgroundColor
    );
    console.log(`Num Divs in Grid: ${container.childNodes.length}`);
}

function changeGridSize(size) {
    container.innerHTML = "";
    createGrid(size);
}

setGridSize(gridSize);
createGrid(50);

options.addEventListener("click", e => {
    switch(e.target.id) {
        case "clear-grid":
            clearGrid();
            break;
        case "change-grid-size":
            if(gridSizeInput.value) {
                // make sure that the input value is between 1 and 100
                (gridSizeInput.value > 100) ? changeGridSize(100) : 
                (gridSizeInput.value < 1)   ? changeGridSize(1) : 
                                      changeGridSize(gridSizeInput.value);
            }
            break;
        case "change-container-size":
            if(containerSizeInput.value) {
                if(containerSizeInput.value > 1000) {
                    gridSize = 1000;
                    setGridSize(gridSize);
                    changeGridSize(50);
                } else if(containerSizeInput.value < 1) {
                    gridSize = 1;
                    setGridSize(gridSize);
                    changeGridSize(1);
                } else {
                    gridSize = containerSizeInput.value;
                    setGridSize(gridSize);
                    changeGridSize(50);
                }
            }
            break;
    }
});