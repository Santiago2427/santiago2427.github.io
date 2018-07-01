var forecast2object = new XMLHttpRequest();
forecast2object.open('get', '//api.openweathermap.org/data/2.5/forecast?id=4409896&appid=87b778d905abd567949a99734f93fcb2&units=imperial',true);

forecast2object.send();

forecast2object.onload = function() {
    var forecast2Info = JSON.parse(forecast2object.responseText);
    console.log(forecast2Info);
    
    
    document.getElementById('day1temp').innerHTML = forecast2Info.list[3].main.temp;
    document.getElementById('day2temp').innerHTML = forecast2Info.list[11].main.temp;
    document.getElementById('day3temp').innerHTML = forecast2Info.list[19].main.temp;
    document.getElementById('day4temp').innerHTML = forecast2Info.list[27].main.temp;
    document.getElementById('day5temp').innerHTML = forecast2Info.list[35].main.temp;
    
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    var d = new Date(forecast2Info.list[3].dt_txt);
    var weekday1s = days[d.getDay()];
    d = new Date(forecast2Info.list[11].dt_txt);
    var weekday2s = days[d.getDay()];
    d = new Date(forecast2Info.list[19].dt_txt);
    var weekday3s = days[d.getDay()];
    d = new Date(forecast2Info.list[27].dt_txt);
    var weekday4s = days[d.getDay()];
    d = new Date(forecast2Info.list[35].dt_txt);
    var weekday5s = days[d.getDay()];
    
    document.getElementById('dayname1').innerHTML = weekday1s;
    document.getElementById('dayname2').innerHTML = weekday2s;
    document.getElementById('dayname3').innerHTML = weekday3s;
    document.getElementById('dayname4').innerHTML = weekday4s;
    document.getElementById('dayname5').innerHTML = weekday5s;
}