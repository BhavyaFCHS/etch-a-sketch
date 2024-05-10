const GRID_HEIGHT = 400;
const GRID_WIDTH = 400;

function createGrid(container, size) {
    // container is a reference to a DOM node
    for(let i = 0; i < size**2; i++) {
        const square = document.createElement("div");
        const width = GRID_WIDTH / size;
        const height = GRID_HEIGHT / size;
        square.style.width = `${width}px`;
        square.style.width = `${height}px`;
        container.append(square)
    }
}

const container = document.querySelector(".container");
container.style.width = `${GRID_WIDTH}px`;
container.style.height = `${GRID_HEIGHT}px`;

createGrid(container, 2);