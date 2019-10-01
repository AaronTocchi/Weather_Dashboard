
$("#search-Btn").on("click", function(){
    event.preventDefault();

     let city = $(".form-control").val();
    console.log(city);
    
    let queryURL = "https://api.openweathermap.org/data/2.5/forecast?q="+ city +"&appid=0c6a6a50580bec02658ec3ed509bbbfa";
    
    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#city-name").text(response.city.name + +response.list[0].dt + " " + response.list[0].weather[0].icon);
        $("#wind").text("Wind Speed: " + response.list[0].wind.speed +"MPH");
        $("#humidity").text("Humidity: " + response.list[0].main.humidity + "%");
    });
    
});
