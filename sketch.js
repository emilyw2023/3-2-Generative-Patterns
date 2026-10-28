
let gridSize = 100;
let cols, rows;

function setup() {
  createCanvas(800, 800);
  cols = int(width / gridSize);
  rows = int(height / gridSize);
}

function draw() {
  background(220);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * gridSize + gridSize / 2;
      let y = j * gridSize + gridSize / 2;
      
      // Inside your loops: Alternating down-curves and up-curves
      if ((i + j) % 2 === 0) {
        arc(x, y, gridSize, gridSize, 0, PI);         // Curves Down
      } else {
        arc(x, y, gridSize, gridSize, PI, TWO_PI);    // Curves Up
      }
    }
  }
  
  noLoop(); // Prevents p5 from constantly re-rendering static shapes
}
