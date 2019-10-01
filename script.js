
$("#search-Btn").on("click", function(){
    event.preventDefault();

     let city = $(".form-control").val();
    console.log(city);
    
    let queryURL = "https://api.openweathermap.org/data/2.5/weather?q="+ city +"&appid=0c6a6a50580bec02658ec3ed509bbbfa";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // $("#city-name").text(response.name);
        // $("#wind").text(response.wind.speed);
    });
    
});
