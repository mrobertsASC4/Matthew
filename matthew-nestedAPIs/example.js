const help_url = 'https://randomuser.me/api/' 
var country_url = 'https://restcountries.eu/rest/v2/alpha?codes='
var userNat;
function setup () {

$.ajax( {
    url: help_url,
    dataType: 'json',
    success: function(data) {
    alert("NEW PERSON GENERATED!")

    
    var userFirstName = (data.results[0].name.first);
    var userLastName = (data.results[0].name.last);
    var userState = (data.results[0].location.state)
    var userPic = (data.results[0].picture.large);
    userNat = (data.results[0].nat);
    var userEmail = (data.results[0].email);
    var userAddress = (data.results[0].location.street);
    // Use country code to get full name of country
    // another call to api 
    handleData();
    $("body").append(`<h1>  This person's name is ${userFirstName} ${userLastName}. </h1>`)
    $("body").append(`<h1>  They live in  ${userState}. </h1>`)
    $("body").append(`<h1>  This is their picture: <br> <img src=${userPic} </h1>`)
    $("body").append(`<h1>  Their country code is  ${userNat} </h1>`)
    $("body").append(`<h1>  Use this email for stuff: ${userEmail} </h1>`)
    $("body").append(`<h1>  Address: ${userAddress} </h1>`)
    
    }
}
)
};
function handleData() {
    $.ajax({
        url: country_url + userNat,
        dataType: 'json',
        success: function(data) {
            var countryName = (data[0].name)
            var flag = (data[0].flag)
            var link = 'https://en.wikipedia.org/wiki/' + countryName
            $("body").append(`<h1> The country name is ${countryName} </h1>`)
            $("body").append(`<h1> This is the flag: <br> <img src=${flag} </h1>`)
            $("body").append(`<h1> Wanna learn more? Copy and Paste the link: <br> ${link} </h1>`)
            
            

            

        }
    }
    )
}
$("document").ready(setup)