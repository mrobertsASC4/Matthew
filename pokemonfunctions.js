//Pokemonfunctions.js

var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function randLetter(index){
    return Math.floor(Math.random() * index)
}

console.log(alphabet[randLetter(alphabet.length)]);


function randWord(index){
    var word = "";
    for(var i = 0; i < 6; i++){
        word = word + randLetter(Math.floor(Math.random() * index));
    }
    
    return word 
}

console.log(randWord());

