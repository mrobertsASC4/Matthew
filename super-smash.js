// Arrays //
var mashArray = ["Final Destination","Miiverse","Congo Jungle","Mushroom Kingdom"]
var firstQuestion = [3 , 5]
var secondQuestion = ["Sonic the Hedgehog" , "Bowser Jr." ]

// Function to strike and fight //
function strikeFight() {
    var prompt = require('prompt-sync')();

var strike = prompt('How many times will you strike? ');
var fight = prompt('Who will you choose to fight? ');
firstQuestion.push(strike);
secondQuestion.push(fight);

}

// Function that answers //
function answer(index){
    console.log("You fought " + secondQuestion[Math.floor(Math.random() * secondQuestion.length)] + " in the " + mashArray[Math.floor(Math.random() * mashArray.length)] + " and hit them " + firstQuestion[Math.floor(Math.random() * firstQuestion.length)] + " times. Too bad. Mewtwo wins! ");
}
strikeFight();
answer();