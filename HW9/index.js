let currentLat = 0;
let tempLat = 0;
let tempClosestCityNumber = 0;
const tempLatLong = [];
let bestDistance = 0;
let target = {};
let value = {};
var count = 0;

$(document).ready(function () {
    $('#button').click(function () {
        $.getJSON("http://api.open-notify.org/iss-now.json", function (data) {
            document.getElementById("lat").innerHTML = "Latitude: " + data.iss_position.latitude;
            document.getElementById("long").innerHTML = "Longitude: " + data.iss_position.longitude;
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
    console.log(value[1].Latitude);
    console.log(target.iss_position.latitude);

    for (var i = 0; i < value.length; i ++) {
        if (bestDistance < Math.sqrt((target.iss_position.latitude - value[i].Latitude)^2 + (-target.iss_position.longitude - value[i].Longitude))){
            tempClosestCityNumber = i;
            bestDistance = Math.sqrt((target.iss_position.latitude - value[i].Latitude)^2 + (-target.iss_position.longitude - value[i].Longitude));
            console.log("closer");
        } else {
            count++;
        }
    }
    console.log("count: " + count);
    document.getElementById("closestCity").innerHTML = "Closest [Major] City: " + value[tempClosestCityNumber].City;
}

