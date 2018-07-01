var weather2object = new XMLHttpRequest();
weather2object.open('get', '//api.openweathermap.org/data/2.5/weather?id=4409896&appid=87b778d905abd567949a99734f93fcb2&units=imperial',true);

weather2object.send();

weather2object.onload = function() {
    var weatherInfo2 = JSON.parse(weather2object.responseText);
    console.log(weatherInfo2);
    
     
    document.getElementById('highT').innerHTML = weatherInfo2.main.temp_max;
    document.getElementById('lowT').innerHTML = weatherInfo2.main.temp_min;
    document.getElementById('currentTemp').innerHTML = weatherInfo2.main.temp;
    document.getElementById('detail').innerHTML = weatherInfo2.weather[0].description;
    
    var iconcode = weatherInfo2.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
    
    document.getElementById('wSpeed').innerHTML = weatherInfo2.wind.speed;
    
    
}