

// id/api key for open weather map
let appKey = "0c6a6a50580bec02658ec3ed509bbbfa";
let city;
let lat;
let lon;
let date;

function getDayWeather(cb) {

    let weatherURL = "https://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + appKey;

    $.ajax({
        url: weatherURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#city-name").text(response.name + " ");
        $("#wind").text("Wind Speed: " + response.wind.speed + "MPH");
        $("#temperature").text("Temperature: " + response.main.temp + "°f");
        $("#humidity").text("Humidity: " + response.main.humidity + "%");
        lat = response.coord.lat;
        lon = response.coord.lon;
        console.log(lat, lon);
        // icon for weather display
        let icon = $("<img>");
        icon.attr("src", "https://openweathermap.org/img/w/" + response.weather[0].icon + ".png");

        // Different way to inject variables into a string -- uses "template literals". To use, string needs backticks (``) not quotes ('' or "")
        // icon.attr("src", `https://openweathermap.org/img/w/${response.weather[0].icon}.png`);

        $("#city-name").append(icon);

        cb();
        
    });
    
};

function getForcast() {
    
    let forcastURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + city + "&units=imperial&appid=" + appKey;
    
    $.ajax({
        url: forcastURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        // day 1 forcast (i know theres a cleaner way but for now this is how it is)
        // TODO: ADD ICONS TO EACH DAY 
        $("#date1").text(response.list[0].dt_txt.substr(0, 10));
        $("#humidity1").text("Humidity: " + response.list[0].main.humidity + "%");
        $("#temperature1").text("Temperature: " + response.list[0].main.temp + "°f");
        $("#icon1").attr("src","https://openweathermap.org/img/w/" + response.list[0].weather[0].icon + ".png");
        // day 2
        $("#date2").text(response.list[8].dt_txt.substr(0, 10));
        $("#humidity2").text("Humidity: " + response.list[8].main.humidity + "%");
        $("#temperature2").text("Temperature: " + response.list[8].main.temp + "°f");
        $("#icon2").attr("src","https://openweathermap.org/img/w/" + response.list[8].weather[0].icon + ".png");
        // day 3
        $("#date3").text(response.list[16].dt_txt.substr(0, 10));
        $("#humidity3").text("Humidity: " + response.list[16].main.humidity + "%");
        $("#temperature3").text("Temperature: " + response.list[16].main.temp + "°f");
        $("#icon3").attr("src","https://openweathermap.org/img/w/" + response.list[16].weather[0].icon + ".png");
        // day 4
        $("#date4").text(response.list[24].dt_txt.substr(0, 10));
        $("#humidity4").text("Humidity: " + response.list[24].main.humidity + "%");
        $("#temperature4").text("Temperature: " + response.list[24].main.temp + "°f");
        $("#icon4").attr("src","https://openweathermap.org/img/w/" + response.list[24].weather[0].icon + ".png");
        // day 5
        $("#date5").text(response.list[32].dt_txt.substr(0, 10));
        $("#humidity5").text("Humidity: " + response.list[32].main.humidity + "%");
        $("#temperature5").text("Temperature: " + response.list[32].main.temp + "°f");
        $("#icon5").attr("src","https://openweathermap.org/img/w/" + response.list[32].weather[0].icon + ".png");
        // let icon =  $("<img>"); 
        // icon.attr( "src", "https://openweathermap.org/img/w/" +  response.list[0].weather[0].id +"@2x.png");
        // $("#city-name").append(icon);
        //  console.log(icon);

    });
    
};

function getUV() {
    console.log(lat,lon);
    let uvURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + appKey + "&lat=" + lat + "&lon=" + lon;
    
    $.ajax({
        url: uvURL,
        method: "GET"
    }).then(function (response) {
        console.log(response);
        $("#uv-index").text("UV Index: " + response.value);
    });
};

function newcitybtn() {
    
    newButton = $("<button class='newCity'>").text(city);
    $("#city-list").append(newButton);
    $(".form-control").val("");
};

$("#search-Btn").on("click", function () {
    event.preventDefault();
    
    city = $(".form-control").val();
    getDayWeather(getUV);
    getForcast();
    // getUV();
    newcitybtn();
    
    

    // ajax function for day of weather
    // $.ajax({
    //     url: weatherURL,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(response);
    //     $("#city-name").text(response.name + " ");
    //     $("#wind").text("Wind Speed: " + response.wind.speed + "MPH");
    //     $("#temperature").text("Temperature: " + response.main.temp + "°f");
    //     $("#humidity").text("Humidity: " + response.main.humidity + "%");
    //     let lat = response.coord.lat;
    //     let lon = response.coord.lon;
    //     console.log(lat, lon);
    //     // icon for weather display
    //     let icon = $("<img>");
    //     icon.attr("src", "https://openweathermap.org/img/w/${" + response.weather[0].icon + "}@2x.png");
    //     $("#city-name").append(icon);
    // console.log(icon);
    //  ajax inside of ajax. to try to maybe get UV cant stop me now....
    // let uvURL = "http://api.openweathermap.org/data/2.5/uvi?appid=" + appKey + "&lat=" + lat + "&lon=" + lon;
    // $.ajax({
    //     url: uvURL,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(response);



    // });
    // });
    // ajax function for 5 day forcast
    // $.ajax({
    //     url: forcastURL,
    //     method: "GET"
    // }).then(function (response) {
    //     console.log(response);
    //     // day 1 forcast (i know theres a cleaner way but for now this is how it is)
    //     $("#date1").text(response.list[0].dt_txt.substr(0, 10));
    //     $("#humidity1").text("Humidity: " + response.list[0].main.humidity + "%");
    //     $("#temperature1").text("Temperature: " + response.list[0].main.temp + "°f");
    //     // day 2
    //     $("#date2").text(response.list[8].dt_txt.substr(0, 10));
    //     $("#humidity2").text("Humidity: " + response.list[8].main.humidity + "%");
    //     $("#temperature2").text("Temperature: " + response.list[8].main.temp + "°f");
    //     // day 3
    //     $("#date3").text(response.list[16].dt_txt.substr(0, 10));
    //     $("#humidity3").text("Humidity: " + response.list[16].main.humidity + "%");
    //     $("#temperature3").text("Temperature: " + response.list[16].main.temp + "°f");
    //     // day 4
    //     $("#date4").text(response.list[24].dt_txt.substr(0, 10));
    //     $("#humidity4").text("Humidity: " + response.list[24].main.humidity + "%");
    //     $("#temperature4").text("Temperature: " + response.list[24].main.temp + "°f");
    //     // day 5
    //     $("#date5").text(response.list[32].dt_txt.substr(0, 10));
    //     $("#humidity5").text("Humidity: " + response.list[32].main.humidity + "%");
    //     $("#temperature5").text("Temperature: " + response.list[32].main.temp + "°f");

    //     // let icon =  $("<img>"); 
    //     // icon.attr( "src", "https://openweathermap.org/img/w/" +  response.list[0].weather[0].id +"@2x.png");
    //     // $("#city-name").append(icon);
    //     //  console.log(icon);

    // });

    
});


$("#city-list").on("click", '.newCity', function() {
    event.preventDefault();
    console.log("hello");
    let clicked = $(this);
    console.log(clicked);
    city = clicked.text();
    console.log(city)
    getDayWeather(getUV);
    getForcast();

    
});

// my second function look how lil it is... the other one should be more like this. Also if you read this, thank you. You care and you're wearing a cute hat today