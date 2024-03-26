$(document).ready(function () {
    $('#button').click(function () {
        $.getJSON("http://api.open-notify.org/iss-now.json", function (data) {
            document.getElementById('lat').innerHTML = data.iss_position.longitude;
	    });
		$.getJSON("https://raw.githubusercontent.com/PatrickReiman/MART441/main/HW9/cities.json", function(value) {
			console.log("worked");
		});
	});
});