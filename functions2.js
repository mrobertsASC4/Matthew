//Declare an array with two CoolNick entries to increase his odds
var people = ["Chris","Will","Edgar","Faisal","CoolNick"]

// Function to get Random Number
function getRandomWinner(index) {

// var randomIndex = Math.random() * index;
// var result = Math.floor(randomIndex);
    
// Returns a random index
    return Math.floor(Math.random() * index);
}

//Prints out a random name based to the function
console.log(people[getRandomWinner(people.length)]);