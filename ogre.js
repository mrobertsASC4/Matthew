var HP = 100;
var gold = 0;
var ogresDefeated = 0;


function displayStats() {
    $('#stats').text('It works!')
}

function attack() {
    alert('You killed an ogre.'); 
}

function setup() {
$('body').append("<h1><center>Welcome to Ogre Fighter: The Game</center></h1>");
$('body').append('<div><h3>Stats</h3><p id="stats"></p></div>');
$('body').append("<button onclick='attack()'>Attack</button>")
$('body').append('<div id="ogre"></div>')
displayStats()

}

// Waits until document is ready!
$(document).ready(setup);