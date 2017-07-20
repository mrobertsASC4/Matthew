
// var rectArray = [];
var num = []
/* var choice = [] */
function setup() {
    createCanvas(windowHeight,windowWidth)
    
     for (var row = 0; row < 4; row++) {
    rect(row * 160 , 0 ,160,160)
     }
num.push(Math.floor(Math.random() * 4))    

     /* for (var col = 0; col < 4, col++) { */
         
     
     
}

function mousePressed() {
   for (var rec = 0 ; rec < 4; rec++) {
        var minx = (rec*160)
        var maxx = (160*(rec+1))
        
        if ((minx<mouseX<maxx) && mouseY < 160) {
            

        fill(255,0,0)
        rect(minx,0,160,160)
        
    }
}
}

