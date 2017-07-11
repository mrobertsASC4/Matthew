var myPokemonRoster = ["dialga","absol","zorua","vaporeon","hounddoom"];

for (var i = 4; i > -1 ; i--) {
    console.log(myPokemonRoster[i]);
}

var firstToFight = (myPokemonRoster[0]);
var secondToFight = (myPokemonRoster[1]);
myPokemonRoster.pop();
myPokemonRoster.push("pikachu","gengar");
var RosterSize = (myPokemonRoster.length);

for (var i = 0 ; i > 5 ; i++) {
    console.log(myPokemonRoster);
}

console.log(myPokemonRoster);
console.log(firstToFight);
console.log(secondToFight);
console.log(RosterSize);


