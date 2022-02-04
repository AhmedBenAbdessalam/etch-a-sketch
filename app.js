function createGrid(blockResolution = 64) {
  let canvas = document.querySelector("#canvas");
  if (canvas) canvas.remove();

  canvas = document.createElement("div");
  canvas.setAttribute("id", "canvas");
  const container = document.querySelector("#container");
  container.append(canvas);
  let canvasSize = window.getComputedStyle(canvas).height;
  canvasSize = parseInt(canvasSize.replace("px"));
  console.log(canvasSize);
  for (let row = 0; row < blockResolution; row++) {
    let rowDiv = document.createElement("div");

    rowDiv.setAttribute("class", "flex-row");
    canvas.append(rowDiv);
    for (let column = 0; column < blockResolution; column++) {
      let block = document.createElement("div");
      block.setAttribute("class", "block");
      rowDiv.append(block);
      block.style.width = canvasSize / blockResolution + "px";
      block.style.height = canvasSize / blockResolution + "px";
    }
  }
  //add hover listener to each block
  chooseColor();
}
function chooseColor() {
  const colorPicker = document.querySelector("#color-picker");
  let blocks = document.querySelectorAll(".block");
  blocks.forEach((block) => {
    block.addEventListener("mouseover", () => {
      block.style.backgroundColor = colorPicker.value;
    });
  });
}

createGrid();

const resetBtn = document.querySelector("#reset-canvas");
resetBtn.addEventListener("click", () => {
  let blockResolution = 0;
  do {
    blockResolution = parseInt(prompt("choose resolution between 8-64"));
    console.log(blockResolution == NaN);
  } while (!blockResolution || blockResolution < 8 || blockResolution > 64);

  createGrid(blockResolution);
});
const colorPicker = document.querySelector("#color-picker");
colorPicker.addEventListener("onchange", chooseColor);
