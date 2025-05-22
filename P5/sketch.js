function setup() {
  createCanvas(400, 400);
}

function draw() {
  background("aqua");
  circle(mouseX, mouseY, 100)

  if(mouseIsPressed === true){
    fill(0);
  } else {
    fill(255);
  }
}
