const help_url = 'https://randomuser.me/api/' 

function setup () {

$.ajax( {
    url: help_url,
    dataType: 'json',
    success: function(data) {
    alert("NEW PERSON GENERATED");
    
    var userFirstName = (data.results[0].name.first);
    var userLastName = (data.results[0].name.last);
    var userState = (data.results[0].location.state)
    var userPic = (data.results[0].picture.large);
    
    $("body").append(`<h1>  This person's name is ${userFirstName} ${userLastName}. </h1>`)
    $("body").append(`<h1>  They live in  ${userState}. </h1>`)
    $("body").append(`<h1>  This is their picture: <br> <img src=${userPic} </h1>`)

    console.log(data);
    
}
}
)
};

$("document").ready(setup)
  
