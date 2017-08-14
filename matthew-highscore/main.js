const playerTwo = ["Rock","Paper","Scissors"];
let score = 0;
let scoreUpdated;
let myName;


/* Choices */
//var randomChoice = Math.floor(Math.random () * playerTwo.length);
//console.log(randomChoice)

//var p2Choice = playerTwo[randomChoice]; // Random

function updateDB(){

    const name = $("#name").val();
    const message = $("#message").val();
    myName = name

    console.log(`${name} : ${message}`);
    $("body").append(`<p><center><font color='white'><font size='10'>Welcome: ${name}</font></font></center></p>`)


    //Update database here
    
    

}



function rock1(){
    const randomChoice = Math.floor(Math.random () * playerTwo.length);
    const p2Choice = playerTwo[randomChoice]; // Random


    $("#score").html(`<p><center><font color='white'><font size='10'>Score: ${score}</font></font></center></p>`)
    $("#result").html("<p><center><font size='5'> You selected Rock! </center></p>")
    $("#result").append(`<p><center><font size='5'>The computer selected ${p2Choice}</center></p>`)
    if (p2Choice == playerTwo[0]) {
        $("#result").append("<p><center><font size='5'> It's a tie! </center></p>")
        $("#result").append("<p><center><font size='5'> Try again! </center></p>")
        

    }
    if (p2Choice == playerTwo[1]) {
        $("#result").append("<p><center><font size='5'> The Computer beat you! </center></p>")
        $("#result").append("<p><center><font size='5'> Try again! </center></p>")
        

    }
    if (p2Choice == playerTwo[2]) {
        $("#result").append("<p><center><font size='5'> You beat the Computer! </center></p>")
        $("#result").append("<p><center><font size='5'> Choose another weapon or use the same! </center></p>")
        score = score + 10
        $("#score").html(`<p><center><font color='white'><font size='10'>Score: ${score}</font></font></center></p>`)
        scoreUpdated = score

        

    }
    
}

function paper1(){
    const randomChoice = Math.floor(Math.random () * playerTwo.length);
    const p2Choice = playerTwo[randomChoice]; // Random

    $("#score").html(`<p><center><font color='white'><font size='10'>Score: ${score}</font></font></center></p>`)
    $("#result").html("<p><center><font size='5'> You selected Paper! </center></p>")
    $("#result").append(`<p><center><font size='5'> The computer selected ${p2Choice}</center></p>`)
    if (p2Choice == playerTwo[0]) {
        $("#result").append("<p><center><font size='5'> You beat the computer! </center></p>")
        $("#result").append("<p><center><font size='5'> Choose another weapon or use the same! </center></p>")
        score = score + 10
        $("#score").html(`<p><center><font color='white'><font size='10'>Score: ${score}</font></font></center></p>`)
        scoreUpdated = score
        

    }
    if (p2Choice == playerTwo[1]) {
        $("#result").append("<p><center><font size='5'> It's a tie! </center></p>")
        $("#result").append("<p><center><font size='5'> Try again! </center></p>")

    }
    if (p2Choice == playerTwo[2]) {
        $("#result").append("<p><center><font size='5'> The Computer beat you! </center></p>")
        $("#result").append("<p><center><font size='5'> Try again! </center></p>")

    }
}

function scissors1(){
    
    const randomChoice = Math.floor(Math.random () * playerTwo.length);
    const p2Choice = playerTwo[randomChoice]; // Random

    $("#score").html(`<p><center><font color='white'><font size='10'>Score: ${score}</font></font></center></p>`)
    $("#result").html("<p><center><font size='5'> You selected Scissors! </center></p>")
    $("#result").append(`<p><center><font size='5'> The computer selected ${p2Choice}</center></p>`)
    if (p2Choice == playerTwo[0]) {
        $("#result").append("<p><center><font size='5'> The Computer beat you! </center></p>")
        $("#result").append("<p><center><font size='5'> Try again! </center></p>")

    }
    if (p2Choice == playerTwo[1]) {
        $("#result").append("<p><center><font size='5'> You beat the Computer! </center></p>")
        $("#result").append("<p><center><font size='5'> Choose another weapon or use the same! </center></p>")
        score = score + 10
        $("#score").html(`<p><center><font color='white'><font size='10'>Score: ${score}</font></font></center></p>`)
        scoreUpdated = score
        

    }
    if (p2Choice == playerTwo[2]) {
        $("#result").append("<p><center><font size='5'> It's a tie! </center></p>")
        $("#result").append("<p><center><font size='5'> Try again! </center></p>")

    }

}

function submitScore() {
       firebase.database().ref(myName).set(
        {
            HighScore : scoreUpdated
        }
    )
}

// Show data
 var database = firebase.database().ref()

database.on("child_added",  function(rowData) {
    $("body").append("<div><em><font size='5'>"+rowData.key+" : "+rowData.val().HighScore+"</em></font></div>");
}) 