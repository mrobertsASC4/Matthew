/* Welcome to Matt's BoujeeBodega */
/* Where everything is $100 or more ;) */

/* STORY */

// Allows to use prompt // 

var prompt = require('prompt-sync')();
// get input from the user. 

var cat = "CoolCat247"
var money = 1000
var name = prompt("What's your name? ");

// var i = 0
// while (i < 10) {
//    console.log(i);
//    i++;
// }

while (money > 0) {
    var item = prompt("What do you want to buy? ");
    console.log("You purchased the" + item)
    money = money - 100
    console.log("You have $"+ money + " left.")
//Everything costs $100. 
}
