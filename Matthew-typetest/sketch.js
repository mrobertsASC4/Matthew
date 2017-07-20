var points = 0
var sen1 = "Easy sentence."
var sen2 = "MEdium sEntencE."
var sen3 = "hArD sEnTEnce."
var nextTwo = "Now try these two!"
var inp; //global

  function setup() {
    createCanvas(windowWidth,windowHeight);
    background('turquoise');
    inp = createInput(''); 
    inp.position(0,140)
    inp.input(myInputEvent);
    
     
}



function draw() {

    fill(0)
    textSize(20);
    textFont("Helvectia")
    text("Please type the sentence below." , 0, 20)
    var sen1 ="Easy sentence."
    text(sen1, 0 , 100)
    text("Current Points: " , 0 ,200)
   
    
}


function keyPressed() {
     if (keyCode === ENTER) {
          if (inp.value() != sen1) {
              alert("lol ur losing bro")
              points = points - 10
          }
     }
} 

function keyPressed() {
     if (keyCode === ENTER) {
          console.log(inp.value())
          if (inp.value() == sen3) {
              alert("yeah boi you won")
          }
          if (inp.value() == sen1 || inp.value() == sen2 || inp.value() == sen3) {
              alert("lol ur winning bro")
              clear();
              points = points + 10
              text("Current Points: " + points ,  0 ,200)
              text(nextTwo , 100 , 75)
              text(sen2, 200, 100)
              text(sen3, 400 , 100)

          } else {
              alert("lol ur losing bro, try again")
              clear();
              points = points - 10
              text("Current Points: " + points ,  0 ,200)
    
          }
        }
}

     

  
function myInputEvent() {
    console.log('you are typing: ');
}
