var button1;
var button2;
var button3;
var button4;

var pokemonRoster = [
    {"name" : "Bulbasur" , "type" : "Grass" , "hp" : 45 , "def" : 49 , "atk" : 49 , "legendary" : false } ,
    {"name" : "Pidgeot" , "type" : "Flying/Normal" , "hp" : 83 , "def" : 75 , "atk" : 80 , "legendary" : false },
    {"name" : "Ninetales" , "type" : "Fire" , "hp" : 73 , "def" : 75 ,"atk" : 76 , "legendary" : false } ,
    {"name" : "Gyarados" , "type" : "Water/Flying" , "hp" : 95 , "def" : 79 , "atk" : 125 , "legendary" : false } ,
    {"name" : "Aggron" , "type" : "Steel/Rock" , "hp" : 70 , "def" : 180 , "atk" : 110 , "legendary" : false } ,
    {"name" : "Regice" , "type" : "Ice" , "hp" : 80 , "def" : 100 , "atk" : 50 , "legendary" : true }
    ]

function setup() {
    createCanvas(windowWidth,windowHeight)
    background(200)
    fill(70)
    rect(0,600,windowWidth,300)
    alert("WILD " + Math.floor(Math.random() * pokemonRoster["name"]) + " APPEARS")
    
    // Buttons to press for options
    button1 = createButton('Attack');
    button1.position(130, 685);
    button1.mousePressed(attack)
    button2 = createButton('Defend');
    button2.position(480, 685);
    button3 = createButton('Heal');
    button3.position(840, 685);
    button4 = createButton('Run');
    button4.position(1190, 685);

}

var attacks = ["Tackle" , "Pound" , "Scratch"]

function attack() {
    var attackPicked = prompt("Attack with " + attacks[0] + " , " + attacks[1] + " or " + attacks[2] + " ?");
    alert("You attacked with " + attackPicked )

}

function draw() {
    // One option = One color
    fill("red")
    rect(50,640,200,100)
    fill("blue")
    rect(400,640,200,100)
    fill("yellow")
    rect(750,640,200,100)
    fill("green")
    rect(1100,640,200,100)
    
    // Grass areas
    noStroke()
    fill(0,255,0)
    ellipse(300,500,400,100)
    
    noStroke()
    fill(0,255,0)
    ellipse(1000,200,400,100)

    // Pokemon Prototypes
    fill("purple")
    ellipse(350,450,150,150)

    fill("orange")
    ellipse(950,150,150,150)

    //HP Bars
    fill(0,255,0)
    rect(525,500,150,25)
} 


