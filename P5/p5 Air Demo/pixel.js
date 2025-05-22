class Pixel {
    constructor(x, y, i) {
        // this.x = x + (i * 55);
        // this.y = y;
        this.pos = createVector(x + (i * 55), y);
    }

    display() {
        noStroke();
        fill("white");
        ellipse(this.pos.x, this.pos.y, 50, 50);
    }

    mouseOver() {
        if (mouseX > this.pos.x - 50 && mouseX < this.pos.x + 50 && mouseY > this.pos.y - 50 && mouseY < this.pos.y + 50) {
            fill("red");
            ellipse(this.pos.x + frameCount, this.pos.y, 50, 50);
        }
    }
}