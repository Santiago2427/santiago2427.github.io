var weather1object = new XMLHttpRequest();
weather1object.open('get', '//api.openweathermap.org/data/2.5/weather?id=4695066&appid=87b778d905abd567949a99734f93fcb2&units=imperial',true);

weather1object.send();

weather1object.onload = function() {
    var weatherInfo1 = JSON.parse(weather1object.responseText);
    console.log(weatherInfo1);
    
     
    document.getElementById('highT').innerHTML = weatherInfo1.main.temp_max;
    document.getElementById('lowT').innerHTML = weatherInfo1.main.temp_min;
    document.getElementById('currentTemp').innerHTML = weatherInfo1.main.temp;
    document.getElementById('detail').innerHTML = weatherInfo1.weather[0].description;
    
    var iconcode = weatherInfo1.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
    
    document.getElementById('wSpeed').innerHTML = weatherInfo1.wind.speed;
    
    
}