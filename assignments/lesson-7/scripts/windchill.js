/* eslint-env browser */
var temp = 90;
var windSpeed = 5;
if(temp <= 50) {
    /*Windchill Calculator*/
    var wind2 = Math.pow(windSpeed,0.16);
    var result = (35.74 + 0.6215 * temp -35.75* wind2 + .4275 * temp * wind2);
    result = parseFloat(result.toFixed(1));
    document.getElementById("windchill").innerHTML = result + "&deg;" + "F";
}
else {
    /*Heat Index Calculator*/
    var relativehum = 40;
    var c1 = -42.379;
    var c2 = 2.04901523;
    var c3 = 10.14333127;
    var c4 = -0.22475541;
    var c5 = -6.83783*Math.pow(10,-3);
    var c6 = -5.481717*Math.pow(10,-2);
    var c7 = 1.22874*Math.pow(10,-3);
    var c8 = 8.5282*Math.pow(10,-4);
    var c9 = -1.99*Math.pow(10,-6);
    var result2 = c1 + (c2*temp) + (c3*relativehum) + (c4*temp*relativehum) + (c5*Math.pow(temp,2)) + (c6*Math.pow(relativehum,2)) + (c7*Math.pow(temp,2)*relativehum) + (c8*temp*Math.pow(relativehum,2)) + (c9*Math.pow(temp,2)*Math.pow(relativehum,2));
    result2 = parseFloat(result2.toFixed(1));
    document.getElementById("windchill").innerHTML = result2 + "&deg;" + "F";
}
    