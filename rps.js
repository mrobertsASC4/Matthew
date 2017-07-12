var playerOne = ["rock","paper","scissors"];
var playerTwo = ["rock","paper","scissors"];
/* Choices */
var randomChoice = Math.floor(Math.random () * 3);

var p1Choice = playerOne[0]; // scissors
var p2Choice = playerTwo[randomChoice]; // Random


if (p1Choice == p2Choice) {
    console.log("It's a tie!")
} else if (p1Choice === "scissors") {
    if (p2Choice === "rock") {
        console.log("Player 1 loses");
        console.log("Rock beats scissors")
    } else {
        console.log("Player 1 wins");
        console.log("Player Two loses")
    }
} else if (p1Choice === "rock") {
    if (p2Choice === "scissors") {
        console.log("Player 1 wins");
        console.log("Player Two loses")
    } else {
        console.log("Player 1 loses");
        console.log("Player Two wins")
    }
}
