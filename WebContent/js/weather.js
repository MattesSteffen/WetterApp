/* 
 Wheater App JS
*/

$(document).ready(function() {
	getLocation();
});	

var date = new Date();
var time = "day";

document.getElementById("date").innerHTML = date.toDateString();



function getLocation() {	
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(callAPI, showError);
	} else {
		alert("Geolocation is not supported by this browser.");
	}
}

function showError(error) {
	switch (error.code) {
	case error.PERMISSION_DENIED:
		alert("User denied the request for Geolocation.")
		break;
	case error.POSITION_UNAVAILABLE:
		alert("Location information is unavailable.")
		break;
	case error.TIMEOUT:
		alert("The request to get user location timed out.")
		break;
	case error.UNKNOWN_ERROR:
		alert("An unknown error occurred.")
		break;
	}
}

function callAPI(position) {
	var Paramkey = "&APPID=e87443021b8fe2a11b09118413a4dd8c";
	var urlAPI = "http://api.openweathermap.org/data/2.5/weather?";
	var lat = "lat=" + position.coords.latitude + "";
	var ion = "&lon=" + position.coords.longitude + "";

	var url = urlAPI + lat + ion + Paramkey; 
	$.ajax({
		url : url,
		type : "GET",
		success : showWeather,
		error: function(error) {
			alert("An Error occured: " + error);
			console.log("An Error occured " + error);
		}
	});
}



function showWeather(response) {	
	var description = response.weather[0].description;
	var id= response.weather[0].id;
	var icon = "<i class='wi wi-owm-" + id + "'></i>";
	
	
	var temperature = Math.floor(response.main.temp - 273);
	var humidity = response.main.humidity;
	var windSpeed = Math.floor(response.wind.speed * 1.60934);
	var visibility = Math.floor((response.visibility / 1000) * 1.60934);
	
	var sunSet = response.sys.sunset;
	
	var timeNow = Math.round(date / 1000);	
	dayNight = (timeNow < sunSet) ? "day" : "night";
	
	document.getElementById("location").innerHTML = response.name + ", " + response.sys.country;					      
	document.getElementById("description").innerHTML = "<i id='icon-desc' class='wi wi-owm-" + dayNight + "-" + id + "'></i><p>" + description + "</p>";
	document.getElementById("temperature").innerHTML = temperature + "&degC";
	document.getElementById("humidity").innerHTML = humidity + "%";
	document.getElementById("wind").innerHTML = windSpeed + "km/h";
	document.getElementById("visibility").innerHTML = visibility + "km";
	
}






