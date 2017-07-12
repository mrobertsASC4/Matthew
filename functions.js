function sayThis(){
    return "10k followers down the drain!"
}
console.log(sayThis());

function traceBar(input) {
    //Want to use the input as the range
    var randomnumber = Math.random() * input;
    var result = Math.floor(randomnumber);
    return result;
}
console.log(traceBar(15));