var forecast1object = new XMLHttpRequest();
forecast1object.open('get', '//api.openweathermap.org/data/2.5/forecast?id=4695066&appid=87b778d905abd567949a99734f93fcb2&units=imperial',true);

forecast1object.send();

forecast1object.onload = function() {
    var forecast1Info = JSON.parse(forecast1object.responseText);
    console.log(forecast1Info);
    
    
    document.getElementById('day1temp').innerHTML = forecast1Info.list[3].main.temp;
    document.getElementById('day2temp').innerHTML = forecast1Info.list[11].main.temp;
    document.getElementById('day3temp').innerHTML = forecast1Info.list[19].main.temp;
    document.getElementById('day4temp').innerHTML = forecast1Info.list[27].main.temp;
    document.getElementById('day5temp').innerHTML = forecast1Info.list[35].main.temp;
    
    var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
   var d = new Date(forecast1Info.list[3].dt_txt);
    var weekday1g = days[d.getDay()];
    d = new Date(forecast1Info.list[11].dt_txt);
    var weekday2g = days[d.getDay()];
    d = new Date(forecast1Info.list[19].dt_txt);
    var weekday3g = days[d.getDay()];
    d = new Date(forecast1Info.list[27].dt_txt);
    var weekday4g = days[d.getDay()];
    d = new Date(forecast1Info.list[35].dt_txt);
    var weekday5g = days[d.getDay()];
    
    document.getElementById('dayname1').innerHTML = weekday1g;
    document.getElementById('dayname2').innerHTML = weekday2g;
    document.getElementById('dayname3').innerHTML = weekday3g;
    document.getElementById('dayname4').innerHTML = weekday4g;
    document.getElementById('dayname5').innerHTML = weekday5g;
}