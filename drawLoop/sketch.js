var x = 100
var xIncrement = 12
var y = 100
var yIncrement = 6
var z = 100
var x1 = 100
var y1 = 100
var z1 = 20
var x1Increment = 12
var y1Increment = 6
// Just called once and done
function setup() {
    createCanvas(windowWidth,windowHeight);
    
    
}

function draw() {
   
    background('black');
    fill(0,230,248)
    ellipse(x,y,z)
    x += xIncrement;
    y += yIncrement;
    if (x >= (windowWidth-50)) {
        xIncrement = -12
   }
   if (x <= 50) {
       xIncrement = 12
   }

   if (y >= (windowHeight-50)) {
       yIncrement = -6
   }

   if (y <= 50) {
       yIncrement = 6
   }
    
    fill(245,0,248)
    ellipse(x1,y1,z1)
    x1 += x1Increment;
    y1 += y1Increment;
    if (x1 >= windowWidth-z) {
        x1Increment = -12
   }
   if (x1 <= 50) {
       x1Increment = 12
   }

   if (y1 >= windowHeight-z) {
       y1Increment = -6
   }

   if (y1 <= 50) {
       y1Increment = 6
   }

}


