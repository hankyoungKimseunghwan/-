function setup() {
    let mySketch = createCanvas(750, 750);
    mySketch.parent('my-sketch');
    
    background(200);
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    
    ellipse(mouseX, mouseY, 80, 80);
}