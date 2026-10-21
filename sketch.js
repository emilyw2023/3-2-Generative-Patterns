let gridSize = 50
let cols, rows
function setup() {
  createCanvas(800, 800);
  cols = int(width/gridSize)
  rows = int(height/gridSize)
}

function draw() {
  background(220);
  
  // for (let i = 0; i < cols; i++) {
  //   for (let j = 0; j < rows; j++) {
  //     let x = i * gridSize + gridSize/2
  //     let y = j * gridSize + gridSize/2
    for (let i = 0; i < 10; i++) {
      circle(x, y, gridSize)
      // rectMode(CENTER)
      // rect(x, y, gridSize, gridSize)
      // line(x-gridSize/2, y-gridSize/2, x+gridSize/2, y+gridSize/2)
      // line(x-gridSize/2, y+gridSize/2, x+gridSize/2, y-gridSize/2)
      // triangle(x-gridSize/2, y-gridSize/2, x-gridSize/2, y+gridSize/2, x+gridSize/2, y+gridSize/2)
      // triangle(x-gridSize/2, y-gridSize/2, x+gridSize/2, y-gridSize/2, x+gridSize/2, y+gridSize/2)
    }
    
  }
