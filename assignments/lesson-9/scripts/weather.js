var weatherobject = new XMLHttpRequest();
weatherobject.open('get', '//api.openweathermap.org/data/2.5/weather?id=4623560&appid=87b778d905abd567949a99734f93fcb2&units=imperial',true);

weatherobject.send();

weatherobject.onload = function() {
    var weatherInfo = JSON.parse(weatherobject.responseText);
    console.log(weatherInfo);
    
     
    document.getElementById('highT').innerHTML = weatherInfo.main.temp_max;
    document.getElementById('lowT').innerHTML = weatherInfo.main.temp_min;
    document.getElementById('currentTemp').innerHTML = weatherInfo.main.temp;
    document.getElementById('detail').innerHTML = weatherInfo.weather[0].description;
    
    var iconcode = weatherInfo.weather[0].icon;
    var icon_path = "//openweathermap.org/img/w/" + iconcode + ".png";
    document.getElementById('weather_icon').src = icon_path;
    
    document.getElementById('wSpeed').innerHTML = weatherInfo.wind.speed;
    
    
}