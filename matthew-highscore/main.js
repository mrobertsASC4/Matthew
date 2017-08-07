var playerTwo = ["Rock","Paper","Scissors"];
var score = 0
/* Choices */
//var randomChoice = Math.floor(Math.random () * playerTwo.length);
//console.log(randomChoice)

//var p2Choice = playerTwo[randomChoice]; // Random

function updateDB(){
    var name = $("#name").val();
    var message = $("#message").val();
    console.log(name + " : " + message);
    $("body").append("<p><center> Welcome: " + name + "</center></p>")
   
    var value = {
        "NAME" : name,
        "MESSAGE" : message,
    }
    //Update database here
    

}



function rock1(){
    var randomChoice = Math.floor(Math.random () * playerTwo.length);
    var p2Choice = playerTwo[randomChoice]; // Random


    $("#result").html("<p><center> You selected Rock! </center></p>")
    $("#result").append("<p><center> The computer selected " + p2Choice + "</center></p>")
    if (p2Choice == playerTwo[0]) {
        $("#result").append("<p><center> It's a tie! </center></p>")
        $("#result").append("<p><center> Try again! </center></p>")

    }
    if (p2Choice == playerTwo[1]) {
        $("#result").append("<p><center> The Computer beat you! </center></p>")
        $("#result").append("<p><center> Try again! </center></p>")

    }
    if (p2Choice == playerTwo[2]) {
        $("#result").append("<p><center> You beat the Computer! </center></p>")
        $("#result").append("<p><center> Choose another weapon or use the same! </center></p>")
        

    }
    
}

function paper1(){
    var randomChoice = Math.floor(Math.random () * playerTwo.length);
    var p2Choice = playerTwo[randomChoice]; // Random
   
    $("#result").html("<p><center> You selected Paper! </center></p>")
    $("#result").append("<p><center> The computer selected " + p2Choice + "</center></p>")
    if (p2Choice == playerTwo[0]) {
        $("#result").append("<p><center> You beat the computer! </center></p>")
        $("#result").append("<p><center> Choose another weapon or use the same! </center></p>")
        console.log(+score + +10)

    }
    if (p2Choice == playerTwo[1]) {
        $("#result").append("<p><center> It's a tie! </center></p>")
        $("#result").append("<p><center> Try again! </center></p>")

    }
    if (p2Choice == playerTwo[2]) {
        $("#result").append("<p><center> The Computer beat you! </center></p>")
        $("#result").append("<p><center> Try again! </center></p>")

    }
}

function scissors1(){
    
    var randomChoice = Math.floor(Math.random () * playerTwo.length);
    var p2Choice = playerTwo[randomChoice]; // Random
    $("#result").html("<p><center> You selected Scissors! </center></p>")
    
    $("#result").append("<p><center> The computer selected " + p2Choice + "</center></p>")
    if (p2Choice == playerTwo[0]) {
        $("#result").append("<p><center> The Computer beat you! </center></p>")
        $("#result").append("<p><center> Try again! </center></p>")

    }
    if (p2Choice == playerTwo[1]) {
        $("#result").append("<p><center> You beat the Computer! </center></p>")
        $("#result").append("<p><center> Choose another weapon or use the same! </center></p>")
        console.log(+score + +10)

    }
    if (p2Choice == playerTwo[2]) {
        $("#result").append("<p><center> It's a tie! </center></p>")
        $("#result").append("<p><center> Try again! </center></p>")

    }

}

