var x = 0
var y = 0
// Just called once and done
function setup() {
    createCanvas(windowWidth,windowHeight);
    background('purple');
    
}

function draw() {
    background('purple');
    fill(0,230,248)
    ellipse(x,y,200)
    x = x + 10;
    if (x > width) {
        x = 0
 }
    
}