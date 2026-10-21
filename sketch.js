let gridSize = 50
let cols, rows
function setup() {
  createCanvas(600, 600);
  cols = int(width/gridSize)
  rows = int(height/gridSize)
}

function draw() {
  background(220);
  
  
    for (let i = 0; i < 10; i++) {
      let x= i * gridSize + gridSize/2
      let y =25
      circle(x, y, gridSize)
      
    }
    
  }
