var ellipseX = 400
var ellipseY = 400

function setup() {
    
    var canvas = createCanvas(800, 800);
    canvas.parent("p5container");

    background(220);
}

function draw() {

colorMode(RGB);
var colourA = random(0,125,255)
var colourB = random(0,155,128)

    fill(colourA, colourB, 225);
    ellipse(mouseX, mouseY, 200);

    console.log()
}