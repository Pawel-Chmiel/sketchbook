const UISelectors = {
    pencilColorSelector: "pencil-color",
    canvasColorSelector: "background-color",
    pencilSizeSelector: "pencil-size",
    clearBtnSelector: "[data-clear-btn]",
    saveBtnSelector: "[data-save-btn]",
}

let pencilColor = document.getElementById(UISelectors.pencilColorSelector);
let canvasColor = document.getElementById(UISelectors.canvasColorSelector);
let pencilSize = document.getElementById(UISelectors.pencilSizeSelector);
const clearBtn = document.querySelector(UISelectors.clearBtnSelector);
const saveBtn = document.querySelector(UISelectors.saveBtnSelector);

const paths = [];
const currentPath = [];

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(canvasColor.value);
}

function draw() {
    if (mouseIsPressed) {
        stroke(pencilColor.value);
        strokeWeight(pencilSize.value);
        noFill();
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
    background(canvasColor.value);
}

canvasColor.addEventListener("input", () => {
    background(canvasColor.value);
})

clearBtn.addEventListener("click", () => {
    clear();
    pencilColor.value = "#000000";
    canvasColor.value = "#ffffff";
    pencilSize.value = "10";
})

saveBtn.addEventListener("click", () => {
    save('myCanvas.jpg');
})