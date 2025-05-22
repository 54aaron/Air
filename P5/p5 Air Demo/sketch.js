let pixels = [];

function setup() {
  let canvas = createCanvas(640, 360);

  for (let i = 0; i < 4; i++) {
    pixels[i] = new Pixel(100, 300, i);
  }
}

function draw() {
  background(220);

  for (let i = 0; i < pixels.length; i++) {
    pixels[i].display();
    pixels[i].mouseOver();
  }
}