var x = document.getElementById("geoloc");

var currentWeather = {};
var foreCastWeather = {};

/** ******************************************** */
/* methods for requesting weather from the API */
/** ******************************************** */
function requestCurrentWeather(position) {
	// wetterAPI
	// e87443021b8fe2a11b09118413a4dd8c
	// http://api.openweathermap.org/data/2.5/forecast?id=524901&APPID={APIKEY}
	var Paramkey = "&APPID=e87443021b8fe2a11b09118413a4dd8c";
	var urlAPI = "http://api.openweathermap.org/data/2.5/weather?";
	var lat = "lat=" + position.coords.latitude + "";
	var ion = "&lon=" + position.coords.longitude + "";

	var url = urlAPI + lat + ion + Paramkey;
	console.log(url);
	console.log(position);

	// Directly start AJAX request to URL with callback.
	$.ajax({
		url : url,
		type : "GET",
		success : function(result) {
			currentWeather = result;
			console.log(result);
			// $("#demo").append("<p>" + JSON.stringify(result) + "</p>");
		}
	});

};

function requestForeCast(position) {
	// TODO
}

function showCurrentWeather() {

}

function showForeCast() {

}

/** ******************************************** */
/* position related methods */
/** ******************************************** */
function showPosition(position) {
	// x.innerHTML = "Latitude: " + position.coords.latitude +
	// "<br>Longitude: " + position.coords.longitude;
	// TODO show position in document
	currentWeather = localWeather;
	
	//requestCurrentWeather(position);
}

function getLocation() {
	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(showPosition, showError);
	} else {
		x.innerHTML = "Geolocation is not supported by this browser.";
	}
}

/** ******************************************** */
/* error handling methods */
/** ******************************************** */

function showError(error) {
	switch (error.code) {
	case error.PERMISSION_DENIED:
		x.innerHTML = "User denied the request for Geolocation."
		break;
	case error.POSITION_UNAVAILABLE:
		x.innerHTML = "Location information is unavailable."
		break;
	case error.TIMEOUT:
		x.innerHTML = "The request to get user location timed out."
		break;
	case error.UNKNOWN_ERROR:
		x.innerHTML = "An unknown error occurred."
		break;
	}
}

var localWeather = {
	"coord" : {
		"lon" : 8.42,
		"lat" : 49.01
	},
	"weather" : [ {
		"id" : 800,
		"main" : "Clear",
		"description" : "clear sky",
		"icon" : "01d"
	} ],
	"base" : "stations",
	"main" : {
		"temp" : 298.45,
		"pressure" : 1020,
		"humidity" : 36,
		"temp_min" : 297.15,
		"temp_max" : 299.15
	},
	"visibility" : 10000,
	"wind" : {
		"speed" : 6.7,
		"deg" : 20
	},
	"clouds" : {
		"all" : 0
	},
	"dt" : 1530107400,
	"sys" : {
		"type" : 1,
		"id" : 4921,
		"message" : 0.026,
		"country" : "DE",
		"sunrise" : 1530069851,
		"sunset" : 1530128077
	},
	"id" : 2846518,
	"name" : "Rintheim",
	"cod" : 200
};