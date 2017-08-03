var id = "2cfd208a" 

var key = "b1c9bb5dd531c4c8b30b82f6a17321de"

var bigMacURL = "https://api.nutritionix.com/v1_1/search/Big%20Mac?results=0:5&fields=item_name,nf_calories&appId=" + id + "&appKey=" + key

$.ajax({
    url:bigMacURL,
    success:function(data){
        // console.log(data);
        var food = data.hits[0];
        var name = food.fields.item_name;
        var cals = food.fields.nf_calories;
        $("body").append("<h2> This " + name + " has " + cals + "kcal !!!</h2>")

    }
    
});

