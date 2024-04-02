let currentLat = 0;
let tempLat = 0;
let tempClosestCityNumber = 0;
const tempLatLong = [];
let bestDistance = 100;
let target = {};
let value = {};
var count = 0;

$(function () {
    $('#button').on("click", function () {
        $.getJSON("https://api.wheretheiss.at/v1/satellites/25544", function (data) {
            document.getElementById("lat").innerHTML = "Latitude: " + data.latitude.toFixed(4);
            document.getElementById("long").innerHTML = "Longitude: " + data.longitude.toFixed(4);
            target = data;
            findClosest(value, target);
            //goes second
        });
        $.getJSON("https://raw.githubusercontent.com/PatrickReiman/MART441/main/HW9/cities.json", function (values) {
            value = values;
            //goes first
        });
    });
});

//x2 and y2 are for iss cords
//x: latitude y: longitude

function findClosest(value, target){
    console.log(value[1].Latitude); //error checkers that tell me if a failure occurs before the loop
    console.log(target.latitude);

    for (var i = 0; i < value.length; i ++) {
        if (bestDistance > Math.sqrt((target.latitude - value[i].Latitude)^2 + (target.longitude - value[i].Longitude)^2)){
            tempClosestCityNumber = i;
            bestDistance = Math.sqrt((target.latitude - value[i].Latitude)^2 + (target.longitude - value[i].Longitude)^2);
            console.log(bestDistance); //just cool to see that it only takes 10 switches to narrow down over 47k cities across the world
        } else {
            count++;
        }
    }
    console.log("count: " + count); //lets me know if it skipped some cities for some reason
    document.getElementById("closestCity").innerHTML = "Closest [Major] City: " + value[tempClosestCityNumber].City + ", " + value[tempClosestCityNumber].Country;
    count = 0;
    bestDistance = 100;
    tempClosestCityNumber = 0;
}

