
// let gridSize = 50
// let cols, rows
// function setup() {
//   createCanvas(600, 600);
//   cols = int(width/gridSize)
//   rows = int(height/gridSize)
// }

// function draw() {
//   background(220);

  
//     for (let i = 0; i < cols; i++) {
//     for (let j = 0; j < rows; j++) {
//       let x= i * gridSize + gridSize/2
//       let y = j * gridSize + gridSize/2
//       circle(x, y, gridSize)
//       line(x-gridSize/2, y+gridSize/2, x+gridSize/2, y-gridSize/2)
//       line(x-gridSize/2, y-gridSize/2, x+gridSize/2, y+gridSize/2)
//     }
//   }
// }


let gridSize = 100
let cols, rows
function setup() {
  createCanvas(800, 800);
  cols = int(width/gridSize)
  rows = int(height/gridSize)
}

function draw() {
  background(0);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let x = i * gridSize + gridSize/2
      let y = j * gridSize + gridSize/2
      // distance between mouse and each circle
      let d = dist(x, y, mouseX, mouseY)
      let circleSize = map(d, 0, 800, gridSize, gridSize * 0.1)
      let r = map(x, 0, width, 20, 250)
      let b = map(y, 0, height, 0, 250)
      fill(r, 150, b) 
      circle(x, y, circleSize)
    }
  }
}