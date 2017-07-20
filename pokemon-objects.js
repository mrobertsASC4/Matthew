var pokemonRoster = [
    {"name" : "Bulbasur" , "type" : "Grass" , "hp" : 45 , "def" : 49 , "atk" : 49 , "legendary" : false } ,
    {"name" : "Pidgeot" , "type" : "Flying/Normal" , "hp" : 83 , "def" : 75 , "atk" : 80 , "legendary" : false },
    {"name" : "Ninetales" , "type" : "Fire" , "hp" : 73 , "def" : 75 ,"atk" : 76 , "legendary" : false } ,
    {"name" : "Gyarados" , "type" : "Water/Flying" , "hp" : 95 , "def" : 79 , "atk" : 125 , "legendary" : false } ,
    {"name" : "Aggron" , "type" : "Steel/Rock" , "hp" : 70 , "def" : 180 , "atk" : 110 , "legendary" : false } ,
    {"name" : "Regice" , "type" : "Ice" , "hp" : 80 , "def" : 100 , "atk" : 50 , "legendary" : true }
    ]
    //Prints Roster//
    function printRoster() {
        for (var i = 0 ; i < pokemonRoster.length ; i++) {
            console.log(pokemonRoster[i])
    } 
    }
    
    printRoster();
    
    //Attacked Pokemons/
    function pokemonAttacked() {
        for (var i = 0 ; i < pokemonRoster.length ; i++) {
            pokemonRoster[i].hp = pokemonRoster[i].hp - 10

            
        }
    }
    
    pokemonAttacked();
    printRoster();



function subtractHP() {
    var prompt = require('prompt-sync')();
    var minusHP = prompt("How much HP would you like to subtract? ");
    console.log("You took away " + minusHP + " from " + pokemonRoster)
 }

 subtractHP();