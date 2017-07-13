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
    console.log("You fought " + secondQuestion.pop() + " in the " + mashArray[Math.floor(Math.random() * mashArray.length)] + " and hit them " + firstQuestion.pop() + " times. Too bad. Mewtwo wins! ");
}
strikeFight();
answer();