let gridSize = 400;

const container = document.querySelector(".container");
const button = document.querySelector("button");

container.style.width = `${gridSize}px`;
container.style.height = `${gridSize}px`;

function createGrid(container, size) {
    // container is a reference to a DOM node
    for(let i = 0; i < size**2; i++) {
        const square = document.createElement("div");
        const width = gridSize / size;
        const height = gridSize / size;
        square.style.width = `${width}px`;
        square.style.width = `${height}px`;
        container.append(square)
    }
}

function clearGrid() {
    container.childNodes.forEach(
        n => n.style.backgroundColor = container.style.backgroundColor
    );
}

createGrid(container, 60);

container.addEventListener("mouseover", e => {
    e.target.style.backgroundColor = "rgb(11, 44, 79)";
});

button.addEventListener("click", clearGrid);