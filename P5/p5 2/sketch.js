//custom variables for y-coordinate of sun & horizon
let sunHeight;
let horizon = 200;
function setup() {
  createCanvas(400, 400);
}
function draw() {
 
  //sun follows y-coordinate of mouse
  sunHeight = mouseY;

  if(sunHeight < horizon){
  background("lightblue");
  } else {
    background(0);
  }

  //sun
  fill("yellow");
  circle(200, sunHeight, 100);


  // draw line for horizon
  stroke('green');
  line(0,horizon,400,horizon);
}