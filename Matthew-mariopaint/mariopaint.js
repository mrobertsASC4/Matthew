 /*   var value = 0;
function draw() {
  for (var i = 0; i < 100; i++) {
  var r = random(-50, 50);
  line(50,i,50+r,i);
}
  fill(value);
  rect(25, 25, 50, 50);
}
function mouseDragged() {
  value = value + 5;
  if (value > 255) {
    value = 0;
  }
}
for (var i = 0; i < 100; i++) {
  var r = random(-50, 50);
  line(50,i,50+r,i);
} */


function setup() {
  background('white')
}

function draw() {
    resizeCanvas(windowWidth,windowHeight)
    
   console.log(mouseX,mouseY)
}

 function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}



function setRandomColor() {
  $("#colorpad").css("background-color", getRandomColor());
}

 
 
 function mouseDragged() {
   var shapes = [ ellipse(mouseX,mouseY,40,40)];
   var word = random(shapes);
   word
   fill(getRandomColor())
   
    }
  