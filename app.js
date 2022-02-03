function createGrid() {
  blockResolution = parseInt(prompt("choose resolution between 32-128"));
  let canvas = document.querySelector("#container");
  if (canvas) canvas.remove();

  canvas = document.createElement("div");
  canvas.setAttribute("id", "container");
  document.body.append(canvas);
  const canvasSize = canvas.offsetHeight;
  for (let row = 0; row < blockResolution; row++) {
    let rowDiv = document.createElement("div");

    rowDiv.setAttribute("class", "flex-row");
    for (let column = 0; column < blockResolution; column++) {
      let block = document.createElement("div");
      block.setAttribute("class", "block");
      block.style.width = canvasSize / blockResolution + "px";
      block.style.height = canvasSize / blockResolution + "px";
      rowDiv.append(block);

      //add hover listener to each block
      block.addEventListener("mouseover", () => {
        block.style.backgroundColor = color;
      });
    }
    canvas.append(rowDiv);
  }
}
//create a 64x64 grid of divs
let color = "blue";
createGrid();

const resetBtn = document.querySelector("#reset-canvas");
resetBtn.addEventListener("click", createGrid);
