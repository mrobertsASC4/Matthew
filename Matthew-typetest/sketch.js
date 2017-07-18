 function setup() {
    createCanvas(windowWidth,windowHeight);
    background('turquoise');
    var inp = createInput('', "text"); 
    inp.position(0,140)
    inp.input(myInputEvent);
     
}


var points = 0
var sen1 = "Easy sentence."
var inp;


function draw() {
    fill(0)
    textSize(20)
    textFont("Helvectia")
    text("Please type the sentence below." , 0, 20)
    var sen1 ="Easy sentence."
    text(sen1, 0 , 100)
     text("Current Points: " + points ,  0 ,200)  
   
}

function keyPressed() {
  
  if (keyCode === ENTER) {
      if (inp == sen1) {
          points = points + 10
          alert("lol ur winning bro")
      }
  }
      if (keyCode === ENTER) {
          if (inp != sen1) {
              points = points - 10
          alert("lol ur losing bro")
      }
  }
}




function myInputEvent() {
    console.log('you are typing: ');
} 

