var pokemonRoster = [
    ["Bulbasur" , "Grass" , 45 , 49 , 49 , false ] 
    ["Pidgeot" , "Flying/Normal" , 83 , 75 , 80 , false ]
    ["Ninetales" , "Fire" , 73 , 75 , 76 , false ]
    ["Gyarados" , "Water/Flying" , 95 , 79 , 125 , false ]
    ["Aggron" , "Steel/Rock" , 70 , 180 , 110 , false ]
    ["Regice", "Ice", 80 , 100 , 50 , true ]
    ]

function loop() {
    for (var i = 0; i < pokemonRoster.length; i++)
    console.log("Name: " + p[i][0]);
    console.log("Type: " + p[i][1]);
    console.log("HP: " + p[i][2]);
    console.log("Attack: " + p[i][3]);
    console.log("Defense: " + p[i][4]);
    console.log("Legend: " + p[i][5])

}