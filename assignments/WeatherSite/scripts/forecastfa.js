var forecastobject = new XMLHttpRequest();
forecastobject.open('get', '//api.openweathermap.org/data/2.5/forecast?id=4759986&appid=87b778d905abd567949a99734f93fcb2&units=imperial',true);

forecastobject.send();

forecastobject.onload = function() {
    var forecastInfo = JSON.parse(forecastobject.responseText);
    console.log(forecastInfo);
    
    
    document.getElementById('day1temp').innerHTML = forecastInfo.list[3].main.temp;
    document.getElementById('day2temp').innerHTML = forecastInfo.list[11].main.temp;
    document.getElementById('day3temp').innerHTML = forecastInfo.list[19].main.temp;
    document.getElementById('day4temp').innerHTML = forecastInfo.list[27].main.temp;
    document.getElementById('day5temp').innerHTML = forecastInfo.list[35].main.temp;
    
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(forecastInfo.list[3].dt_txt);
    var weekday1 = days[d.getDay()];
    d = new Date(forecastInfo.list[11].dt_txt);
    var weekday2 = days[d.getDay()];
    d = new Date(forecastInfo.list[19].dt_txt);
    var weekday3 = days[d.getDay()];
    d = new Date(forecastInfo.list[27].dt_txt);
    var weekday4 = days[d.getDay()];
    d = new Date(forecastInfo.list[35].dt_txt);
    var weekday5 = days[d.getDay()];
    
    document.getElementById('dayname1').innerHTML = weekday1;
    document.getElementById('dayname2').innerHTML = weekday2;
    document.getElementById('dayname3').innerHTML = weekday3;
    document.getElementById('dayname4').innerHTML = weekday4;
    document.getElementById('dayname5').innerHTML = weekday5;
}