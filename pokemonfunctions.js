var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]

function randLetter(index){
    return Math.floor(Math.random() * index)
}

console.log(alphabet[randLetter(alphabet.length)]);


function randWord(index){
    
    return Math.floor(Math.random() * index) + Math.floor(Math.random() * index)
}
Math.random() * alphabet.length

console.log(alphabet[randWord(Math.floor(Math.random() * alphabet.length))])

